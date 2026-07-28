---
title: Defs
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [defs.tex]
---
> [!warning]
> Compiled from **defs.tex** by the built-in LaTeX renderer
> The original .tex is attached above.

## Introductory Graph Theory

### Graphs and Subgraphs

> [!definition]
> **Definition**
>
> A graph $G$ is a pair $G = (V (G), E(G))$, where $V (G)$ is a set of elements called vertices and $E(G)$ is a set of 2-element subsets of $V (G)$ called edges.
> If there is no chance of confusion, then we may write $V$ and $E$ instead of $V(G)$ and $E(G)$. Also, an edge $\{u,v\}\in E$ is denoted by $uv$.

> [!definition]
> **Definition**
>
> Let $G=(V,E)$ be a graph and let $uv\in E$.
>  (i) We say that $uv$ joins $u$ and $v$, that $u$ and $v$ are adjacent, that $u$ is a neighbor of $v$ (and vice versa), and that $uv$ is incident to $u$ (and $v$).
>  (ii) The neighbourhood of $u \in V$, denoted as $N(u)$, is the set of all vertices adjacent to $u$. The closed neighbourhood of $u$, denoted $N[u]$, is the neighbourhood of $u$ together with $u$ itself. That is,
> $N(u)=\{v\in V: uv\in E\}$ and $N[u]=\{v\in V: uv\in E\}\cup\{u\}$.

> [!definition]
> **Definition**
>
> Let $G$ be a graph. The order of $G$ is the number of vertices in $G$. Conventionally, we use $n=|V(G)|$. The size of $G$ is the number of edges in $G$. Conventionally, we use $m=|E(G)|$. We say that $G$ is an $(n,m)$ graph if $n=|V(G)|$ and $m=|E(G)|$.
> A graph $G$ is complete if every pair of vertices in $G$ is adjacent. The complete graph on $n$ vertices is denoted $K_n$. If a graph $G$ has no edges, then it is empty.

> [!definition]
> **Definition**
>
> Let $G$ and $H$ be graphs. $H$ is a subgraph of $G$, denoted as $H\subseteq G$, if $V(H)\subseteq V(G)$ and $E(H)\subseteq E(G)$.

> [!definition]
> **Definition**
>
> Let $G$ be a graph and $S\subseteq V(G)$. The subgraph of $G$ induced by $S$, denoted by $G[S]$, is defined by $V(G[S])=S$ and $E(G[S])=\{uv\in E(G): u\in S, v\in S\}$.

> [!definition]
> **Definition**
>
> Let $G$ be a graph and $S\subseteq E(G)$. The subgraph of $G$ induced by $S$, denoted by $G[S]$, is defined by $V(G[S])=\{v\in V(G):$ there exists some edge $uv\in S\}$ and $E(G[S])=S$.

> [!definition]
> **Definition**
>
> Let $G$ be a graph and let $H\subseteq G$. $H$ is a spanning subgraph of $G$ if $V(G)=V(H)$.

### Degrees and Degree Sequences

> [!definition]
> **Definition**
>
> Let $G$ be a graph. The degree of a vertex $v\in V$, denoted $\deg_G v$ or just $\deg v$ when there can be no confusion, is the size of the neighbourhood of $v$. That is, $\deg_G v=|N(v)|$. If every vertex in $G$ has degree $d$, then $G$ is said to have degree $d$, denoted as $\deg_G =d$. If $\deg_G =d$, then $G$ is said to be regular or $d$-regular.

> [!definition]
> **Definition**
>
> Let $G$ be a graph. The minimum degree of $G$ is defined as
> $\delta(G)=\min\{\deg v: v\in V\}$.
> The maximum degree of $G$ is defined as
> $\Delta(G)=\max\{\deg v: v\in V\}$.

> [!definition]
> **Definition**
>
> Let $G$ be a graph with $V=\{v_1,\dots,v_n\}$ such that $\deg v_1\ge\cdots\ge\deg v_n$. Then $\deg v_1,\dots,\deg v_n$ is called the degree sequence of $G$.

### Walks and Components

> [!definition]
> **Definition**
>
> Let $G$ be a graph.
> (i) A walk is a sequence of vertices $v_0,\dots,v_k$ such that $v_i v_{i+1}\in E(G)$ for $i\in\{0,\dots,k-1\}$, and is referred to as a $v_0\!-\!v_k$ walk. The length of the walk $v_0,\dots,v_k$ is $k$. The walk $v_0,\dots,v_k$ is closed if $v_0=v_k$, otherwise it is open.
> (ii) A trail is a walk $v_0,\dots,v_k$ in which every edge $v_i v_{i+1}$ for $i\in\{0,\dots,k-1\}$ is distinct.
> (iii) A circuit is a closed trail.
> (iv) A path is a trail $v_0,\dots,v_k$, denoted as $P_{v_0v_k}$, in which every vertex $v_i$ is distinct for $i\in\{0,\dots,k-1\}$.
> (v) A cycle is a closed path.

