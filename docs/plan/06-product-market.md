# 06 — Product & Market

## Target users (in order)

1. **STEM undergrads** (primary wedge). Heavy load of lectures + tutorial sheets + past papers;
   math rendering and worked solutions are make-or-break; exam-driven study cycles. Underserved:
   generic tools handle their materials badly (equations, PDFs, per-question structure).
2. **Health/med students.** Flashcard-native culture (Anki refugees), enormous volume, group
   study norms. Strong Pro conversion potential.
3. **Study groups / course cohorts.** Not a separate persona but the growth unit: one organiser
   pulls 5–30 classmates into a shared course space.

Later, not now: high-school (different structure, parental/procurement dynamics), B2B to
universities (long sales cycles; only pursue once organic campus density exists).

## Competitive landscape & positioning

| Competitor | Their strength | Our angle against them |
|------------|----------------|------------------------|
| Notion | Flexibility, brand | Students rebuild course structure by hand; no native study loop (SR, papers, readiness). We're structured *for* a degree out of the box. |
| Obsidian | Portability, power users | Steep setup, plugins-as-product, weak collaboration. We keep the portability promise (full markdown export) with zero setup. |
| Anki | SR algorithm, trust | Cards divorced from source material; brutal UX. Our cards live inside notes and link back to context. |
| Quizlet | Reach, simplicity | Shallow: sets, not knowledge. No materials layer at all. |
| RemNote | Notes+SR integration | Closest conceptually; weak on materials (PDF papers, tutorial sheets, worked solutions) and course-cohort collaboration. |
| StudySmarter/Knowunity | Marketing to students, content library | Content-first, tool-second; quality reputation is mixed. We're tool-first: *your* materials, elevated. |
| GoodNotes/Notability | Handwriting | Different modality; we integrate (import annotated PDFs) rather than compete on ink (v1). |

**Positioning statement:** *The study workspace that's shaped like your degree.* Courses, weeks,
tutorial sheets, and past papers are first-class; search answers "where is X covered?"; flashcards
and AI study tools are generated from your own notes and cite them; your whole degree exports as
plain files any time.

**Trust pillars** (marketed explicitly): full export/no lock-in · offline access · your notes are
never training data · AI answers cite your own material.

## Monetization

**Freemium, priced for students, honest free tier** (principle from 00: free must hold an entire
degree; Pro sells power, not hostage access).

| | Free | Pro (~US$4–6/mo, annual ~40% off, regional pricing) |
|---|---|---|
| Courses & notes | Unlimited | Unlimited |
| Storage (PDFs/assets) | Capped (e.g. 1 GB) | Large (e.g. 20 GB) |
| Spaced repetition | Full | Full + advanced stats |
| AI (summaries, card gen, ask-your-notes) | Small monthly allowance | High allowance (fair-use) |
| Shared spaces | Join unlimited; create 1 | Create unlimited |
| Version history | 7 days | Full history |
| Cloud import connectors | 1 | All + incremental sync |
| Public sharing | ✓ (with badge) | ✓ custom |

- AI allowance is the cleanest upgrade trigger (visible value, real marginal cost —
  see [08-ai-features.md](08-ai-features.md) for unit economics).
- **Exam-season monthly spike is a feature**: month-by-month Pro is fine; students who churn in
  the summer and return in October are a success pattern, not a failure.
- Student-verified pricing; lifetime deal only as an early-backer launch tactic (capped).
- No ads, ever — incompatible with the trust pillars.

## Go-to-market

**Growth loops (build into product):**

1. **Cohort loop (primary):** student invites classmates to a shared course space → members see
   value → create spaces for *their other courses* → invite others. Invite-by-link with a
   join-preview page. K-factor of course spaces is *the* growth metric.
2. **Public-page loop:** published cheat-sheets/course packs are indexable, branded, one-click
   duplicable → SEO + word-of-mouth.
3. **Referral:** give-a-month/get-a-month of Pro (cheap: AI allowance is the marginal cost).

**Channels:** studytube/studygram creators (aesthetic dashboards & graphs are made for this);
subreddit/Discord communities per degree; campus ambassadors seeded at 2–3 universities
(density beats breadth — one campus where "everyone uses it for MATH2001" is worth more than
1000 scattered signups); launch moments (Product Hunt, HN for the portability angle) timed to
**semester start**, the natural adoption window.

**Timing rule:** every marketing push aligns to the academic calendar — semester start
(acquisition), mid-term & finals (AI/practice feature pushes, Pro conversion).

## Metrics

| Stage | Metric | Early target |
|-------|--------|--------------|
| Activation | Signup → first course with ≥3 notes or 1 import, within 24h | > 40% |
| Habit | WAU/MAU; median weekly study sessions (reviews or focus-mode) | WAU/MAU > 45% |
| Retention | D30 retention within a semester; **semester-over-semester return** (the real LTV signal) | D30 > 25% |
| Growth | Invites sent per shared space; % signups from invites | invite-share > 30% |
| Revenue | Free→Pro conversion; AI-allowance-hit → upgrade rate | 3–5% conversion |
| Cost | AI + infra cost per WAU vs. ARPU | see 07/08 unit-cost budgets |

## Validation before heavy build (pre-Phase-2 gate, see roadmap)

- 20–30 interviews with STEM undergrads on current stacks (expect: OneNote/Notion + Anki + a
  folder of PDFs + panic).
- Landing page + waitlist testing the positioning line; measure signup rate by channel.
- Founder-as-user: run a full real semester in the MVP (dogfooding corpus = the OneDrive import).
- Kill/pivot signals: cohort loop doesn't fire (nobody invites), or retention collapses outside
  exam season with no seasonal return pattern.
