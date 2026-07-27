# 03 — Features

Priorities: **P0** = MVP (single-user product must ship with these) · **P1** = beta/launch ·
**P2** = post-launch growth. AI-powered features are cross-referenced to
[08-ai-features.md](08-ai-features.md); collaboration features assume the space model from
[02-content-model.md](02-content-model.md).

---

## A. Capture & organise

### A1. Course & note creation — P0
New-course wizard (term, code, name, color, icon, weeks, exam dates) and new-note flow
(course + type + week → template-filled editor). Semester setup flow: create a whole term's
courses in one screen — the first-run "aha" moment.

### A2. Rich editor — P0
Full block inventory from [02-content-model.md](02-content-model.md): math, callouts, collapsed
answers, flashcard blocks, wiki-links, PDF embeds, Mermaid, tables, images. Markdown-native
typing, lossless copy/paste as markdown. Autosave, offline editing, version history with restore.

### A3. Import — P0 (file upload) / P1 (cloud connectors)
Drag-in PDFs/docx/markdown onto a course; cloud importers (OneDrive, Google Drive, Notion) as
onboarding flows. Full spec: [04-import-platform.md](04-import-platform.md).

### A4. Asset & paper management — P0
Every PDF (tutorial sheets, past papers, slides) is a first-class asset: viewable inline,
page-linkable, searchable by title/course; OCR + text extraction for scanned PDFs (P1) makes
them full-text searchable.

