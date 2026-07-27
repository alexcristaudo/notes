import Dexie, { type EntityTable } from "dexie";
import type { Asset, Card, Course, Note, NoteLink, QueueItem, Review } from "./types";
import { seed } from "./seed";

class NotesDB extends Dexie {
  courses!: EntityTable<Course, "id">;
  notes!: EntityTable<Note, "id">;
  assets!: EntityTable<Asset, "id">;
  cards!: EntityTable<Card, "id">;
  reviews!: EntityTable<Review, "id">;
  queue!: EntityTable<QueueItem, "id">;
  links!: EntityTable<NoteLink, "id">;

  constructor() {
    super("notes-app");
    this.version(1).stores({
      courses: "id, code, term, status",
      notes: "id, courseId, [courseId+type], type, updatedAt, status",
      assets: "id, courseId, noteId",
      cards: "id, noteId, courseId, active",
      reviews: "++id, cardId, ts",
      queue: "id, noteId, order, done",
      links: "++id, fromNoteId, target",
    });
    this.on("populate", () => {
      // Runs only on first-ever open: seed the sample course so the app
      // demonstrates every feature before the user has any content.
      void seed(this);
    });
  }
}

export const db = new NotesDB();

export function uid(): string {
  return crypto.randomUUID();
}

/** Search index invalidation: bumped on every content write. */
let contentVersion = 0;
export function bumpContentVersion() {
  contentVersion++;
}
export function getContentVersion() {
  return contentVersion;
}
