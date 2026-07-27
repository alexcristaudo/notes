# 04 — OneDrive Migration

Goal: get the existing OneDrive collection into `courses/` **once**, cleanly, with provenance
preserved — then treat git as the source of truth.

## Strategy: local sync folder + import script (no API needed)

OneDrive's Graph API is overkill for a one-time personal migration. Instead:

1. Make sure the notes are synced (or downloaded) to a local folder on your machine.
2. Run the importer against that folder: `npm run import -- --src ~/OneDrive/Uni --dry-run`.
3. Review the dry-run report, fix mappings, run for real, review the git diff, commit.

This keeps credentials, app registrations, and rate limits entirely out of the picture. If a
re-import is ever needed (new files appear in OneDrive), the same script runs incrementally —
it skips files already imported (tracked by a content hash in the frontmatter `source_hash`).

## What the importer does

```
scripts/import-onedrive.ts
```

1. **Walk** the source folder and classify every file:
   - `.md` → import as-is (frontmatter added/normalised).
   - `.docx` → convert to Markdown via `pandoc` (images extracted to the course `assets/`).
   - `.pdf` → copy as an asset and generate a **stub note** of the right type next to it
     (title from filename, link to the PDF, empty body to fill in later).
   - Images / everything else → copy into `assets/`, listed in the report as "unreferenced"
     until some note links them.
2. **Map folders to courses.** First pass guesses from folder names (course codes are usually in
   them); the dry run emits a `mapping.yml` you can edit:

   ```yaml
   "Calc 2 stuff":        { course: MATH2001, term: 2026-S2 }
   "old stats":           { course: STAT2003, term: 2026-S1 }
   "random":              skip
   ```

3. **Classify note type** from filename/folder heuristics (`tut`, `tutorial`, `week`, `lecture`,
   `midterm`, `final`, `exam`, `summary`) — overridable in `mapping.yml`.
4. **Infer metadata**: week from names like `Week 7` / `w07`, dates from file metadata. Everything
   inferred is marked `status: needs-review` and `source: onedrive` so imported-but-unchecked
   notes are queryable in the app.
5. **Report**: files imported / converted / stubbed / skipped, and a checklist of notes needing
   manual attention.

## Manual pass (budget for it)

Conversion is never perfect. After import, expect a cleanup pass per course:

- Fix `.docx`→md conversion artifacts (tables and equations are the usual victims).
- Rename files into the `01-...` convention where ordering matters.
- Upgrade the best PDFs' stub notes into real worked notes over time — the app's
  `needs-review` filter is the running to-do list for this.

The point of the pipeline is that **nothing is lost and everything is findable immediately**,
even before cleanup: stub notes make PDFs searchable by title and course from day one.

## After migration

- OneDrive becomes an archive; new material is authored in the repo directly.
- Optional: keep the OneDrive folder and re-run the incremental import at term end to catch
  anything saved there out of habit.
