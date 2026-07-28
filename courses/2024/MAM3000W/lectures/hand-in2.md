---
title: Hand in2
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [hand-in2.tex]
---
> [!warning]
> Compiled from **hand-in2.tex** by the built-in LaTeX renderer
> The original .tex is attached above.

### Question 1

1. True
2. False
3. False
4. True

### Question 2

1. First note that $*$ is clearly well-defined as $\varphi (g) \in G$. We first show that $\varphi _1 * (\varphi_2 * g) = (\varphi_1 \varphi_2) * g$ for all $\varphi_1, \varphi_2 \in \text{Aut}(G)$ and $g \in G$. So suppose $\varphi_1, \varphi_2 \in \text{Aut}(G)$ and $g \in G$. Now $\varphi _1 * (\varphi_2 * g) = \varphi _1 * \varphi _2 (g) = \varphi _1 (\varphi _2 (g)) = (\varphi _1 \circ \varphi _2)(g) = (\varphi _1 \circ \varphi _2) * g = (\varphi _1 \varphi _2) * g$. Now we show that $1_{\text{Aut}(G)} * g = g$ for all $g \in G$. So let $g \in G$. But we know $1_{\text{Aut}(G)} $ is the identity map, $\text{id}_G$ and $\text{id}_G * g = \text{id}_G(g) = g$ as required. So $*$ is a group action
2. $S(1_G) = \{\varphi \in \text{Aut}(G) : \varphi * 1_G = 1_G\}$. Now $\varphi * 1_G = \varphi (1_G)$, but since $\varphi$ is an automorphism and thus a homomorphism, we get $\varphi (1_G) = 1_G$ for all $\varphi \in \text{Aut}(G)$ and so $S(1_G) = \text{Aut}(G)$

### Question 3

By the Orbit-Stabiliser Theorem, $|G*x| = |G : S(x)|$. We know $S(x)$ is a subgroup of $G$, and so by Lagrange's Theorem, $|G:S(x)| = \frac{|G|}{|S(x)|}$ since $G$ is finite. But then we get $|G*x| =  \frac{|G|}{|S(x)|} \iff |G*x| (|S(x)|) = |G| $ and so since $|S(x)| \in \Z$, $|G*x|$ divides $|G|$
