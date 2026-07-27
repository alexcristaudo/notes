# 01 — Architecture

Industry-grade but deliberately boring: a well-factored monolith on managed infrastructure,
with the two genuinely hard subsystems (realtime sync, AI pipeline) isolated behind interfaces
so they can evolve without dragging the rest along.

## System diagram

```
        ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
        │  Web (PWA)   │   │ Mobile (Expo)│   │  Public API  │
        │  Next.js     │   │  later phase │   │  (partners)  │
        └──────┬───────┘   └──────┬───────┘   └──────┬───────┘
               │        HTTPS / WebSocket            │
        ┌──────┴──────────────────┴──────────────────┴───────┐
        │                 Application backend                │
        │   Next.js server + tRPC  ·  auth  ·  billing       │
        │   ┌───────────────┐  ┌────────────────────────┐    │
        │   │  Sync service │  │  Job workers (queue)   │    │
        │   │  (Yjs rooms)  │  │  import · AI · index   │    │
        │   └───────────────┘  └────────────────────────┘    │
        └───┬──────────┬───────────┬──────────────┬──────────┘
            │          │           │              │
     ┌──────┴───┐ ┌────┴─────┐ ┌───┴────────┐ ┌───┴─────────┐
     │ Postgres │ │ Object   │ │ Search     │ │ LLM / embed │
     │ +pgvector│ │ storage  │ │ (Postgres  │ │ providers   │
     │ (RLS)    │ │ (S3/R2)  │ │ FTS → Meili│ │ (Claude API)│
     └──────────┘ └──────────┘ └────────────┘ └─────────────┘
```

## Stack decisions

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Web app | **Next.js (App Router) + TypeScript + Tailwind + shadcn/ui** | One team, one framework for marketing site + app; mature ecosystem; PWA for offline. |
| API | **tRPC** inside the Next.js server | End-to-end types with zero API-contract drift at startup speed; a versioned REST layer can be added later for partners. |
| Editor | **TipTap (ProseMirror)** with markdown serialization | Battle-tested collaborative rich editor; markdown in/out preserves the portability principle. Extensions: KaTeX math, Mermaid, callouts, flashcard blocks, wiki-links. |
| Realtime & offline sync | **Yjs CRDTs** — documents sync via a websocket sync service; local persistence in IndexedDB | The only credible way to get Google-Docs-style collab *and* offline-first from one mechanism. Isolated as its own service from day one (stateless rooms, Redis pub/sub) so it scales independently. |
| Database | **Postgres** (managed: Neon/Supabase/RDS) with **row-level security** per space | Relational fits the domain (courses/weeks/notes); RLS gives defense-in-depth multi-tenancy; `pgvector` for embeddings until scale demands a dedicated vector store. |
| ORM / migrations | **Drizzle** | Typed SQL, sane migrations, no runtime magic. |
| Object storage | **S3-compatible (Cloudflare R2)** for PDFs, images, exports | Zero egress fees matter for a PDF-heavy student product. Signed URLs, per-space prefixes. |
| Search | **Postgres FTS first**, swap to **Meilisearch** behind the same interface when relevance/scale demands | Don't run a search cluster before product-market fit. Heading-level index and filters are schema, not engine, decisions. |
| Background jobs | **Queue + workers** (BullMQ on Redis, or Inngest) | Imports, embedding, card generation, exports, webhooks — nothing slow on the request path. |
| Auth | **Better Auth** (or Clerk if buying beats building) — email magic link, Google, Apple | Students live in Google/Apple accounts; magic links kill password support tickets. University SSO (SAML) only when a B2B motion appears. |
| Billing | **Stripe** (subscriptions + student verification hook) | Standard. Regional pricing from day one — students are global. |
| AI | **Claude API** via an internal gateway module (provider-agnostic interface, metering, caching) | See [08-ai-features.md](08-ai-features.md). Gateway centralizes cost control and model swaps. |
| Hosting | **Vercel** (app) + **Fly.io/Railway** (sync service, workers, Redis) | Managed everything until unit economics say otherwise. |
| Email / notifications | Resend (email), web push; mobile push via Expo later | Study reminders are a retention feature, not an afterthought. |

## The sync model (the hard part, made explicit)

- Each note body is a **Yjs document**; the ProseMirror doc is the CRDT. Metadata (title, week,
  tags, status) lives in Postgres rows and syncs via ordinary tRPC mutations + optimistic UI.
- Clients persist Yjs docs + a metadata cache in **IndexedDB**: full offline read/write for
  everything previously opened; queued mutations reconcile on reconnect (CRDT merge for bodies,
  last-write-wins + conflict toast for scalar metadata).
- The sync service is stateless: rooms hydrate from Postgres snapshots + append-only update log;
  compaction job folds updates into snapshots.
- **Snapshots double as version history** ("restore note to yesterday") — a marketable feature
  that falls out of the architecture.
- Derived artifacts (search index, embeddings, graph edges, review schedules) are **always
  rebuildable** from canonical data — the v1 principle, kept.

## Multi-tenancy model

```
User ──< Membership >── Space (personal or shared-course)
                          └── Course ──< Note, Asset, Deck…
```

- Every domain row carries `space_id`; **Postgres RLS enforces isolation** at the database layer,
  application checks enforce roles (owner / editor / viewer) above it.
- A user's personal space is created at signup; shared course spaces are the collaboration and
  growth unit (see features + product docs).

## Environments & delivery

- **CI (GitHub Actions):** typecheck, lint, unit tests, integration tests against ephemeral
  Postgres, Playwright E2E on preview deploys. Trunk-based; every PR gets a preview environment.
- **Envs:** production, staging (prod-shaped, synthetic data), preview-per-PR.
- **Migrations:** forward-only, expand→migrate→contract for zero-downtime.
- Feature flags (simple DB-backed) for gradual rollouts; error tracking and product analytics
  wired from the first deploy (see [07-platform-security.md](07-platform-security.md)).

## What we deliberately do NOT build yet

- Microservices, Kubernetes, multi-region — a monolith on managed infra serves well past 100k
  users if the sync service and workers scale horizontally.
- A dedicated vector DB, search cluster, or data warehouse — interfaces first, infra when metrics
  demand.
- Native (non-Expo) mobile apps and desktop apps — PWA first, Expo when retention data justifies.
