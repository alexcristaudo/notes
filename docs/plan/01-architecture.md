# 01 — Architecture & Tech Stack

## Shape of the system

```
┌────────────────────────────────────────────────────────┐
│  Repository (source of truth, all plain text)          │
│                                                        │
│  courses/**/*.md      notes, tutorials, tests          │
│  courses/**/course.yml  course metadata                │
│  data/*.json          study queue, review log, prefs   │
│  assets/**            images, PDFs, diagrams           │
└──────────────┬─────────────────────────────────────────┘
               │ read (build index)   ▲ write (API routes)
               ▼                      │
┌────────────────────────────────────────────────────────┐
│  Web app (Next.js, runs locally via `npm run dev`)     │
│                                                        │
│  Content layer   — parse frontmatter + markdown,       │
│                    build search index & graph edges    │
│  Pages           — dashboard, course, note, search,    │
│                    study queue, flashcards, graph      │
│  API routes      — create course/note, update queue,   │
│                    record reviews (writes files+JSON)  │
└────────────────────────────────────────────────────────┘
```

## Stack (recommended)

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js (App Router, TypeScript)** | One codebase for reading pages *and* API routes that write files back to the repo; huge ecosystem; static-export escape hatch. |
| Markdown pipeline | `unified` / `remark` / `rehype` + `gray-matter` | Standard, extensible: math, code highlighting, callouts, wiki-links all exist as plugins. |
| Math | `remark-math` + `rehype-katex` (KaTeX) | University notes are full of LaTeX; KaTeX is fast and offline. |
| Code highlighting | `shiki` | Best-quality highlighting, works at build time. |
| Diagrams in notes | `mermaid` (client-rendered fenced blocks) | Flowcharts/sequence diagrams typed as text, versioned in git. |
| Search | `minisearch` (client-side index built from content) | No server, no external service; fuzzy + prefix search over titles, headings, tags, body. |
| Graph view | `d3-force` (or `react-force-graph`) | Interactive knowledge graph of note links. |
| Charts | `recharts` | Progress rings, heatmaps, activity charts. |
| State that must persist | JSON files under `data/` written via API routes | Stays in git, diffable, no database. |
| Styling | Tailwind CSS + a dark/light theme | Fast iteration, consistent look. |

**Alternative considered:** Astro (excellent for content sites) — rejected because the interactive
features (study queue mutations, flashcard reviews, in-app creation) want first-class API routes
and client state, which is more natural in Next.js.

## Two run modes

1. **Full mode — `npm run dev` (or `npm start`) locally.** Everything works: creating courses and
   notes, editing the study queue, recording flashcard reviews. API routes write directly to the
   working tree; you review the diff and commit like any other change.
2. **Read-only static export (stretch goal).** `next build` with static export produces a browsable
   site (GitHub Pages) — search, overviews, and graphs work; mutations are hidden. Useful for
   reading notes from a phone.

## How writes work (no database, ever)

- **Create course** → API route scaffolds `courses/<term>/<code>/` with `course.yml` and starter
  folders from a template.
- **Create note** → API route writes `<type>/<slug>.md` with frontmatter pre-filled (course, type,
  week, date, tags).
- **Study queue add/remove/reorder** → rewrites `data/study-queue.json`.
- **Flashcard review** → appends to `data/review-log.jsonl` (append-only log; the SM-2 scheduler
  state is derived from it, so history is never lost and the file merges trivially).

All derived artifacts — the search index, graph edges, "section finder" heading index — are built
at startup (and rebuilt on file change in dev via a watcher). Nothing derived is committed.

## Repository layout (app + content side by side)

```
notes/
├── app/                  # Next.js app (pages, components, api routes)
├── lib/                  # content parsing, indexing, scheduling logic
├── scripts/              # CLI: new-course, new-note, import-onedrive, validate
├── courses/              # THE NOTES (see 02-content-model.md)
├── data/                 # study-queue.json, review-log.jsonl, settings.json
├── assets/               # shared images/PDFs (course-specific assets live in the course)
├── docs/plan/            # this plan
└── package.json
```

Keeping app and content in one repo is deliberate: one clone, one history, and content-aware
tooling (validation scripts, CI checks for broken links) lives next to what it checks.

## Validation & CI

- `scripts/validate.ts` — checks every note's frontmatter against the schema, finds broken
  wiki-links and missing assets. Run manually and in CI on push.
- GitHub Actions: typecheck + validate on every push. (No deployment pipeline needed for a
  local-first app; add Pages deploy only if the static export lands.)
