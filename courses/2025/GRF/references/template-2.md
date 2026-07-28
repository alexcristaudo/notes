---
title: Template 2
type: reference
tags: [latex]
status: needs-review
source: latex
assets: [template-2.tex]
---
> [!warning]
> Compiled from **template-2.tex** by the built-in LaTeX renderer — TikZ diagrams are shown as placeholders. Unhandled commands left as-is: \textwidth
> The original .tex is attached above.

### Question 1: Give examples of each of the following or explain why no such example exists:

#### A 2-connected graph that is not 3-connected

We are looking for a graph with $\kappa (G) = 2$

*[TikZ diagram — open the .tex source to view]*

#### A 3-connected graph that is not 2-connected

No such example exists, since, by definition a 3-connected graph $G$ satisfies $\kappa(G) \ge 3 \ge 2$ making it also 2-connected

#### A 2-edge-connected graph that is not 3-edge-connected

We are looking for a graph with $\lambda (G) = 2$

*[TikZ diagram — open the .tex source to view]*

#### A 3-edge-connected graph that is not 2-edge-connected

No such example exists, since, by definition a 3-edge-connected graph $G$ satisfies $\lambda(G) \ge 3 \ge 2$ making it also 2-edge-connected

#### A graph $G$ with $\kappa (G) = 2, \lambda (G) = 3,$ and $\delta (G) = 4$

*[TikZ diagram — open the .tex source to view]*

#### A graph $G$ with $\kappa (G) = 3, \lambda (G) = 2,$ and $\delta (G) = 4$

This cannot happen due to Witney's Theorem.

#### A graph $G$ with $\kappa (G) = 3, \lambda (G) = 3,$ and $\delta (G) = 2$

Again, this is impossible by Witney's Theorem

#### A graph $G$ with $\kappa (G) = 2, \lambda (G) = 2,$ and $\delta (G) = 3$

*[TikZ diagram — open the .tex source to view]*

### Question 2: Prove that, for all positive integers $a,b,c$ with $a \le b \le c$, there is a connected graph $G$ with $\kappa (G) = a, \lambda (G) = b, $ and $\delta (G) = c$

Start with 2 copies of $K_{c+1}$. Label the left vertices $x_1, ..., x_{c+1}$, the right $z_1, ..., z_{c+1}$. We first deal with $\kappa (G) = a$. Connect $x_i$ to $y_i$ for $1\le i \le a$. But $\lambda (G) = a$, so connect $x_a$ to each of $y_{a+1}, ..., y_{b}$, and this graph satisfies the criteria.

*[TikZ diagram — open the .tex source to view]*

### Question 3: Prove that if $G$ is a graph of order $n$ such that $\delta (G) \ge (n-1)/2$, then $\lambda(G) = \delta(G)$

We will first show $G$ is connected, and then by Witney's Theorem (although it extends to any graph, connectedness is needed for $\lambda (G)$), we will know that $\lambda(G) \leq \delta(G)$. Let $u$ and $v$ be any two vertices in $G$. If they are adjacent, they are connected. Assume they are non-adjacent. Since $\deg(u), \deg(v) \ge \delta(G) \geq \frac{n-1}{2}$, both $u$ and $v$ have at least $\frac{n-1}{2}$ neighbours. $u$ and $v$ have at most $n-2$ total possible neighbours (all other vertices). But $\deg(u) + \deg(v) \geq 2 \cdot \frac{n-1}{2} = n-1$, so $u$ and $v$ must share a common neighbour. Through this common neighbour, there is a $u-v$ path, making $G$ connected.
~
Let $T$ be an edge-cut for $G$, splitting $G$ into components $A$ and $B$. So $n = |A| + |B|$. We cannot have $|A|, |B| \ge \frac{n+1}{2}$ so assume $|A| < \frac{n+1}{2}$. Let $v \in A$. Then $v$ has at most $|A|-1$ neighbours in $A$, and thus at least $\delta (G) - |A| + 1$ neighbours in $B$. Then the number of removed edges $$|T| \ge \sum \limits _{v \in A} (\delta (G) - |A| + 1) = |A| (\delta (G) - |A| + 1)$$Now $$
|A|(\delta (G) - |A| + 1) \ge \delta (G) \iff \delta (G) \left [ |A| - 1\right ] \ge |A| \left [ |A| - 1\right ]$$ The case $|A| = 1$ proves this trivially. Otherwise we consider 2 cases:

