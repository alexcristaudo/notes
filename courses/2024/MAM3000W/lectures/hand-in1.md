---
title: Hand in1
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [hand-in1.tex]
---
> [!warning]
> Compiled from **hand-in1.tex** by the built-in LaTeX renderer
> The original .tex is attached above.

### Question 1

1. True
2. True
3. False
4. False

### Question 2

We prove this true using the subgroup test:
First note that since $H \le G$, $1_G \in H$. Since $\varphi$ is homomorphic, $\varphi (1_G) = 1_{G'} \in \varphi (H)$. Now let $h_1, h_2 \in \varphi (H)$. Then there exists some $g_1, g_2 \in H$ such that $\varphi (g_1) = h_1$ and $\varphi (g_2) = h_2$. But then $g_2^{-1}$ exists (since $H$ is a group) and so since $\varphi$ is a homomorphism, we deduce

 $\varphi(g_1 g_2^{-1}) = \varphi(g_1)\varphi(g_2^{-1}) = \varphi(g_1)\varphi(g_2)^{-1} = h_1 h_2^{-1} \Rightarrow h_1 h_2^{-1} \in \varphi (H)$

 making $\varphi (H)$ a subgroup of $G'$

### Question 3

Consider $\varphi : (\R, +) \to (\{ 0\}, +)$ defined by $\varphi (x) = 0$. This is a homomorphism, since for $x,y\in \R$, $\varphi(x+y)=0=0+0=\varphi(x)+\varphi(y)$. But, for example,  $H = \{2\}$ we get $\varphi (H) = \{0\} \le \{0\}$ but $H$ is not a subgroup of $\R$ as $0 \notin H$. Thus this does not hold
