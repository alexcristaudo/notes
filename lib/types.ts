export type NoteType = "lecture" | "tutorial" | "test" | "summary" | "reference";
export type NoteStatus = "draft" | "complete" | "needs-review";
export type CourseStatus = "active" | "completed" | "archived";

export const NOTE_TYPES: NoteType[] = ["lecture", "tutorial", "test", "summary", "reference"];

export const NOTE_TYPE_LABEL: Record<NoteType, string> = {
  lecture: "Lecture",
  tutorial: "Tutorial",
  test: "Test",
  summary: "Summary",
  reference: "Reference",
};

export const NOTE_TYPE_FOLDER: Record<NoteType, string> = {
  lecture: "lectures",
  tutorial: "tutorials",
  test: "tests",
  summary: "summaries",
  reference: "references",
};

export interface Course {
  id: string;
  code: string;
  name: string;
  term: string;
  color: string;
  icon: string;
  status: CourseStatus;
  weeks: number;
  examDate?: string; // ISO date
  createdAt: number;
}

export interface Note {
  id: string;
  courseId: string;
  type: NoteType;
  title: string;
  week?: number;
  date?: string; // ISO date
  tags: string[];
  status: NoteStatus;
  difficulty?: number; // 1–5
  body: string; // canonical markdown
  source?: string; // provenance, e.g. "import"
  createdAt: number;
  updatedAt: number;
}

export interface Asset {
  id: string;
  courseId: string;
  noteId?: string;
  name: string;
  mime: string;
  blob: Blob;
  createdAt: number;
}

export interface Card {
  id: string; // stable hash of noteId + question
  noteId: string;
  courseId: string;
  question: string;
  answer: string;
  active: 0 | 1; // Dexie-indexable boolean
  createdAt: number;
}

export type ReviewRating = 1 | 2 | 3 | 4; // Again | Hard | Good | Easy

export interface Review {
  id?: number;
  cardId: string;
  ts: number;
  rating: ReviewRating;
}

export interface QueueItem {
  id: string;
  noteId: string;
  anchor?: string; // heading slug for section-level items
  anchorText?: string;
  priority: 0 | 1; // starred
  order: number;
  done: 0 | 1;
  addedAt: number;
  targetDate?: string;
}

export interface NoteLink {
  id?: number;
  fromNoteId: string;
  target: string; // raw wiki-link target text
}

export interface Heading {
  depth: number;
  text: string;
  slug: string;
}
