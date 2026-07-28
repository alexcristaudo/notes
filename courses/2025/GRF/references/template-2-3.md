---
title: Template 2 3
type: reference
tags: [latex]
status: needs-review
source: latex
assets: [template-2-3.tex]
---
> [!warning]
> Compiled from **template-2-3.tex** by the built-in LaTeX renderer — TikZ diagrams are shown as placeholders.
> The original .tex is attached above.

### Question 1: Prove Theorem 3.1.3: A non-trivial connected graph $G$ has an eulerian circuit if and only if every vertex of $G$ has even degree

$(\Longrightarrow)$ Assume that $G$ has an Eulerian circuit $v_0,v_1,...,v_k,v_0$. For every $1 \le i \le k$, the occurence of a vertex $v_i$ involves adding 2 edges to its degree, namely $v_{i-1}v_i$ and $v_iv_{i+1}$. Since every edge is unique, we will always add 2. For vertex $v_0$, we have edges $v_0v_1$ and $v_{k}v_0$, an even amount.After this, every edge has been counted and it follows every vertex has even degree.
$(\Longleftarrow)$ We strong induct on the size of $G = m$. The case when $m = 2$ is trivial. (bounce back and forth between the vertices using each edge once). [Or we can use the trivial graph as the base case for $m=0$] Assume we can find a Euclerian circuit for any graph of size less than $m$. Now let $G$ be a graph of size $m$. If $G$ is acyclic (since it is connected), it is a tree and thus has at least 2 end-vertices, a contradiction. So $G$ is cyclic and has a cycle $C: w_1w_2w_3...w_k$. Consider the components after cutting edges $\{w_1w_2, w_2w_3, ..., w_kw_1\}$ being $C_1, ..., C_N$. Each of these components has size less than $m$, and even degrees (as only the cycle vertices are affected, each removing 2 degrees) and are connected to cycle $C$ by some vertex $w_i$. By the inductive hypothesis, so have Euclerian circuits $P_i$. We construct a Euclerian path as follows: Proceed along cycle $C$. If I come across some vertex on $C$ in $C_i$, use path $P_i$ unless that path has been processed already, then just move to the next vertex on $C$. This new circuit is Euclerian as required.

### Question 2: Prove Theorem 3.1.4: A non-trivial connected $G$ has an Euclerian trail if and only if $G$ contains exactly two vertices of odd degree. Furthermore, every Euclerian trail begins at one of these odd vertices and ends at the other

We can prove it similarly as to how we did in Question 1, but a shorter way is to modify graph $G$ into $H$ by adding one edge between these odd vertices (call them $u$ and $v$). Then $G$ has exactly 2 odd vertices if and only if $H$ has even vertices if and only if $H$ has a Euclerian circuit. Now if $P: v_0...v_{i-1}uvv_i...v_kv_0$ is a Euclerian circuit for $H$, then $vv_i...v_kv_0v_1...v_{i-1}u$ is an Eulerian trail (in $G$) starting and ending at these odd vertices. On the other hand, if $uv_0v_1...v_{i-1}v_i...v_kv$ is an Eulerian trail starting and ending at these odd vertices (in $G$), then $vuv_0v_1...v_kv$ is an Eulerian circuit in $H$. So We have an Eulerian trail in $G$ starting and ending at these odd vertices if and only if we have an Eulerian circuit in $H$. Finally, we get $G$ has an Eulerian trail starting and ending at these odd vertices if and only exactly 2 vertices have odd degree. Clearly Every Eulerian trail in $G$ must start and end at these odd vertices, by the degree argument above if they start somewhere else these odd vertices have even degree.

### Question 3: Prove that the converse of Theorem 3.2.3 is not true: Show that for a graph $G$, if every proper non-empty subset $S \subseteq V(G)$, we have $k(G-S) \le |S|$, then $G$ is Hamiltonian is false.

*[TikZ diagram — open the .tex source to view]*

*The Petersen Graph*

