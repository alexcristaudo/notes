# 05 — Roadmap

Build order optimised so the repo is *useful from phase 1* even if later phases never happen.
Each phase ends in a committed, working state with acceptance criteria.

## Phase 1 — Foundation & content model

**Deliverables**

- Next.js + TypeScript + Tailwind scaffold; content layer that parses `courses/**` (frontmatter,
  markdown pipeline with KaTeX, Shiki, Mermaid, callouts, wiki-links).
- Folder conventions + one sample course with sample notes of every type (acts as living docs).
- `scripts/validate.ts` + CI (typecheck + validate on push).
- CLI scaffolders: `new:course`, `new:note` with templates.

**Done when:** dropping a valid markdown file into `courses/` makes it render correctly at a URL;
`validate` catches a bad frontmatter field; a new course can be scaffolded in one command.

## Phase 2 — Read & find (the daily-driver core)

**Deliverables**

- Dashboard with course cards; course page with week grid and type tabs; note reader with outline
  sidebar, backlinks, collapsed answers.
- ⌘K full-text search with filters; heading-level results (the section-finder index).
- In-app New Course / New Note flows (API routes writing files).

**Done when:** "where is X covered?" is answerable in under 5 seconds via search, and a new
lecture note can be created and read without touching the terminal.

## Phase 3 — Study loop

**Deliverables**

- Study Queue: add note/section from anywhere, reorder, focus mode, done/snooze;
  `data/study-queue.json` persistence.
- Flashcard extraction from `[!flashcard]` blocks; SM-2 scheduler over `review-log.jsonl`;
  keyboard-driven review UI; due counts on the dashboard.

**Done when:** a full study session — open queue → focus mode → review due cards → progress
recorded — works end to end and survives restart via the JSON files.

## Phase 4 — OneDrive migration

**Deliverables**

- `import-onedrive` script per [04-onedrive-migration.md](04-onedrive-migration.md): dry-run,
  `mapping.yml`, docx→md via pandoc, PDF stub notes, incremental re-run.
- The actual migration of the real collection, committed course by course.

**Done when:** every OneDrive file is either imported, stubbed, or deliberately skipped in
`mapping.yml`; `validate` passes; the `needs-review` filter lists the cleanup backlog.

*(Phases 3 and 4 are independent — swap them if getting the notes in matters more than the study
loop.)*

## Phase 5 — Visual layer

**Deliverables**

- Knowledge graph view with course filters and orphan list.
- Activity heatmap, coverage donuts, exam countdown rings, notes-per-week timeline,
  retention curve.
- Past-paper bank view; suggestions engine for the study queue.

**Done when:** the dashboard answers "am I on track for each course?" without clicking anywhere.

## Phase 6 — Polish (ongoing, cherry-pick)

Static read-only export for phone; in-app quick editor; print stylesheet for cheat sheets;
mistake-log aggregation; in-app validate report; random-section review.

## Risks & mitigations

| Risk | Mitigation |
|------|------------|
| docx→md conversion quality | Stub-note fallback means nothing is ever lost; cleanup is incremental via `needs-review`. |
| Scope creep in visuals | Phases 1–3 ship value with zero charts; every graphic must answer a named question (see 03). |
| Metadata discipline decays | Defaults + `validate` in CI keep drift visible; app tolerates missing fields. |
| App rot (framework updates) | Content is plain markdown; worst case the app is rebuilt on any framework without touching notes. |

## Immediate next step

Phase 1, starting with the content layer and one fully-fleshed sample course — it locks the
content model with real examples before any UI exists.
