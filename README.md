# Notes — The Study Workspace Shaped Like Your Degree

A course-native study workspace for university students: lectures, tutorial sheets, past papers,
and summaries organised the way a degree actually is — courses, weeks, exams — with heading-level
search ("where is X covered?"), spaced-repetition flashcards that live inside your notes, AI study
tools grounded in *your own materials* with citations, and shared course spaces for your cohort.
Full plain-markdown export at any time: no lock-in, ever.

**Status: planning (v2 — industry/product scope).** The full plan lives in [`docs/plan/`](docs/plan/):

| # | File | Contents |
|---|------|----------|
| 00 | [Vision & overview](docs/plan/00-overview.md) | The wedge, product principles, v1→v2 scope evolution |
| 01 | [Architecture](docs/plan/01-architecture.md) | SaaS stack, CRDT sync engine, multi-tenancy, environments |
| 02 | [Content model & editor](docs/plan/02-content-model.md) | Domain model, note types, block editor, portability contract |
| 03 | [Features](docs/plan/03-features.md) | Complete spec: capture, find, study, collaborate, visualise |
| 04 | [Import platform](docs/plan/04-import-platform.md) | OneDrive/Drive/Notion/PDF importers as onboarding |
| 05 | [Roadmap](docs/plan/05-roadmap.md) | Phases 0–6: validation → MVP → cloud → AI → launch → scale |
| 06 | [Product & market](docs/plan/06-product-market.md) | Personas, competitors, pricing, growth loops, metrics |
| 07 | [Platform & security](docs/plan/07-platform-security.md) | Auth, GDPR, reliability, observability, unit costs |
| 08 | [AI features](docs/plan/08-ai-features.md) | RAG over notes, card/quiz generation, guardrails, cost control |

## Positioning in one line

> Notion makes you rebuild your degree by hand; Anki divorces cards from their source;
> we ship the structure and keep everything connected — and your notes export as plain files
> whenever you want.

## Trust pillars

1. **No lock-in** — one-click full export as plain markdown + assets, round-trip tested in CI.
2. **Offline-first** — your notes are readable and editable without us.
3. **Never training data** — AI providers used with no-training/no-retention terms.
4. **Grounded AI** — every AI answer cites the exact sections of your own notes it came from.
