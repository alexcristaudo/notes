---
title: Complete Summary of Results in Chapters 4--7
type: summary
tags: [latex]
status: needs-review
source: latex
assets: [complete_results_ch4-7.tex]
---
> [!warning]
> Compiled from **complete_results_ch4-7.tex** by the built-in LaTeX renderer
> The original .tex is attached above.

# Complete Summary of Results in Chapters 4--7

## Chapter 4: Measurable Functions

- **Theorem 4.7:** $T$ is $(\mathcal{A}, \mathcal{A}')$-measurable $\iff T^{-1}(\mathcal{E}') \subseteq \mathcal{A}$.
- **Proposition 4.8:** $f: \Omega \to \mathbb{R}$ is measurable $\iff$ $\{f \le x\} \in \mathcal{A}$ for all $x$, and several equivalent formulations.
- **Proposition 4.9:** If $f, g$ are measurable, then the sets $\{f < g\}, \{f \le g\}, \{f = g\}, \{f \ne g\}$ are measurable.
- **Theorem 4.10:** If $f_n$ is a sequence of measurable functions, then $\sup f_n$, $\inf f_n$, $\limsup f_n$, and $\liminf f_n$ are measurable.
- **Theorem 4.11:** If $f, g$ are measurable, then so are $f+g$, $f-g$, $fg$, and $f/g$ (where defined).

## Chapter 5: Lebesgue Integral

- **Theorem 5.14:** If $f \ge 0$ is measurable, and $f = \sum_n f_n$ with $f_n \ge 0$, then $\int f = \sum_n \int f_n$.
- **Theorem 5.15:** If $f = g$ $\mu$-a.e. and $f$ is integrable, then $g$ is integrable and $\int f = \int g$.
- **Corollary 5.16:** If $N \in \mathcal{A}$ with $\mu(N) = 0$, then $\int_N f \, d\mu = 0$.
- **Theorem 5.17:** If $f = g$ $\mu$-a.e. and $f$ is integrable, then $\int f = \int g$.

## Chapter 6: Convergence Theorems

- **Theorem 6.1 (Fatou’s Lemma):** $\int \liminf f_n \le \liminf \int f_n$ for $f_n \ge 0$ measurable.
- **Theorem 6.2 (Monotone Convergence):** If $f_n \uparrow f$ and all $f_n \ge 0$, then $\int f_n \to \int f$.
- **Theorem 6.3 (Dominated Convergence):** If $f_n \to f$ a.e., $|f_n| \le g$ and $g$ integrable, then $\int f_n \to \int f$.

## Chapter 7: Product Measures and Fubini's Theorem

- **Theorem 7.7:** If $\mathcal{R}$ is a semiring closed under intersection, then $\sigma(\mathcal{R}) = \delta(\mathcal{R})$.
- **Theorem 7.9:** If $A \in \mathcal{A}_1 \otimes \mathcal{A}_2$, then sections $A(\omega_1, \cdot)$ and $A(\cdot, \omega_2)$ are measurable.
- **Theorem 7.10:** Defines product measure using slices and shows $\mu$ is a measure on the product $\sigma$-algebra.
- **Theorem 7.11:** If $\mu = \nu$ on a generator closed under intersection, and total mass is equal, then $\mu = \nu$ on $\sigma$-algebra.
- **Fubini’s Theorem:** If $f$ is integrable on product space, then iterated integrals equal the product integral.