~
The Petersen Graph $G$ is not Hamiltonian and $\kappa (G) = 3$ so for $|S| < 3$ clearly $k(G-S) \le |S|$. If we think of how to split $G$ into 3 components, it involves removing 5 vertices (isolating 2 outer vertices). This is clearly the minimum since for any $u,v,w \in V(G)$, $p(u,v) = p(v,w) = 3$ and there is only one $u-w$ path passing through $v$. (Each path must remove a vertex to separate them into 3 components, with only one vertex being shared along other paths). Creating 4 components is impossible since if we want 4 vertices in different components, pick one vertex. This has 3 neighbours that cant be the other vertices. This leaves 6 other vertices. Picking another vertex also has 3 neighbours, with at most 1 shared with vertex 1. This leaves 3 vertices for 2 other selections, impossible as each vertex will guarantee at least 2 more vertices we cannot pick. A simpler graph is simply the disconnected graph with 2 vertices.

### Question 4: Prove Corollary 3.2.5: Let $u$ and $v$ be distinct non-adjacent vertices of a graph $G$ of order $n$ such that $\deg u + \deg v \ge n$. Then $G$ is Hamiltonian if and only if $G + uv$ is Hamiltonian

Clearly if $G$ is Hamiltonian, then so is $G + uv$ (the Hamiltonian cycle for $G$ is also a Hamiltonian cycle for $G + uv$). So suppose that $G + uv$ is Hamiltonian. Let $P: v_0v_1...v_kv_0$ be a Hamiltonian cycle. If edge $uv$ is not used, we are done and this is a Hamiltonian cycle for $G$. Otherwise $P : v_0v_1...v_{i}uvv_{i+1}...v_0$ means $vv_{i+1}...v_kv_0v_1...v_{i}u := vw_0w_1...w_{k-2}u$ is a Hamiltonian path. Since $\deg u + \deg v \ge n$, and there are $n-2$ other vertices, there are at least two vertices $w_i$ and $w_j$ neighbouring both (and all other vertices neighbour one). Without loss of generality, assume $i < j$. First suppose $i + 1 \ne j$. If $w_{i+1}$ neighbours $v$, we get Hamiltonian cycle $w_j ...w_{i+1}vw_0...w_iuw_{k-2}...w_j$. If $w_{j-1}$ neighbours $u$, we get Hamiltonian cycle $w_i ... w_{j-1}uw_{k-2}...w_j v w_0 ... w_i$. So assuming neither of those cases hold, we can look at whether $w_{i+2}$ neighbours $v$ or $w_{j-2}$ neighbours $u$. Again, in these cases we find Hamiltonian cycles similarly. Again, assuming these dont happen, we can continue working inwards and we will eventually find a pair that satisfies this (otherwise we get a contradiction when $j - N < i + N$). Whats left is to check the case when $j = i + 1$. This is simple, we use Hamiltonian cycle $vw_0...w_iuw_{k-2}...w_{j}v$.

 ~
Using the fact it is a Corollary, we follow a similar proof that they did.
Clearly if $G$ is Hamiltonian, then so is $G + uv$. Suppose there is a graph $G$ that is not Hamiltonian, but $G + uv$ is. Let $C$ be a Hamiltonian cycle of $G+uv$. Necessarily, the edge $uv$ lies on $C$, so there is a $u-v$ path $P:u=u_1,u_2,...,u_n=v$ that contains every vertex of $G$. If $u_1u_i \in E(G)$, then necessarily $u_{i-1}u_n \notin E(G)$, for otherwise $u_1,u_2,...,u_{i-1}u_n,u_{n-1},...,u_i,u_1$ is a Hamiltonian cycle of $G$. Consequently, $\deg (u_n) \le n-1-\deg u_1$. So $\deg u + \deg v \le n-1$, a contradiction.

### Question 5: Let $G_1$ and $G_2$ be two Eulerian graphs with no vertex in common. Let $v_1 \in V(G_1)$ and $v_2 \in V(G_2)$. Let $G$ be the graph obtained from $G_1 \cup G_2$ by adding the edge $v_1v_2$. What can be said about $G$?

