import JSZip from "jszip";
import { db } from "./db";
import { emitFrontmatter } from "./frontmatter";
import { slugify } from "./slug";
import { NOTE_TYPE_FOLDER } from "./types";

/**
 * The portability contract: the whole workspace as plain markdown + assets,
 * laid out `term/COURSE/{lectures,tutorials,...}/note.md`, plus study data
 * as JSON/JSONL. Import accepts the same structure (round-trip).
 */
export async function exportAll(): Promise<Blob> {
  const zip = new JSZip();
  const [courses, notes, assets, queue, reviews, cards] = await Promise.all([
    db.courses.toArray(),
    db.notes.toArray(),
    db.assets.toArray(),
    db.queue.toArray(),
    db.reviews.toArray(),
    db.cards.toArray(),
  ]);

  for (const course of courses) {
    const dir = `${course.term}/${course.code}`;
    zip.file(
      `${dir}/course.yml`,
      [
        `code: ${course.code}`,
        `name: "${course.name.replace(/"/g, '\\"')}"`,
        `term: ${course.term}`,
        `color: "${course.color}"`,
        `icon: "${course.icon}"`,
        `status: ${course.status}`,
        `weeks: ${course.weeks}`,
        ...(course.examDate ? [`exam_date: ${course.examDate}`] : []),
        "",
      ].join("\n"),
    );

    const courseNotes = notes.filter((n) => n.courseId === course.id);
    const usedNames = new Set<string>();
    for (const note of courseNotes) {
      const fm = emitFrontmatter({
        title: note.title,
        type: note.type,
        week: note.week,
        date: note.date,
        tags: note.tags,
        status: note.status,
        difficulty: note.difficulty,
        source: note.source,
      });
      const prefix = note.week !== undefined ? `${String(note.week).padStart(2, "0")}-` : "";
      let name = `${prefix}${slugify(note.title)}`;
      let i = 2;
      while (usedNames.has(name)) name = `${prefix}${slugify(note.title)}-${i++}`;
      usedNames.add(name);
      zip.file(`${dir}/${NOTE_TYPE_FOLDER[note.type]}/${name}.md`, fm + note.body);
    }

    for (const asset of assets.filter((a) => a.courseId === course.id)) {
      zip.file(`${dir}/assets/${asset.name}`, asset.blob);
    }
  }

  zip.file("data/study-queue.json", JSON.stringify(queue, null, 2));
  zip.file("data/cards.json", JSON.stringify(cards.map(({ id, noteId, question, answer, active }) => ({ id, noteId, question, answer, active })), null, 2));
  zip.file(
    "data/review-log.jsonl",
    reviews.map((r) => JSON.stringify({ cardId: r.cardId, ts: r.ts, rating: r.rating })).join("\n"),
  );

  return zip.generateAsync({ type: "blob" });
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
