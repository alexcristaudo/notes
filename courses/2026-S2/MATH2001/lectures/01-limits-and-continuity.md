---
title: Limits and Continuity
type: lecture
week: 1
tags: [limits, epsilon-delta, continuity]
status: complete
---
> [!definition]
> **Limit.** $\lim_{x \to a} f(x) = L$ means: for all $\varepsilon > 0$ there exists $\delta > 0$
> such that $0 < |x - a| < \delta$ implies $|f(x) - L| < \varepsilon$.

## The epsilon-delta definition

The definition formalises "as $x$ gets close to $a$, $f(x)$ gets close to $L$". The order of
quantifiers matters: $\varepsilon$ is the challenge, $\delta$ is the response.

> [!example]
> Show $\lim_{x \to 2} (3x - 1) = 5$: given $\varepsilon$, choose $\delta = \varepsilon / 3$.
> Then $|x-2| < \delta \Rightarrow |(3x-1) - 5| = 3|x-2| < \varepsilon$.

> [!flashcard]
> Q: State the epsilon-delta definition of a limit.
> A: For all ε > 0 there exists δ > 0 such that 0 < |x − a| < δ implies |f(x) − L| < ε.

## Continuity

$f$ is continuous at $a$ when $\lim_{x \to a} f(x) = f(a)$ — the limit exists **and** equals the value.

> [!warning]
> Continuity at a point requires all three: $f(a)$ defined, the limit exists, and they agree.
> Exam questions love functions failing exactly one of the three.

See [[Derivatives and the Chain Rule]] for where this leads.
