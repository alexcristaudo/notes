import MiniSearch from "minisearch";
import { db, getContentVersion } from "./db";
import { extractSections } from "./markdown/extract";
import type { NoteType } from "./types";

export interface SearchDoc {
  id: string; // "note:<id>" or "sec:<noteId>#<slug>"
  kind: "note" | "section";
  noteId: string;
  courseId: string;
  courseCode: string;
  type: NoteType;
  week?: number;
  title: string; // note title, or heading text for sections
  noteTitle: string;
  anchor?: string;
  text: string;
  tags: string;
}

let index: MiniSearch<SearchDoc> | null = null;
let docs = new Map<string, SearchDoc>();
let builtAt = -1;

function newIndex(): MiniSearch<SearchDoc> {
  return new MiniSearch<SearchDoc>({
    fields: ["title", "text", "tags"],
    storeFields: [],
    searchOptions: {
      boost: { title: 3, tags: 2 },
      prefix: true,
      fuzzy: 0.15,
    },
  });
}

export async function ensureIndex(): Promise<void> {
  if (index && builtAt === getContentVersion()) return;
  const [notes, courses] = await Promise.all([db.notes.toArray(), db.courses.toArray()]);
  const courseById = new Map(courses.map((c) => [c.id, c]));
  const next = newIndex();
  const nextDocs = new Map<string, SearchDoc>();

  for (const note of notes) {
    const course = courseById.get(note.courseId);
    if (!course) continue;
    const base = {
      noteId: note.id,
      courseId: note.courseId,
      courseCode: course.code,
      type: note.type,
      week: note.week,
      noteTitle: note.title,
      tags: note.tags.join(" "),
    };
    const sections = extractSections(note.body);
    const full = sections.map((s) => `${s.heading}\n${s.text}`).join("\n");
    nextDocs.set(`note:${note.id}`, {
      ...base,
      id: `note:${note.id}`,
      kind: "note",
      title: note.title,
      text: full,
    });
    for (const s of sections) {
      if (!s.slug) continue;
      nextDocs.set(`sec:${note.id}#${s.slug}`, {
        ...base,
        id: `sec:${note.id}#${s.slug}`,
        kind: "section",
        title: s.heading,
        anchor: s.slug,
        text: s.text,
      });
    }
  }
  next.addAll([...nextDocs.values()]);
  index = next;
  docs = nextDocs;
  builtAt = getContentVersion();
}

export interface SearchHit extends SearchDoc {
  score: number;
}

export async function search(query: string, filter?: { courseId?: string; kind?: "note" | "section" }): Promise<SearchHit[]> {
  await ensureIndex();
  if (!index || !query.trim()) return [];
  const results = index.search(query);
  const hits: SearchHit[] = [];
  for (const r of results) {
    const doc = docs.get(String(r.id));
    if (!doc) continue;
    if (filter?.courseId && doc.courseId !== filter.courseId) continue;
    if (filter?.kind && doc.kind !== filter.kind) continue;
    hits.push({ ...doc, score: r.score });
    if (hits.length >= 40) break;
  }
  return hits;
}

/** One-line context snippet around the first query-term match. */
export function snippet(doc: SearchDoc, query: string, len = 130): string {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const text = doc.text.replace(/\s+/g, " ").trim();
  const lower = text.toLowerCase();
  let at = -1;
  for (const t of terms) {
    at = lower.indexOf(t);
    if (at >= 0) break;
  }
  if (at < 0) return text.slice(0, len);
  const start = Math.max(0, at - Math.floor(len / 3));
  return (start > 0 ? "…" : "") + text.slice(start, start + len) + (start + len < text.length ? "…" : "");
}
