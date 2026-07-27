# 04 — Import Platform

> Supersedes plan-v1's "OneDrive migration script". Import is no longer a one-time personal
> chore — it's an **onboarding feature and acquisition weapon**: "bring your whole degree over
> in ten minutes" is the difference between trying the app and living in it. The founder's own
> OneDrive collection becomes the first real-world test corpus.

## Product shape

Import is a guided flow, per course or bulk:

1. **Pick a source** — file upload (drag a folder), OneDrive, Google Drive, Notion export,
   generic zip/markdown.
2. **Map** — the importer walks the source and proposes a mapping: folders → courses/terms,
   files → note types (lecture/tutorial/test/…), with week/date inference. The student reviews
   the proposal in a two-pane UI (source tree → destination structure), fixes guesses, marks
   folders to skip.
3. **Run** — a background job imports everything; progress UI; nothing blocks the session.
4. **Review** — imported notes land as `needs-review` with a `source` provenance marker; the
   course health panel shows the cleanup backlog. Nothing is lost; everything is searchable
   immediately.

## Connectors

| Source | Mechanism | Priority |
|--------|-----------|----------|
| **File/folder upload** | Browser drag-drop (webkitdirectory) or zip | **P0** — works for everyone, no OAuth |
| **OneDrive** | Microsoft Graph API, OAuth; delta queries for incremental re-import | **P1** — first cloud connector (founder's own corpus; Office-heavy universities) |
| **Google Drive** | Drive API, OAuth; Docs exported as docx → pipeline | P1 |
| **Notion** | Official markdown+csv export upload (no API scraping) | P1 — large migration audience |
| **Obsidian / plain markdown** | Vault upload; wiki-links and callouts map almost 1:1 | P1 — cheap and signals portability values |
| **Anki decks** | `.apkg` import → flashcards linked to a chosen course | P2 |
| **LMS (Canvas/Moodle)** | Course files + due dates via LMS APIs | P2 — high value, high integration cost; revisit with B2B motion |

Cloud connector tokens: minimal read-only scopes, encrypted at rest, revocable in settings,
deleted with the account. Incremental re-sync (delta queries) lets OneDrive/Drive act as an
ongoing inbox, not just a one-shot.

## Conversion pipeline (background workers)

```
source file ──► classify ──► convert ──► normalize ──► create entities
```

- **Classify**: extension + filename/folder heuristics (`tut`, `week 7`, `midterm`, `final`,
  `summary`…) propose note type, week, date; every guess is user-overridable at the mapping step.
- **Convert**:
  - `.md` → parsed directly (frontmatter respected — round-trips our own export).
  - `.docx` → markdown via pandoc in a sandboxed worker; images extracted to assets; equations
    (OMML) → LaTeX where possible, flagged where not.
  - `.pdf` → stored as asset + **stub note** of the right type (title, linked PDF, empty body);
    text layer extracted for search; OCR queued for scanned pages (P1).
  - Images / misc → course assets, listed as "unreferenced" until linked.
- **Normalize**: title casing, week/date stamping, `status: needs-review`, `source` + content
  hash (idempotent re-runs skip unchanged files).
- **Report**: per-import summary (imported / converted / stubbed / skipped / needs attention),
  kept as an import history record.

## Quality bar & honest limits

- Table- and equation-heavy `.docx` conversion will be imperfect → never silently mangle:
  conversion warnings attach to the note, and the original file is always kept as an asset
  beside it. The promise is **"nothing lost, everything findable"**, not "everything pretty".
- Export→import round-trip of our own format must be lossless — this is a standing CI test.

## The Tidy engine (reorganization beyond import)

The mapping step above — analyze a tree, propose a clean destination structure, human approves,
background job executes — is not import-only machinery. The same engine powers **Tidy**
(feature A5 in [03-features.md](03-features.md)): run it against content *already in the app*
whenever a course or space has grown cluttered.

What a Tidy plan can propose:

- **Reclassify** — notes typed wrong or untyped ("this is clearly tutorial 4, not a lecture"),
  with week/date stamping inferred from titles, content, and neighbors.
- **Rename** — consistent titles (`01-limits-and-continuity` style ordering where order matters).
- **Split** — a giant catch-all note offered as per-heading splits into properly typed notes.
- **Merge** — duplicate or fragmentary notes on the same topic flagged with a suggested merge
  (content diff shown; merge is a draft, never automatic).
- **Attach** — orphan assets (unlinked PDFs/images) matched to the notes that reference or
  resemble them.
- **Archive** — anything unclassifiable goes to a visible "misc" archive, never deleted.

Guarantees, identical for import and Tidy:

1. **Plan → approve → execute.** The proposal is a reviewable, editable diff (two-pane
   before → after). Nothing changes until approved; partial approval is fine.
2. **Reversible.** Every executed plan is recorded and one-click undoable; version history
   covers content-level changes (splits/merges).
3. **Loss-proof.** Originals kept (as assets or archived notes); the promise remains
   "nothing lost, everything findable".

Classification heuristics are shared with the import pipeline; the AI-assisted layer that makes
proposals genuinely smart (content-based classification, duplicate detection, split-point
suggestion) is specced as AI-8 in [08-ai-features.md](08-ai-features.md).

## Metrics that matter

- Time from signup → first imported course (target: < 10 minutes).
- % of imported notes opened within 7 days (did the import actually get used?).
- `needs-review` burn-down per course (is cleanup happening, or is import a graveyard?).
