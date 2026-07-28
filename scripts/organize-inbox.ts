/**
 * One-time organizer: inbox/ (raw OneDrive dump) → courses/<term>/<CODE>/...
 *
 * - Junk (IDE caches, LaTeX build artifacts, compiled classes, javadoc mirror,
 *   admin spreadsheets, submission zips) is skipped — deleting inbox/ afterwards
 *   removes it.
 * - PDFs become stub notes (typed by filename) with the PDF attached via
 *   frontmatter `assets:`; docx convert to markdown; tex/code/images/data
 *   become course assets. Apple .pages files are kept as assets (repo-only).
 * - Assignment/practical folders collapse to one tutorial note each, with all
 *   their meaningful files attached.
 *
 * Everything lands status: needs-review, source: onedrive.
 */
import { cpSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync, copyFileSync, readFileSync } from "node:fs";
import { join, extname, basename } from "node:path";
import { emitFrontmatter } from "../lib/frontmatter";
import { slugify } from "../lib/slug";
import { NOTE_TYPE_FOLDER, type NoteType } from "../lib/types";

const ROOT = join(import.meta.dirname, "..");
const INBOX = join(ROOT, "inbox");
const OUT = join(ROOT, "courses");

/* ---------------- mapping ---------------- */

interface CourseSpec {
  term: string;
  code: string;
  name: string;
  color: string;
  icon: string;
  status: "active" | "completed";
  src: string; // path under inbox/
  defaultType?: NoteType; // fallback classification for untyped files
}

const COURSES: CourseSpec[] = [
  { term: "2022", code: "CSC1015F", name: "Computer Science 1015 (Python)", color: "#2563eb", icon: "🐍", status: "completed", src: "First Year/CSC1015F" },
  { term: "2022", code: "CSC1016S", name: "Computer Science 1016 (Java)", color: "#2563eb", icon: "☕", status: "completed", src: "First Year/CSC1016S" },
  { term: "2022", code: "MAM1000W", name: "Mathematics 1000", color: "#7c3aed", icon: "∫", status: "completed", src: "First Year/MAM1000W" },
  { term: "2022", code: "MAM1008S", name: "Mathematics 1008", color: "#7c3aed", icon: "Σ", status: "completed", src: "First Year/MAM1008S" },
  { term: "2022", code: "MAM1019H", name: "Mathematics 1019 (Fundamentals)", color: "#7c3aed", icon: "≡", status: "completed", src: "First Year/MAM1019H" },
  { term: "2022", code: "PHY1004W", name: "Physics 1004", color: "#d97706", icon: "⚛", status: "completed", src: "First Year/PHY1004W" },
  { term: "2023", code: "CSC2004Z", name: "Computer Science 2004", color: "#2563eb", icon: "💻", status: "completed", src: "Second Year/CSC2004Z" },
  { term: "2023", code: "INF2009F", name: "Information Systems 2009", color: "#db2777", icon: "📊", status: "completed", src: "Second Year/INF2009F" },
  { term: "2023", code: "MAM2000W", name: "Mathematics 2000", color: "#7c3aed", icon: "λ", status: "completed", src: "Second Year/MAM2000W" },
  { term: "2023", code: "STA1006S", name: "Statistics 1006", color: "#0d9488", icon: "📈", status: "completed", src: "Second Year/STA1006S" },
  { term: "2024", code: "MAM3000W", name: "Mathematics 3000", color: "#7c3aed", icon: "ℝ", status: "completed", src: "Third Year/MAM3000W" },
  { term: "2024", code: "STA2005S", name: "Statistics 2005 (Linear Models)", color: "#0d9488", icon: "σ", status: "completed", src: "Third Year/STA2005S" },
  { term: "2025", code: "APT", name: "Advanced Probability Theory (Honours)", color: "#0d9488", icon: "🎲", status: "active", src: "Honours/Advanced Probability Theory" },
  { term: "2025", code: "ALG", name: "Algebra (Honours)", color: "#7c3aed", icon: "𝔾", status: "active", src: "Honours/Algebra" },
  { term: "2025", code: "ANA2", name: "Analysis II (Honours)", color: "#7c3aed", icon: "ε", status: "active", src: "Honours/Analysis II" },
  { term: "2025", code: "GAL", name: "Galois Theory (Honours)", color: "#7c3aed", icon: "√", status: "active", src: "Honours/Galois Theory" },
  { term: "2025", code: "GRF", name: "Graph Theory (Honours)", color: "#16a34a", icon: "🕸", status: "active", src: "Honours/Graph Theory" },
  { term: "2025", code: "MEAS", name: "Measure Theory (Honours)", color: "#7c3aed", icon: "μ", status: "active", src: "Honours/Measure Theory" },
  { term: "2025", code: "PROJ", name: "Honours Project", color: "#dc2626", icon: "📜", status: "active", src: "Honours/Project", defaultType: "reference" },
];