1. $n$ is even. Then $n = 2a, a \in \mathbb{N}$ and $|A| <  \frac{2a + 1}{2}$, and because $|A|$ is an integer, $|A| \le a$. We have that $\delta (G) \ge (2a-1)/2$, and since it is an integer, $\delta (G) \ge a$ as required.
2. $n$ is odd. Then $n = 2a + 1, a \in \mathbb{N}$ and $|A| < \frac{2a + 2}{2} = a+1$. So $|A| \le a$. We have that $\delta (G) \ge (2a)/2 = a$, as required.

In all cases, $\delta (G) \ge |A|$ and so $|T| \ge \delta (G)$. This is for any edge-cut, so $\lambda (G) \ge \delta (G)$. Finally, $\delta (G) = \lambda (G)$

### Question 4. Determine the connectivity and edge-connectivity of:

#### The Petersen Graph

*[TikZ diagram — open the .tex source to view]*

*The Petersen Graph*

~
$\kappa (G) = 3$, so $G$ is $k$-connected for $k \le 3$. We can prove this easily with Menger's Theorem, where if $u$ and $v$ are both external and non-adjacent (we cannot separate adjacent vertices with vertex-cuts), $\kappa(u, v) = p(u,v) = 3$ (two outside the hexagon using all sides, and one inside). If one is external, one is internal, again, we have the direct path going through the middle, and two around the hexagon. If two are internal, we have the one inside the hexagon and two outside. Then $\kappa (G) = \min \limits _{u,v \in G} \kappa (u,v) = 3$.
~
Since $\delta (G) = 3$, by Witney's Theorem, $\lambda (G) = 3$. Alternatively, note that every vertex has degree $3$, and even if we remove 2 edges, we can reach every vertex from every other vertex, so we must remove 3 edges at least, with 3 being obtained isolating vertex 4 for example.

#### The $t$-cube $Q_t$

{0.12\textwidth}

*[TikZ diagram — open the .tex source to view]*

*$Q_1$*

{0.12\textwidth}

*[TikZ diagram — open the .tex source to view]*

*$Q_2$*

{0.3\textwidth}

*[TikZ diagram — open the .tex source to view]*

*$Q_3$*

{0.35\textwidth}

*[TikZ diagram — open the .tex source to view]*

*$Q_4$*

~
Note that from each vertex, in binary $x_1x_2...x_t$, we can travel to any other node that changes exactly one binary digit.
Let $u,v$ be two vertices in binary form. We want to show $p(u,v) = t$. If $v$ is the destination vertex, there are $t$ paths into $v$ (one for each binary digit). So we just have to show there is a path for each of these edges, and these paths are disjoint. Comparing $u$ and $v$,  let $F$ be the indices that are the same, and $D$ different. There are exactly $|D|$ paths that only using the differing digits, by choosing one digit as the end edge, and work backwards choosing only vertices in $D$. We can choose this unique by first processing all digits less than (in order) and cycling around doing the largest down. Mathematically, if we let $d_1, ..., d_{|D|}$ be the differences and $\bar{d}_i$ represents flipping that digit. Consider starting with digit $i$ and $j$, for $i \ne j$. We will show that the state will never be the same. Without loss of generality, assume $i > j$.
Then consider step $k \le j$: (steps being how many changes we have processed, starting at $i$ or $j$)
~

For starting with $i$, we are in state $d_1 ... \bar{d}_{i-k+1} \dots \bar{d}_j \dots \bar{d}_i d_{i+1} \dots d_{|D|}$.

For starting with $j$, we are in state $d_1 ... \bar{d}_{j-k+1} \dots \bar{d}_j  d_{j+1} \dots d_{|D|}$.

~
and they clearly differ at $d_i$. Consider step $k = j + 1$ (wraparound for $j$).
~

For starting with $i$,we are in state $d_1 ... \bar{d}_{i-k+1} \dots \bar{d}_j \dots \bar{d}_i d_{i+1} \dots d_{|D|}$.

