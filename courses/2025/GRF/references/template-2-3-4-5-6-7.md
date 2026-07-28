---
title: Template 2 3 4 5 6 7
type: reference
tags: [latex]
status: needs-review
source: latex
assets: [template-2-3-4-5-6-7.tex]
---
> [!warning]
> Compiled from **template-2-3-4-5-6-7.tex** by the built-in LaTeX renderer — TikZ diagrams are shown as placeholders.
> The original .tex is attached above.

### Question 1: If $G$ is a graph, prove that $\Gamma (G) = \Gamma ( \overline{G})$

Let $\alpha \in \Gamma (G)$ be an automorphism. Then $$
uv \in E(G) \iff \alpha (u) \alpha (v) \in E(G) 
$$
The negation of this is:
$$
uv \notin E(G) \iff \alpha (u) \alpha (v) \notin E(G)
$$
But this is the same as:
$$
uv \in E(\overline{G}) \iff \alpha (u) \alpha (v) \in E(\overline{G})
$$
That is, $\alpha \in \Gamma (\overline{G})$. Since this is an if and only if, the other direction holds and so $\Gamma(G) = \Gamma (\overline{G})$

### Question 2: Let $G$ be a graph of order $n$ that is neither complete nor empty. If $G \ne C_4$, prove that $|\Gamma(G)| \le (n-1)!$

(Empty graph is $\overline{K_n}$, so an edgeless graph) ~
TODO

### Question 3: Prove that *is similar* is an equivalence relation on the vertex set of a graph

We will use $\sim$ to denote *is similar*. Let $G$ be a graph and $v \in V(G)$. Clearly $\text{Id} \in \Gamma(G)$ so $v \sim \text{Id}(v) = v$ (reflexivity). Suppose $v \sim w$. Then there is an automorphism $\alpha \in \Gamma(G)$ such that $\alpha (v) = w$. But $\Gamma(G)$ is a group, so $\alpha^{-1}(w) = v$ and $\alpha^{-1} \in \Gamma(G)$ so $w \sim v$ (symmetry). Now suppose $u \sim v$ and $v \sim w$, corresponding to automorphisms $\alpha$ and $\beta$. Then, since $\Gamma(G)$ is a group under composition, $\beta \alpha \in \Gamma(G)$ and $(\beta \alpha )(u) = \beta (\alpha (u)) = \beta (v) = w$ so $u \sim w$ (transitivity).

### Question 4: Two edges $ab$ and $xy$ of a graph $G$ are *similar* if there is an automorphism $\alpha$ such that either (i) $a^\alpha = x$ and $b^\alpha = y$, or, (ii) $a^\alpha = y$ and $b^\alpha = x$. If every edge is similar to every other edge, then the graph is called *edge-transitive*

#### \ \ \ (a) Find a graph that is edge-transitive but not vertex-transitive

$K_{2,3}$

### Question 5: N/A

### Question 6: N/A (group theory)

### Question 7:

#### \ \ \ (a) Find a graph that is vertex-transitive but not edge-transitive