const SAMPLE_EXAM_DIR = /sample ?exam|mock ?exam/i;

/* ---------------- junk rules ---------------- */

const JUNK_DIR = /^(\.rproj\.user|__macosx|\.git|node_modules)$/i;
const JUNK_EXT = /\.(aux|log|out|fls|fdb_latexmk|synctex(\.gz)?|toc|snm|vrb|nav|bbl|blg|class|url|rdata|rhistory|pper|rproj|lock|gz|zip|jar|ctxt|pyc)$/i;
const JUNK_FILE = /^(\.ds_store|thumbs\.db|desktop\.ini|\.rdata|\.rhistory)$/i;
const ADMIN_FILE = /class record|dp list|timetable|module information|^mod_|hr101|enrolment|glaxydata|class rep|course outline 20\d\d admin/i;
const MODULE_DIR = /^\d[A-Z]{2}$/;
const ASSIGNMENT_DIR = /assignment|practical|lab report|problem set|prac\b|project(s)?$|challenge/i;
const TESTS_DIR = /past tests|tests, exam|past papers|exam(s)? and solutions|lab test/i;
const ASSETS_ONLY_DIR = /^(template|latex|src|bin|assets?|images?|figures?|data)$/i;

const KEEP_AS_ASSET = /\.(tex|bib|cls|sty|r|py|java|ipynb|txt|csv|xlsx|png|jpe?g|gif|svg|webp|pages|md|html?)$/i;

/* ---------------- classification ---------------- */

function guessNoteType(name: string, dirHint?: NoteType): NoteType {
  const f = name.toLowerCase();
  if (/summary|cheat|formula(e)?|definitions|revision/.test(f)) return "summary";
  if (/\btut(orial)?s?\b|tut ?\d|worksheet|problem ?set|wps|exercises|prac\b|practical/.test(f)) return "tutorial";
  if (/class ?test|midterm|final|exam|quiz|\btest\b/.test(f)) return "test";
  if (/resource book|textbook|\bbook\b|handout|syllabus|glossary/.test(f)) return "reference";
  if (dirHint) return dirHint;
  return "lecture";
}

function cleanTitle(filename: string, module?: string): string {
  let t = basename(filename).replace(/\.[^.]+$/, "");
  t = t.replace(/^CRSALE010[_ -]*/i, "").replace(/[_]+/g, " ").replace(/\s+/g, " ").trim();
  if (!t) t = "Untitled";
  t = t.replace(/^\w/, (c) => c.toUpperCase());
  return module ? `${module} — ${t}` : t;
}

function weekOf(name: string): number | undefined {
  const m = name.toLowerCase().match(/week[ _-]?(\d{1,2})/);
  return m ? Number(m[1]) : undefined;
}

/* ---------------- output helpers ---------------- */

interface Ctx {
  spec: CourseSpec;
  dir: string; // courses/<term>/<code>
  usedNoteFiles: Set<string>;
  usedAssets: Set<string>;
  counts: Record<string, number>;
}

const report: string[] = [];
let deletedCount = 0;
let deletedBytes = 0;
let keptAssets = 0;
let stubNotes = 0;
let docxNotes = 0;

function skip(file: string, size: number) {
  deletedCount++;
  deletedBytes += size;
}

function addAsset(ctx: Ctx, srcPath: string, prefix?: string): string {
  const base = basename(srcPath);
  let name = prefix ? `${prefix}-${base}` : base;
  name = name.replace(/\s+/g, "-");
  let i = 2;
  while (ctx.usedAssets.has(name.toLowerCase())) {
    const ext = extname(name);
    name = `${name.slice(0, name.length - ext.length)}-${i++}${ext}`;
  }
  ctx.usedAssets.add(name.toLowerCase());
  const dest = join(ctx.dir, "assets", name);
  mkdirSync(join(ctx.dir, "assets"), { recursive: true });
  copyFileSync(srcPath, dest);
  keptAssets++;
  return name;
}