For starting with $j$, we are in state $\bar{d}_1 ... \bar{d}_j  d_{j+1} \dots d_{|D|}$.

~
and they clearly differ at $d_i$ again. After the wraparound, for $i \ge k > j$,
~

For starting with $i$, we are in state $d_1 ... \bar{d}_{i-k+1} \dots \bar{d}_j \dots \bar{d}_i d_{i+1} \dots d_{|D|}$.

For starting with $j$, we are in state $\bar{d}_1 ... \bar{d}_j  d_{j+1} \dots d_{|D| - k + j} \bar{d}_{|D| - k + j + 1)} \dots \bar{d}_{|D|}$.
~
and they differ at $d_{|D|}$. When $i$ wraps around, they differ at $d_{|D| - k + j + 1)} $ all the way until all digits are changed.
~
Similarly, for each fixed digit, we first flip that, then process the differences, and then return from the flipped digit. (and these paths are guaranteed unique by that flipped fixed digit). This gives $|F|$ paths. The total is then $t$ paths. So $\kappa (G) = t$. Again, since $\delta (G) = t$, we get $\lambda (G) = t$

#### The Octahedron $\bar{K}_2 + C_4$

*[TikZ diagram — open the .tex source to view]*

If $u$ and $v$ are vertices, both part of $C_4$, the 4 paths are: around left, around right, through $u_1$, through $u_2$. This is the only case with non-adjacent vertices, so $\kappa (G) = 4$. Again, $\delta (G) = 4$ so $\lambda (G) = 4$. If we try directly, notice vertex cuts involve isolating $v_2$ from $v_4$ or $v_1$ from $v_3$, and then clearly 4 must be removed.

### Question 5: Prove that if $G$ is a $k$-connected graph of order $n$ and size $m$, then $m \ge \frac{1}{2}kn$

Note that $\kappa (G) \ge k$, so $\delta (G) \ge k$. By the Handshaking Lemma, $$
2m = \sum \limits _{v \in G} \deg v \ge \sum \limits _{v\in G} k = kn \Longrightarrow m \ge \frac{1}{2}kn
$$

### Question 6: Prove that if $G$ is a $k$-connected graph and $e$ is an edge of $G$, then $G-e$ is $(k-1)$-connected

$G$ is $k$-connected, so $\kappa (G) \ge k$. Let edge $e = uv$ and $P$ be a vertex-cut of $G-e$. Then if either $u$ or $v$ is in $P$, it is also a vertex-cut for $G$ and so $|P| \ge k$ If not, we have 2 cases. If $T$ is every vertex except $u$ and $v$, it removes all of $u$'s neighbours except $v$, and so $|T| \ge \deg v - 1 \ge \delta (G) - 1\ge \kappa (G) - 1 \ge k-1 $. Otherwise, $P \cup \{u\}$ is a vertex-cut of $G$. To prove this, since $P$ is a vertex-cut and not every other vertex, we have some $x \ne u, x \ne v$ in a different component to some other $y$ (maybe $u$ or $v$, without loss of generality assume it is $v$ if it is one of these). Then, cutting $P \cup \{u\}$ removes edge $e$, and thus separates $x$ and $y$. Thus $|P \cup \{u\}| \ge k$, that is, $|P| \ge k-1$. So $G-e$ is $(k-1)$-connected

### Question 7: Prove or disprove: If $k$ is a positive integer, then $k - \lceil \frac{k}{2} \rceil= \lfloor \frac{k}{2}\rfloor$

 This is true, and to prove it, we consider 2 cases:

1. $k$ is even. Then $k = 2a$ for some $a \in \mathbb{N}$ and thus $k - \lceil \frac{k}{2} \rceil = 2a - \lceil \frac{2a}{2} \rceil = 2a-a = a = \lfloor \frac{2a}{2}\rfloor$
2. $k$ is odd. Then $k = 2a + 1$ for some $a \in \mathbb{N}$ and thus $k - \lceil \frac{k}{2} \rceil = 2a + 1 - \lceil \frac{2a+1}{2} \rceil = 2a + 1 - \lceil a + \frac{1}{2} \rceil = 2a+1-(a+1) = a$ and $\lfloor \frac{2a+1}{2}\rfloor  = \lfloor a+ \frac{1}{2}\rfloor  = a$

 So for every positive integer, $k - \lceil \frac{k}{2} \rceil= \lfloor \frac{k}{2}\rfloor$

