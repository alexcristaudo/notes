# 05 — Roadmap

Sequenced so that (a) every phase ends in something shippable and used, (b) the riskiest
assumptions get tested cheapest-first, and (c) the founder is the first real user throughout
(dogfooding a real semester is a standing requirement, not a phase).

```
P0 Validate ─► P1 Single-user MVP ─► P2 Cloud & accounts ─► P3 Study loop + AI v1
                                                                  │
              P6 Scale & mobile ◄─ P5 Launch & monetize ◄─ P4 Collaboration + import
```

## Phase 0 — Validation & foundations (runs in parallel with Phase 1)

- Customer interviews (20–30 STEM undergrads), landing page + waitlist, positioning test —
  per [06-product-market.md](06-product-market.md).
- Engineering foundations: repo, CI (typecheck/lint/test/preview deploys), design tokens +
  component library seed (shadcn/ui), analytics & error tracking wired (07).
- **Gate to Phase 2:** interview signal confirms the course-native wedge; waitlist converts.

## Phase 1 — Single-user MVP (the product core, no cloud accounts yet)

Local-account, single-user, browser-persisted (IndexedDB) build of the core loop — proves the
product before paying for the platform:

- Course/note creation with templates; the full editor (math, callouts, collapsed answers,
  flashcard blocks, wiki-links, PDF embeds).
- Dashboard, course page with coverage grid + auto-outline, note reader with section sidebar.
- ⌘K search + heading-level section finder (FTS, client-side).
- Study queue + FSRS flashcard reviews (extracted from notes), review log local.
- File-upload import (markdown/docx/PDF → stub notes) — exercised on the founder's OneDrive
  corpus, exported from OneDrive as files.
- One-click markdown export (the portability contract, from day one).

**Done when:** the founder runs real courses in it daily and prefers it to the old stack;
5–10 alpha users from interviews do a week of real studying in it.

## Phase 2 — Cloud platform & accounts

- Auth (magic link + Google/Apple), personal spaces, Postgres + RLS, R2 assets.
- Sync engine: Yjs sync service, IndexedDB offline, migration of Phase-1 local data into
  accounts. Version history.
- Server-side search indexing; background job infrastructure (imports move server-side).
- PWA installability; GDPR export/delete self-serve (07).

**Done when:** same account works across two devices, offline edits reconcile correctly,
restore-from-history works, and a Phase-1 alpha user migrates with zero loss.

## Phase 3 — Study loop deepening + AI v1

- Retrieval infra: section embeddings, hybrid search (08).
- **AI-1 semantic section finder**, **AI-2 flashcard drafting**, **AI-3 digests**,
  **AI-9 explain-this-section**, and **AI-10 visual generation** (savable diagram blocks),
  behind the metered gateway with per-tier allowances.
- Past-paper bank + practice mode + mistake log; exam-readiness signals; notifications
  (review reminders, exam nudges).
- Visual layer v1: activity heatmap, retention curve, countdown/readiness rings.

**Done when:** the "study session" journey (open app → suggested focus → review due cards →
practice paper) works end-to-end; AI eval suite green; unit costs within budget (07/08).

## Phase 4 — Collaboration & import platform

- Shared course spaces: invites, roles, live co-editing (CRDT already in place), private
  per-user overlays (queue/reviews/annotations).
- Public read-only sharing pages (the second growth loop).
- Cloud importers: OneDrive (Graph), Google Drive, Notion export, Obsidian vault — the full
  mapping-UI flow of [04-import-platform.md](04-import-platform.md).
- **Tidy** (A5 / AI-8): the reorganization engine over existing content — shares the mapping UI
  and plan→approve→execute machinery built for importers, so it lands here at low extra cost.
- Ask-your-notes chat (AI-4) — shipped here because shared-space scoping and permissions must
  exist first.

**Done when:** a real cohort (one seeded course at one campus) runs a shared space for a month;
invite loop metrics flowing; import-to-first-value under 10 minutes.

## Phase 5 — Launch & monetization

- Stripe billing, student verification, free/Pro limits enforcement, usage meters in-app.
- Marketing site, docs, status page; pen test + security review pass (07); load test at 10×.
- Closed beta → open launch **timed to semester start**; campus ambassador program at 2–3
  target universities; Product Hunt/HN moment on the portability + course-native angle.

**Done when:** paying users exist, activation/retention dashboards match targets (06) or the
gaps have named owners and experiments.

## Phase 6 — Scale & platform breadth (metric-gated, not calendar-gated)

- Expo mobile app (review-first) — gated on web retention proving the loop.
- Quiz generation (AI-5), import intelligence (AI-6), study suggestions (AI-7).
- Community template gallery, campus course directory; calendar/LMS integrations.
- Infra scale-ups only as dashboards demand: Meilisearch, dedicated vector store, EU region.

## Standing rules

- **Dogfooding is continuous:** the founder's real semester runs on the newest build, always.
- **Portability contract is CI:** export→import round-trip must stay lossless in every phase.
- **No phase ships without its metrics wired** — a feature we can't measure didn't happen.
- **Academic calendar overrides the roadmap:** launches at semester start, freezes during
  exam weeks of seeded campuses.

## Top risks

| Risk | Mitigation |
|------|------------|
| Sync/CRDT complexity sinks Phase 2 | Yjs is proven; sync service isolated; Phase 1 ships value with zero sync. |
| AI costs outrun student pricing | Metering + allowances from day one (08); AI-1 (retrieval-only) delivers magic at near-zero cost. |
| Cohort loop doesn't fire | Explicit Phase-4 campus experiment with defined kill/pivot signal (06). |
| Solo-founder scope | Phases are individually shippable; P2 features cut ruthlessly; buy-over-build for auth/billing/infra. |
| Incumbent (Notion/RemNote) ships course features | Speed + focus + trust pillars (export, integrity stance) are the moat available to us; density-first GTM makes campuses defensible. |