function writeNote(
  ctx: Ctx,
  type: NoteType,
  title: string,
  body: string,
  opts: { assets?: string[]; week?: number; tags?: string[] } = {},
): void {
  const folder = NOTE_TYPE_FOLDER[type];
  let file = slugify(title);
  let i = 2;
  while (ctx.usedNoteFiles.has(`${folder}/${file}`)) file = `${slugify(title)}-${i++}`;
  ctx.usedNoteFiles.add(`${folder}/${file}`);
  const fm = emitFrontmatter({
    title,
    type,
    week: opts.week,
    tags: opts.tags ?? [],
    status: "needs-review",
    source: "onedrive",
    assets: opts.assets ?? [],
  });
  mkdirSync(join(ctx.dir, folder), { recursive: true });
  writeFileSync(join(ctx.dir, folder, `${file}.md`), fm + body);
  ctx.counts[type] = (ctx.counts[type] ?? 0) + 1;
}

function stubBody(assetNames: string[], origin: string): string {
  const list = assetNames.map((a) => `- ${a}`).join("\n");
  return `Imported from OneDrive (\`${origin}\`). Original file(s) attached:\n\n${list}\n\nUse this note for worked solutions, commentary, and flashcards.\n`;
}

async function docxToNote(ctx: Ctx, srcPath: string, type: NoteType, title: string, module?: string): Promise<void> {
  const [{ default: mammoth }, { default: TurndownService }] = await Promise.all([
    import("mammoth"),
    import("turndown"),
  ]);
  try {
    const { value: html, messages } = await mammoth.convertToHtml({ path: srcPath });
    const md = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced" })
      .turndown(html)
      // base64 images would bloat every page load; the original docx is attached
      .replace(/!\[[^\]]*\]\(data:[^)]+\)/g, "*(image omitted — open the attached original)*");
    const warn = messages.filter((m) => m.type === "warning").length;
    const asset = addAsset(ctx, srcPath);
    const header = warn > 0 ? `> [!warning]\n> Converted from .docx with ${warn} warning(s) — check tables and equations. Original attached.\n\n` : "";
    writeNote(ctx, type, title, header + md + "\n", { assets: [asset], tags: module ? [module] : [] });
    docxNotes++;
  } catch {
    const asset = addAsset(ctx, srcPath);
    writeNote(ctx, type, title, stubBody([asset], srcPath.replace(INBOX + "/", "")), { tags: module ? [module] : [] });
  }
}

/* ---------------- walkers ---------------- */

function isJunk(name: string, full: string): boolean {
  return (
    JUNK_EXT.test(name) ||
    JUNK_FILE.test(name.toLowerCase()) ||
    ADMIN_FILE.test(name) ||
    full.includes("/CSC1016S/docs/") // offline javadoc mirror
  );
}

/** Collect every meaningful file beneath dir (for assignment-style folders). */
function collectFiles(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir).sort()) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (JUNK_DIR.test(entry) || entry.toLowerCase() === "bin") {
        collectSizes(full);
        continue;
      }
      collectFiles(full, out);
    } else if (isJunk(entry, full)) {
      skip(full, st.size);
    } else if (/\.pdf$/i.test(entry) || KEEP_AS_ASSET.test(entry) || /\.docx$/i.test(entry)) {
      out.push(full);
    } else {
      skip(full, st.size);
    }
  }
  return out;
}

function collectSizes(dir: string) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) collectSizes(full);
    else skip(full, st.size);
  }
}

async function assignmentNote(ctx: Ctx, dir: string, module?: string, type: NoteType = "tutorial"): Promise<void> {
  const files = collectFiles(dir);
  if (files.length === 0) return;
  const title = cleanTitle(basename(dir), module);
  const prefix = slugify(basename(dir)).slice(0, 30);
  const assetNames = files.map((f) => addAsset(ctx, f, prefix));
  writeNote(ctx, type, title, stubBody(assetNames, dir.replace(INBOX + "/", "")), {
    tags: module ? [module] : [],
  });
  stubNotes++;
}

async function walk(ctx: Ctx, dir: string, module?: string, dirHint?: NoteType): Promise<void> {
  for (const entry of readdirSync(dir).sort()) {
    const full = join(dir, entry);
    const st = statSync(full);

    if (st.isDirectory()) {
      if (JUNK_DIR.test(entry) || entry.toLowerCase() === "bin" || full.includes("CSC1016S/docs")) {
        collectSizes(full);
      } else if (MODULE_DIR.test(entry)) {
        await walk(ctx, full, entry, dirHint);
      } else if (SAMPLE_EXAM_DIR.test(entry)) {
        await assignmentNote(ctx, full, module, "test");
      } else if (TESTS_DIR.test(entry)) {
        await walk(ctx, full, module, "test");
      } else if (ASSIGNMENT_DIR.test(entry)) {
        // subfolders become one note each; loose files classified individually
        const subdirs = readdirSync(full).filter((e) => statSync(join(full, e)).isDirectory() && !JUNK_DIR.test(e));
        for (const sd of subdirs) await assignmentNote(ctx, join(full, sd), module);
        for (const f of readdirSync(full).sort()) {
          const ffull = join(full, f);
          if (statSync(ffull).isDirectory()) continue;
          await handleFile(ctx, ffull, module, "tutorial");
        }
      } else if (ASSETS_ONLY_DIR.test(entry)) {
        for (const f of collectFiles(full)) addAsset(ctx, f, slugify(entry).slice(0, 20));
      } else {
        await walk(ctx, full, module, dirHint);
      }
      continue;
    }

    await handleFile(ctx, full, module, dirHint);
  }
}

