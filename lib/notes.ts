import { db, uid, bumpContentVersion } from "./db";
import { noteTemplate } from "./templates";
import { syncDerivedForNote } from "./study";
import type { Course, Note, NoteType } from "./types";

export async function createCourse(input: Omit<Course, "id" | "createdAt">): Promise<Course> {
  const course: Course = { ...input, id: uid(), createdAt: Date.now() };
  await db.courses.add(course);
  bumpContentVersion();
  return course;
}

export async function createNote(input: {
  courseId: string;
  type: NoteType;
  title: string;
  week?: number;
  date?: string;
  body?: string;
  tags?: string[];
  status?: Note["status"];
  difficulty?: number;
  source?: string;
}): Promise<Note> {
  const now = Date.now();
  const note: Note = {
    id: uid(),
    courseId: input.courseId,
    type: input.type,
    title: input.title,
    week: input.week,
    date: input.date,
    tags: input.tags ?? [],
    status: input.status ?? "draft",
    difficulty: input.difficulty,
    body: input.body ?? noteTemplate(input.type, input.title),
    source: input.source,
    createdAt: now,
    updatedAt: now,
  };
  await db.notes.add(note);
  await syncDerivedForNote(note);
  return note;
}

export async function saveNoteBody(id: string, body: string): Promise<void> {
  await db.notes.update(id, { body, updatedAt: Date.now() });
  const note = await db.notes.get(id);
  if (note) await syncDerivedForNote(note);
}

export async function updateNoteMeta(id: string, patch: Partial<Note>): Promise<void> {
  await db.notes.update(id, { ...patch, updatedAt: Date.now() });
  bumpContentVersion();
}

export async function deleteNote(id: string): Promise<void> {
  await db.transaction("rw", [db.notes, db.cards, db.links, db.queue, db.assets], async () => {
    await db.notes.delete(id);
    await db.cards.where("noteId").equals(id).modify({ active: 0 as const });
    await db.links.where("fromNoteId").equals(id).delete();
    await db.queue.where("noteId").equals(id).delete();
    await db.assets.where("noteId").equals(id).delete();
  });
  bumpContentVersion();
}

/** Resolve a wiki-link target (note title, case-insensitive) to a note. */
export async function resolveWikiTarget(target: string): Promise<Note | undefined> {
  const t = target.trim().toLowerCase();
  const all = await db.notes.toArray();
  return all.find((n) => n.title.trim().toLowerCase() === t);
}

/** Notes whose bodies wiki-link to the given note (by its title). */
export async function backlinksTo(note: Note): Promise<Note[]> {
  const t = note.title.trim().toLowerCase();
  const links = await db.links.toArray();
  const fromIds = [...new Set(links.filter((l) => l.target.trim().toLowerCase() === t).map((l) => l.fromNoteId))]
    .filter((id) => id !== note.id);
  return (await db.notes.bulkGet(fromIds)).filter((n): n is Note => !!n);
}