$G$ has an Eulerian trail. In $G_1$ and $G_2$, every vertex has even degree (from the graphs being Eulerian). Adding edge $v_1v_2$ in $G$ means $v_1$ and $v_2$ have odd degrees. $G_1$ and $G_2$ share no vertices, so only $v_1$ and $v_2$ have odd degrees and thus $G$ has an Eulerian trail.

### Question 6: Give an example of a graph $G$ such that:

#### \ \ (a) both $G$ and $\bar{G}$ are Eulerian

*[TikZ diagram — open the .tex source to view]*

#### \ \ (b) $G$ is Eulerian but $\bar{G}$ is not

*[TikZ diagram — open the .tex source to view]*

#### \ \ (c) both $G$ and $\bar{G}$ contain an Eulerian trail

*[TikZ diagram — open the .tex source to view]*

#### \ \ (d) $G$ contains an Eulerian trail and an edge $e$ such that $G-e$ is Eulerian

*[TikZ diagram — open the .tex source to view]*

#### \ \ (e) $G$ is Eulerian but not Hamiltonian

*[TikZ diagram — open the .tex source to view]*

#### \ \ (f) $G$ is Hamiltonian but not Eulerian

*[TikZ diagram — open the .tex source to view]*

#### \ \ (g) $G$ is Hamiltonian and has an Eulerian trail

*[TikZ diagram — open the .tex source to view]*

#### \ \ (h) $G$ is not Hamiltonian and $G$ has an Eulerian trail

*[TikZ diagram — open the .tex source to view]*

### Question 7: Show that every nontrivial connected graph has a closed spanning walk that contains every edge exactly twice

Modify our graph $G$ into a non-simple graph $H$, where every edge is duplicated once. Then $H$ has even degree and thus has a Euclerian circuit. This is equivalent to $G$ having a closed spanning walk that contains every edge exactly twice.

### Question 8: Prove or disprove:

#### \ \ (a) If $G$ is 2-connected, then $G$ is Hamiltonian

This is not true. Consider graph: (or Petersen graph)

*[TikZ diagram — open the .tex source to view]*

 ~
This graph is 2-connected ($\kappa(G) = 2$ for vertex-cut $S = \{A,B\}$) but not Hamiltonian, since $k(G-S) = 4$ but $|S| = 2$ (or trying to get a Hamiltonian cycle, the $K_3$ instances force visiting the same vertex twice)

#### \ \ (b) There exists an integer $k$ such that every $k$-connected graph is Hamiltonian

This is false. A counterexample is $K_{n, 2n}$. The connectivity $\kappa (K_{n, 2n}) = \min \{n, 2n\} = n$. We show that $K_{n, 2n}$ is not Hamiltonian:

*[TikZ diagram — open the .tex source to view]*
 ~
Call the left partite set $V_1$ and the right partite set $V_2$ and assume we have a Hamiltonian cycle $P: u_1,u_2,...,u_{3n},u_1$, then notice that every edge $u_i u_{i+1}$ must have one vertex in each partite set. But then for the $2n$ vertices in $V_2$, to each occur exactly once in $P$, there must be $2n$ vertices in $V_1$. But there is only $n$ vertices, so we cannot have a Hamiltonian path

Another counterexample is (using the cutting vertex component theorem):~
*[TikZ diagram — open the .tex source to view]*

### Question 9: Prove that $\bar{C}_n$ is Hamiltonian for $n \ge 5$

 In $C_n$, each vertex has degree $2$. In $\bar{C}_n$, every vertex has degree $(n-1)-2 = n-3$. For any non-adjacent vertices $u$ and $v$, we have that $\deg v + \deg u = 2n - 6 \ge n \iff n \ge 6$. It follows $\bar{C}_n$ is Hamiltonian for $n\ge 6$. The case $n=5$ is Hamiltonian with cycle $v_1, v_4, v_2, v_5, v_3, v_1$

*[TikZ diagram — open the .tex source to view]*

