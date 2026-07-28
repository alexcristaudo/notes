---
title: Hand in4
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [hand-in4.tex]
---
> [!warning]
> Compiled from **hand-in4.tex** by the built-in LaTeX renderer
> The original .tex is attached above.

### Question 1

1. True
2. False
3. False
4. True

### Question 2

First note that $33 = 3 \times 11$. By the Third Sylow Theorem, $n_3 \equiv 1 \text{ mod } 3$ and $n_3 | 11$ so $n_3 = 1$. Similarly, $n_{11} \equiv 1 \text{ mod } 11$ and $n_{11} | 3$. So $n_{11} = 1$. Let $H$ be the unique Sylow $3$-subgroup and $K$ the unique Sylow $11$-subgroup. Since their orders are prime, they are both cyclic and so $H \cong \Z_{3}$ and $K \cong \Z_{11}$. Because they are unique, $H \triangleleft G$ and $K \triangleleft G$.
By Lagrange's Theorem, every non-identity element in $H$ has order $3$ and every non-identity element in $K$ has order $11$, so $H$ and $K$ are disjoint.
To show that $G = HK$, we use the Second-Isormophism Theorem. Since $H \le G$ and $K \triangleleft G$, $H/(H \cap K) \cong (HK)/K$. But $|H \cap K| = 1$, so by Lagrange's Theorem, $|H/(H\cap K)| = \frac{|H|}{|H \cap K|} = |H| = \frac{|HK|}{|K|}$. That is, $|HK| = |H||K| = 33 = |G|$ and since $HK \le G$ (from The Second Isomorphism Theorem), we get $HK = G$. Thus  $G \cong H \times K \cong \Z_{3} \times \Z_{11}$