### Question 8: Prove or disprove: If $a$ and $b$ are integers, then $\lfloor (b-a)/2 \rfloor + a = \lfloor (b+a)/2 \rfloor $

This is true.  We will first show that $\lfloor x \rfloor + n = \lfloor x+n \rfloor$ for integers $n$ and real numbers $x$. Note that $x = \lfloor x \rfloor + r$ for some $r \in [0,1)$ (specifically, $r = x - \lfloor x \rfloor$). Then $x+n = \underbrace{(\lfloor x \rfloor + n)}_{\in \mathbb{Z}} + r$ and thus $\lfloor x +n \rfloor = \lfloor x \rfloor + n$ as required. Applying this to our problem, we get $\lfloor (b-a)/2 \rfloor + a = \lfloor (b-a)/2 + a \rfloor = \lfloor (b+a)/2 \rfloor $

### Question 9: Let $v_1, v_2, ..., v_k$ be $k$ distinct vertices of a $k$-connected graph $G$, and let $H$ be the graph formed from $G$ by introducing a new vertex $x$ and joining $x$ to all vertices $v_1, ..., v_k$. Prove that $\kappa (H) = k$

First note that $\kappa (G) \ge k$. Let $T$ be a vertex-cut for $H$. If $x\in T$, then $T \setminus \{x\}$ is a vertex cut for $H $, so $|V \setminus \{x\}| \ge k$ and so $|V| \ge k$. If $x \not \in V$, suppose $H$ is cut into components $C_1, ..., C_N$ and, without loss of generality, assume $x \in C_1$. We have 2 cases:

1. $|C_1| = 1$. Then every vertex $v_1, ..., v_k$ has been cut and $|T| \ge k$.
2. $|C_1| \ne 1$. Then there exists some vertex $v_i$ that has not been cut, and $T$ is also a vertex-cut for $G$. To prove this,  $v_i$ is separated from some other vertex $u \in V(G)$. If they are not separated in $G$ when cutting $T$, the path between them is also a path in $H$. So $T$ is a vertex-cut in $G$ and $|T| \ge k$.

So $|V| \ge k$ for any vertex-cut $T$. Considering the vertex-cut $\{v_1, ..., v_k\}$ (isolating $x$), we get $\kappa (H) = k$.

### Question 10: Prove The Fan Lemma

Consider the graph $H$ obtained by adding a new vertex $x$, and adding the edges $xv_1, ..., xv_k$. By Question 9, this graph is $k$-connected. So there exists at least $k$ internally disjoint $u-x$ paths. But $x$ is only neighbouring $k$ vertices, so there are exactly $k$ internally disjoint paths, each going through exactly one $v_i$ for $1 \le i \le k$. Considering these paths wtihout the final edge $v_ix$, we get internally disjoint paths where each $P_i$ is a $u-v_i$ path, as required

### Question 11: Let $G$ be a $k$-connected graph of order $n \ge 2k$. Let $S_1$ and $S_2$ be two disjoint $k$-subsets of $V(G)$. Prove that $G$ contains $k$ disjoint (i.e. having no vertices in common) paths, each of which begins at a vertex in $S_1$ and ends at a vertex in $S_2$.

Let $S_1 = \{v_1, ..., v_k\}$ and $S_2 = \{u_1, ..., u_k\}$. Consider modifying the graph $G$ into the graph $H$, by adding a vertex $x$, and, for all $v \in S_1$, adding the edge $xv$. By Question 9, this graph is $k$-connected. By the Fan Lemma, there exists paths $P_1, ..., P_k$ such that for all $i \in \{1,...,k\}$, $P_i$ is an $x-u_i$ path and the paths $P_1, P_2, ..., P_k$ are internally disjoint. So they only share the vertex $x$, and by considering the path removing the edges $xv_i$ for each $1\le i\le n$, we get the desired result.

### Question 12: If $G$ is a connected cubic graph, prove that $\kappa (G) = \lambda (G)$

By Witney's Theorem, $\kappa (G) \le \lambda (G) \le \delta (G) = 3$. We consider the different cases for $\kappa (G):$

