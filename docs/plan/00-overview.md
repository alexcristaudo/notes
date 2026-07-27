# 00 — Vision & Overview

> **Plan v2.** The first draft of this plan described a personal, local-first notes repo.
> This revision upgrades the target: a production-grade, multi-user product that students would
> pay for, while keeping the personal use case as the seed and the design North Star.

## The product in one sentence

**A course-native study workspace**: notes, tutorials, and past tests organised the way a degree
is actually structured — courses, weeks, exams — with search, spaced repetition, AI study tools,
and shared course spaces built in, instead of bolted on around a generic notes app.

## Why "course-native" is the wedge

Every incumbent forces students to rebuild university structure by hand:

- **Notion/Obsidian** are generic containers — powerful, but every student reinvents the same
  course/week/exam scaffolding, and study features (flashcards, scheduling) are plugins or absent.
- **Anki/Quizlet** own flashcards but are disconnected from the notes the cards came from.
- **StudySmarter/RemNote** are closest, but weak on the *materials layer* (tutorial sheets, past
  papers, worked solutions) that dominates real STEM studying.

Our data model *is* the degree: Course → Week → {Lecture, Tutorial, Test, Summary}. Every feature
(coverage grids, "where is X covered?", exam countdowns, past-paper banks, per-course AI tutors)
falls out of that structure for free. That structure is also the growth loop: one student sets up
a course space, classmates join it. See [06 — Product & Market](06-product-market.md).

## Product goals

1. **Capture** — fast structured authoring (rich markdown editor with math, diagrams, callouts),
   plus painless import of what students already have (OneDrive, Google Drive, Notion, PDFs).
2. **Find** — full-text + semantic search across everything; heading-level "where is X covered?";
   auto-generated course overviews.
3. **Study** — study queue, spaced-repetition flashcards extracted from notes, quiz generation,
   past-paper practice mode, exam-readiness signals.
4. **Together** — shared course spaces with classmates: shared materials, personal private notes,
   collaborative worked solutions.
5. **Trust** — students' notes are their academic livelihood: offline access, full export at any
   time (plain markdown + assets), transparent privacy, no lock-in.

## Product principles

- **Structure without ceremony.** Defaults infer course/week/type; a note is never blocked on
  metadata. The app tolerates mess and makes cleanup visible, not mandatory.
- **Study features live inside the notes.** Flashcards are blocks in notes, not a separate silo.
  Everything links back to source material.
- **Portable by construction.** The canonical content format is markdown; export is one click and
  complete. This is both ethics and marketing (the Obsidian-crowd trust signal).
- **AI assists, never fabricates silently.** Generated summaries/cards/quizzes are drafted from
  the student's own material, cited back to sections, and require confirmation before entering
  the study system. See [08 — AI Features](08-ai-features.md).
- **Free tier must be genuinely useful** — a student's entire degree fits; Pro sells power
  (AI volume, collaboration scale, integrations), not hostage access to their own notes.

## Scope evolution (what changed from plan v1)

| Area | v1 (personal) | v2 (product) |
|------|---------------|--------------|
| Storage | Markdown files in a git repo | Postgres + object storage; markdown remains the interchange/export format |
| Users | One | Multi-tenant accounts, shared spaces, permissions |
| App | Local Next.js dev server | Hosted web app (offline-capable PWA), mobile app later |
| Editing | External editor (VS Code) | First-class in-app editor (ProseMirror/TipTap, markdown-native) |
| Import | One-time OneDrive script | Importer platform: OneDrive/Google Drive/Notion/PDF, part of onboarding |
| Sync | git | Realtime sync engine (CRDT), offline-first |
| New concerns | — | Auth, billing, privacy/GDPR, observability, cost model, go-to-market |

The v1 instincts we keep: plain-markdown portability, "the app is a lens", frontmatter-style
metadata as the API, derived state always rebuildable.

## The plan, in reading order

| File | Contents |
|------|----------|
| [01-architecture.md](01-architecture.md) | SaaS architecture: stack, sync engine, services, environments |
| [02-content-model.md](02-content-model.md) | Domain model: spaces, courses, notes, blocks, cards; editor; export format |
| [03-features.md](03-features.md) | Full feature spec with priorities, incl. collaboration & mobile |
| [04-import-platform.md](04-import-platform.md) | Importers (OneDrive, Drive, Notion, PDF) as an onboarding feature |
| [05-roadmap.md](05-roadmap.md) | Phased build: validation → MVP → beta → launch → growth |
| [06-product-market.md](06-product-market.md) | Personas, competitors, positioning, pricing, go-to-market, metrics |
| [07-platform-security.md](07-platform-security.md) | Auth, multi-tenancy, privacy/GDPR, reliability, observability, unit costs |
| [08-ai-features.md](08-ai-features.md) | AI study tools: RAG over notes, card/quiz generation, guardrails, cost control |
