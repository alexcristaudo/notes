# Notes — University Notes Manager

A personal knowledge base for university: every course's lectures, tutorials, tests, and
summaries stored as plain Markdown in this repo, with a local web app on top for searching,
visualising, and actively studying them.

**Status: planning.** The full plan lives in [`docs/plan/`](docs/plan/):

1. [Overview & goals](docs/plan/00-overview.md)
2. [Architecture & stack](docs/plan/01-architecture.md)
3. [Content model](docs/plan/02-content-model.md) — folder layout, frontmatter, note types
4. [Features](docs/plan/03-features.md) — dashboard, search, section finder, study queue, flashcards, graphs
5. [OneDrive migration](docs/plan/04-onedrive-migration.md)
6. [Roadmap](docs/plan/05-roadmap.md) — build phases and acceptance criteria

## The pitch in one paragraph

Notes live in `courses/<term>/<code>/` as Markdown with YAML frontmatter; the app (Next.js, run
locally) renders them with math/diagrams/callouts, indexes every heading so "where is X covered?"
is a 5-second search, generates per-course overviews and coverage visuals, extracts flashcards
straight out of the notes for spaced repetition, and maintains a Study Queue of notes and
sections to work through in free time. Existing OneDrive material is migrated in once by a
script; after that, git is the source of truth.