async function handleFile(ctx: Ctx, full: string, module?: string, dirHint?: NoteType): Promise<void> {
  const name = basename(full);
  const st = statSync(full);
  if (isJunk(name, full)) {
    skip(full, st.size);
    return;
  }
  const origin = full.replace(INBOX + "/", "");

  if (/\.pdf$/i.test(name)) {
    const type = guessNoteType(name, dirHint ?? ctx.spec.defaultType);
    const asset = addAsset(ctx, full);
    writeNote(ctx, type, cleanTitle(name, module), stubBody([asset], origin), {
      week: weekOf(name),
      tags: module ? [module] : [],
    });
    stubNotes++;
    return;
  }
  if (/\.docx$/i.test(name)) {
    await docxToNote(ctx, full, guessNoteType(name, dirHint), cleanTitle(name, module), module);
    return;
  }
  if (/\.pages$/i.test(name)) {
    addAsset(ctx, full);
    return; // repo-only asset (not viewable in browser); no stub note
  }
  if (KEEP_AS_ASSET.test(name)) {
    addAsset(ctx, full);
    return;
  }
  skip(full, st.size);
}

/* ---------------- special top-level items ---------------- */

const OVERLEAF_MAP: [RegExp, string][] = [
  [/^(bst|binarysearch|graphs?|networks?|os2|pcp|title|assignment\.cls|mybib)/i, "CSC2004Z"],
  [/^(stats?_|ed_)/i, "STA2005S"],
];

async function main() {
  const ctxByCode = new Map<string, Ctx>();

  for (const spec of COURSES) {
    const src = join(INBOX, spec.src);
    if (!existsSync(src)) {
      report.push(`SKIPPED (missing): ${spec.src}`);
      continue;
    }
    const dir = join(OUT, spec.term, spec.code);
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      join(dir, "course.yml"),
      [
        `code: ${spec.code}`,
        `name: "${spec.name}"`,
        `term: ${spec.term}`,
        `color: "${spec.color}"`,
        `icon: "${spec.icon}"`,
        `status: ${spec.status}`,
        `weeks: 12`,
        "",
      ].join("\n"),
    );
    const ctx: Ctx = { spec, dir, usedNoteFiles: new Set(), usedAssets: new Set(), counts: {} };
    ctxByCode.set(spec.code, ctx);
    await walk(ctx, src);
  }

  // Overleaf assignment sources → matching course assets
  const overleaf = join(INBOX, "Overleaf Assignments");
  if (existsSync(overleaf)) {
    for (const f of collectFiles(overleaf)) {
      const rel = basename(f);
      const hit = OVERLEAF_MAP.find(([re]) => re.test(rel));
      const ctx = ctxByCode.get(hit ? hit[1] : "CSC2004Z");
      if (ctx) addAsset(ctx, f, "src");
    }
  }

  // OneNote upload → MAM1019H (proofs course)
  const proofs = join(INBOX, "OneNote Uploads", "Proofs.pages");
  if (existsSync(proofs)) {
    const ctx = ctxByCode.get("MAM1019H");
    if (ctx) addAsset(ctx, proofs);
  }

  // LaTeX template → templates/latex
  const tmpl = join(INBOX, "Latex Template");
  if (existsSync(tmpl)) {
    cpSync(tmpl, join(ROOT, "templates", "latex"), { recursive: true });
  }

  for (const [, ctx] of ctxByCode) {
    const c = Object.entries(ctx.counts).map(([t, n]) => `${n} ${t}`).join(", ") || "no notes";
    report.push(`${ctx.spec.term}/${ctx.spec.code}: ${c}; ${ctx.usedAssets.size} assets`);
  }
  report.push(`TOTAL: ${stubNotes} stub notes, ${docxNotes} docx→md, ${keptAssets} assets kept`);
  report.push(`DELETED-AS-JUNK: ${deletedCount} files, ${(deletedBytes / 1048576).toFixed(1)} MB`);
  console.log(report.join("\n"));
}

void main();
