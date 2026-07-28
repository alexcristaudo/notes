---
title: Theorems
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [theorems.tex]
---
> [!warning]
> Compiled from **theorems.tex** by the built-in LaTeX renderer
> The original .tex is attached above.

## Introductory Graph Theory

### Degrees and Degree Sequences

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph with size $m$. Then $\sum_{v\in V(G)}\deg v = 2m$.

> [!theorem]
> **Corollary**
>
> Every graph has an even number of vertices of odd degree.

> [!theorem]
> **Theorem**
>
> Let $d_1, d_2, \ldots, d_n$ be a nonincreasing sequence of nonnegative integers. Then $(d_1,\dots,d_n)$ is graphic (degree sequence of some graph) if and only if $d_1 + \cdots + d_n$ is even and
> $$
> \sum_{i=1}^k d_i \;\le\; k(k-1) + \sum_{i=k+1}^n \min\{d_i,k\}
> $$
> for every $k=1,\dots,n$.

> [!theorem]
> **Theorem**
>
> Let $d_1,\dots,d_n$ be a nonincreasing sequence of nonnegative integers. Define $d_{n+1}=0$. Then $(d_1,\ldots,d_n)$ is graphic if and only if
> $$
> \sum_{i=1}^n d_i \quad\text{is even, and}\quad \sum_{i=1}^k d_i \le k(k-1) + \sum_{i=k+1}^n \min\{d_i,k\}
> $$
> for each $k=1,\dots,n$.

### Walks and Components

> [!theorem]
> **Theorem**
>
> Every $u$--$v$ walk in a graph contains a $u$--$v$ path.

### Cut-sets and Blocks

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph and let $v\in V(G)$. Then $v$ is a cut-vertex of $G$ if and only if there exist distinct vertices $u$ and $w$ of $G$ such that every $u$--$w$ path in $G$ contains $v$.

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph and let $e\in E(G)$. Then $e$ is a bridge of $G$ if and only if there exist distinct vertices $u$ and $w$ of $G$ such that every $u$--$w$ path in $G$ contains the edge $e$.

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph and let $e\in E(G)$. Then $e$ is a bridge of $G$ if and only if $e$ is not contained in any cycle of $G$.

> [!theorem]
> **Theorem**
>
> A graph $G$ of order at least $3$ is a block (2-connected component) if and only if for every pair of vertices $u,v\in V(G)$ there is a cycle of $G$ containing both $u$ and $v$.

> [!theorem]
> **Corollary**
>
> A graph $G$ of order at least $3$ is a block if and only if for every pair of distinct vertices $u,v\in V(G)$ there exist at least two internally disjoint $u$--$v$ paths in $G$.

### Distance in Graphs

> [!theorem]
> **Theorem**
>
> Let $G$ be a connected graph. Then
> $$
> \mathrm{rad}(G) \;\le\; \mathrm{diam}(G) \;\le\; 2\,\mathrm{rad}(G).
> $$

### Bipartite Graphs

> [!theorem]
> **Theorem**
>
> A graph is bipartite if and only if it contains no odd cycle.

### Trees

> [!theorem]
> **Theorem**
>
> Every non-trivial tree has at least two end-vertices (vertices of degree 1).

> [!theorem]
> **Theorem**
>
> The center of a tree is isomorphic to $K_1$ or $K_2$.

> [!theorem]
> **Theorem**
>
> Let $G$ be a connected graph of order $n$. Then $G$ is a tree if and only if $G$ has size $n - 1$.

> [!theorem]
> **Corollary**
>
> Every forest $F$ of order $n$ and with $k$ components has size $n - k$.

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph of order $n$ and size $m$.  If any two of the following three statements hold, then $G$ is a tree:
>
> 1. $G$ is connected,
> 2. $G$ is acyclic,
> 3. $m = n - 1$.

> [!theorem]
> **Theorem**
>
> Let $T$ be a tree of order $k$, and let $G$ be a graph with minimum degree $\delta(G)\ge k-1$. Then $T$ is a subgraph of $G$.

> [!theorem]
> **Theorem**
>
> Every connected graph $G$ contains a spanning subgraph which is a tree (i.e.\ every connected graph has a spanning tree).

> [!theorem]
> **Theorem**
>
> Let $G$ be a connected graph and run Kruskal's algorithm to obtain a spanning subgraph $T$. Then $T$ is a minimum spanning tree of $G$ (a spanning tree of minimal total weight).

## Connectivity

### Vertex-cuts and Edge-cuts

> [!theorem]
> **Theorem**
>
> Let $G$ be an incomplete connected graph. If $S$ is an edge-cut of $G$, then there is a vertex-cut $S'$ of $G$ such that $|S'|\le |S|$.

