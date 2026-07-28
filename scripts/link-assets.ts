/**
 * Repair pass: imported stub notes list their attached files in the body but
 * never recorded them in frontmatter, so the app couldn't offer "View PDF" or
 * "Extract notes". This adds `assets: [...]` to every note whose body lists
 * files that exist in the course's assets folder. Idempotent.
 */
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { parseFrontmatter, emitFrontmatter } from "../lib/frontmatter";
import { NOTE_TYPE_FOLDER } from "../lib/types";

const ROOT = join(import.meta.dirname, "..");
const COURSES = join(ROOT, "courses");
const FOLDERS = Object.values(NOTE_TYPE_FOLDER);

let updated = 0;
let alreadyOk = 0;
let noAssets = 0;

for (const term of readdirSync(COURSES).sort()) {
  const termDir = join(COURSES, term);
  if (!statSync(termDir).isDirectory()) continue;

  for (const code of readdirSync(termDir).sort()) {
    const courseDir = join(termDir, code);
    if (!statSync(courseDir).isDirectory()) continue;
    const assetsDir = join(courseDir, "assets");
    if (!existsSync(assetsDir)) continue;
    const available = new Set(readdirSync(assetsDir));

    for (const folder of FOLDERS) {
      const dir = join(courseDir, folder);
      if (!existsSync(dir)) continue;

      for (const file of readdirSync(dir).sort()) {
        if (!file.endsWith(".md")) continue;
        const path = join(dir, file);
        const { data, body } = parseFrontmatter(readFileSync(path, "utf8"));
        if (Array.isArray(data.assets) && data.assets.length > 0) {
          alreadyOk++;
          continue;
        }

        // Bullet list of attached filenames in the stub body
        const listed = [...body.matchAll(/^- (.+)$/gm)]
          .map((m) => m[1].trim())
          .filter((name) => available.has(name));
        if (listed.length === 0) {
          noAssets++;
          continue;
        }

        // PDFs first so the viewer/extractor picks the most useful file.
        listed.sort((a, b) => Number(b.toLowerCase().endsWith(".pdf")) - Number(a.toLowerCase().endsWith(".pdf")));
        writeFileSync(path, emitFrontmatter({ ...data, assets: listed }) + body);
        updated++;
      }
    }
  }
}

console.log(`linked assets into ${updated} note(s); ${alreadyOk} already linked; ${noAssets} without attachments`);
