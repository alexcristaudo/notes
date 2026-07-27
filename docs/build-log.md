# Build Log

Running record of implementation decisions where the build deviates from or refines the plan.

## 2026-07-27 — Phase 1 MVP shipped

Single-user, browser-persisted MVP per [plan 05, Phase 1](plan/05-roadmap.md). Runs with
`npm install && npm run dev` (or `npm run build && npm start`). All data lives in IndexedDB;
first launch seeds a sample course demonstrating every block type.

**Shipped:** dashboard (course cards, coverage bars, exam countdowns, queue preview, due-card
count) · course page (week×type coverage grid, type tabs, auto-generated course outline) · note
reader (KaTeX math, syntax highlighting, Mermaid, callouts, collapsed answers, wiki-links with
backlinks, outline sidebar with per-section queueing) · markdown editor with live preview and
snippet toolbar, debounced autosave · ⌘K palette with note- and **section-level** results,
course filter, "sections only" mode · study queue (star, reorder, focus mode, snooze) ·
flashcards extracted from `> [!flashcard]` blocks, keyboard-driven review, append-only review
log · import (.md with frontmatter, .docx via mammoth→turndown, .pdf → stub note + attached
asset, images; type/week guessed from filenames) · one-click export zip matching the
portability contract (`term/COURSE/{lectures,…}/note.md` + `data/*.json(l)`) · new course/note
wizards with per-type templates · CI (typecheck + build). Verified with a 17-check Playwright
smoke test against the production build.

**Deliberate deviations from the plan (MVP scope calls):**

1. **Editor is markdown-source + live preview, not TipTap.** Canonical storage is the markdown
   string itself, so portability is by construction and nothing can be lost in rich-text
   round-tripping. TipTap block editing arrives with the sync engine work (Phase 2), where
   ProseMirror is needed for CRDT collab anyway.
2. **Scheduler is SM-2, not FSRS.** The review log is append-only and scheduler state is a pure
   replay of it (a plan principle), so swapping in FSRS later is a drop-in change with full
   history preserved. SM-2 removed a dependency risk this session.
3. **Wiki-links resolve by note title** (case-insensitive) rather than stable IDs — matches the
   authoring experience; ID-backed links come with the DB-backed model in Phase 2.
4. **Import runs in the page** rather than background jobs — fine at MVP volumes; the worker
   pipeline is Phase 2 infrastructure.

**Known gaps for the Phase-1 "done when":** validation lint panel not built yet; no
export→import round-trip CI test yet (manual only); light theme not offered (dark only).

## 2026-07-27 — Phase 1 gaps closed

All three gaps from the entry above are done:

1. **Course Health panel** (`lib/validate.ts` + a Health tab on the course page): broken
   wiki-links, duplicate titles (ambiguous link targets), flashcard blocks that never parsed
   into cards, lecture week gaps, dated notes missing a week, the needs-review backlog, and
   orphan assets — each linking to the offending note. The v1 `validate` script reborn as UI,
   per the plan.
2. **Round-trip CI test** (`npm test`, wired into the workflow): runs the *real* import/export
   code against an in-memory IndexedDB (fake-indexeddb) — imports a frontmattered markdown file,
   exports the zip, and asserts frontmatter and body survive byte-for-byte — plus unit checks on
   frontmatter, extraction, rendering, and import heuristics. The test immediately caught three
   real bugs (quote unescaping in the frontmatter parser; `exam-cheatsheet` misclassified as a
   test; the importer dropping `difficulty`/`date` and clobbering declared `source` provenance),
   all fixed.
3. **Light theme**: full light palette via CSS variables, system-preference default, a
   sidebar toggle cycling system → light → dark persisted in localStorage, pre-paint script to
   avoid theme flash, theme-aware Mermaid rendering, and the link accent moved to a `--link`
   variable for contrast in both themes.
