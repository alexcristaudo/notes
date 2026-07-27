import { db } from "./db";
import { extractFlashcards } from "./markdown/extract";
import type { Note } from "./types";

export interface Issue {
  severity: "warn" | "info";
  kind: string;
  message: string;
  noteId?: string;
}

/**
 * The v1 `validate` script reborn as UI: everything that silently degrades the
 * experience (broken links, unfindable weeks, cards that never became cards),
 * surfaced per course instead of failing a build.
 */
export async function courseHealth(courseId: string): Promise<Issue[]> {
  const [course, notes, allNotes, assets] = await Promise.all([
    db.courses.get(courseId),
    db.notes.where("courseId").equals(courseId).toArray(),
    db.notes.toArray(),
    db.assets.where("courseId").equals(courseId).toArray(),
  ]);
  if (!course) return [];
  const issues: Issue[] = [];
  const titles = new Set(allNotes.map((n) => n.title.trim().toLowerCase()));

  // Broken wiki-links
  const links = (await db.links.toArray()).filter((l) => notes.some((n) => n.id === l.fromNoteId));
  for (const link of links) {
    if (!titles.has(link.target.trim().toLowerCase())) {
      const from = notes.find((n) => n.id === link.fromNoteId);
      issues.push({
        severity: "warn",
        kind: "broken-link",
        message: `[[${link.target}]] in “${from?.title}” doesn't match any note title`,
        noteId: link.fromNoteId,
      });
    }
  }

  // Duplicate titles break wiki-link resolution
  const seen = new Map<string, Note>();
  for (const n of allNotes) {
    const key = n.title.trim().toLowerCase();
    const prior = seen.get(key);
    if (prior && (prior.courseId === courseId || n.courseId === courseId)) {
      issues.push({
        severity: "warn",
        kind: "duplicate-title",
        message: `Two notes share the title “${n.title}” — wiki-links to it are ambiguous`,
        noteId: n.courseId === courseId ? n.id : prior.id,
      });
    }
    seen.set(key, n);
  }

  // Flashcard blocks that never became cards
  for (const n of notes) {
    const declared = (n.body.match(/\[!flashcard\]/g) ?? []).length;
    const parsed = extractFlashcards(n.body).length;
    if (declared > parsed) {
      issues.push({
        severity: "warn",
        kind: "malformed-flashcard",
        message: `“${n.title}” has ${declared - parsed} flashcard block(s) missing a Q:/A: pair — no card was created`,
        noteId: n.id,
      });
    }
  }

  // Week coverage gaps (lectures are the syllabus backbone)
  const lectureWeeks = new Set(notes.filter((n) => n.type === "lecture" && n.week).map((n) => n.week));
  const missing = Array.from({ length: course.weeks }, (_, i) => i + 1).filter((w) => !lectureWeeks.has(w));
  if (missing.length > 0 && missing.length < course.weeks) {
    issues.push({
      severity: "info",
      kind: "week-gap",
      message: `No lecture notes for week${missing.length > 1 ? "s" : ""} ${missing.join(", ")}`,
    });
  }

  // Dated note types without a week — invisible to the coverage grid
  for (const n of notes) {
    if (!n.week && (n.type === "lecture" || n.type === "tutorial" || n.type === "test")) {
      issues.push({
        severity: "info",
        kind: "no-week",
        message: `“${n.title}” (${n.type}) has no week — it won't appear on the coverage grid`,
        noteId: n.id,
      });
    }
  }

  // Cleanup backlog
  for (const n of notes.filter((x) => x.status === "needs-review")) {
    issues.push({
      severity: "info",
      kind: "needs-review",
      message: `“${n.title}” is marked needs-review${n.source ? ` (from ${n.source})` : ""}`,
      noteId: n.id,
    });
  }

  // Orphan assets
  for (const a of assets.filter((x) => !x.noteId)) {
    issues.push({
      severity: "info",
      kind: "orphan-asset",
      message: `Asset “${a.name}” isn't attached to any note`,
    });
  }

  return issues.sort((a, b) => (a.severity === b.severity ? 0 : a.severity === "warn" ? -1 : 1));
}
