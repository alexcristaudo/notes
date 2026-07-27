import type Dexie from "dexie";
import type { Course, Note } from "./types";

const now = Date.now();

const course: Course = {
  id: "seed-math2001",
  code: "MATH2001",
  name: "Calculus & Linear Algebra II",
  term: "2026-S2",
  color: "#7c3aed",
  icon: "∫",
  status: "active",
  weeks: 13,
  examDate: "2026-11-14",
  createdAt: now,
};

function note(partial: Partial<Note> & Pick<Note, "id" | "type" | "title" | "body">): Note {
  return {
    courseId: course.id,
    tags: [],
    status: "complete",
    createdAt: now,
    updatedAt: now,
    ...partial,
  } as Note;
}

const notes: Note[] = [
  note({
    id: "seed-lec-01",
    type: "lecture",
    title: "Limits and Continuity",
    week: 1,
    tags: ["limits", "epsilon-delta", "continuity"],
    body: `> [!definition]
> **Limit.** $\\lim_{x \\to a} f(x) = L$ means: for all $\\varepsilon > 0$ there exists $\\delta > 0$
> such that $0 < |x - a| < \\delta$ implies $|f(x) - L| < \\varepsilon$.

## The epsilon-delta definition

The definition formalises "as $x$ gets close to $a$, $f(x)$ gets close to $L$". The order of
quantifiers matters: $\\varepsilon$ is the challenge, $\\delta$ is the response.

> [!example]
> Show $\\lim_{x \\to 2} (3x - 1) = 5$: given $\\varepsilon$, choose $\\delta = \\varepsilon / 3$.
> Then $|x-2| < \\delta \\Rightarrow |(3x-1) - 5| = 3|x-2| < \\varepsilon$.

> [!flashcard]
> Q: State the epsilon-delta definition of a limit.
> A: For all ε > 0 there exists δ > 0 such that 0 < |x − a| < δ implies |f(x) − L| < ε.

## Continuity

$f$ is continuous at $a$ when $\\lim_{x \\to a} f(x) = f(a)$ — the limit exists **and** equals the value.

> [!warning]
> Continuity at a point requires all three: $f(a)$ defined, the limit exists, and they agree.
> Exam questions love functions failing exactly one of the three.

See [[Derivatives and the Chain Rule]] for where this leads.
`,
  }),
  note({
    id: "seed-lec-02",
    type: "lecture",
    title: "Derivatives and the Chain Rule",
    week: 2,
    tags: ["derivatives", "chain-rule"],
    body: `## The derivative as a limit

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

Built directly on [[Limits and Continuity]] — differentiability implies continuity, never the reverse.

## Chain rule

> [!theorem]
> If $g$ is differentiable at $x$ and $f$ at $g(x)$, then
> $(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)$.

Mechanically: differentiate the outside, keep the inside, multiply by the inside's derivative.

> [!flashcard]
> Q: Chain rule for (f ∘ g)′(x)?
> A: f′(g(x)) · g′(x) — outside derivative at the inside, times inside derivative.

\`\`\`mermaid
flowchart LR
  x --> g["g(x)"] --> f["f(g(x))"]
  g -. "g'(x)" .-> chain["multiply"]
  f -. "f'(g(x))" .-> chain
\`\`\`

## Common derivatives

| $f(x)$ | $f'(x)$ |
|--------|---------|
| $x^n$ | $n x^{n-1}$ |
| $e^x$ | $e^x$ |
| $\\ln x$ | $1/x$ |
| $\\sin x$ | $\\cos x$ |
`,
  }),
  note({
    id: "seed-tut-01",
    type: "tutorial",
    title: "Tutorial 1 — Limit computations",
    week: 1,
    tags: ["limits"],
    body: `Worked solutions for tutorial sheet 1. Answers are collapsed — try each question first.

## Q1

Evaluate $\\lim_{x \\to 0} \\frac{\\sin x}{x}$.

> [!answer]
> The limit is $1$. Standard squeeze-theorem argument using
> $\\cos x \\le \\frac{\\sin x}{x} \\le 1$ near $0$.

## Q2

Where is $f(x) = \\frac{x^2 - 1}{x - 1}$ continuous?

> [!answer]
> Everywhere except $x = 1$, where it is undefined — but the discontinuity is removable since
> $f(x) = x + 1$ for $x \\ne 1$. See [[Limits and Continuity#continuity]].
`,
  }),
  note({
    id: "seed-sum-01",
    type: "summary",
    title: "Exam cheat sheet — Weeks 1–2",
    tags: ["exam", "summary"],
    body: `> [!definition]
> One-page recall sheet for the week 1–2 material. Everything here should be answerable cold.

## Limits

- Epsilon-delta: challenge/response, see [[Limits and Continuity]].
- Squeeze theorem for the classic $\\frac{\\sin x}{x} \\to 1$.

## Derivatives

- Definition as a difference-quotient limit.
- Chain rule: outside′ at inside · inside′.

> [!flashcard]
> Q: Does differentiability imply continuity, or the reverse?
> A: Differentiability ⇒ continuity. The converse is false (e.g. |x| at 0).
`,
  }),
];

/** Populate the very first database open with a sample course. */
export async function seed(db: Dexie): Promise<void> {
  await db.table("courses").add(course);
  await db.table("notes").bulkAdd(notes);
  // Cards + links derive from note bodies; sync lazily to keep db.ts light.
  const { syncDerivedForNote } = await import("./study");
  for (const n of notes) await syncDerivedForNote(n);
}
