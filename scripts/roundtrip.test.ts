/**
 * Portability-contract test: export→import must round-trip losslessly.
 * Runs the REAL import/export code against an in-memory IndexedDB, plus
 * unit checks on the pure pipeline pieces. CI-gated (`npm test`).
 */
import "fake-indexeddb/auto";
import assert from "node:assert/strict";
import JSZip from "jszip";

let failures = 0;
async function test(name: string, fn: () => void | Promise<void>) {
  try {
    await fn();
    console.log(`PASS ${name}`);
  } catch (err) {
    failures++;
    console.error(`FAIL ${name}\n  ${err instanceof Error ? err.message : err}`);
  }
}

const NOTE_BODY = `> [!definition]
> A **limit** formalises closeness: $\\lim_{x \\to a} f(x) = L$.

## Epsilon-delta

The $\\varepsilon$–$\\delta$ game, see [[Derivatives and the Chain Rule]].

> [!answer]
> Collapsed answer with math: $\\delta = \\varepsilon / 3$.

> [!flashcard]
> Q: State the definition of a limit.
> A: For all ε > 0 there exists δ > 0 such that …

## Continuity

| a | b |
|---|---|
| 1 | 2 |
`;

async function main() {
  const { parseFrontmatter, emitFrontmatter } = await import("../lib/frontmatter");
  const { extractHeadings, extractFlashcards, extractSections } = await import("../lib/markdown/extract");
  const { renderMarkdown } = await import("../lib/markdown/render");
  const { guessType, guessWeek } = await import("../lib/import");

  await test("frontmatter: emit→parse round-trips", () => {
    const meta = {
      title: 'Limits: an "intro"',
      type: "lecture",
      week: 3,
      tags: ["limits", "epsilon-delta"],
      status: "complete",
      difficulty: 4,
    };
    const { data, body } = parseFrontmatter(emitFrontmatter(meta) + NOTE_BODY);
    assert.deepEqual(data, meta);
    assert.equal(body, NOTE_BODY);
  });

  await test("extract: headings get stable slugs", () => {
    const hs = extractHeadings(NOTE_BODY);
    assert.deepEqual(hs.map((h) => h.slug), ["epsilon-delta", "continuity"]);
  });

  await test("extract: flashcards parse Q/A", () => {
    const cards = extractFlashcards(NOTE_BODY);
    assert.equal(cards.length, 1);
    assert.match(cards[0].question, /definition of a limit/);
    assert.match(cards[0].answer, /ε > 0/);
  });

  await test("extract: sections split at headings", () => {
    const slugs = extractSections(NOTE_BODY).map((s) => s.slug);
    assert.ok(slugs.includes("epsilon-delta") && slugs.includes("continuity"));
  });

  await test("render: callouts, details, katex, wikilink in HTML", async () => {
    const html = await renderMarkdown(NOTE_BODY);
    assert.match(html, /callout-definition/);
    assert.match(html, /<details class="callout callout-answer"/);
    assert.match(html, /katex/);
    assert.match(html, /class="wikilink"/);
  });

  await test("import heuristics: type and week guessing", () => {
    assert.equal(guessType("tut-03-vectors.pdf"), "tutorial");
    assert.equal(guessType("2025-midterm.pdf"), "test");
    assert.equal(guessType("exam-cheatsheet.md"), "summary");
    assert.equal(guessType("05-eigenvalues.md"), "lecture");
    assert.equal(guessWeek("week 7 notes.md"), 7);
    assert.equal(guessWeek("w03-limits.md"), 3);
    assert.equal(guessWeek("05-eigen.md"), 5);
  });

  // ---- Full round-trip through the real DB-backed import/export ----
  const { createCourse } = await import("../lib/notes");
  const { importFile } = await import("../lib/import");
  const { exportAll } = await import("../lib/export");
  const { db } = await import("../lib/db");

  await db.open();
  const course = await createCourse({
    code: "TEST1001",
    name: "Round Trip Theory",
    term: "2026-S2",
    color: "#2563eb",
    icon: "Σ",
    status: "active",
    weeks: 13,
  });

  const meta = {
    title: "Limits and Continuity",
    type: "lecture",
    week: 3,
    tags: ["limits", "epsilon-delta"],
    status: "complete",
    difficulty: 4,
    source: "onedrive", // declared provenance must survive, not be clobbered with "import"
  };
  const source = emitFrontmatter(meta) + NOTE_BODY;

  await test("round-trip: import real .md → export zip → identical file", async () => {
    const result = await importFile(course.id, new File([source], "03-limits-and-continuity.md"));
    assert.equal(result.outcome, "note");

    const zip = await JSZip.loadAsync(await (await exportAll()).arrayBuffer());
    const path = "2026-S2/TEST1001/lectures/03-limits-and-continuity.md";
    const file = zip.file(path);
    assert.ok(file, `expected ${path} in export; got: ${Object.keys(zip.files).join(", ")}`);
    const exported = await file.async("string");

    const a = parseFrontmatter(source);
    const b = parseFrontmatter(exported);
    assert.deepEqual(b.data, a.data, "frontmatter must survive the round-trip");
    assert.equal(b.body.trim(), a.body.trim(), "body must survive the round-trip byte-for-byte");
  });

  await test("round-trip: flashcard became a live card with correct identity", async () => {
    const note = (await db.notes.toArray()).find((n) => n.title === "Limits and Continuity" && n.courseId === course.id);
    assert.ok(note);
    const cards = await db.cards.where("noteId").equals(note.id).toArray();
    assert.equal(cards.filter((c) => c.active === 1).length, 1);
  });

  await test("round-trip: export includes course.yml and data files", async () => {
    const zip = await JSZip.loadAsync(await (await exportAll()).arrayBuffer());
    assert.ok(zip.file("2026-S2/TEST1001/course.yml"));
    assert.ok(zip.file("data/study-queue.json"));
    assert.ok(zip.file("data/review-log.jsonl"));
  });

  db.close();
  console.log(failures === 0 ? "\nAll tests passed." : `\n${failures} test(s) FAILED.`);
  process.exit(failures === 0 ? 0 : 1);
}

void main();
