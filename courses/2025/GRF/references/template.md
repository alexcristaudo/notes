---
title: Template
type: reference
tags: [latex]
status: needs-review
source: latex
assets: [template.tex]
---
> [!warning]
> Compiled from **template.tex** by the built-in LaTeX renderer — TikZ diagrams are shown as placeholders.
> The original .tex is attached above.

~
To understand the notation we will use, look at the following example, $K_3 \times K_4$

*[TikZ diagram — open the .tex source to view]*

We will denote the vertices $V(K_m \times K_n) := \{ u_{ij} : 1\le i \le m, 1 \le j \le n\}$ where we have edges:
$$
u_{ij}u_{ik}, \quad 1 \le i \le m, 1 \le j, k \le n, j \ne k \quad \quad \quad (1)
$$
$$
u_{ij}u_{kj}, \quad 1 \le i,k \le m, 1 \le j \le n, i \ne k \quad \quad \quad (2)
$$
That is, vertices in the same $K_n$ part of the graph share the same first index, and the vertices in the same $K_mx$ part of the graph share the same second index. ~
~
Note that $F_1 \cong mK_n$ is the subgraph of $G$ obtained by removing edges described in $(2)$, the $K_n$ subgraphs of $G$ that are disconnected. Graphically, using the example above, $F_1$ is the face:

*[TikZ diagram — open the .tex source to view]*

A set $S \subseteq V(G)$ is dominating $F_1$ iff $N[S] = V(F_1)$ in $F_1$. $F_1$ consists of $m$ disconnected components isomorphic to $K_n$.  So write $F_1 = \bigcup \limits _{i=1}^m C_i$ where each $C_i \cong K_n$ is the component with vertices $\{u_{ij}: 1\le j \le n\}$. In order for $S$ to dominate $F_1$, $S$ must then contain at least one vertex from each component.  Containing a vertex $v \in C_i$ for some $1 \le i \le m$ means that every vertex in $C_i$ is in $N[S]$ (since $C_i$ is complete). Note that two vertices are in different components in $F_1$ if their first index differs. Choosing a vertex from every $C_i$, $1 \le i \le m$, means choosing a set vertices such that every $1,2,...,m$ is a first index of some vertex.
~
We have that $F_2 \cong nK_m$ is the subgraph of $G$ obtained by removing edges described in $(1)$, with $F_2 = \bigcup \limits _{j=1}^nD_j$ where each $D_j \cong K_m$ is the component with vertices $\{u_{ij}: 1 \le i \le m\}$. Again, using the example above, $F_2$ is the face:

*[TikZ diagram — open the .tex source to view]*

As explained above, in order for a vertex-set $S$ to dominate $F_2$, $S$ must contain at least one vertex from each component $D_j$, and containing a vertex $v \in D_j$, for some $1 \le j \le n$, means that every vertex in $D_j$ is in $N[S]$. Note that two vertices are in different components in $F_2$ if their second index differs. Choosing a vertex from every $D_j$, $1 \le j \le n$, means choosing a set vertices such that every $1,2,...,n$ is a second index of some vertex.~
~
So for a set $S$ to be a global dominating set of $G$ with respect to $\{F_1, F_2\}$, $S$ must contain at least one vertex from every $C_i$ and $D_j$, for $1 \le i \le m, 1 \le j \le n$. Consider $S$ in the following 2 cases and we will show it is a minimum global dominating set.  $$
1. \ \ m < n \quad \quad \quad S = \{u_{11}, u_{22}, u_{33}, ..., u_{mm}, u_{1,m+1}, ..., u_{1n}\}
$$
$$
2. \ \ m = n \quad \quad \quad \quad \quad \quad \ \quad \quad \quad S = \{u_{11}, u_{22}, u_{33}, ..., u_{mm}\}
$$
In both these cases, this set contains exactly $n$ vertices, one from each $D_j$, $1 \le j \le n$, so it is a minimum. It dominates $F_1$ and $F_2$ since it contains a vertex from every component $C_i$ and $D_j$, $1 \le i \le m, 1 \le j \le n$. ~
If $m > n$, we use
$$
S = \{u_{11}, u_{22}, u_{33}, ..., u_{nn}, u_{n+1, 1}, ..., u_{m1}\}
$$
This set contains exactly $m$ vertices, one from each $C_i$, $1 \le i \le m$, so it is a minimum. It dominates $F_1$ and $F_2$ since it contains a vertex from every component $C_i$ and $D_j$, $1 \le i \le m, 1 \le j \le n$. ~
~
So $\gamma (K_m \times K_n, \{F_1, F_2\}) = \max \{n,m\}$
