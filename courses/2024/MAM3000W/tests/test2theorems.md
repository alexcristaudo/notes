---
title: Test2Theorems
type: test
tags: [latex]
status: needs-review
source: latex
assets: [Test2Theorems.tex]
---
> [!warning]
> Compiled from **Test2Theorems.tex** by the built-in LaTeX renderer
> The original .tex is attached above.

> [!theorem]
> **Theorem**
>
> (Goursat's Lemma)
> Let $f$ be holomorphic on an open set $G \subseteq \C$, and let $\triangle$ be a closed triangle in $G$. Let $\gamma$ be the path along the edges of $\triangle$. Then
>
> $$\begin{align}
> \int \limits _{\gamma} f(z)dz & = 0 \notag
> \end{align}$$

> [!theorem]
> **Theorem**
>
> ~
> Let $f$ be a continuous function on a star-shaped region $G \subseteq \C$ such that
>
> $$\begin{align}
> \int \limits _{\gamma} f(z)dz & = 0 \notag
> \end{align}$$
>
> for any triangle $\gamma$ in $G$. Let $a$ be such that $[a,z]\subseteq G$ for any $z \in G$. Then the function $F : G \to \C$ defined by:
>
> $$\begin{align}
> F(z) = \int \limits _{[a,z]} f(w) & dw \notag
> \end{align}$$
>
> is holomorphic in $G$, with $F' = f$

> [!theorem]
> **Theorem**
>
> (Cauchy's Integral Theorem for star-shaped regions)
> Let $G$ be a star-shaped region and let $f$ be holomorphic on $G$. Then
>
> $$\begin{align}
> \int \limits _{\gamma} f(z) dz & = 0 \notag
> \end{align}$$
>
> for every closed path $\gamma$ in $G$

> [!theorem]
> **Theorem**
>
> (Cauchy's Integral Formula)
> Let $G$ be a region with $f$ holomorphic on $G$. Let $z_0 \in G$ and let $\overline{D}(z_0; r) \subseteq G$. Let $\gamma$ be the circle that forms the boundary of $\overline{D}(z_0; r)$ with the positive orientation. Then for any $z \in D(z_0; r)$,
>
> $$\begin{align}
> f(z) = \frac{1}{2 \pi i} & \int _ {\gamma} \frac{f(w)}{w-z}dw \notag
> \end{align}$$

> [!theorem]
> **Theorem**
>
> ~
> Let $G \subseteq \C$ be an open set and $\triangle$ a closed triangle in $G$. Let $\gamma$ denote the path along the edges of $\triangle$. Suppose that $f$ is continuous on $G$ and holomorphic on $G \setminus \{z_0\}$ where $z_0 \in \triangle$. Then
>
> $$\begin{align}
> \int \limits _{\gamma} f(z) dz & = 0 \notag
> \end{align}$$

> [!theorem]
> **Theorem**
>
> ~
> Let $G \subseteq \C$ be a star-shaped region. Let $\gamma$ be a closed path in $G$. Suppose that $f$ is continuous on $G$ and holomorphic on $G \setminus \{z_0\}$ where $z_0 \in G$. Then
>
> $$\begin{align}
> \int \limits _{\gamma} f(z) dz & = 0 \notag
> \end{align}$$

> [!theorem]
> **Theorem**
>
> (Cauchy's formula for derivatives)
> Let $G$ be a region, $z_0 \in G$ and $\overline{D}(z_0; r) \subseteq G$. Let $\gamma$ be the circle that form the boundary of $\overline{D}(z_0; r)$, with positive orientation. Let $f$ be a holomorphic function on $G$. Then $f^{(n)}(z)$ exists for any $z \in D(z_0; r)$ and
>
> $$\begin{align}
> f^{(n)}(z) = \frac{n!}{2\pi i}\int \limits _{\gamma} & \frac{f(w)}{(w-z)^{n+1}} dw, \ \ \ \ n = 0, 1, 2, ... \notag
> \end{align}$$

> [!theorem]
> **Theorem**
>
> ~
> If $f$ is holomorphic on an open set $G$, then $f$ has derivatives of all orders in $G$, and all derivatives are holomorphic in $G$

> [!theorem]
> **Theorem**
>
> (Taylor's Theorem)
> Let $f$ be a holomorphic function in $D(z_0; R)$ for some $R > 0$. Then there exists unique numbers $a_n \in \C, n = 0, 1, 2, ...$ such that
>
> $$\begin{align}
> a_n = \frac{1}{2\pi i}\int \limits _{\gamma} & \frac{f(w)}{(w-z_0)^{n+1}} dw = \frac{f^{(n)}(z_0)}{n!} \notag
> \end{align}$$

> [!theorem]
> **Theorem**
>
> (Cauchy's Inequalities)
> Assume that $|f(z)| \le M$ for all $z$ on the circle with center $z_0$ and radius $r$. Then the coefficients of Taylor's series $f(z) = \sum \limits _{n=0} ^{\infty} a_n(z-z_0)^n$ satisfy Cauchy's inequalities:
>
> $$\begin{align}
> |a_n| \le \frac{M}{r^n}, & \ \ \ n = 0,1,2,... \notag
> \end{align}$$

> [!theorem]
> **Theorem**
>
> ~
> Let $f$ be an entire function. Assume there are constants $n \in \N \cup \{0\}, M,R > 0$ such that
>
> $$\begin{align}
> |f(z)| \le M|z|^n, \ & \ \ \text{ for all } |z| \ge R \notag
> \end{align}$$
>
> Then $f$ is a polynomial of degree at most $n$

> [!theorem]
> **Theorem**
>
> (Liouville's Theorem)
> An entire function that is bounded on $\C$ is constant

> [!theorem]
> **Theorem**
>
> (Fundamental Theorem of Algebra)
> Let $p$ be a non-constant polynomial with constant coefficients. Then $p$ has a zero in $\C$

> [!theorem]
> **Theorem**
>
> Let $(f_n)_{n=1} ^\infty$ be a sequence of functions holomorphic in a region $G \subseteq \C$ that converges to $f: G \to \C$, and the convergence is uniform on any compact subset of $G$. Then $f$ is holomorphic in $G$, the sequence of derivatives $(f_n ^{(k)})_{n=1} ^ \infty$ converges to $f^{(k)}$ for any $k \in \N$ and for every $z\in G$ there is a closed disc $\overline{D}(z; r) \subseteq G$ with some $r > 0$ such that the convergence is uniform in $\overline{D}(z; r) \subseteq G$

> [!theorem]
> **Theorem**
>
> ~
> Assume that $f$ is holomorphic in an open disc $D(z_0; r)$ with some $z_0 \in \C$ and $r>0$. If $z_0$ is a limit point of the set $\{\xi \in D(z_0; r) : f(\xi) = 0\}$, then $f(z) = 0$ for all $z \in D(z_0; r)$

> [!theorem]
> **Theorem**
>
> (The Identity Theorem)
> Suppose that $f$ is a holomorphic function in a region $G \subseteq \C$. If the set $\{\xi \in G: f(\xi) = 0\}$ has a limit point in $G$, then $f \equiv 0$ in $G$

> [!theorem]
> **Theorem**
>
> ~
> If $f$ is holomorphic in a region $G$ and not constant, then the set $\{\xi \in G: f(\xi) = 0\}$ has no limit points in $G$

> [!theorem]
> **Theorem**
>
> (The Coincidence Principle)
> Let $f$ and $g$ be holomorphic in a region $G$. If the set $\{\xi \in G: f(\xi) = g(\xi)\}$ has a limit point in $G$, then $f \equiv g$ in $G$

> [!theorem]
> **Theorem**
>
> (Gauss' Mean Value Theorem)
> Let $f$ be holomorphic in $D(z;R)$ for some $z \in \C$ and $R>0$. Let $0 < r < R$. Then
>
> $$\begin{align}
> f(z) = \frac{1}{2 \pi} \int _{0} ^ {2 \pi} & f(z+re^{i \theta})d\theta \notag
> \end{align}$$

> [!theorem]
> **Theorem**
>
> (The Maximum Modulus Principle)
> Let $G$ be a bounded region and $f$ holomorphic in $G$ and continuous in $\overline{G}$. Then $|f|$ attains its maximum on the boundary of $G$. If $f$ is non-constant, then
>
> $$\begin{align}
> |f(z)| < \max _{w \in \partial G} & |f(w)| \ \text{ for any } z\in G \notag
> \end{align}$$

> [!theorem]
> **Theorem**
>
> (Riemann's Extension Theorem)
> If a function $f$ is holomorphic and bounded in a punctured disc $D'(z_0; r)$ with some $z_0 \in \C$ and $r > 0$, then the limit $L = \lim _{z \to z_0} f(z)$ exists and the new function
>
> $$\begin{align}
> \hat{f}(z) = $\begin{cases} f(z) \ \ \ z \in D'(z_0; r) \\ L \ \ \ \ \ \ \ z=z_0 \end{cases}$ \notag
> \end{align}$$
>
> is holomorphic in $D(z_0; r)$

> [!theorem]
> **Theorem**
>
> (The Casorati-Weierstrass Theorem)
> Suppose thatt $f$ is holomorphic in $D'(z_0; R)$ for some $R>0$ and has an essential singularity at $z_0$. Then for any number $w_0 \in \C$, there exists a sequence $(z_n)_{n=1} ^ \infty$ such that $\lim _{n \to \infty} z_n = z_0$ and $\lim _{n \to \infty} f(z_n) = w_0$

> [!theorem]
> **Theorem**
>
> ~
> Suppose that $f$ is holomorphic in a punctured disc $D'(z_0; R)$ with some $R>0$ and $z_0$ is a pole of $f$. Then there exists a natural number $n \in \N$ and a function $h$ that is holomorphic in $D(z_0; r)$ with some $0 < r \le R$ such that $h(z_0) \ne 0$ and
>
> $$\begin{align}
> f(z) = \frac{1}{(z-z_0)^n h(z)}, & \ \ \ z \in D'(z_0; r) \notag
> \end{align}$$
>
> Then the number $n$ and the function $h$ are unique

> [!theorem]
> **Theorem**
>
> (The Residue Theorem)
> Let $f$ be holomorphic in $\C$ except possibly for isolated singularities. Let $\gamma$ be a positively oriented simple closed path in $\C$, and no singularities lie on $\gamma$. Let $z_1, z_2, ..., z_n$ be singularities of $f$ that lie inside of $\gamma$. Then
>
> $$\begin{align}
> \int _{\gamma} f(z)dz = 2 \pi i & \sum _{k=1} ^n \text{Res}(f, z_k) \notag
> \end{align}$$

> [!theorem]
> **Theorem**
>
> ~
> Let $f$ be holomorphic in $D'(z_0; r)$ with some $r > 0$ and let $z_0$ be a pole of $f$.
>
> 1. If $z_0$ is a simple pole of $f$, then $\text{Res}(f, z_0) = \lim _{z \to z_0} (z-z_0)f(z)$
> 2. If $f(z) = \frac{g(z)}{h(z)}$ with $h(z_0) = 0, h'(z_0) \ne 0$ and $g(z_0) \ne 0$. Then $\text{Res}(f, z_0) = \frac{g(z_0)}{h'(z_0)}$
> 3. If $z_0$ is a pole of order $n$, then $\text{Res}(f, z_0) = \frac{1}{(n-1)!} \frac{d^{n-1}}{dz^{n-1}}((z-z_0)^n f(z)) \vert _{z=z_0}$

> [!theorem]
> **Theorem**
>
> ~
> Let $f$ be a function holomorphic in $D'(\infty, R)$ with some $R > 0$. Then
>
> $$\begin{align}
> \text{Res}(f, \infty) = -\text{Res}\bigg(\frac{\hat{f}(z)}{z^2}, 0\bigg) \notag
> \end{align}$$
