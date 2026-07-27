# 02 — Content Model & Editor

The v1 file/folder model becomes a database-backed domain model — but the *shape* survives,
because the shape (Course → Week → typed notes) is the product. Markdown remains the interchange
format: every entity round-trips to plain files for import/export.

## Domain model

```
User
 └─< Membership (role: owner | editor | viewer) >─ Space
                                                    ├─ kind: personal | course-shared
                                                    └─< Course
                                                         ├─ code, name, term, color, icon
                                                         ├─ weeks, exam_dates[], links[]
                                                         ├─ status: active|completed|archived
                                                         └─< Note
                                                              ├─ type: lecture|tutorial|test|summary|reference
                                                              ├─ title, week?, date?, tags[]
                                                              ├─ status: draft|complete|needs-review
                                                              ├─ difficulty? (1–5)
                                                              ├─ body: Yjs doc (ProseMirror)
                                                              └─< Asset (pdf|image|file, S3 key)
Derived / study entities:
  Flashcard      — extracted from flashcard blocks in notes; FK to note + block id
  ReviewLog      — append-only (user, card, ts, grade); scheduler state derived
  StudyQueueItem — (user, ref: note|section, priority, targetDate?, done)
  Link           — note→note edges parsed from wiki-links (graph, backlinks)
  HeadingIndex   — (note, heading, anchor, order) — powers the section finder
  Embedding      — (note, section, vector) — powers semantic search & RAG
```

Key decisions:

- **Notes belong to courses; courses belong to spaces.** In a shared course space, notes are
  visible to members, but each member's *personal annotations, queue, and review state* are
  private per-user overlays — shared materials, private studying.
- **Sections are addressable.** Headings get stable anchors, so queue items, search results,
  flashcards, and AI citations all point to `note#heading`, not just notes.
- **`ReviewLog` stays append-only** (v1 principle): SM-2/FSRS scheduler state is a pure function
  of the log — auditable, re-derivable, algorithm-swappable.

## Note types (unchanged in spirit, now enforced by templates + UI)

| Type | Template & special behavior |
|------|-----------------------------|
| `lecture` | Key-ideas callout, body, linked-concepts footer; feeds coverage grid |
| `tutorial` | Original sheet (PDF asset) pinned; per-question sections with collapsed `answer` blocks → instant self-quizzing |
| `test` | Paper PDF + metadata (date, weight, score); per-question worked solutions; **"Mistakes & lessons"** section aggregated into the course mistake log |
| `summary` | Exam-oriented; prioritized by study-queue suggestions; print/PDF-ready |
| `reference` | Freeform (formula sheets, glossaries) |

## Editor (TipTap/ProseMirror) — block inventory

Core: headings, lists, tables, images (drag-drop → asset upload), code (syntax highlighted),
blockquote, horizontal rule.

Custom blocks:

- **Math** — inline `$…$` and block `$$…$$`, KaTeX-rendered, LaTeX source preserved.
- **Callouts** — `definition | theorem | example | warning | answer` (answer = collapsed by
  default).
- **Flashcard block** — Q/A (or cloze) authored inline; automatically registered as a `Flashcard`
  entity linked to its position. Deleting the block retires the card (history kept).
- **Wiki-link** — `[[…]]` autocomplete across the space; renders as chip; creates `Link` edges.
- **PDF embed** — inline viewer for an attached asset with page-anchored deep links
  (`asset#page=4`) so notes can cite "the question on page 4 of the 2025 midterm".
- **Mermaid diagram** — fenced source, rendered client-side.

Markdown-native input everywhere: typing `## `, `> `, `$$`, `[[` produces the right block.
Paste-from-markdown and copy-as-markdown are lossless for all core + custom blocks.

## Portability contract (marketing-grade, not fine print)

**Export, any time, one click:** a zip laid out exactly like plan-v1's folder structure —

```
export/
└── 2026-S2/MATH2001/
    ├── course.yml
    ├── lectures/01-limits-and-continuity.md   # frontmatter + markdown, flashcards as blocks
    ├── tutorials/…  tests/…  summaries/…
    └── assets/…
```

- Every custom block has a defined markdown serialization (callouts as `> [!type]`, flashcards as
  `> [!flashcard]`, math as LaTeX). No proprietary blobs.
- Import accepts the same structure — export→import round-trips (this is also our test fixture).
- Review history and queue export as JSON/JSONL alongside.

This is the "no lock-in" trust signal (see [06-product-market.md](06-product-market.md)) and it
means the v1 personal-repo workflow remains a supported citizen: power users can live in
git and sync via import/export.

## Metadata rules

- `title` + `type` required; everything else optional with inferred defaults (week from title
  like "Week 7"/"Tut 3", date from creation). Never block a note on metadata (product principle).
- Validation is a background lint, surfaced as a per-course "health" panel (broken links, missing
  weeks, untitled assets) — the v1 `validate` script reborn as UI.
