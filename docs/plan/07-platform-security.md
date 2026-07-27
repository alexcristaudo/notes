# 07 — Platform: Security, Privacy, Reliability, Operations

Students trust us with their academic lifeline during the most stressful weeks of their year.
"Industry-level" here means: nothing exotic, everything done properly.

## Identity & access

- **Auth:** email magic link + Google/Apple OAuth. Sessions as httpOnly secure cookies; short-lived
  tokens for the websocket sync service. 2FA (TOTP) available, not forced.
- **Authorization:** role checks (owner/editor/viewer per space) in the application layer **and**
  Postgres row-level security keyed on space membership underneath — a query missing its scope
  returns nothing rather than someone else's notes.
- Invite links: scoped, expiring, revocable; join-preview shows what will be shared before joining.
- Public share pages are separate read-only rendering paths with no session-scoped data access.

## Data protection & privacy

- **Encryption:** TLS everywhere; encryption at rest (managed Postgres + R2). Cloud-connector
  OAuth tokens encrypted at application level (KMS-held key), minimal read-only scopes, revocable.
- **GDPR-first** (students are global; large EU cohort): self-serve full export (the markdown zip
  from [02-content-model.md](02-content-model.md) — our portability feature *is* our Art. 20
  compliance), self-serve deletion (hard-delete with 14-day grace window, cascades to backups on
  rotation), records of processing, DPAs with all subprocessors, EU hosting option evaluated at
  scale.
- **Privacy pledges, marketed:** notes are never used to train models; AI providers called with
  no-training/no-retention terms; no ads; no selling data; analytics are first-party,
  pseudonymous, and events never contain note content.
- Age: 16+ (university product) — keeps us out of child-data regimes; enforced at signup.
- Academic integrity stance (public FAQ): the AI features study *your own materials* — summaries,
  cards, explanations with citations — not an essay writer. This is a positioning asset, not
  just a policy.

## Application security

- Standard hygiene as CI gates: dependency audit + Renovate, secret scanning, SAST lint rules.
- The usual web suspects handled centrally: CSRF (same-site cookies + token on mutations), XSS
  (ProseMirror schema whitelist; no raw HTML blocks; CSP with nonces), SSRF (importers fetch only
  provider APIs, never arbitrary URLs), upload safety (type sniffing, size caps, served from
  R2 via signed URLs on a separate origin, never inline-executable).
- Imported file conversion (pandoc, OCR) runs in **sandboxed workers** with no network egress —
  document parsers are a classic RCE surface.
- Rate limiting per user + per IP on auth, imports, AI, and sharing endpoints.
- Pre-launch: external penetration test; security.txt + a responsible-disclosure policy
  (bug bounty later).

## Reliability

- **Backups:** continuous Postgres PITR + daily snapshots, 30-day window; R2 versioning.
  Quarterly restore drills (a backup untested is a backup unproven).
- **Sync durability:** Yjs update log is append-only ahead of snapshot compaction — a crashed
  compaction can never lose edits. Client-side IndexedDB copies mean even a server data-loss
  event leaves every active client holding its own data.
- **Version history** doubles as user-facing disaster recovery ("restore to yesterday").
- **Degradation order** (enforced in design): editor & reading must survive search, AI, or sync
  outage — banners, not blank screens. Offline mode is the ultimate fallback and is a P0 feature.
- Targets (pre-scale): 99.9% availability for read/write paths; status page from beta onward.
  **Exam weeks are our Black Friday** — change freeze during major exam periods of seeded
  campuses; load-test the review + search paths at 10× baseline before each freeze.

## Observability & operations

- **Errors:** Sentry (web, mobile, workers) wired from first deploy, release-tagged.
- **Product analytics:** PostHog (self-hosted or EU cloud), events carry IDs and counts, never
  content. Funnels instrumented for the metrics in [06-product-market.md](06-product-market.md).
- **Infra metrics & tracing:** OpenTelemetry from the start (cheap now, painful to retrofit);
  dashboards for sync-service rooms/latency, queue depth & job failure rate, DB slow queries,
  AI gateway spend per feature per tier (see 08).
- **Alerting:** page on availability + data-pipeline failures (import/export/backup); ticket on
  everything else. On-call is founder-only initially — alert budget kept deliberately small.
- Runbooks in-repo for: restore-from-backup, sync-service incident, provider outage (Vercel /
  Neon / R2 / LLM), stuck-queue drain, GDPR deletion verification.

## Unit-cost model (watched from day one)

Per-WAU monthly cost budget at MVP scale, order-of-magnitude targets:

| Component | Driver | Budget note |
|-----------|--------|-------------|
| DB + hosting + sync | mostly fixed until ~10k WAU | managed-tier pricing fine; revisit at scale |
| Object storage | PDF-heavy users | R2 zero-egress is why it was chosen; free-tier storage cap protects this line |
| AI | the only real variable cost | metered per user; free-tier allowance sized so free AI cost/user ≪ referral value; details in [08-ai-features.md](08-ai-features.md) |

Rule: **no feature ships without knowing its marginal cost per active user.** The AI gateway's
per-feature metering (08) exists precisely so pricing (06) stays grounded in reality.
