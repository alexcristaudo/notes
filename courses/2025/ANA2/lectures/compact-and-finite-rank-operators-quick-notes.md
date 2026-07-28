---
title: Compact and Finite-Rank Operators (Quick Notes)
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [operators.tex]
---
> [!warning]
> Compiled from **operators.tex** by the built-in LaTeX renderer — Unhandled commands left as-is: \leavevmode
> The original .tex is attached above.

# Compact and Finite-Rank Operators (Quick Notes)

## Setting

Let $X,Y$ be normed (often Banach) spaces over $\RR$ or $\CC$, and let $\mathcal{B}(X,Y)$ denote the space of bounded linear operators $T:X\to Y$ with the operator norm
$$
\|T\|=\sup_{\|x\|\le 1}\|Tx\|.
$$

## Finite-Rank Operators

> [!definition]
> **Definition: Finite rank**
>
> A bounded linear operator $T:X\to Y$ has *finite rank* if its range $T(X)$ is a finite-dimensional subspace of $Y$. The *rank* of $T$ is $\dim T(X)$.

> [!example]
> **Example**
>
> \leavevmode
>
> - **Rank one.** If $f\in X'$ and $y_0\in Y$, the map $T(x)=f(x)\,y_0$ has range $\mathrm{span}\{y_0\}$, hence rank $1$.
> - **Finite sum of rank ones.** If $T(x)=\sum_{k=1}^n f_k(x)\,y_k$ with $f_k\in X'$ and $y_k\in Y$, then $T(X)\subseteq \mathrm{span}\{y_1,\dots,y_n\}$, so $T$ has finite rank.
> - **Coordinate truncation on $\ell^2$.** $T(x_1,x_2,\dots)=(x_1,\dots,x_n,0,0,\dots)$ has rank $n$.

## Compact Operators

> [!definition]
> **Definition: Compact operator**
>
> A bounded linear operator $T:X\to Y$ is *compact* if it maps bounded sets into relatively compact sets. Equivalently: for every bounded sequence $(x_m)\subset X$ there is a subsequence $(x_{m_j})$ such that $(Tx_{m_j})$ converges in $Y$.

> [!example]
> **Example**
>
> \leavevmode
>
> - **Finite rank $\Rightarrow$ compact.** In finite-dimensional spaces, bounded sets are relatively compact (Heine--Borel). Thus every finite-rank operator is compact.
> - **Diagonal operator on $\ell^2$.** Define $T:\ell^2\to\ell^2$ by   $$
>     T(x_1,x_2,\dots)=\bigl(\tfrac{x_1}{1},\tfrac{x_2}{2},\tfrac{x_3}{3},\dots\bigr).
>   $$   Then $T$ is compact: the singular values $1/n\to 0$, so $T$ is the norm-limit of finite-rank truncations.
> - **Integral operator on $C([0,1])$.** If $K\in C([0,1]^2)$ and   $$
>     (Tf)(x)=\int_0^1 K(x,y)f(y)\,dy,
>   $$   then $T:C([0,1])\to C([0,1])$ is compact (Arzel\`a--Ascoli).

> [!warning]
> **Remark: Non-examples**
>
> \leavevmode
>
> - The identity $I_X$ on an infinite-dimensional Banach space $X$ is *not* compact: the unit ball is bounded but not relatively compact.
> - The inclusion $\iota:\ell^2\hookrightarrow \ell^\infty$ is bounded but *not* compact: $(e_n)$ lies in the $\ell^2$ unit ball and $(\iota e_n)$ has no convergent subsequence in $\ell^\infty$.

## Basic Theorems

> [!theorem]
> **Proposition**
>
> Every finite-rank operator is compact.

> [!example]
> **Proof: Proof sketch**
>
> If $\dim T(X)<\infty$, then $T(B)$ is bounded in a finite-dimensional space, hence relatively compact. Apply the definition.

> [!theorem]
> **Theorem: Closedness and ideal properties**
>
> Let $X,Y,Z$ be Banach spaces. The set $\mathcal{K}(X,Y)$ of compact operators is a closed linear subspace of $\mathcal{B}(X,Y)$. Moreover, if $A\in\mathcal{B}(Y,Z)$ and $B\in\mathcal{B}(X,Y)$, then
> $$
> A\circ T\circ B\in \mathcal{K}(X,Z)\quad\text{whenever }T\in\mathcal{K}(Y).
> $$
> Thus $\mathcal{K}$ is a two-sided operator ideal.

> [!theorem]
> **Proposition: Riesz lemma consequence**
>
> If $X$ is infinite-dimensional and $T\in\mathcal{B}(X)$ is compact and injective, then $T$ cannot have a bounded inverse on $T(X)$; in particular, the identity operator is not compact.

> [!theorem]
> **Theorem: Sequential characterization**
>
> $T:X\to Y$ is compact $\iff$ for every bounded sequence $(x_m)\subset X$ there exists a subsequence $(x_{m_j})$ such that $(Tx_{m_j})$ converges in $Y$.

> [!theorem]
> **Proposition: Weak-to-strong property**
>
> If $X$ is a Banach space and $T\in\mathcal{K}(X,Y)$, then whenever $x_n\rightharpoonup 0$ weakly in $X$ and $(x_n)$ is bounded, we have $\|Tx_n\|\to 0$.

## Relations and Remarks

- Finite-rank $\subset$ compact $\subset$ bounded, with both inclusions proper in infinite dimensions.
- Compact operators generalize ``finite-matrix'' behavior: spectral theory for compact operators on infinite-dimensional Hilbert spaces mimics the finite-dimensional case (e.g.\ nonzero spectrum is discrete with $0$ as the only possible accumulation point).
- In many classical spaces (e.g.\ Hilbert spaces, $C(K)$ with $K$ compact metric), compact operators can be approximated in norm by finite-rank operators; in full generality this relies on approximation properties of the spaces involved.

## Mini Checklist / Examples at a Glance

- Rank-one: $T(x)=f(x)y_0$ (finite-rank $\Rightarrow$ compact).
- Diagonal on $\ell^2$ with entries $s_n\to 0$ is compact; if $s_n\nrightarrow 0$, it is not compact.
- Integral operator with continuous kernel on $C([0,1])$: compact (Arzel\`a--Ascoli).
- Identity on infinite-dimensional space: not compact.
