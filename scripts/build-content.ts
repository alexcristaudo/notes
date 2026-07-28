/**
 * Bakes the repo's courses/ folder into public/content.json (+ copies assets
 * to public/repo-assets/) so the statically-hosted app can load the notes
 * that live in git. Runs before `next build` and `next dev`.
 *
 * Expected layout (same as the app's export zip — round-trip by design):
 *   courses/<term>/<CODE>/course.yml
 *   courses/<term>/<CODE>/{lectures,tutorials,tests,summaries,references}/*.md
 *   courses/<term>/<CODE>/assets/*
 */
import { readdirSync, readFileSync, statSync, mkdirSync, copyFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parseFrontmatter } from "../lib/frontmatter";
import { stableHash } from "../lib/slug";
import { NOTE_TYPE_FOLDER, type NoteType } from "../lib/types";

const ROOT = join(import.meta.dirname, "..");
const SRC = join(ROOT, "courses");
const OUT_JSON = join(ROOT, "public", "content.json");
const OUT_ASSETS = join(ROOT, "public", "repo-assets");

const FOLDER_TO_TYPE = Object.fromEntries(
  Object.entries(NOTE_TYPE_FOLDER).map(([t, folder]) => [folder, t as NoteType]),
);

interface RepoCourse {
  id: string;
  code: string;
  name: string;
  term: string;
  color: string;
  icon: string;
  status: string;
  weeks: number;
  examDate?: string;
  assets: { name: string; path: string }[];
}

interface RepoNote {
  id: string;
  courseId: string;
  type: NoteType;
  title: string;
  week?: number;
  date?: string;
  tags: string[];
  status: string;
  difficulty?: number;
  source?: string;
  body: string;
  repoPath: string;
  repoHash: string;
  assets?: string[]; // site-relative repo-asset paths from frontmatter `assets:`
}

/** Heavy/unviewable files stay in the repo but are not copied into the site. */
const SITE_COPY_MAX_BYTES = 35 * 1024 * 1024;
const SITE_SKIP_EXT = /\.(pages|zip|rdata|rproj)$/i;

function parseYamlish(raw: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (m) out[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
  }
  return out;
}

const courses: RepoCourse[] = [];
const notes: RepoNote[] = [];

rmSync(OUT_ASSETS, { recursive: true, force: true });
mkdirSync(join(ROOT, "public"), { recursive: true });

if (existsSync(SRC)) {
  for (const term of readdirSync(SRC).sort()) {
    const termDir = join(SRC, term);
    if (!statSync(termDir).isDirectory()) continue;
    for (const code of readdirSync(termDir).sort()) {
      const courseDir = join(termDir, code);
      if (!statSync(courseDir).isDirectory()) continue;
      const courseId = `repo:${term}/${code}`;

      let meta: Record<string, string> = {};
      const ymlPath = join(courseDir, "course.yml");
      if (existsSync(ymlPath)) meta = parseYamlish(readFileSync(ymlPath, "utf8"));

      const course: RepoCourse = {
        id: courseId,
        code: meta.code ?? code,
        name: meta.name ?? code,
        term: meta.term ?? term,
        color: meta.color ?? "#4c6ef5",
        icon: meta.icon ?? "📘",
        status: meta.status ?? "active",
        weeks: Number(meta.weeks) || 13,
        examDate: meta.exam_date || undefined,
        assets: [],
      };
      courses.push(course);

      for (const folder of readdirSync(courseDir).sort()) {
        const dir = join(courseDir, folder);
        if (!statSync(dir).isDirectory()) continue;

        if (folder === "assets") {
          const destDir = join(OUT_ASSETS, term, code);
          mkdirSync(destDir, { recursive: true });
          for (const file of readdirSync(dir).sort()) {
            const src = join(dir, file);
            if (SITE_SKIP_EXT.test(file) || statSync(src).size > SITE_COPY_MAX_BYTES) continue;
            copyFileSync(src, join(destDir, file));
            course.assets.push({ name: file, path: `repo-assets/${term}/${code}/${file}` });
          }
          continue;
        }

        const type = FOLDER_TO_TYPE[folder];
        if (!type) continue;
        for (const file of readdirSync(dir).sort()) {
          if (!/\.(md|markdown)$/i.test(file)) continue;
          const repoPath = `${term}/${code}/${folder}/${file}`;
          const raw = readFileSync(join(dir, file), "utf8");
          const { data, body } = parseFrontmatter(raw);
          const prefixWeek = file.match(/^(\d{1,2})-/)?.[1];
          const assetNames = Array.isArray(data.assets) ? data.assets : [];
          const assetPaths = assetNames
            .filter((a) => existsSync(join(courseDir, "assets", a)) && !SITE_SKIP_EXT.test(a) && statSync(join(courseDir, "assets", a)).size <= SITE_COPY_MAX_BYTES)
            .map((a) => `repo-assets/${term}/${code}/${a}`);
          notes.push({
            assets: assetPaths.length > 0 ? assetPaths : undefined,
            id: `repo:${repoPath}`,
            courseId,
            type: typeof data.type === "string" && data.type in NOTE_TYPE_FOLDER ? (data.type as NoteType) : type,
            title: typeof data.title === "string" ? data.title : file.replace(/\.[^.]+$/, ""),
            week: typeof data.week === "number" ? data.week : prefixWeek ? Number(prefixWeek) : undefined,
            date: typeof data.date === "string" ? data.date : undefined,
            tags: Array.isArray(data.tags) ? data.tags : [],
            status: typeof data.status === "string" ? data.status : "complete",
            difficulty: typeof data.difficulty === "number" ? data.difficulty : undefined,
            source: typeof data.source === "string" ? data.source : undefined,
            body,
            repoPath,
            repoHash: stableHash(body),
          });
        }
      }
    }
  }
}

// pdf.js worker for the in-app PDF text extractor
copyFileSync(
  join(ROOT, "node_modules", "pdfjs-dist", "build", "pdf.worker.min.mjs"),
  join(ROOT, "public", "pdf.worker.min.mjs"),
);

writeFileSync(OUT_JSON, JSON.stringify({ generatedAt: Date.now(), courses, notes }, null, 2));
console.log(`content.json: ${courses.length} course(s), ${notes.length} note(s), ${courses.reduce((n, c) => n + c.assets.length, 0)} asset(s)`);
