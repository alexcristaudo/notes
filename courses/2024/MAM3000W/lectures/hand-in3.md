---
title: Hand in3
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [hand-in3.tex]
---
> [!warning]
> Compiled from **hand-in3.tex** by the built-in LaTeX renderer
> The original .tex is attached above.

### Question 1

1. True
2. False
3. True
4. True

### Question 2

Suppose $g$ is the only element of order $n$. Let $h \in G$. We wish to show that $gh = hg$. That is, we must show $g = hgh^{-1}$. Now $(hgh^{-1})^n = hg^nh^{-1} = hh^{-1}=1$. So either $|hgh^{-1}| = n$ or $|hgh^{-1}| = k$ for some positive integer $k | n$ (with $k < n$). In this first case, since $g$ is the only element with order $n$, we must have that $g = hgh^{-1}$ and thus $g \in Z(G)$. In the second case, we have that $(hgh^{-1})^k = hg^kh^{-1}=1 \iff hg^k=h \iff g^k=1$ which is a contradiction since $|g|=n$. So we must have that $g \in Z(G)$

### Question 3

Let $g \in G$, then $g \in \text{class} \ g$, and so there exists some $t \in T$ that is a representative of $\text{class} \ g$. That is, $\text{class} \ t = \text{class} \ g \Rightarrow t \in \text{class} \ g$. So $t = xgx^{-1}$ for some $x \in G$. But then $g = x^{-1} xgx^{-1} x = x^{-1} (xgx^{-1}) (x^{-1})^{-1}$ and so $g \in x^{-1}T(x^{-1})^{-1}$ and thus, since $x^{-1} \in G$, we get $g \in \bigcup \limits _{g \in G} gTg^{-1}$. Thus $G \subseteq \bigcup \limits _{g \in G} gTg^{-1}$
Now let $h \in \bigcup \limits _{g \in G} gTg^{-1}$, then $h \in gTg^{-1}$ for some $g\in G$ and so $h = gtg^{-1}$ for some $t \in T$. Since $T \subseteq G$, we get $gtg^{-1}=h \in G$  and thus  $\bigcup \limits _{g \in G} gTg^{-1} \subseteq G$
So we get that $G = \bigcup \limits _{g \in G} gTg^{-1}$ as required
