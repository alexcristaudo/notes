/**
 * Creates a note for every .tex asset that doesn't already have one, so LaTeX
 * course notes appear in the app instead of sitting as invisible attachments.
 * The note body is compiled from the source by lib/latex.ts; the .tex stays
 * attached so the original is never lost. Idempotent.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { parseFrontmatter, emitFrontmatter } from "../lib/frontmatter";
import { latexNoteBody, latexToMarkdown } from "../lib/latex";
import { slugify } from "../lib/slug";
import { NOTE_TYPE_FOLDER, type NoteType } from "../lib/types";

const ROOT = join(import.meta.dirname, "..");
const COURSES = join(ROOT, "courses");
const FOLDERS = Object.values(NOTE_TYPE_FOLDER);

function guessType(name: string): NoteType {
  const f = name.toLowerCase();
  if (/summary|cheat|complete_results|results|revision/.test(f)) return "summary";
  if (/\btut|assignment|prac|exercise|problem/.test(f)) return "tutorial";
  if (/test|exam|midterm/.test(f)) return "test";
  if (/template|preamble|macros|letterfonts|title/.test(f)) return "reference";
  return "lecture";
}

function titleFrom(file: string, compiledTitle?: string): string {
  if (compiledTitle && compiledTitle.length > 3 && !/^some class/i.test(compiledTitle)) return compiledTitle;
  return file
    .replace(/\.tex$/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
}

let created = 0;
let skipped = 0;
let empty = 0;

for (const term of readdirSync(COURSES).sort()) {
  const termDir = join(COURSES, term);
  if (!statSync(termDir).isDirectory()) continue;

  for (const code of readdirSync(termDir).sort()) {
    const courseDir = join(termDir, code);
    if (!statSync(courseDir).isDirectory()) continue;
    const assetsDir = join(courseDir, "assets");
    if (!existsSync(assetsDir)) continue;

    // .tex files already referenced by some note's frontmatter
    const claimed = new Set<string>();
    const usedSlugs = new Set<string>();
    for (const folder of FOLDERS) {
      const dir = join(courseDir, folder);
      if (!existsSync(dir)) continue;
      for (const f of readdirSync(dir)) {
        if (!f.endsWith(".md")) continue;
        usedSlugs.add(`${folder}/${f.replace(/\.md$/, "")}`);
        const { data } = parseFrontmatter(readFileSync(join(dir, f), "utf8"));
        for (const a of Array.isArray(data.assets) ? data.assets : []) {
          if (a.toLowerCase().endsWith(".tex")) claimed.add(a);
        }
      }
    }

    for (const asset of readdirSync(assetsDir).sort()) {
      if (!asset.toLowerCase().endsWith(".tex")) continue;
      if (claimed.has(asset)) {
        skipped++;
        continue;
      }
      const source = readFileSync(join(assetsDir, asset), "utf8");
      const compiled = latexToMarkdown(source);
      if (compiled.markdown.trim().length < 40) {
        empty++; // preamble/macros files with no prose — leave as plain assets
        continue;
      }

      const type = guessType(asset);
      const folder = NOTE_TYPE_FOLDER[type];
      const title = titleFrom(asset, compiled.title);
      let slug = slugify(title);
      let i = 2;
      while (usedSlugs.has(`${folder}/${slug}`)) slug = `${slugify(title)}-${i++}`;
      usedSlugs.add(`${folder}/${slug}`);

      mkdirSync(join(courseDir, folder), { recursive: true });
      writeFileSync(
        join(courseDir, folder, `${slug}.md`),
        emitFrontmatter({
          title,
          type,
          tags: ["latex"],
          status: "needs-review",
          source: "latex",
          assets: [asset],
        }) + latexNoteBody(source, asset),
      );
      created++;
    }
  }
}

console.log(`latex notes: ${created} created, ${skipped} already linked, ${empty} skipped (no prose)`);
