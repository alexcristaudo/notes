# 02 — Content Model

Everything the app knows comes from the folder layout, YAML frontmatter, and links between notes.
This file is the contract.

## Folder layout

```
courses/
└── 2026-S2/                          # term (year + semester)
    └── MATH2001/                     # course code
        ├── course.yml                # course metadata (below)
        ├── lectures/
        │   ├── 01-limits-and-continuity.md
        │   └── 02-derivatives.md
        ├── tutorials/
        │   ├── tut-03.md             # worked tutorial sheet
        │   └── tut-03-questions.pdf  # original sheet, linked from the note
        ├── tests/
        │   ├── 2025-midterm.md       # your worked solutions / post-mortem
        │   └── 2025-midterm.pdf      # the actual paper
        ├── summaries/
        │   └── exam-cheatsheet.md
        └── assets/                   # images/figures used by this course's notes
```

- **Term folders** sort chronologically (`2026-S1`, `2026-S2`, `2027-S1`).
- **Note filenames** start with a sortable prefix where order matters (`01-`, `tut-03`).
- Original PDFs/images sit next to the Markdown note that discusses them.

## `course.yml` — course metadata

```yaml
code: MATH2001
name: Calculus & Linear Algebra II
term: 2026-S2
color: "#7c3aed"        # used everywhere the course appears in the UI
icon: "∫"               # emoji or single char for cards/sidebar
status: active           # active | completed | archived
weeks: 13
exam_date: 2026-11-14    # optional; drives countdowns on the dashboard
links:                   # optional external resources
  - { label: "Course site", url: "https://..." }
```

## Note frontmatter — the schema

```yaml
---
title: Limits and Continuity
type: lecture            # lecture | tutorial | test | summary | reference
week: 1                  # ties the note to a course week (optional for summaries)
date: 2026-07-28         # date the material was covered / test was sat
tags: [limits, epsilon-delta, continuity]
status: complete         # draft | complete | needs-review
source: onedrive         # optional provenance marker set by the importer
difficulty: 3            # optional 1–5 self-rating, feeds study prioritisation
---
```

Rules:

- `title` and `type` are required; everything else is optional with defaults
  (`week` inferred from filename prefix when possible, `status: draft`).
- The **course and term are never in frontmatter** — they come from the path. One less thing to
  keep in sync.
- `scripts/validate.ts` enforces this schema and fails CI on violations.

## Note types and their templates

| Type | Template contains |
|------|-------------------|
| `lecture` | Title, "Key ideas" callout, body sections, "Linked concepts" footer |
| `tutorial` | Link slot for the original sheet PDF, per-question `## Q1`, `## Q2` sections with a `> [!answer]` callout each |
| `test` | Metadata block (date, weight, score), link to paper PDF, per-question worked solutions, "Mistakes & lessons" section |
| `summary` | Dense, exam-oriented; the study queue prefers these |
| `reference` | Freeform (formula sheets, glossaries, links) |

Templates live in `scripts/templates/` and are used by both the in-app "New note" flow and the
`npm run new:note` CLI.

## Linking conventions

- **Wiki-links between notes:** `[[MATH2001/lectures/02-derivatives]]` or, within the same course,
  `[[02-derivatives]]`. A remark plugin resolves them; unresolved links render highlighted and are
  reported by `validate`.
- **Section links:** `[[02-derivatives#chain-rule]]` targets a heading anchor.
- These links are the edges of the knowledge graph (see [03-features.md](03-features.md)).

## Special markdown extensions

- **Callouts:** `> [!definition]`, `> [!theorem]`, `> [!example]`, `> [!warning]`, `> [!answer]`
  render as styled blocks. `[!answer]` blocks are collapsed by default — instant self-quizzing on
  tutorial sheets.
- **Flashcards inline in notes:**

  ```md
  > [!flashcard]
  > Q: State the epsilon-delta definition of a limit.
  > A: For all ε>0 there exists δ>0 such that ...
  ```

  The content layer extracts every `[!flashcard]` block into the review system automatically —
  cards live inside the notes they belong to, never in a separate silo.
- **Math:** `$...$` and `$$...$$` via KaTeX. **Diagrams:** fenced ```mermaid blocks.

## Heading conventions (powers the section finder)

Headings are indexed verbatim, so descriptive headings pay off: prefer `## Chain rule` over
`## Part 2`. The section finder (see features) searches every heading across every course, so a
query like "eigenvalues" answers "where is this covered?" directly.

## `data/` files

| File | Purpose | Shape |
|------|---------|-------|
| `study-queue.json` | Ordered list of things to study in free time | `[{ ref, addedAt, priority, targetDate?, done }]` where `ref` is a note path or `path#heading` |
| `review-log.jsonl` | Append-only flashcard review history | one `{ cardId, ts, grade }` per line |
| `settings.json` | UI prefs (theme, dashboard layout) | freeform |
