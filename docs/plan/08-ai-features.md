# 08 — AI Features

AI is the sharpest differentiator *and* the only meaningful marginal cost. The design goal:
AI that studies **the student's own materials, with citations** — never a generic chatbot bolted
onto a notes app, and never an essay mill.

## Principles

1. **Grounded or nothing.** Every AI output is generated from retrieved sections of the user's
   (or their shared space's) content and cites them (`note#heading` chips that deep-link).
   If retrieval finds nothing relevant, the answer says so instead of hallucinating.
2. **Confirm before it counts.** Generated flashcards, quizzes, and summaries are drafts the
   student reviews and accepts; only accepted items enter decks/notes. (Quality control + the
   student actually reads the material — pedagogically load-bearing.)
3. **Cited, capped, and metered.** Per-feature token metering in the AI gateway; per-tier
   allowances; visible usage meter — no surprise degradation, no silent cost blowout.
4. **Integrity by design.** Features explain, summarize, and quiz *from provided materials*.
   No "write my assignment" surface. This is a marketable stance (see 06, 07).

## Retrieval infrastructure (built once, used by everything)

- **Chunking = sections.** The heading index from [02-content-model.md](02-content-model.md)
  already splits notes into addressable sections — chunks with stable IDs, titles, and
  course/week/type metadata. PDF assets chunk by page (post text-extraction/OCR).
- **Embeddings** per section in `pgvector`, refreshed by background jobs on edit (debounced).
  Same index serves semantic search (B2 in features) and RAG.
- **Retrieval:** hybrid — vector + keyword (FTS) + metadata filters (course, week, type), with
  recency/coverage boosts. Scope defaults to one course; user can widen to the whole space.
- **Models via the AI gateway** (provider-agnostic interface from 01): Claude API initially —
  Haiku-class for extraction/classification/card drafting, Sonnet-class for tutoring-quality
  explanation. Prompt caching for shared course context; no-training/no-retention terms
  (pledged in 07).

## The features

### AI-1. Semantic section finder — P1
Upgrade of "where is X covered?": *"the trick where you integrate by parts twice and the
integral reappears"* → the right section, no keyword overlap needed. Pure retrieval (embeddings
only, no generation) — near-zero marginal cost, huge perceived magic. Ships first.

### AI-2. Flashcard drafting — P1
Select a section (or a whole summary note) → drafted Q/A + cloze cards, each citing its source
block. Review UI: accept / edit / reject per card; accepted cards become flashcard blocks *in the
note* (the content model's invariant: cards live where knowledge lives). Quality loop: rejection
rate per prompt version is tracked — it's our eval metric.

### AI-3. Week & exam digests — P1
"Summarize week 7" / "digest this course for the final": structured summary built strictly from
the student's notes, with per-claim citations and a visible "not covered in your notes: X, Y"
gap list — the gap list is often the more valuable half. Saved as a `summary` note draft.

### AI-4. Ask-your-notes (RAG chat) — P1
Per-course tutor chat grounded in retrieval: explain a concept "using my notes", walk through a
tutorial question referencing the relevant lecture section, compare treatments across lectures.
Citations on every answer; "open source section" one click away. Conversation history per course.

### AI-5. Quiz generation & practice — P1/P2
Generate a mixed quiz (MCQ + short answer) from selected weeks; grade short answers with
model-assisted marking *shown as advisory, with the source section for self-verification*.
Wrong answers offer "add to flashcards" (closing the loop into spaced repetition).

### AI-6. Import intelligence — P2
During import ([04-import-platform.md](04-import-platform.md)): classify ambiguous files, propose
week/type mappings, auto-title stub notes from PDF first pages, flag duplicate content. Small
models, batch pricing, invisible-but-delightful.

### AI-7. Study suggestions — P2
The "what should I study today?" engine (features C6) enhanced with retrieval: connects weak
flashcards (low FSRS stability) to their source sections and queues *those sections*, not just
the cards.

## Cost model & metering

- The **AI gateway** records tokens per call tagged {user, feature, model, tier} → live dashboards
  (07) and the usage meter in-app (06).
- **Free tier:** monthly allowance sized so typical free usage costs cents/user — enough to feel
  the magic (a few digests, dozens of cards, a bundle of questions), designed to run out during
  exam prep (the honest upgrade moment).
- **Pro:** high fair-use allowance; hard ceiling with graceful "slow lane" (queue, smaller model)
  instead of hard cutoff.
- Cost levers, in order: model tiering (Haiku-class default, Sonnet-class where quality is felt),
  prompt caching on course context, batch API for non-interactive jobs (embeddings, import
  intelligence), retrieval-narrowing before generation.

## Quality & safety evals

- **Golden corpus:** anonymized/synthetic course materials (math-heavy, PDF-heavy, messy-import)
  with reference outputs; CI-runnable eval suite per feature (citation validity %, card rejection
  rate, digest gap-list accuracy, refusal correctness when retrieval is empty).
- **Citation validity is the core metric:** every cited chunk must exist and support the claim —
  automated spot-checks sample production outputs (content never leaves our infra; checks run
  in-house).
- Prompt versions are code: reviewed, changelogged, eval-gated before rollout, feature-flagged
  for gradual release.
- Red-team pass pre-launch: prompt injection via imported documents (a PDF that says "ignore
  instructions…"), cross-space leakage attempts, integrity-abuse probes ("write my essay") —
  wired into the eval suite as regression tests.