> [!definition]
> **Definition**
>
> A graph $G$ is connected if there exists a path $P_{uv}$ for all $u,v\in V(G)$. If $G$ is not connected, then it is disconnected. Each maximal connected subgraph of $G$ is called a component of $G$.

### Compliments and Combinations of Graphs

> [!definition]
> **Definition**
>
> Let $G$ be a graph. The complement of $G$, denoted $\overline{G}$, is the graph defined by $V(\overline{G})=V(G)$ and $E(\overline{G})=\{uv: u,v\in V(G), uv\notin E(G)\}$.

> [!definition]
> **Definition**
>
> Let $G$ and $H$ be graphs. The union of $G$ and $H$, denoted $G\cup H$, is the graph defined by
> $V(G\cup H)=V(G)\cup V(H)$ and
> $E(G\cup H)=E(G)\cup E(H)$.

> [!definition]
> **Definition**
>
> Let $G$ be a graph. The graph $kG$, where $k$ is a positive integer, is defined by
> $V(kG)=V(G)\times\{1,\dots,k\}$ and
> $E(kG)=\{(u,i)(v,i): uv\in E(G),\;i\in\{1,\dots,k\}\}$.
> The scalar multiple $kG$ is simply $k$ disconnected copies of $G$.

> [!definition]
> **Definition**
>
> Let $G$ and $H$ be disjoint graphs. The join of $G$ and $H$, denoted $G+H$, is the graph defined by
> $V(G+H)=V(G)\cup V(H)$ and
> $E(G+H)=E(G)\cup E(H)\cup\{uv: u\in V(G), v\in V(H)\}$.

