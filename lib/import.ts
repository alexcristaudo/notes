import { db, uid, bumpContentVersion } from "./db";
import { parseFrontmatter } from "./frontmatter";
import { createNote } from "./notes";
import type { NoteStatus, NoteType } from "./types";

export interface ImportResult {
  file: string;
  outcome: "note" | "stub" | "asset" | "skipped";
  detail: string;
}

/** Heuristics shared with the future Tidy engine: guess type/week from a filename. */
export function guessType(filename: string): NoteType {
  const f = filename.toLowerCase();
  if (/\btut(orial)?s?\b|\btut[-_ ]?\d/.test(f)) return "tutorial";
  // summary keywords outrank test keywords: "exam-cheatsheet" is a summary about the exam
  if (/summary|cheat[-_ ]?sheet|revision/.test(f)) return "summary";
  if (/midterm|final|exam|\btest\b|past[-_ ]?paper|quiz/.test(f)) return "test";
  if (/formula|glossary|reference/.test(f)) return "reference";
  return "lecture";
}

export function guessWeek(filename: string): number | undefined {
  const m = filename.toLowerCase().match(/w(?:eek)?[-_ ]?(\d{1,2})|^(\d{1,2})[-_ ]/);
  if (!m) return undefined;
  const n = Number(m[1] ?? m[2]);
  return n >= 1 && n <= 52 ? n : undefined;
}

function titleFrom(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
}

async function addAsset(courseId: string, file: File, noteId?: string): Promise<string> {
  const id = uid();
  await db.assets.add({
    id,
    courseId,
    noteId,
    name: file.name,
    mime: file.type || "application/octet-stream",
    blob: file,
    createdAt: Date.now(),
  });
  return id;
}

/**
 * Import one file into a course. Markdown parses (frontmatter respected);
 * docx converts via mammoth+turndown; PDFs/images become assets — PDFs also
 * get a searchable stub note. Everything imported lands as needs-review.
 */
export async function importFile(courseId: string, file: File): Promise<ImportResult> {
  const name = file.name;
  const ext = name.toLowerCase().split(".").pop() ?? "";

  try {
    if (ext === "md" || ext === "markdown" || ext === "txt") {
      const raw = await file.text();
      const { data, body } = parseFrontmatter(raw);
      const type = (typeof data.type === "string" && ["lecture", "tutorial", "test", "summary", "reference"].includes(data.type)
        ? (data.type as NoteType)
        : guessType(name));
      await createNote({
        courseId,
        type,
        title: typeof data.title === "string" ? data.title : titleFrom(name),
        week: typeof data.week === "number" ? data.week : guessWeek(name),
        date: typeof data.date === "string" ? data.date : undefined,
        tags: Array.isArray(data.tags) ? data.tags : [],
        status: (typeof data.status === "string" ? (data.status as NoteStatus) : "needs-review"),
        difficulty: typeof data.difficulty === "number" ? data.difficulty : undefined,
        body,
        // declared provenance survives the round-trip; stamp only when absent
        source: typeof data.source === "string" ? data.source : "import",
      });
      return { file: name, outcome: "note", detail: "imported as markdown" };
    }

    if (ext === "docx") {
      const [{ default: mammoth }, { default: TurndownService }] = await Promise.all([
        import("mammoth"),
        import("turndown"),
      ]);
      const { value: html, messages } = await mammoth.convertToHtml({ arrayBuffer: await file.arrayBuffer() });
      const md = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced" }).turndown(html);
      const warn = messages.filter((m) => m.type === "warning").length;
      const note = await createNote({
        courseId,
        type: guessType(name),
        title: titleFrom(name),
        week: guessWeek(name),
        status: "needs-review",
        body: (warn ? `> [!warning]\n> Converted from .docx with ${warn} warning(s) — check tables and equations. Original attached.\n\n` : "") + md,
        source: "import",
      });
      await addAsset(courseId, file, note.id);
      return { file: name, outcome: "note", detail: `converted from docx${warn ? ` (${warn} warnings)` : ""}` };
    }

    if (ext === "pdf") {
      const type = guessType(name);
      const note = await createNote({
        courseId,
        type,
        title: titleFrom(name),
        week: guessWeek(name),
        status: "needs-review",
        body: `PDF imported as an attachment — open it from the header above.\n\nUse this note for your worked solutions and commentary.\n`,
        source: "import",
      });
      await addAsset(courseId, file, note.id);
      return { file: name, outcome: "stub", detail: `PDF attached to a ${type} stub note` };
    }

    if (["png", "jpg", "jpeg", "gif", "svg", "webp"].includes(ext)) {
      await addAsset(courseId, file);
      return { file: name, outcome: "asset", detail: "stored as course asset" };
    }

    return { file: name, outcome: "skipped", detail: `unsupported type .${ext}` };
  } finally {
    bumpContentVersion();
  }
}
