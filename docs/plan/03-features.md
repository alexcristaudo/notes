# 03 — Features

Each feature lists what it does, how it works, and its priority
(**P0** = core, build first; **P1** = important; **P2** = nice-to-have).

---

## 1. Dashboard (home page) — P0

The first screen. Answers "what's my situation?" at a glance.

- **Course cards** — one per active course: color, icon, note counts by type, coverage bar
  (weeks with notes vs. `weeks` in `course.yml`), days until `exam_date`.
- **Study queue preview** — top 5 queue items, one-click "open" / "done".
- **Recently edited notes** (from git/file mtimes).
- **Cards due today** — flashcard count due under the spaced-repetition schedule.
- **Activity heatmap** — GitHub-style calendar of study activity (edits + reviews), built from
  the review log and git history. *(P1)*

## 2. Course page — P0

Everything about one course.

- Header with metadata, exam countdown, external links.
- **Week-by-week grid**: rows = weeks 1..N, columns = lectures / tutorials / tests. Instantly
  shows gaps ("week 7 has no tutorial notes").
- Tabbed lists per note type with status chips (`draft` / `complete` / `needs-review`).
- **Course overview panel** — auto-generated: all headings across the course's notes as a
  hierarchical table of contents, i.e. a syllabus reconstructed from what you actually wrote.
- **Coverage donut + difficulty strip** — % complete notes, and which weeks you rated hard. *(P1)*

## 3. Note reader — P0

- Rendered Markdown with KaTeX math, Shiki code, Mermaid diagrams, styled callouts.
- **Sticky outline sidebar** (the note's headings) with scroll-spy.
- Collapsed-by-default `[!answer]` blocks for self-quizzing.
- Backlinks panel: every note that links here.
- Actions: "Add to study queue" (whole note or current section), "Edit in VS Code" (`vscode://`
  deep link), copy path.
- Embedded PDF viewer for sibling PDFs (original tutorial sheets, test papers). *(P1)*

## 4. Full-text search — P0

- One search box (⌘K palette) over titles, headings, tags, and body text of every note.
- Filters: course, type, term, tag, status.
- Results show highlighted snippets and the matched **section**, deep-linking to the exact heading.
- Implementation: `minisearch` index built by the content layer; rebuilt on file change in dev.

## 5. Section finder ("where is X covered?") — P0

The killer feature for revision. A dedicated view (and a search mode) that indexes **every heading
in every note** and answers queries like *"eigenvalues"* with:

> `MATH2001 › lectures › 05-eigen-things › ## Eigenvalues & eigenvectors` — week 5
> `MATH2001 › summaries › exam-cheatsheet › ## Eigen-decomposition shortcuts`
> `STAT2003 › lectures › 09-pca › ## Why eigenvalues appear in PCA`

Grouped by course, ordered by relevance, each row deep-links to the heading. Also browsable as an
A–Z concept index built from headings + tags. *(Index build is part of P0 search; the dedicated
browse view is P1.)*

## 6. Creation flows — P0

- **New course wizard**: term, code, name, color, icon, weeks → scaffolds the folder structure and
  `course.yml`.
- **New note**: pick course + type (+ week), get a template-filled Markdown file with frontmatter;
  opens in the app (or editor) immediately.
- Mirrored CLI: `npm run new:course`, `npm run new:note` for terminal folk.

## 7. Study Queue — P0

The "things I want to study in my free time" list, backed by `data/study-queue.json`.

- Add whole notes **or specific sections** from anywhere (reader, search, section finder).
- Manual drag-to-reorder plus priority stars; optional target date.
- **Focus mode**: "give me the next item" → distraction-free reader; mark done / re-queue / snooze.
- Suggestions engine *(P1)*: proposes items from `needs-review` notes, high-`difficulty` weeks, and
  courses with near exams. Suggestions require one click to accept — the queue stays yours.

## 8. Flashcards & spaced repetition — P1

- Cards are extracted from `[!flashcard]` blocks inside notes (see content model) — authoring
  happens where the knowledge lives.
- **SM-2 scheduling** derived by replaying `data/review-log.jsonl`; grades Again/Hard/Good/Easy.
- Review session UI: front → reveal → grade, keyboard-driven. Per-course decks and "all due".
- Each card links back to its source note & heading for context.

## 9. Knowledge graph — P1

- Force-directed graph: nodes = notes (sized by inbound links, colored by course), edges =
  wiki-links. Hover previews, click to open. Filter by course/term/type.
- Surfaces **orphan notes** (nothing links in or out) as a review-worthy list.
- Cross-course edges highlighted — the interesting ones (e.g. linear algebra ↔ statistics).

## 10. Graphics & stats — P1

All charts follow one visual system (consistent palette keyed to course colors, dark/light aware):

| Graphic | Where | Question it answers |
|---------|-------|--------------------|
| Coverage bars / week grid | dashboard, course page | What's missing? |
| Activity heatmap (calendar) | dashboard | Am I consistent? |
| Exam countdown ring | course card | How long left, how ready? |
| Retention curve | flashcards | Is review working? |
| Notes-per-week timeline | course page | Effort distribution over the term |
| Tag cloud → concept index | section finder | What does this repo know about? |

## 11. Tests & tutorials as first-class citizens — P0 (model) / P1 (views)

- `tutorial` and `test` are dedicated note types with templates (per-question sections,
  collapsed answers, "mistakes & lessons").
- **Past-paper bank view**: all `test` notes across courses, filterable, each with its PDF and your
  worked solutions side by side.
- **Mistake log** *(P2)*: aggregates "Mistakes & lessons" sections across tests into one page per
  course — the highest-value pre-exam read.

## 12. Quality-of-life — P2

- Read-only static export for phone reading (GitHub Pages).
- In-app quick editor (CodeMirror) for small fixes without leaving the browser.
- Print/PDF stylesheet for cheat sheets.
- `validate` report page in-app (broken links, schema violations) instead of terminal-only.
- Random review button ("teleport me to a random section from a completed course").