- $\kappa (G) = 1$:
*[TikZ diagram — open the .tex source to view]*
  We can remove edge $e$ and this shows $\lambda (G) = 1$
- $\kappa (G) = 2$: We have 3 cases
{0.3\textwidth}
*[TikZ diagram — open the .tex source to view]*
    {0.3\textwidth}
*[TikZ diagram — open the .tex source to view]*
    {0.3\textwidth}
*[TikZ diagram — open the .tex source to view]*
   We can remove edges $u,v$ and this shows $\lambda (G) = 2$
- $\kappa (G) = 3$. Then $3 = \kappa (G) \le \lambda (G) \le \delta (G) = 3$ so $\lambda (G) = 3$

### Question 13: If $G$ is a $k$-connected graph of order $n$, prove that $\text{diam } G \le \frac{n-2}{k} + 1$

Take $u \in V$, and consider the sets $L_i := \{v \in V: d(u,v) = i\}$ for $i \in \mathbb{N}$. Let $d = e(u)$. Clearly then $L_i = \emptyset$ if $i > d$, and $L_0 = \{u\}$. Now we will show that if $|L_i| \ge k$ for all $1 \le i \le d-1$. If, to the contrary, that $|L_{i}| < k$ for some $1 \le i \le d-1$, then, considering $L_i$ as a vertex-cut, this will cut graph $G$ into at least 2 components, one with $u$, and one with a vertex from $L_d \ne \emptyset$. This then contradicts that $\kappa (G) \ge k$. So $|L_i| \ge k$ for $1 \le i \le d-1$. Clearly every vertex appears in only one $L_i$, so $$
n = \sum \limits _{i=1}^d |L_i| = |L_0| + |L_d| + \sum \limits _{i=1}^{d-1} |L_i| \ge 1 + 1 + \sum \limits _{i=1}^{d-1} k = 2+ (d-1)k
$$
Then $$
d \le \frac{n-2}{k} + 1
$$
So $e(u) \le \frac{n-2}{k} + 1$ for every vertex $u$, and thus $\text{diam }G \le \frac{n-2}{k} + 1$

### Question 14: Determine $\kappa (K_{a,b})$

Let $S_1$ be the set of $a$ vertices, and $S_2$ the set of $b$ vertices. As long as $S_1 \ne \emptyset$ and $S_2 \ne \emptyset$, this graph is connected. We show this now. Take $u,v \in G$. If $u \in S_1$ and $v \in S_2$, they are adjacent. If $u,v \in S_1$, there is some $w \in S_2$ and $u$ and $v$ are connected via vertex $w$. The case $u,v \in S_2$ and $u \in S_2, v \in S_1$ follow similarly. Thus, to create a vertex-cut we must remove at least $\min \{a,b\}$ vertices, and the vertex-cut removing entirely $S_1$ or $S_2$, whichever has $\min \{a,b\}$ vertices, achieves this, so $\kappa (K_{a,b}) = \min \{a,b\}$

### Question 15: Is the converse of the Győri-Lovász Theorem true? (i.e., is it true that if $G$ has order $n$, then $G$ is $k$-connected if and only if whenever $v_1,v_2,...,v_k$ are distinct vertices of $G$ and $n_1,n_2,...,n_k$ are positive integers with $n_1+n_2+...+n_k = n$, then there are disjoint connected subgraphs $G_1, G_2, ..., G_k$ of $G$ such that for each $i \in [1,k]$ we have $v_i \in V(G_i)$ and $G_i$ has $n_i$ vertices

The converse is not true. Consider the graph
*[TikZ diagram — open the .tex source to view]*

Suppose that if $v_1, v_2, v_3$ are distinct vertices, and $n_1, n_2, n_3$ are positive integers with $n_1+n_2 +n_3= 3$, then there are disjoint connected subgraphs $G_1, G_2, G_3$ of $G$ such that for each $i=1,2,3$, we have $v_i \in V(G_i)$ and $G_i$ has $n_i$ vertices. We show that this implication holds in this graph. Clearly, since we only have 3 vertices, each vertex is used and we simply consider the subgraph of only that vertex. This implication holds but this graph is not 3-connected.
