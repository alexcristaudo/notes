# Notes — University Study Workspace

My university notes, organised by course, living in this repo as plain markdown — with a web app
on top (hosted on **GitHub Pages**) that turns them into a study workspace: heading-level search,
coverage grids, collapsed-answer tutorials, and spaced-repetition flashcards extracted straight
from the notes.

**App:** https://alexcristaudo.github.io/notes/ *(deploys automatically from `main`)*

## How it works

```
courses/<term>/<CODE>/          ← the notes live HERE, in git
├── course.yml                  ← course metadata (name, color, weeks, exam date)
├── lectures/01-….md            ← markdown notes with YAML frontmatter
├── tutorials/…  tests/…  summaries/…  references/…
└── assets/                     ← PDFs, images
```

- Every push to `main` rebuilds the site; the build bakes `courses/**` into the app.
- The app syncs that content into your browser (IndexedDB) on load — so it also works offline.
- **Study state is personal to the browser**: flashcard history, the study queue, and theme
  live in the browser only, not the repo.
- **The repo always wins for content** — with one exception: a note you edited in the app is
  never overwritten or deleted; the course Health tab flags it as "not committed to GitHub".

## Editing notes

Two ways, both fine:

1. **Edit the markdown directly** (on github.com or locally) and push — the site rebuilds.
2. **Edit in the app**, then click *Export all (markdown zip)* in the sidebar, replace the
   `courses/` folder with the zip's contents, and push. The export format is exactly the repo
   layout, so it's a drop-in replacement.

New material can also be dropped onto the app's **Import** page (markdown, .docx, PDFs) — then
exported and committed the same way.

## Reading PDFs

Notes that have a PDF attached (most of the imported ones) get two buttons in the header:

- **📄 View PDF** — opens the original inline, full height, without leaving the note.
- **⤓ Extract notes** — pulls the PDF's text into the note body so it reads like a normal
  note: rendered markdown, section headings per page, searchable via ⌘K, navigable from the
  outline sidebar. The original PDF stays attached.

Extraction is best-effort — layout, equations, and symbols usually need a cleanup pass, so
edit the result and then **Export all** → replace `courses/` → push to keep it. Until you do,
the course Health tab lists the note as "not committed to GitHub".

## LaTeX notes

`.tex` files are compiled into readable notes by a built-in LaTeX renderer: `\section`s
become headings, theorem-like environments and the template's macros (`\dfn`, `\thm`, `\ex`,
`\nt`, …) become callouts, lists and tables convert to markdown, and math renders with KaTeX
using the shorthands from `templates/latex` (`\bbR`, `\eps`, `\mcX`, …).

On a note with a `.tex` attached:

- **∑ LaTeX source** — read the original source.
- **⚙ Recompile** — re-run the compiler (after editing the .tex, or to pick up improvements).

To regenerate notes for new `.tex` files: `npx tsx scripts/link-tex-notes.ts`.
After editing `templates/latex/*.tex`, refresh the math macros with
`npx tsx scripts/gen-katex-macros.ts`.

It is not a TeX engine: there is no page layout or cross-reference numbering, TikZ diagrams
show as placeholders, and a small fraction of deeply-nested formulas fall back to showing
their source in red. The original `.tex` is always attached.

## Note format

YAML frontmatter (`title`, `type`, `week`, `tags`, `status`, `difficulty`) + markdown with:

- `$math$` and `$$display math$$` (KaTeX) · fenced ```mermaid diagrams · code highlighting
- Callouts: `> [!definition]`, `> [!theorem]`, `> [!example]`, `> [!warning]`
- `> [!answer]` — collapsed by default, for self-quizzing on tutorial sheets
- `> [!flashcard]` with `Q:` / `A:` lines — automatically becomes a spaced-repetition card
- `[[Wiki-links]]` between notes (resolve by title; backlinks shown on each note)

## Development

```bash
npm install
npm run dev        # app at localhost:3000, content rebuilt from courses/
npm test           # round-trip + pipeline tests
npm run build      # static export to out/
```

The product plan (a bigger multi-user vision this repo may grow into) is in
[`docs/plan/`](docs/plan/); implementation decisions are logged in
[`docs/build-log.md`](docs/build-log.md).
