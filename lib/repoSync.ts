import { db, bumpContentVersion } from "./db";
import { stableHash } from "./slug";
import { syncDerivedForNote } from "./study";
import type { Course, CourseStatus, Note, NoteStatus, NoteType } from "./types";

/**
 * The repo's courses/ folder is the source of truth for content. At build time
 * it's baked into content.json; on every app load this sync pulls it into
 * IndexedDB so the site works offline afterwards.
 *
 * Rules (documented in the README):
 *  - repo notes carry repoPath/repoHash; repo changes overwrite un-edited local copies
 *  - a note edited in the app (body hash ≠ repoHash) is NEVER overwritten or deleted —
 *    it shows up in the course Health panel as "not committed to GitHub"
 *  - notes created in the app are local-only until exported and committed
 *  - review log, study queue, and settings are personal state and never touched
 */

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface RepoContent {
  generatedAt: number;
  courses: (Omit<Course, "createdAt" | "status"> & { status: string; assets: { name: string; path: string }[] })[];
  notes: (Omit<Note, "createdAt" | "updatedAt" | "tags" | "status" | "type"> & {
    tags: string[];
    status: string;
    type: NoteType;
    assets?: string[];
  })[];
}

export interface RepoAssetInfo {
  name: string;
  url: string;
}

const repoAssetsByCourse = new Map<string, RepoAssetInfo[]>();

export function getRepoAssets(courseId: string): RepoAssetInfo[] {
  return repoAssetsByCourse.get(courseId) ?? [];
}

let synced = false;

export async function syncFromRepo(): Promise<void> {
  if (synced) return;
  synced = true;

  let content: RepoContent;
  try {
    const res = await fetch(`${BASE}/content.json`, { cache: "no-store" });
    if (!res.ok) return;
    content = await res.json();
  } catch {
    return; // offline — IndexedDB copy keeps working
  }

  const now = Date.now();

  for (const c of content.courses) {
    repoAssetsByCourse.set(c.id, c.assets.map((a) => ({ name: a.name, url: `${BASE}/${a.path}` })));
    const existing = await db.courses.get(c.id);
    await db.courses.put({
      id: c.id,
      code: c.code,
      name: c.name,
      term: c.term,
      color: c.color,
      icon: c.icon,
      status: (["active", "completed", "archived"].includes(c.status) ? c.status : "active") as CourseStatus,
      weeks: c.weeks,
      examDate: c.examDate,
      createdAt: existing?.createdAt ?? now,
    });
  }

  const repoNoteIds = new Set<string>();
  for (const n of content.notes) {
    repoNoteIds.add(n.id);
    const existing = await db.notes.get(n.id);
    if (existing) {
      const locallyEdited = stableHash(existing.body) !== existing.repoHash;
      if (locallyEdited) {
        // keep local edits; record the new repo hash target so Health can flag divergence
        await db.notes.update(n.id, { repoPath: n.repoPath, repoAssetPaths: n.assets });
        continue;
      }
      if (existing.repoHash === n.repoHash) {
        if (JSON.stringify(existing.repoAssetPaths) !== JSON.stringify(n.assets)) {
          await db.notes.update(n.id, { repoAssetPaths: n.assets });
        }
        continue;
      }
    }
    const note: Note = {
      id: n.id,
      courseId: n.courseId,
      type: n.type,
      title: n.title,
      week: n.week,
      date: n.date,
      tags: n.tags,
      status: (["draft", "complete", "needs-review"].includes(n.status) ? n.status : "complete") as NoteStatus,
      difficulty: n.difficulty,
      body: n.body,
      source: n.source,
      repoPath: n.repoPath,
      repoHash: n.repoHash,
      repoAssetPaths: n.assets,
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    };
    await db.notes.put(note);
    await syncDerivedForNote(note);
  }

  // Repo notes deleted from the repo: remove un-edited local copies.
  const localRepoNotes = await db.notes.filter((n) => !!n.repoPath).toArray();
  for (const n of localRepoNotes) {
    if (!repoNoteIds.has(n.id) && stableHash(n.body) === n.repoHash) {
      await db.notes.delete(n.id);
      await db.cards.where("noteId").equals(n.id).modify({ active: 0 as const });
      await db.queue.where("noteId").equals(n.id).delete();
      await db.links.where("fromNoteId").equals(n.id).delete();
    }
  }

  // Repo courses deleted: remove them once they hold no notes.
  const repoCourseIds = new Set(content.courses.map((c) => c.id));
  const localRepoCourses = (await db.courses.toArray()).filter((c) => c.id.startsWith("repo:"));
  for (const c of localRepoCourses) {
    if (!repoCourseIds.has(c.id) && (await db.notes.where("courseId").equals(c.id).count()) === 0) {
      await db.courses.delete(c.id);
    }
  }

  bumpContentVersion();
}