> [!theorem]
> **Theorem**
>
> (Whitney's Theorem) Let $G$ be a connected graph. Then
> $$
> \kappa(G)\;\le\;\lambda(G)\;\le\;\delta(G),
> $$
> where $\kappa(G)$ is the vertex-connectivity, $\lambda(G)$ is the edge-connectivity, and $\delta(G)$ is the minimum degree.

### $k$-Connectivity

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph of order $n\ge 2$, and let $k\in\{1,\dots,n-1\}$. If
> $$
> \delta(G)\;\ge\;\left\lceil\frac{n+k-2}{2}\right\rceil,
> $$
> then $G$ is $k$-connected.

### Menger's Theorem

> [!theorem]
> **Corollary: Fan Lemma**
>
> Let $G$ be a $k$-connected graph. If $u,v_1,\dots,v_k$ are any $k+1$ vertices of $G$, then there exist $k$ internally disjoint paths $P_1,\dots,P_k$ such that $P_i$ is a $u$--$v_i$ path for each $i$.

> [!theorem]
> **Theorem: Menger's Theorem**
>
> Let $u$ and $v$ be non-adjacent vertices in a connected graph $G$. Then the minimum number of vertices whose removal separates $u$ and $v$ equals the maximum number of pairwise internally disjoint $u$--$v$ paths in $G$.

> [!theorem]
> **Theorem**
>
> (Whitney's Theorem on $k$-connectivity) A non-trivial graph $G$ is $k$-connected if and only if for every pair of distinct vertices $u,v\in V(G)$ there are at least $k$ internally disjoint $u$--$v$ paths in $G$.

> [!theorem]
> **Theorem: Dirac's Theorem**
>
> Let $G$ be a $k$-connected graph and let $S$ be any set of $k$ vertices of $G$. Then $G$ has a cycle that contains every vertex of $S$.

> [!theorem]
> **Theorem: Gy\H{o}ri--Lov\'asz Theorem**
>
> Let $G$ be a $k$-connected graph of order $n$, where $k\le n-1$. If $v_1,\dots,v_k$ are distinct vertices of $G$ and $n_1,\dots,n_k$ are positive integers with $n_1+\cdots+n_k = n$, then there exist $k$ pairwise disjoint connected subgraphs $G_1,\dots,G_k$ of $G$ such that $v_i\in V(G_i)$ and $|V(G_i)|=n_i$ for each $i=1,\dots,k$.

## Eulerian and Hamiltonian Graphs

### Eulerian Graphs

> [!theorem]
> **Theorem**
>
> A non-trivial connected graph $G$ has an Eulerian circuit (a closed trail containing all edges exactly once) if and only if every vertex of $G$ has even degree.

> [!theorem]
> **Theorem**
>
> A non-trivial connected graph $G$ has an Eulerian trail (an open trail containing all edges exactly once) if and only if $G$ contains exactly two vertices of odd degree (the trail must begin and end at those two vertices).

### Hamiltonian Graphs

> [!theorem]
> **Theorem**
>
> Let $G$ be a Hamiltonian graph of order $n$. Then for every proper nonempty subset $S\subset V(G)$, the number of connected components of $G-S$ satisfies $k(G-S)\le |S|$.

> [!theorem]
> **Theorem: Ore's Theorem**
>
> Let $G$ be a graph of order $n\ge 3$. If for every pair of distinct non-adjacent vertices $u,v$ we have $\deg(u)+\deg(v)\ge n$, then $G$ is Hamiltonian.

> [!theorem]
> **Corollary**
>
> Let $G$ be a graph of order $n$ and $u,v$ distinct non-adjacent vertices with $\deg(u)+\deg(v)\ge n$. Then $G$ is Hamiltonian if and only if $G+uv$ (adding the edge $uv$) is Hamiltonian.

> [!theorem]
> **Theorem: Chv\'atal--Erd\H{o}s Theorem**
>
> Let $G$ be a graph of order $n\ge 3$. If the vertex-connectivity $\kappa(G)$ is at least the independence number $\alpha(G)$, then $G$ is Hamiltonian.

## Planar Graphs

### Jordan's Theorem and Euler's Formula

> [!theorem]
> **Theorem: Jordan Curve Theorem**
>
> A simple closed curve in the plane divides the plane into two regions, exactly one of which is bounded, with the curve as the common boundary of both.

> [!theorem]
> **Theorem: Euler's Formula**
>
> Let $G$ be a connected plane graph with $n$ vertices, $m$ edges, and $f$ faces. Then
> $$
> n - m + f = 2.
> $$

### Maximal Planar Graphs

> [!theorem]
> **Lemma**
>
> Let $G$ be a maximal plane graph of order at least $3$, and let $F$ be any face of $G$. Then:
>
> 1. The boundary of $F$ in $G$ is a triangle (a 3-cycle).
> 2. If two edges $xy$ and $xz$ lie on the boundary of $F$, then $yz$ is also an edge of $G$.

> [!theorem]
> **Theorem**
>
> If $G$ is a maximal planar graph of order $n\ge 3$ and size $m$, then
> $$
> m = 3n - 6.
> $$

> [!theorem]
> **Lemma**
>
> If $G$ is any planar graph, then $\delta(G)\le 5$ (there is a vertex of degree at most 5).

> [!theorem]
> **Theorem**
>
> Let $u$ be a vertex in a maximal planar graph $G$ of order at least $4$. Then there is a unique cycle in $G$ whose vertex set is $N(u)$ (the neighbors of $u$).

> [!theorem]
> **Theorem**
>
> Let $G$ be a maximal planar graph of order at least $4$. Then
> $$
> 3 \;\le\; \delta(G) \;\le\; 5.
> $$

> [!theorem]
> **Theorem**
>
> If $S$ is a minimal separating set in a maximal planar graph $G$ of order at least $4$, then the subgraph $G[S]$ has minimum degree at least $2$.

> [!theorem]
> **Corollary**
>
> If $G$ is a maximal planar graph of order at least $4$, then $3 \le \kappa(G)\le 5$ (vertex-connectivity between 3 and 5).

### Chv\'atal's Art Gallery Theorem and F\'ary's Theorem

> [!theorem]
> **Theorem: Chv\'atal's Art Gallery Theorem**
>
> If $P$ is a simple polygon with $n$ vertices, then there is a set $S$ of at most $\lfloor n/3\rfloor$ vertices of $P$ such that every point of $P$ is visible from at least one vertex in $S$.

> [!theorem]
> **Corollary**
>
> If $P$ is a simple polygon with $n$ vertices, then there is a set $S$ of at most $\lfloor n/3\rfloor$ points in the interior of $P$ such that every point of $P$ is visible from some point in $S$.

> [!theorem]
> **Theorem: F\'ary's Theorem**
>
> Every planar graph has a straight-line embedding in the plane (can be drawn with edges as straight segments).

> [!theorem]
> **Theorem: Four Color Theorem**
>
> Every planar graph is 4-colorable (its vertices can be properly colored with at most 4 colors).

> [!theorem]
> **Theorem: Five Color Theorem**
>
> Every planar graph is 5-colorable.

## Graph Colourings

### Introduction to vertex colourings

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph of size $m$. Then the chromatic number $\chi(G)\le \tfrac12\bigl(1+\sqrt{1+8m}\bigr)$.

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph. Then $\chi(G)\le \Delta(G)+1$.

### Critically and minimally k-chromatic graphs

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph. The following statements hold:
>
> 1. If $G$ contains a cut-vertex, then $G$ cannot be critically $k$-chromatic.
> 2. If $G$ contains a cut-vertex, then $G$ cannot be minimally $k$-chromatic.
> 3. If $G$ has no isolated vertices and is minimally $k$-chromatic, then $G$ is critically $k$-chromatic.

> [!theorem]
> **Theorem**
>
> Let $G$ be a critically $k$-chromatic graph. Then $G$ is $(k-1)$-edge-connected.

> [!theorem]
> **Corollary**
>
> Let $G$ be a connected, minimally $k$-chromatic graph. Then $G$ is $(k-1)$-edge-connected.

> [!theorem]
> **Corollary**
>
> Let $G$ be either critically $k$-chromatic or connected and minimally $k$-chromatic. Then $\delta(G)\ge k-1$.

### Brooks' Theorem

> [!theorem]
> **Theorem: Brooks' Theorem**
>
> Let $G$ be a connected graph which is neither a complete graph nor an odd cycle. Then $\chi(G)\le \Delta(G)$.

> [!theorem]
> **Theorem**
>
> For every graph $G$,
> $$
> \chi(G)\;\le\; 1 + \max\{\delta(H) : H\text{ is an induced subgraph of }G\}.
> $$

### Further results on vertex-colourings

> [!theorem]
> **Theorem**
>
> For every positive integer $k$, there exists a triangle-free graph with chromatic number $k$.

> [!theorem]
> **Theorem: Nordhaus--Gaddum Theorem**
>
> Let $G$ be a graph of order $n$. Then
> $$
> 2\sqrt{n} \;\le\; \chi(G)+\chi(\overline{G}) \;\le\; n+1,
> $$
> and
> $$
> n \;\le\; \chi(G)\,\chi(\overline{G}) \;\le\; \left(\frac{n+1}{2}\right)^2,
> $$
> where $\overline{G}$ is the complement of $G$.

### Vizing's Theorem

> [!theorem]
> **Theorem: Vizing's Theorem**
>
> Let $G$ be a graph. Then
> $$
> \Delta(G)\;\le\;\chi'(G)\;\le\;\Delta(G)+1,
> $$
> where $\chi'(G)$ is the edge-chromatic number of $G$.

### Further results on edge-colourings

> [!theorem]
> **Theorem**
>
> Let $G$ be a nonempty graph in which all vertices of maximum degree are independent. Then $G$ is class one (its edges can be colored with $\Delta(G)$ colors).

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph of size $m$. If $m > \Delta(G)\cdot \beta'(G)$, then $G$ is class two (requires $\Delta(G)+1$ edge-colors).

## Covers and Matchings

### Covers

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph. Then $\alpha(G) + \beta(G) = |V(G)|$, where $\alpha(G)$ is the vertex-independence number and $\beta(G)$ is the vertex-cover number.

> [!theorem]
> **Theorem**
>
> Let $G$ be a graph without isolated vertices. Then $\alpha'(G) + \beta'(G) = |V(G)|$, where $\alpha'(G)$ is the matching number and $\beta'(G)$ is the edge-cover number.

> [!theorem]
> **Theorem**
>
> Let $G$ be any graph. Then $\alpha(G)\ge \beta'(G)$.

### Matchings

> [!theorem]
> **Theorem**
>
> Let $G$ be a bipartite graph. Then $\alpha(G) = \beta'(G)$ (the size of a maximum matching equals the size of a minimum vertex cover).

> [!theorem]
> **Theorem: Hall's Marriage Theorem**
>
> Let $G$ be a bipartite graph with bipartition $(A,B)$. Then $G$ contains a matching that matches every vertex of $A$ if and only if for every subset $S\subseteq A$ we have $|N(S)|\ge |S|$.

> [!theorem]
> **Theorem**
>
> Let $G$ be a $2k$-regular graph of even order. Then $G$ has a 2-factor (a spanning 2-regular subgraph).

> [!theorem]
> **Corollary**
>
> Let $G$ be a bipartite graph with bipartition $(A,B)$. If $|N(S)| \ge |S| - d$ for every subset $S\subseteq A$ (for some integer $d\ge 0$), then $G$ contains a matching of size $|A| - d$.

> [!theorem]
> **Corollary**
>
> Let $G$ be a $k$-regular bipartite graph with $k\ge 1$. Then $G$ has a perfect matching.

### Tutte's Theorem

> [!theorem]
> **Theorem: Tutte's Theorem**
>
> A graph $G$ has a 1-factor (perfect matching) if and only if for every subset $S\subseteq V(G)$, the number of odd components of $G-S$ is at most $|S|$.

> [!theorem]
> **Theorem**
>
> Every bridgeless cubic graph has a 1-factor.

## Group Actions

### Orbits and Stabilizers

> [!theorem]
> **Lemma**
>
> Let $\Gamma$ be a finite group acting on a set $S$, and let $x,y\in S$ be similar (i.e.\ $y=x\alpha$ for some $\alpha\in\Gamma$). Then:
>
> 1. The set of elements of $\Gamma$ that map $x$ to $y$ is a right coset of $\Gamma_x$ (the stabilizer of $x$).
> 2. If $\alpha,\beta$ lie in the same right coset of $\Gamma_x$, then $x\alpha = x\beta$.
> 3. The stabilizers of $x$ and $y$ are conjugate subgroups in $\Gamma$. Moreover, if $y = x\alpha$, then $\Gamma_y = \alpha^{-1}\Gamma_x\alpha$.

> [!theorem]
> **Theorem: Orbit-Stabilizer Theorem**
>
> Let $\Gamma$ be a finite group acting on a set $S$. Then for all $x\in S$,
> $$
> |\Gamma_x|\cdot |x\Gamma| \;=\; |\Gamma|,
> $$
> where $\Gamma_x$ is the stabilizer of $x$ and $x\Gamma$ is the orbit of $x$.

### Burnside's Lemma

> [!theorem]
> **Theorem: Cauchy--Frobenius (Burnside) Lemma**
>
> Let $\Gamma$ be a finite group acting on a finite set $S$. Then the number of orbits of $S$ under the action of $\Gamma$ is
> $$
> \frac{1}{|\Gamma|} \sum_{\alpha\in \Gamma} |\mathrm{Fix}(\alpha)|,
> $$
> where $\mathrm{Fix}(\alpha)=\{x\in S: x\alpha = x\}$ is the set of points fixed by $\alpha$.