Two copies of the complete graph $K_n$ for $n\ge 3$, that are linked by $n$ edges (one edge between $v_i$ and $v'_i$ for each $i$) is vertex-transitive but not edge-transitive.

### Question 8: Let $G = P_3 \times P_2$ and let $\Gamma$ be the automorphism group of $G$

#### \ \ (a) Use cycle notation to list the automorphisms in $\Gamma$ as permutations of $V(G)$.

First notice our graph looks like:

*[TikZ diagram — open the .tex source to view]*

Noticing the symmetries of our graph, we have automorphisms $$
(a), \quad (ad)(be)(cf), \quad (ac)(df), \quad (af)(dc)(be)
$$

#### \ \ (b) Determine the orbits

$$\begin{align*}
a^{\Gamma} &= \{a, d, c, f\} \\ 
b^{\Gamma} &= \{b, e\} \\ 
c^{\Gamma} &= \{a, d, c, f\} \\ 
d^{\Gamma} &= \{a, d, c, f\} \\ 
e^{\Gamma} &= \{b, e\} \\ 
f^{\Gamma} &= \{a, d, c, f\} 
\end{align*}$$

#### \ \ (c) For each vertex $v$ of $G$, find $\Gamma_v$.

Recall $\Gamma _v = \{\alpha \in \Gamma: v^\alpha = v\}$. So

$$\begin{align*}
{\Gamma}_a &= \{(a)\} \\ 
{\Gamma}_b &= \{(a), (ac)(df)\} \\ 
{\Gamma}_c &= \{(a)\} \\ 
{\Gamma}_d &= \{(a)\} \\ 
{\Gamma}_e &= \{(a), (ac)(df)\} \\ 
{\Gamma}_f &= \{(a)\} 
\end{align*}$$

#### \ \ (d) For each automorphism $\alpha \in \Gamma$, determine $\mathrm{fix}(\alpha)$. Hence use the Cauchy-Frobenius-Burnside Theorem to determine the number of orbits.

We have that

$$\begin{align*}
\text{fix}((a)) & = \{a, b, c, d, e, f\}\\
\text{fix}((ad)(be)(cf)) & = \emptyset \\
\text{fix}((ac)(df)) & = \{e, b\}\\
\text{fix}((af)(dc)(be)) & = \emptyset
\end{align*}$$

Thus by the Cauchy-Frobenius-Burnside Theorem, the number of orbits is: $$
\frac{1}{|\Gamma|} \sum \limits _{\alpha \in \Gamma} |\text{fix}(\alpha)| = \frac{1}{4} (8) = 2
$$

#### \ \ (e) Use the Cauchy-Frobenius-Burnside Theorem to determine the number of distinct 2-colourings of $G$.

We determine the number of orbits of the automorphism group acting on the set of all 2-colourings. There are a total of $2^6 = 64$ 2-colourings. Now

$$\begin{align*}
|\text{fix}((a))| & = 64 \\
|\text{fix}((ad)(be)(cf))| & = 2 \times 2 \times 2 = 8 \\
|\text{fix}((ac)(df))| & = 2 \times 2 \times (2 \times 2) = 16\\
|\text{fix}((af)(dc)(be))| & = 8
\end{align*}$$

So the number of orbits (and thus distinct 2-colourings) is $$
\frac{1}{4} (96) = 24
$$

### Question 9: The tree $T$ in Example 7.1.5 is the smallest nontrivial tree with a trivial automorphism group. Is $T$ the smallest nontrivial graph with a trivial automorphism group?

No it is not.

*[TikZ diagram — open the .tex source to view]*

### Question 10: Use the Cauchy-Frobenius-Burnside Theorem to determine the number of distinct
3-colourings of $C_8$.

*[TikZ diagram — open the .tex source to view]*
~
The automorphism group is the dihedral group, of order 16 (1 identity + 7 rotations + 8 reflections). There are $3^8$ 3-colourings. Each rotation fixes:

$$\begin{align*}
  1 &= 3 \text{ colourings } \\ 
  2 &= 3^2 = 9 \text{ colourings } \\ 
  3 &= 3 \text{ colourings } \\ 
  4 &= 3^4 = 81 \text{ colourings } \\ 
  5 &= 3 \text{ colourings } \\ 
  6 &= 3^2 = 9 \text{ colourings } \\ 
  7 &= 3 \text{ colourings } \\ 
\end{align*}$$

4 reflections fix $3^5$ colourings (reflections through vertices) and 4 reflections fix $3^4$ colourings (reflections through midpoints). So, by the Cauchy-Frobenius-Burnside theorem, there are: $$
\frac{1}{16} (3^8 + (3 + 9 + 3 + 81 + 3 + 9 + 3) + (4 \times 3^5 + 4 \times 3^4)) = 498
$$

### Question 11: Use the Cauchy-Frobenius-Burnside Theorem to determine the number of graphs of order 5.