### A5. Reorganize & declutter — P1
For the mess that already exists — a chaotic import, a semester of "misc" notes, a course where
everything landed in one folder. The **Tidy** flow analyzes a course (or a whole space) and
proposes a clean structure: files classified by type, week-stamped, consistently renamed,
duplicates flagged, orphan assets attached to the notes that mention them, giant catch-all notes
offered as splits at their heading boundaries. Presented as a two-pane before → after **plan**
that the student edits and approves — nothing moves without confirmation, everything is one-click
undoable, and originals are never deleted (a "misc" archive catches what doesn't classify).
AI-assisted classification spec: [08-ai-features.md](08-ai-features.md) (AI-8); mapping-UI
mechanics shared with the import flow ([04-import-platform.md](04-import-platform.md)).

## B. Find

### B1. Command palette & full-text search — P0
⌘K everywhere: fuzzy search over titles, headings, tags, body, asset names; filters for course /
type / week / status / term. Results show highlighted snippets and deep-link to the matched
**section**, not just the note.

### B2. Section finder ("where is X covered?") — P0
Heading-level index across all courses, grouped by course, ordered by relevance:
*"eigenvalues"* → every lecture/summary/tutorial section that covers it, with week numbers.
Browsable A–Z concept index from headings + tags (P1). Semantic search upgrade via embeddings
(P1, see 08) so *"the trick for integrating by parts twice"* finds the right section without
keyword overlap.

### B3. Course overview — P0
Auto-generated per course: hierarchical outline of every heading across its notes (the syllabus
as actually written), week-by-week coverage grid (weeks × note types, gaps visible at a glance),
status chips, health panel (broken links, missing weeks).

### B4. Backlinks & knowledge graph — P1
Backlinks panel on every note. Force-directed graph (nodes = notes colored by course, edges =
wiki-links), filters, hover previews, orphan-note list, cross-course edges highlighted.

## C. Study

### C1. Study Queue — P0
The "what I'm studying in my free time" list: add whole notes or specific sections from anywhere;
drag-reorder, priority, optional target date; **focus mode** (distraction-free reader, next item,
done/snooze). Per-user even inside shared spaces.

### C2. Spaced repetition — P0 (core loop) / P1 (polish)
Cards extracted from flashcard blocks in notes; review UI is keyboard-first
(front → reveal → Again/Hard/Good/Easy); per-course decks + "all due"; every card links back to
its source section. Scheduler: FSRS (modern, better retention curves than SM-2) derived from the
append-only review log. Daily due counts, streaks, and study reminders (email/push) — P1.

### C3. AI-generated study material — P1
Draft flashcards from a selected section; generate practice quizzes from a course's notes;
summarize a week into an exam-ready digest. All cited to source sections, all confirm-before-save.
Spec & guardrails: [08-ai-features.md](08-ai-features.md).

### C4. Ask-your-notes (RAG chat) — P1
Per-course chat grounded in the student's own materials: *"explain question 3 of tutorial 5 using
my lecture notes"* — answers cite the exact sections used. See 08.

### C4a. Explain this section — P1
The zero-friction version of C4: select any section (or highlight any passage, including inside a
PDF) → **Explain** opens a side panel with a grounded explanation at a chosen depth — *simpler /
step-by-step / with an example / why it matters* — citing the related sections of the student's
own notes it drew on. One click saves the explanation into the note as a callout block (marked
AI-generated, with its citations) so good explanations become part of the notes instead of
vanishing with the chat. Spec: [08-ai-features.md](08-ai-features.md) (AI-9).

### C4b. Generate visuals — P1
Turn a section or concept into a **savable diagram**: concept map of a week, flowchart of an
algorithm, timeline, comparison table, or annotated step diagram of a derivation. Generated as
editable Mermaid/structured blocks (not opaque images), previewed side-by-side with the source
section, and saved into the note — or exported as SVG/PNG for slides and cheat sheets. Because
the output is a text-based block, saved visuals stay editable, versioned, and inside the
portability contract. Spec: [08-ai-features.md](08-ai-features.md) (AI-10).

### C5. Past-paper practice — P1
The past-paper bank across courses; **practice mode** runs a test PDF with a timer, then flips to
your worked solutions; "Mistakes & lessons" sections aggregate into a per-course **mistake log** —
the highest-value pre-exam read.

### C6. Exam readiness — P1
Per-course readiness signals combining coverage (notes exist per week), card retention (FSRS
stability), queue completion, and past-paper attempts — shown as an honest indicator with its
inputs, not a fake single score. Drives the "what should I study today?" suggestion.

## D. Together (the growth engine)

### D1. Shared course spaces — P1
One classmate creates the course space, invites via link; members see shared materials (lectures,
tutorial sheets, past papers, worked solutions) while queues, review state, and personal
annotations stay private. Roles: owner / editor / viewer.

### D2. Collaborative editing — P1
Google-Docs-style live co-editing on shared notes (CRDT sync makes this "free"); presence
indicators; per-block comments & discussion threads (P2) for arguing about a worked solution.

### D3. Sharing out — P1
Publish a note or course pack as a read-only public link (great cheat-sheets get shared; every
public page is an acquisition channel). Duplicate-to-my-space on any public pack.

### D4. Community template & pack gallery — P2
Curated course templates (structures, not copyrighted content) and shared study packs;
campus-course directory so joining "MATH2001 @ your uni" is one search.

## E. Visualise

All charts one visual system, course-color-keyed, light/dark aware.

| Graphic | Where | Question answered | Priority |
|---------|-------|-------------------|----------|
| Week × type coverage grid | course page | What's missing? | P0 |
| Exam countdown + readiness ring | dashboard cards | How long, how ready? | P0 / P1 |
| Study activity heatmap (calendar) | dashboard | Am I consistent? | P1 |
| Retention curve (FSRS stability) | study stats | Is review working? | P1 |
| Notes-per-week timeline | course page | Effort distribution | P1 |
| Knowledge graph | its own view | How does it connect? | P1 |
| Tag/concept cloud → index | section finder | What does this space know? | P2 |

## F. Platform & lifecycle

### F1. Dashboard — P0
Course cards (coverage, countdowns, due cards), study queue preview, resume-where-you-left-off,
today's suggestions. The screen that answers "what's my situation?"

### F2. Offline & PWA — P0
Installable PWA; previously opened content fully readable/editable offline; sync on reconnect
(see architecture). Mobile-web responsive from day one.

### F3. Mobile app (Expo) — P2
Review-first mobile experience: flashcards, study queue, reading, quick capture. Ship only when
web retention proves the loop.

### F4. Notifications & reminders — P1
Daily review reminder (respecting due counts), exam-approaching nudges, weekly digest
("week 9: 3 courses missing notes, 42 cards due"). Email + web push; quiet by default,
granular controls.

### F5. Calendar integration — P2
Subscribe-able ICS feed (exam dates, review sessions); import timetable to auto-create weeks.

### F6. Semester lifecycle — P1
End-of-term flow: mark courses completed, archive spaces (read-only, searchable, excluded from
due counts), carry summaries forward; new-term setup wizard.

### F7. Accounts, billing, settings — P0 (accounts) / P1 (billing)
Magic-link + Google/Apple sign-in; personal space auto-created; Stripe subscriptions with student
verification; full data export (see content model) and account deletion, self-serve.