> [!definition]
> **Definition**
>
> Let $G$ and $H$ be graphs. The cartesian product of $G$ and $H$, denoted $G\times H$, is the graph defined by
> $V(G\times H)=V(G)\times V(H)$ and
> $E(G\times H)=\{(g,h)(g',h): gg'\in E(G)\}\cup\{(g,h)(g,h'): hh'\in E(H)\}$.

### Mappings between graphs

> [!definition]
> **Definition**
>
> Let $G$ and $H$ be graphs. Let $f$ be a mapping $f:V(G)\to V(H)$.
> (i) $f$ is a homomorphism if $f(u)f(v)\in E(H)$ for every $uv\in E(G)$.
> (ii) $f$ is an isomorphism if $f$ is a bijection, $f(u)f(v)\in E(H)$ for every $uv\in E(G)$, and $f(u)f(v)\notin E(H)$ for every $uv\notin E(G)$. $G$ and $H$ are said to be isomorphic, denoted $G\cong H$.
> (iii) $f$ is an automorphism if $G=H$ and $f$ is an isomorphism.

> [!definition]
> **Definition**
>
> Let $G$ be a graph. $G$ is vertex-transitive if for every $u,v\in V(G)$ there exists an automorphism $f$ of $G$ such that $f(u)=v$.

### Digraphs

> [!definition]
> **Definition**
>
> A digraph $D$ is a pair $D=(V(D),A(D))$ where $V(D)$ is a set of elements called vertices, and $A(D)$ is a set of elements from $V(D)\times V(D)$, called arcs.

> [!definition]
> **Definition**
>
> Let $D$ be a digraph and let $u\in V(D)$.
> (i) The indegree of $u$ is the number of vertices from which $u$ is adjacent, denoted $\deg^+(u)$. The outdegree of $u$ is the number of vertices to which $u$ is adjacent, denoted $\deg^-(u)$.
> (ii) The set of all vertices which are adjacent from $u$ is denoted $N^+(u)$, and the set of all vertices which are adjacent to $u$ is denoted $N^-(u)$.
> (iii) For a given vertex $u$, the set of all arcs $vu$ is denoted $A^+(u)$, the set of all arcs $uv$ is denoted $A^-(u)$.
> A vertex with indegree zero is called a source and a vertex with outdegree zero is called a sink.

> [!definition]
> **Definition**
>
> Let $D$ be a digraph. The underlying graph of $D$ is the graph $G$ defined by
> $V(G)=V(D)$ and
> $E(G)=\{uv: uv\in A(D)\text{ or }vu\in A(D)\}$.

### Cut-sets and Blocks

> [!definition]
> **Definition**
>
> Let $G$ be a graph. Let $v\in V(G)$ and $e\in E(G)$. $v$ is a cut-vertex if $G-v$ has more components than $G$. $e$ is a bridge if $G-e$ has more components than $G$.

> [!definition]
> **Definition**
>
> Let $G$ be a graph. $G$ is separable if it contains one or more cut-vertices. $G$ is non-separable if it contains no cut-vertices. A block is a maximal non-separable subgraph.

### Distance in Graphs

> [!definition]
> **Definition**
>
> Let $G$ be a connected graph and let $u,v\in V(G)$. The distance from $u$ to $v$, denoted $d(u,v)$, is defined as the length of a shortest $u\!-\!v$ path in $G$. If no path exists, we set $d(u,v)=\infty$. The diameter of $G$ is $\max\{d(u,v):u,v\in V(G)\}$, and the radius of $G$ is $\min\{\max\{d(u,v):v\in V(G)\}:u\in V(G)\}$.

## Connectivity

### Vertex-cuts and edge-cuts

> [!definition]
> **Definition**
>
> Let $G$ be a graph.
> (a) Let $S\subseteq V(G)$. $S$ is a vertex-cut of $G$ if $G-S$ contains more components than $G$.
> (b) $G$ is $k$-connected if $G$ has no vertex-cut of size less than $k$, i.e.\ $\kappa(G)\ge k$, where $\kappa(G)$ denotes the connectivity of $G$.
> (c) Let $S\subseteq E(G)$. $S$ is an edge-cut of $G$ if $G-S$ contains more components than $G$.
> (d) $G$ is $k$-edge-connected if $G$ has no edge-cut of size less than $k$, i.e.\ $\lambda(G)\ge k$, where $\lambda(G)$ denotes the edge-connectivity of $G$.

### $k$-connected graphs and $k$-edge-connected graphs

> [!definition]
> **Definition**
>
> Let $G$ be a connected graph. For an integer $k\ge 0$:
> (a) $G$ is $k$-connected if $\kappa(G)\ge k$.
> (b) $G$ is $k$-edge-connected if $\lambda(G)\ge k$.

### Menger's Theorem

> [!definition]
> **Definition**
>
> Let $u$ and $v$ be distinct vertices in a connected graph $G$. A $u\!-\!v$ separating set is a vertex-cut $S\subseteq V(G)$ such that $u$ and $v$ are in different components of $G - S$.

## Eulerian and Hamiltonian Graphs

### Eulerian graphs

> [!definition]
> **Definition**
>
> A (multi-)graph $G$ is Eulerian if it contains an Eulerian circuit (a cycle containing all edges of $G$). If $G$ contains an Eulerian trail (a walk containing all edges of $G$ but not necessarily closed), then $G$ is said to have an Eulerian trail.

### Hamiltonian graphs

> [!definition]
> **Definition**
>
> A graph $G$ is Hamiltonian if it contains a Hamiltonian cycle (a cycle containing every vertex of $G$ exactly once). If $G$ contains a Hamiltonian path (a path containing every vertex of $G$ exactly once), then $G$ is said to have a Hamiltonian path.

## Planar Graphs

### Jordan’s Theorem and Euler’s Formula

> [!definition]
> **Definition**
>
> A planar graph is a graph that can be embedded in the plane without any edges crossing. An embedding of $G$ in the plane is an assignment of each vertex of $G$ to a distinct point in the plane and each edge to a continuous arc connecting its endpoints, such that no two arcs intersect except possibly at common endpoints.

> [!definition]
> **Definition**
>
> A face of a plane graph $G$ is a maximal region of the plane bounded by edges of $G$. The boundary of a face $F$ is the subgraph of $G$ consisting of the edges and vertices that lie on the boundary of $F$.

### Maximal planar graphs

> [!definition]
> **Definition**
>
> A planar graph is maximal planar if no more edges can be added to it without losing planarity. Equivalently, a maximal planar graph (with $n\ge 3$) has exactly $3n-6$ edges.

### Chvátal’s Art Gallery Theorem and Fáry’s Theorem

> [!definition]
> **Definition**
>
> An art gallery is represented by a polygon (possibly with holes). The art gallery theorem states that $\lfloor n/3\rfloor$ guards are necessary and sufficient to cover an $n$-vertex polygon. (This is background context; a formal definition is omitted.)

> [!definition]
> **Definition**
>
> Fáry’s Theorem: Every planar graph can be drawn with straight-line edges. (Again, stated for context; no formal definition needed.)

## Graph Colourings

### Introduction to vertex colourings

> [!definition]
> **Definition**
>
> A proper vertex-colouring of a graph $G$ is an assignment of colors to each vertex such that no two adjacent vertices share the same color. The chromatic number $\chi(G)$ is the minimum number of colors needed in a proper coloring of $G$.

> [!example]
> **Example**
>
> Figure 5.1 shows two proper colourings of the same graph $G$ using the colours white, black, light grey, and dark grey: On the left, a proper 4-colouring; on the right, a proper 3-colouring.

> [!example]
> **Example**
>
> In Figure 5.2, two labellings of the graph $C_6$ are shown. The one on the left produces a proper 2-colouring, while the one on the right produces a proper 3-colouring. This illustrates that the performance of the greedy algorithm depends on the labeling of vertices chosen.

### Critically and minimally $k$-chromatic graphs

> [!definition]
> **Definition**
>
> A graph $G$ is $k$-critical if $\chi(G)=k$ and every proper subgraph of $G$ has chromatic number less than $k$. A graph is minimally $k$-chromatic if $\chi(G)=k$ and removing any edge or vertex reduces the chromatic number.

### Brooks' Theorem

> [!definition]
> **Definition**
>
> Brooks' Theorem: In a connected graph $G$ that is not an odd cycle or a complete graph, $\chi(G)\le \Delta(G)$, where $\Delta(G)$ is the maximum degree. (Stated for context.)

### Further results on vertex-colourings

> [!definition]
> **Definition**
>
> A clique in a graph $G$ is a set of mutually adjacent vertices. The clique number $\omega(G)$ is the size of the largest clique in $G$. We have $\chi(G)\ge \omega(G)$ for any graph $G$.

### Introduction to edge-colourings

> [!definition]
> **Definition**
>
> A proper edge-colouring of a graph $G$ is an assignment of colors to each edge such that no two adjacent edges share the same color. The edge-chromatic number $\chi'(G)$ is the minimum number of colors needed in a proper edge-coloring of $G$.

### Vizing's Theorem

> [!definition]
> **Definition**
>
> Vizing's Theorem: For any simple graph $G$, $\chi'(G)$ is either $\Delta(G)$ or $\Delta(G)+1$, where $\Delta(G)$ is the maximum degree of $G$.

### Further results on edge-colourings

> [!definition]
> **Definition**
>
> König's Theorem (bipartite case): In a bipartite graph, $\chi'(G)=\Delta(G)$. (Contextual statement.)

## Covers and Matchings

### Covers

> [!definition]
> **Definition**
>
> A vertex cover of a graph $G$ is a set of vertices $S$ such that every edge of $G$ has at least one endpoint in $S$. The vertex cover number $\tau(G)$ is the minimum size of a vertex cover. An edge cover is a set of edges that covers all vertices. The edge cover number $\tau'(G)$ is the minimum size of an edge cover.

### Matchings

> [!definition]
> **Definition**
>
> A matching in a graph $G$ is a set of edges with no shared endpoints. A maximum matching is a matching of largest possible size. The matching number $\nu(G)$ is the size of a maximum matching. A perfect matching is a matching that covers all vertices of $G$.

### Tutte's Theorem

> [!definition]
> **Definition**
>
> Tutte's Theorem: A graph $G$ has a perfect matching if and only if for every subset $S\subseteq V(G)$, the number of odd components of $G-S$ is at most $|S|$. (Stated for context.)

## Algebraic Graph Theory

### Automorphisms

> [!definition]
> **Definition**
>
> An automorphism of a graph $G$ is an isomorphism from $G$ to itself. The set of all automorphisms of $G$, denoted $\mathrm{Aut}(G)$, together with the operation of composition, forms a group.

### Group actions and the Orbit-Stabilizer Theorem

> [!definition]
> **Definition**
>
> A group action of a group $A$ on a set $X$ is a function $A\times X\to X$ satisfying $e\cdot x = x$ and $(ab)\cdot x = a\cdot(b\cdot x)$ for all $a,b\in A$ and $x\in X$, where $e$ is the identity in $A$.

> [!definition]
> **Definition**
>
> The Orbit-Stabilizer Theorem: For a group action of $A$ on $X$, the orbit of $x\in X$ under $A$ is $A\cdot x = \{a\cdot x: a\in A\}$, and the stabilizer of $x$ is $\mathrm{Stab}(x)=\{a\in A: a\cdot x = x\}$. Then $|A\cdot x|\cdot |\mathrm{Stab}(x)| = |A|$.

### The Cauchy-Frobenius-Burnside Theorem

> [!definition]
> **Definition**
>
> Burnside's Lemma: Let a finite group $A$ act on a set $X$. Then the number of orbits of $X$ under $A$ is
> $\frac{1}{|A|}\sum_{a\in A} |\{x\in X: a\cdot x = x\}|$.
