---
title: Template 2 3 4 5 6
type: reference
tags: [latex]
status: needs-review
source: latex
assets: [template-2-3-4-5-6.tex]
---
> [!warning]
> Compiled from **template-2-3-4-5-6.tex** by the built-in LaTeX renderer — TikZ diagrams are shown as placeholders.
> The original .tex is attached above.

### Question 1: Find a cubic graph which does not contain a 1-factor

By Question 2, we need at least 3 bridges. The idea is that our bridges should not be independent, as if they were, our scenario is similar as to if we had 2 bridges.

*[TikZ diagram — open the .tex source to view]*

To prove this does not contain a 1-factor, consider removing vertex $B1$. This results in a disconnected graph with 3 odd components, but we removed 1 vertex. Thus Tutte's Theorem tells us that this graph does not contain a 1-factor.

### Question 2: Prove that every cubic graph with at most two bridges contains a 1-factor.

It is sufficient to show that every cubic graph with at most 2 bridges satisfies Tutte's condition. Let $S \subseteq V(G)$ and let $C$ be an odd component of $G - S$. The sum of degree (in $G$) of vertices in $C$ must be odd, since $C$ is cubic. But by the Handshaking Lemma, only an even part of this sum arises from edges contained in $C$. Thus there is an odd sum joining $C$ to $S$ and thus there is an odd number of edges. Now this means, for each odd component $C$, there can be $1$ edge joining $C$ to $S$ (corresponding to a bridge) or at least $3$ edges. Let $r$ be the number of odd components joining to $S$ with only $1$ edge. Then there are at least $3(q(G-S) - r) + r = 3q(G - S) - 2r$ edges from odd components joining $S$. Clearly there are at most $3|S|$ edges joining odd components from $S$. So $$
3q(G - S) - 2r \le 3|S| \Longrightarrow q(G - S) \le |S| + \frac{2}{3}r
$$
Now, $r \le 2$ and $q(G - S)$ and $|S|$ are integers, so we have a stricter inequality:
$$
q(G - S) \le |S| + \frac{4}{3} \Longrightarrow q(G - S) \le |S| + 1
$$
Assume now that $q(G - S) = |S| + 1$. Then from our initial inequality, $$
|S| + 1 \le |S| + \frac{2}{3}r \iff r \ge \frac{3}{2}
$$
Again, $r$ is an integer and so $r = 2$. But then $G$ has $2$ bridges and they join different odd components to $S$. Our lower bound for edges from odd components to $S$ is then $3(|S| + 1) - 4 = 3 |S|-1$. This must then be attained (the other case implies the number of edges is a multiple of 3, but the 2 bridges mean it cannot be), and every other odd component joins $S$ with $3$ edges (as if any odd component joined with more edges, they would be at least $5$ edges and contradict our upper bound). So there is one edge that does not connect $S$ to an odd vertex, and thus either is internal in $S$ or joins to an even component. In both cases, this edge is a bridge which contradicts that $G$ has at most 2 bridges. Thus $q(G - S) = |S| + 1$ is impossible and $q(G - S) \le |S|$, so the Marriage Condition is satisfied.

### Question 3: Provide a proof of the Marriage Theorem which utilises Tutte's Theorem.

> [!theorem]
> **Theorem: Hall's Marriage Theorem**
>
> Let $G = (X, Y, E)$ be a finite bipartite graph with bipartite sets $X$ and $Y$. Then $G$ contains a matching that covers every vertex of $X$ if and only if for every subset $W \subseteq X$, we have
> $$
> |N_G(W)| \geq |W|,
> $$
> where $N_G(W)$ denotes the set of all neighbors in $Y$ of vertices in $W$.

~
Suppose $G$ contains a matching that covers every vertex of $X$. Then the subgraph $H$, induced by $X$, and the set of vertices in $Y$ that are used, contains a perfect matching. But then by Tutte's Theorem, for every $S \subseteq V(H)$, we have $q(H - S) \le |S|$. Let $W \subseteq X$. Then $q(H - N_H(W)) \le |N_H(W)| \le |N_G(W)|$. In $H - N_H(W)$, every vertex in $W$ is isolated (and thus an odd component). Finally, $$|W| \le q(H - N_H(W)) \le |N_G(W)|$$The other direction is proved in Theorem 6.2.4. in the notes.

### Question 4: Let $M$ be a sub-optimal matching of a bipartite graph $G$ ($M$ contains less edges than
some other matching of $G$). Prove that $G$ contains an augmenting path with respect
to $M$. Does this fact generalise to non-bipartite graphs? (Hint: use symmetric
difference).

