# 00 — Project Overview

## What this is

**Notes** is a personal university knowledge base: a git repository that stores every course's
notes, tutorials, and past tests as structured Markdown, plus a local web app that turns that
content into something far more useful than a folder tree — searchable, visual, and study-oriented.

The source of truth is **this repository**. Existing material currently living in OneDrive gets
migrated in once (see [04 — OneDrive Migration](04-onedrive-migration.md)); after that, git is the
canonical store and OneDrive becomes optional backup.

## Goals

1. **One home for everything** — lecture notes, tutorial/worked-example sheets, past tests and
   solutions, cheat sheets, and reference material, organised per course and per semester.
2. **Fast recall** — full-text search, a "where is X covered?" section index, and per-course
   overviews so finding a specific topic takes seconds, not scrolling.
3. **Active studying, not just storage** — a Study Queue for free-time review, spaced-repetition
   flashcards derived from notes, and progress tracking per course/topic.
4. **Easy authoring** — create a new course or note from the app (or a CLI script) with the right
   template and metadata pre-filled; no hand-copying folder structures.
5. **Cool but useful visuals** — knowledge graph of linked notes, per-course coverage heatmaps,
   study-activity calendar, progress rings. Graphics that answer questions ("what haven't I
   reviewed?"), not decoration.
6. **Durable and portable** — everything is plain Markdown + YAML + JSON in git. The app can
   disappear tomorrow and the notes remain fully readable.

## Non-goals (for now)

- Multi-user collaboration or auth — this is a single-user personal tool.
- Real-time OneDrive two-way sync — migration is one-way with an optional re-import script.
- Hosting notes publicly — the app runs locally; a read-only static export is a stretch goal.
- WYSIWYG editing — Markdown in your editor of choice (plus a lightweight in-app editor later).

## The plan, in reading order

| File | Contents |
|------|----------|
| [01-architecture.md](01-architecture.md) | Tech stack, how the app reads/writes the repo, deployment modes |
| [02-content-model.md](02-content-model.md) | Folder layout, frontmatter schema, note types, linking conventions |
| [03-features.md](03-features.md) | Every feature specced: dashboard, search, overviews, study queue, flashcards, graphics |
| [04-onedrive-migration.md](04-onedrive-migration.md) | Getting the existing OneDrive collection into the repo |
| [05-roadmap.md](05-roadmap.md) | Build order in phases, with acceptance criteria per phase |

## Guiding principles

- **Plain text first.** Any feature that requires a database the notes can't live without is wrong.
  Derived state (search index, graph edges, review schedules) is always rebuildable from the files.
- **Frontmatter is the API.** Courses, tags, week numbers, note types — all metadata lives in YAML
  frontmatter so both humans and the app can read it.
- **The app is a lens, not a cage.** Editing files directly in VS Code must never break the app;
  the app tolerates missing metadata and fills gaps with sensible defaults.