### Question 10: Let $G$ be a 6-regular graph of order $10$ and let $u,v \in V(G)$. Prove that $G$, $G-u$, and $G-u-v$ are all Hamiltonian

Let $x,y$ be nonadjacent vertices in:

- $G$. Then $\deg x + \deg y = 6+6 = 12 \ge 10$ so $G$ is Hamiltonian.
- $G - u$. Then $\deg x + \deg y \ge 5 + 5 = 10 \ge 9$ so $G - u$ (a graph of order 9) is Hamiltonian (each vertex loses at most 1 edge)
- $G - u - v$. Then $\deg x + \deg y \ge 4 + 4 = 8$  so $G - u - v$ (a graph of order 8) is Hamiltonian (each vertex loses at most 2 edges)

### Question 11: The subdivision graph $S(G)$ of a graph $G$ is the graph obtained from $G$ by deleting every edge $uv$ of $G$ and replacing it by a vertex $w$ of degree $2$ that is joined to $u$ and $v$ (e.g., the subdivision graph of $C_3$ is $C_6$). Prove or disprove: If $S(G)$ is Hamiltonian, then $G$ is Eulerian

 This is true. Let $G$ be a graph of order $n$. If $uv \in E(G)$, we will denote $x_{uv}$ as the new vertex in $S(G)$ such that $ux_{uv}$ and $x_{uv}v \in E(S(G))$. If $S(G)$ is Hamiltonian, we can find a Hamiltonian cycle $P:v_1, x_{v_1v_2}, v_2, x_{v_2v_3},v_3,...,v_n,x_{v_nv_1},v_1$ (since in $S(G)$, the only neighbours of a vertex $v \in G$ are the new $x_{uv}$ vertices for $u \in N(v)$ in $G$). Since this is Hamiltonian, every $x_{uv}$ is in the path. It follows that the path $v_1,v_2,...,v_n,v_1$ contains every edge. Since every vertex is occurs exactly once, every edge in $G$ occurs exactly once (there is a bijection between the $x$ vertices and edges). So $P$ is an Eulerian circuit making $G$ Eulerian

### Question 12: A hamiltonian path is a path that contains every vertex of $G$, and a graph is traceable if it contains a hamiltonian path

#### \ \ (a) Clearly, every hamiltonian graph is traceable. Is the converse true?

No. Consider graph:

*[TikZ diagram — open the .tex source to view]*

#### \ \ (b) Let $G$ be a graph of order $n\ge 3$ such that $\deg u + \deg v \ge n-1$ for every two nonadjacent vertices $u,v$ of $G$. Prove that $G$ is traceable

Consider modifying graph $G$ into $H$ by adding a vertex $x$ and adding edges $ux$ for every $u \in V(G)$. Then $H$ is a graph of order $n+1$, and for every nonadjacent vertices $u$ and $v$, $\deg u + \deg v \ge n-1+2 = n+1$. So $H$ is Hamiltonian with cycle $P:v_1, v_2, ..., v_i, x, v_{i+1},...,v_n,v_1$. Then the path $v_{i+1}, ..., v_n, v_1, v_2, ..., v_i$ is a Hamiltonian path for $G$. So $G$ is traceable.

### Question 13: Let $G$ be a graph of order $n \ge 3$ having the property that for each $v \in V(G)$, there is a Hamiltonian path with initial vertex $v$. Show that $G$ is 2-connected but not necessarily Hamiltonian

For every vertex $v$ in $G$, there is a path $P_v$ visiting every vertex, starting at $v$. Then starting at the next vertex is a path visiting every vertex in $G-v$, so $G-v$ is connected and thus $G$ is 2-connected. This graph need not be Hamiltonian, for example,

*[TikZ diagram — open the .tex source to view]*

*The Petersen Graph*

### Question 14: If $G$ is a graph of order $n\ge 3$ with $\delta (G) \ge n/2$, prove that $G$ is Hamiltonian

Let $u$ and $v$ be nonadjacent vertices. Then $\deg u + \deg v \ge \delta (G) + \delta (G) \ge n$. So $G$ is Hamiltonian