Let $M$ be a sub-optimal matching, containing less edges than matching $N$. Then the symmetric difference, $M \triangle N = (M - N) \cup (N - M)$ is the edges in either $M$ or $N$, but not both. This is necessarily nonempty because $|N| > |M|$. Now consider the connected components of $G[M \triangle N]$. Every vertex has degree at most $2$ (if they are matched by both $M$ and $N$, less if they are only matched by one). Thus the connected components are either even cycles (alternating edges from $M$ and $N$, equal number from both in each cycle), or paths, possibly with some unmatched endpoints. Since $|N| > |M|$, there must be at least one path component in $M \triangle N$ with more edges from $N$ than from $M$. Such a path, necessarily of odd length, starts and ends at vertices unmatched by $M$ and consists of alternating edges from $N$ and $M$ and is thus an augmenting path for $M$. This fact does generalise to non-bipartite graphs but is complicated (Berge's Theorem)

### Question 5: Find an infinite graph which serves as a counter-example to the Marriage Theorem.

Let $A = \{a_0,a_1,...\}, B = \{b_0, b_1,...\}$ with edges $a_0b_i$ for every $i \in \mathbb{N}_0$, and $a_jb_{j-1}$ for every $j \in \mathbb{N}^+$. We cannot find a matching that covers $X$, as if it did, every edge $a_j b_{j-1}$ must be included, and any edge incident to $a_0$ provides a contradiction. But, for $W \subseteq X$, if $a_0 \notin W$, $|W| = |N_G(W)|$. If $a_0 \in W$, then $|N_G(W)| = \aleph_0 \ge |W|$.

*[TikZ diagram — open the .tex source to view]*

### Question 6: Show that a graph $G$ is bipartite if and only if $\beta (H) \ge \frac{1}{2} |V(H)|$ for every subgraph $H$ of $G$

Suppose $G$ is bipartite and $H$ is a subgraph of $G$. Let $\{A,B\}$ be a bipartition of $G$. Then $\{A_H, B_H\} := \{A \cap V(H), B \cap V(H)\}$ is a bipartition of $H$, and each set is independent. At least one of these sets must have a size $\ge \frac{1}{2}|V(H)|$, as $V(H) = A_H \cup B_H$. But then $\beta(H) \ge \max \{A_H, B_H\} \ge \frac{1}{2}|V(H)|$. Now suppose that $G$ is not bipartite. Then $G$ contains an odd cycle $H := v_1v_2... v_n v_1$. Then $V(H) = n$. The maximum number of independent vertices is $\frac{n-1}{2} < \frac{1}{2}n$.

### Question 7: Show that every tree has at most one perfect matching

Let $T$ be a tree and $M_1$ and $M_2$ be 2 distinct perfect matchings of $T$. Let $v_1v_2 \in M_1$ with $v_1v_2 \notin M_2$. Then there must exist an edge incident to $v_2$ in $M_2$. Let this be $v_2v_3$. We cannot have that $v_3 = v_1$. Continuing this process, we get alternating edges $v_3 v_4 \in M_1, v_4v_5 \in M_2, ..., v_kv_{k+1} \in M_1, v_{k+1}v_{k+2} \in M_2$ and so on. If any $v_i = v_j, \quad i \ne j$, this implies the existence of a cycle, which cannot be. Thus the alternating path terminates, which is also a contradiction. Thus every tree has at most one perfect matching.

### Question 8: Prove or disprove: A graph $G$ without isolated vertices has a perfect matching if and only if $\alpha ' (G) = \beta ' (G)$

This is true. First suppose $G$ has a perfect matching $M$. Then $|M| = n/2$ and so $\beta ' (G) = |M| = n/2$ (as a perfect matching is also a maximum matching). But we know that a graph with no isolated vertices satisfies $\alpha ' (G) + \beta ' (G) = n$. So $\alpha ' (G) = n/2 = \beta ' (G)$. On the other hand, suppose $\alpha ' (G) = \beta '(G)$. Again, this implies $\beta ' (G) = n/2$ and we can find a matching $M$ with $n/2$ vertices. This must then be a perfect matching, as each edge is independent and covers $2$ vertices.

### Question 9: Show that if $G$ is a bipartite graph without isolated vertices, then $\alpha ' (G) = \beta (G)$

We know that

$$\begin{align*}
\alpha (G) + \beta (G) & = n \\ 
\alpha ' (G) + \beta ' (G) & = n \\
\alpha (G) & = \beta ' (G)
\end{align*}$$

(all proven in the notes). This system of inequalities implies $\alpha ' (G) = \beta (G)$.
