---
title: MAM4000W Analysis II – Theorems, Lemmas, and Corollaries
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [theorems.tex]
---
> [!warning]
> Compiled from **theorems.tex** by the built-in LaTeX renderer — Unhandled commands left as-is: \title, \author, \date
> The original .tex is attached above.

# MAM4000W Analysis II – Theorems, Lemmas, and Corollaries

\title{MAM4000W Analysis II – Theorems, Lemmas, and Corollaries}
\author{}
\date{}

## Measure Theory and Integration

### Measure Theory

> [!theorem]
> **Theorem: Theorem 2.6**
>
> Let $(X, \mathcal{E})$ be a measurable space and $\mu: \mathcal{E} \to [0,\infty]$ an additive function different from the constant function $\infty$. Then:
>
> 1. $\mu$ is a positive measure if and only if for any increasing sequence $(E_n)_{n\in\mathbb{N}} \subset \mathcal{E}$,  $$
> \mu\Big(\bigcup_{n=0}^{\infty} E_n\Big) \;=\; \lim_{n\to\infty}\mu(E_n) \;=\; \sup_{n}\mu(E_n)\,.
> $$
> 2. If $\mu$ is a positive measure, then for any decreasing sequence $(E_n)_{n\in\mathbb{N}} \subset \mathcal{E}$ with $\mu(E_0)<\infty$,  $$
> \mu\Big(\bigcap_{n=0}^{\infty} E_n\Big) \;=\; \lim_{n\to\infty}\mu(E_n) \;=\; \inf_{n}\mu(E_n)\,.
> $$
> 3. If for every decreasing sequence $(E_n)_{n\in\mathbb{N}} \subset \mathcal{E}$ satisfying $\mu(\bigcap_{n} E_n)=0$ we have $\lim_{n\to\infty}\mu(E_n)=0$, then $\mu$ is a positive measure.

> [!theorem]
> **Theorem: Theorem 2.14**
>
> Let $(X, \mathcal{E})$ be a measurable space and let $(f_h)_{h\in\mathbb{N}}$ be a sequence of measurable functions $f_h: X\to \mathbb{R}$. Then the functions $\sup_{h} f_h$, $\inf_{h} f_h$, $\limsup_{h\to\infty} f_h$, and $\liminf_{h\to\infty} f_h$ are all measurable.

> [!theorem]
> **Corollary: Corollary 2.15**
>
> Let $(X, \mathcal{E})$ be a measurable space and let $(f_h)_{h\in\mathbb{N}}: X \to \mathbb{R}$ be a sequence of measurable functions. If $f_h(x) \to f(x)$ pointwise for every $x \in X$ as $h \to \infty$, then the limit function $f: X \to \mathbb{R}$ is measurable.

> [!theorem]
> **Theorem: Theorem 2.16**
>
> Let $(X, \mathcal{E})$ be a measurable space and let $f, g: X \to \mathbb{R}$ be measurable functions. Then:
>
> 1. the functions $\max\{f,g\}$, $\min\{f,g\}$, $f+g$, and $f\,g$ are measurable;
> 2. the positive and negative parts $f^+ := \max\{f,0\}$ and $f^- := \max\{-f,0\}$ are measurable;
> 3. the absolute value $|f|$ is measurable.

> [!theorem]
> **Theorem: Theorem 2.17**
>
> Let $(X, \mathcal{E})$ be a measurable space. A function $f: X \to [0,\infty)$ is measurable if and only if it is the pointwise limit of an increasing sequence of simple functions $(\varphi_n)_{n\in\mathbb{N}}$ on $X$. In other words, there exists a sequence of simple functions $\varphi_n: X\to[0,\infty)$ such that $\varphi_n(x) \le \varphi_{n+1}(x)$ for all $x$ and $\varphi_n(x) \to f(x)$ as $n\to\infty$ for each $x \in X$.

### Integration

> [!theorem]
> **Theorem: Theorem 3.2**
>
> Let $(X, \mathcal{E}, \nu)$ be a measure space. If $f, g: X \to [0,\infty)$ are two positive simple functions and $t\ge 0$, then:
>
> 1. $\displaystyle \int_X (f+g)\,d\nu \;=\; \int_X f\,d\nu + \int_X g\,d\nu$.
> 2. $\displaystyle \int_X (t\,f)\,d\nu \;=\; t \int_X f\,d\nu$.
> 3. If $f \le g$, then $\displaystyle \int_X f\,d\nu \;\le\; \int_X g\,d\nu$.

> [!theorem]
> **Theorem: Theorem 3.5 (Beppo–Levi Monotone Convergence)**
>
> Let $(X, \mathcal{E}, \mu)$ be a measure space and let $f_n: X \to [0,\infty)$ be an increasing sequence of measurable functions (i.e. $f_n(x)\le f_{n+1}(x)$ for all $n$ and $x$). If $f(x) := \lim_{n\to\infty} f_n(x)$ for each $x\in X$, then
> $$
> \lim_{n\to\infty}\int_X f_n\,d\mu \;=\; \int_X f\,d\mu\,.
> $$

> [!theorem]
> **Theorem: Theorem 3.8 (Fatou’s Lemma)**
>
> Let $(X, \mathcal{E}, \mu)$ be a measure space and let $f_n: X \to [0,\infty)$ be a sequence of measurable functions. Then
> $$
> \int_X \Big(\liminf_{n\to\infty} f_n(x)\Big)\,d\mu(x) \;\le\; \liminf_{n\to\infty} \int_X f_n\,d\mu\,.
> $$

> [!theorem]
> **Theorem: Theorem 3.12**
>
> Let $(X, \mathcal{E}, \mu)$ be a measure space.
>
> 1. If $f: X \to \mathbb{R}$ is $\mu$-integrable and $g: X \to \mathbb{R}$ is $\mu$-summable (i.e. $|g|$ is integrable), then $f+g$ is $\mu$-integrable and $\displaystyle\int_X (f+g) = \int_X f + \int_X g$.
> 2. If $f$ is $\mu$-integrable and $\alpha \in \mathbb{R}$, then $\alpha f$ is $\mu$-integrable and $\displaystyle \int_X \alpha f = \alpha \int_X f$.
> 3. If $f$ and $g$ are $\mu$-integrable and $f \le g$ $\mu$-a.e., then $\displaystyle \int_X f \le \int_X g$.

> [!theorem]
> **Theorem: Theorem 3.14 (Dominated Convergence Theorem)**
>
> Let $(X, \mathcal{E}, \mu)$ be a measure space and let $f_n: X \to \mathbb{R}$ be a sequence of $\mu$-summable functions converging pointwise to a function $f: X \to \mathbb{R}$. If there exists an integrable function $g \in L^1(X)$ such that $|f_n(x)| \le g(x)$ for all $n$ and all $x\in X$, then $f$ is $\mu$-summable and
> $$
> \lim_{n\to\infty}\int_X f_n\,d\mu \;=\; \int_X f\,d\mu\,.
> $$

> [!theorem]
> **Theorem: Theorem 3.15**
>
> Let $(X, \mathcal{E}, \mu)$ be a measure space and let $f, g: X \to \mathbb{R}$ be two functions such that $f(x) = g(x)$ for $\mu$-almost every $x \in X$. Then:
>
> 1. $f$ is $\mu$-integrable (resp. $\mu$-summable) if and only if $g$ is $\mu$-integrable (resp. $\mu$-summable$)$.
> 2. In the case that both are integrable, $\displaystyle \int_X f\,d\mu = \int_X g\,d\mu$.

> [!theorem]
> **Theorem: Theorem 3.16**
>
> Let $(X, \mathcal{E}, \mu)$ be a measure space and let $(Y,d)$ be a metric space. If $f: X \times Y \to \mathbb{R}$ satisfies:
>
> - for each fixed $y\in Y$, the function $x \mapsto f(x,y)$ is measurable and integrable on $X$;
> - for each fixed $x\in X$, the function $y \mapsto f(x,y)$ is continuous on $Y$;
> - there exists an integrable function $h(x)$ on $X$ such that $|f(x,y)| \le h(x)$ for all $y \in Y$ and all $x \in X$;
>
> then the function $F: Y \to \mathbb{R}$ defined by $F(y) := \int_X f(x,y)\,d\mu(x)$ is continuous on $Y$.

> [!theorem]
> **Theorem: Theorem 3.17 (Differentiation Under the Integral Sign)**
>
> Let $(X, \mathcal{E}, \mu)$ be a measure space and $(Y,d)$ a metric space. Suppose $f: X \times Y \to \mathbb{R}$ satisfies:
>
> - for each $t \in Y$, $x \mapsto f(x,t)$ is integrable on $X$, and for each $x\in X$, the map $t \mapsto f(x,t)$ is differentiable on $Y$;
> - the partial derivative $\partial f/\partial t(x,t)$ exists for all $x,t$ and there is an integrable function $H(x)$ such that $\big|\frac{\partial f}{\partial t}(x,t)\big| \le H(x)$ for all $t\in Y$;
>
> then $F(t) := \int_X f(x,t)\,d\mu(x)$ is differentiable for $t\in Y$ and
> $$
> F'(t) \;=\; \frac{d}{dt}\int_X f(x,t)\,d\mu(x) \;=\; \int_X \frac{\partial f}{\partial t}(x,t)\,d\mu(x)\,.
> $$

> [!theorem]
> **Theorem: Theorem 3.21**
>
> Under the above notations, for any $f \in L^{\infty}(X)$ the quantity
> $$
> \|f\|_{\infty} := \mu\text{-ess-}\sup_{x\in X} |f(x)|
> $$
> equals the essential supremum of $|f|$ and defines the usual $L^\infty$ norm of $f$.

> [!theorem]
> **Theorem: Theorem 3.23**
>
> For a summable function $f \in L^1(X)$, the quantity
> $$
> \|f\|_{1} := \int_X |f(x)|\,d\mu(x)
> $$
> defines a norm on the space $L^1(X)$ of integrable functions.

> [!theorem]
> **Theorem: Theorem 3.26 (Hölder’s Inequality)**
>
> Let $p \in [1,\infty]$ and $q$ be the conjugate exponent (i.e. $\frac{1}{p}+\frac{1}{q}=1$). If $f \in L^p(X,\mu)$ and $g \in L^q(X,\mu)$, then $f g \in L^1(X,\mu)$ and
> $$
> \int_X |f g|\,d\mu \;\le\; \|f\|_{p}\,\|g\|_{q}\,.
> $$

> [!theorem]
> **Theorem: Theorem 3.27 (Minkowski’s Inequality)**
>
> If $p \in [1,\infty]$ and $f, g \in L^p(X,\mu)$, then
> $$
> \|f + g\|_{p} \;\le\; \|f\|_{p} + \|g\|_{p}\,.
> $$

## Normed Spaces and Linear Mappings

### Finite-Dimensional Spaces and Compactness

> [!theorem]
> **Theorem: Theorem 3.4**
>
> Let $(V,\|\cdot\|)$ be a normed space of *finite dimension*. Then a subset $K \subset V$ is compact if and only if $K$ is closed and bounded.

> [!theorem]
> **Lemma: Lemma 3.5 (Riesz’s Lemma)**
>
> Let $(V,\|\cdot\|)$ be a normed space over $K=\mathbb{R}$ or $\mathbb{C}$. Let $Y$ be a closed subspace of $V$, and let $Z$ be another subspace of $V$ with $Y \subsetneq Z$. Then for every $0<\theta<1$, there exists a vector $z_{\theta} \in Z$ such that
> $$
> \|z_{\theta}\| = 1, \qquad \text{and} \qquad \|z_{\theta} - y\| \ge \theta \;\;\forall\,y \in Y\,.
> $$

> [!theorem]
> **Theorem: Theorem 3.6**
>
> If a normed space $(V,\|\cdot\|)$ has the property that the closed unit ball $B(0,1) \subset V$ is compact, then $V$ is finite-dimensional.

### Banach Spaces and Continuous Linear Maps

> [!theorem]
> **Theorem: Theorem 4.1**
>
> A normed space $(V,\|\cdot\|)$ is a Banach space (complete) if and only if it satisfies the following series convergence condition: for every sequence $(v_h)_{h\in\mathbb{N}} \subset V$ such that $\sum_{h=0}^\infty \|v_h\| < \infty$, the series $\sum_{h=0}^\infty v_h$ converges in $V$.

> [!theorem]
> **Theorem: Theorem 5.3**
>
> Let $(V,\|\cdot\|_V)$ and $(W,\|\cdot\|_W)$ be normed spaces, and let $L: V \to W$ be a linear mapping. The following statements are equivalent:
>
> 1. $L$ is continuous (as a function between metric spaces).
> 2. $L$ is continuous at $0_V$.
> 3. There exists a constant $C>0$ such that $\|L(v)\|_W \le C\,\|v\|_V$ for all $v \in V$.
> 4. $L$ is a Lipschitz continuous function on $V$.

> [!theorem]
> **Theorem: Theorem 5.5**
>
> Let $(V,\|\cdot\|_V)$ and $(W,\|\cdot\|_W)$ be normed spaces. Let $L(V,W)$ denote the space of all continuous linear mappings from $V$ to $W$, equipped with the operator norm
> $$
> \|T\|_{L(V,W)} := \sup_{\|v\|_V \le 1} \|T v\|_W\,.
> $$
> If $(W,\|\cdot\|_W)$ is a Banach space, then the operator space $(L(V,W), \|\cdot\|_{L(V,W)})$ is also a Banach space (i.e. $L(V,W)$ is complete under the operator norm).

### Hilbert Space Results

> [!theorem]
> **Corollary: Corollary 6.6**
>
> Let $(H, (\cdot,\cdot))$ be an inner product space. Then
> $$
> \|u\| := \sqrt{(u,u)}
> $$
> defines a norm on $H$, called the norm induced by the inner product.

> [!theorem]
> **Theorem: Theorem 6.10 (Parallelogram Identity)**
>
> Let $(V,\|\cdot\|)$ be a normed space. The norm $\|\cdot\|$ is induced by an inner product on $V$ (i.e. $V$ is a pre-Hilbert space) if and only if the following parallelogram identity holds for all $u,v \in V$:
> $$
> \|u+v\|^2 + \|u-v\|^2 \;=\; 2\,\|u\|^2 + 2\,\|v\|^2\,.
> $$
> In this case, one can define an inner product that induces $\|\cdot\|$ by the formula
> $$
> (u,v) := \frac{1}{4}\Big(\|u+v\|^2 - \|u-v\|^2\Big)
> $$
> in the real case (and a similar formula in the complex case).

> [!theorem]
> **Theorem: Theorem 6.14**
>
> Let $\{e_n\}_{n\in\mathbb{N}}$ be an orthonormal system in a separable Hilbert space $(H,(\cdot,\cdot))$. The following statements are equivalent:
>
> 1. $\{e_n\}_{n\in\mathbb{N}}$ is complete in $H$ (i.e. an orthonormal basis of $H$).
> 2. $\displaystyle \|u\|^2 = \sum_{n=0}^{\infty} |(u,e_n)|^2$ for every $u \in H$ (Bessel’s identity becomes an equality).
> 3. $\displaystyle (u,v) = \sum_{n=0}^{\infty} (u,e_n)\,\,(v,e_n)$ for all $u,v \in H$ (Parseval’s identity).

> [!theorem]
> **Theorem: Theorem 6.16 (Gram–Schmidt Process)**
>
> Let $\{v_n\}_{n\ge 1}$ be a linearly independent sequence in an inner product space $(H,(\cdot,\cdot))$. Then there exists an orthonormal sequence $\{e_n\}_{n\ge 1}$ in $H$ such that for each $N\in\mathbb{N}$, $\mathrm{span}\{e_1,\dots,e_N\} = \mathrm{span}\{v_1,\dots,v_N\}$.  (That is, the orthonormal system $\{e_n\}$ is obtained from $\{v_n\}$ by the Gram–Schmidt procedure.)

> [!theorem]
> **Theorem: Theorem 6.17 (Riesz Representation)**
>
> Let $H$ be a Hilbert space and $H'$ its dual space. For every continuous linear functional $L \in H'$, there exists a unique vector $u_L \in H$ such that
> $$
> L(v) = (u_L,\,v)\qquad \forall\,v \in H\,,
> $$
> and moreover $\ $\,$\|L\|_{H'} = \|u_L\|_H$.  (In particular, $H'$ is isometrically isomorphic to $H$ itself.)

> [!theorem]
> **Theorem: Theorem 6.19 (Adjoint Operator)**
>
> Let $(V,(\cdot,\cdot)_V)$ and $(W,(\cdot,\cdot)_W)$ be two Hilbert spaces over the same field $K$. For each linear continuous operator $L \in L(V,W)$, there exists a unique linear continuous operator $L^*: W \to V$ (called the *adjoint* of $L$) such that
> $$
> (L(u),\,w)_W = (u,\,L^*(w))_V \qquad \forall\,u \in V,\;\forall\,w \in W\,.
> $$

## Hahn–Banach Theorem and Its Consequences

### Analytic Forms of Hahn–Banach

> [!theorem]
> **Theorem: Theorem 2.2 (Hahn–Banach, Analytic Form over $\mathbb{R}$)**
>
> Let $(V,+,\cdot)$ be a real vector space. Let $p: V \to \mathbb{R}$ be a function satisfying
> $$
> p(\lambda v) = \lambda\,p(v)\ \ \forall\,v\in V, \lambda>0,
> \qquad
> p(u+v) \le p(u)+p(v)\ \ \forall\,u,v\in V\,,
> $$
> (i.e. $p$ is a sublinear or quasi-norm). Let $M$ be a linear subspace of $V$ and let $\ell: M \to \mathbb{R}$ be a linear functional such that
> $$
> \ell(v) \le p(v) \qquad \forall\,v \in M\,.
> $$
> Then there exists an extension of $\ell$ to a linear functional $L: V \to \mathbb{R}$ (so $L|_M = \ell$) such that
> $$
> L(v) \le p(v) \qquad \forall\,v \in V\,.
> $$

> [!theorem]
> **Theorem: Theorem 2.4 (Hahn–Banach, Analytic Form over $\mathbb{C}$)**
>
> Let $(V,+,\cdot)$ be a complex vector space. Let $p: V \to \mathbb{R}$ be a sublinear function. Let $M$ be a linear subspace of $V$ and $\ell: M \to \mathbb{C}$ a linear functional such that
> $$
> \Re\{\ell(v)\} \;\le\; p(v) \qquad \forall\,v \in M\,.
> $$
> Then there exists an extension of $\ell$ to a linear functional $L: V \to \mathbb{C}$ such that
> $$
> \Re\{L(v)\} \le p(v)\qquad \forall\,v \in V\,.
> $$

> [!theorem]
> **Theorem: Theorem 3.1 (Hahn–Banach for Seminorms)**
>
> Let $(V,+,\cdot)$ be a real or complex vector space. Let $p: V \to \mathbb{R}$ be a seminorm (i.e. $p$ is sublinear and $p(\lambda v) = |\lambda|\,p(v)$ for all $\lambda$). Let $M$ be a subspace of $V$ and $\ell: M \to K$ a linear functional (over $K=\mathbb{R}$ or $\mathbb{C}$) such that
> $$
> |\ell(v)| \le p(v)\qquad \forall\,v \in M\,.
> $$
> Then there exists a linear extension $L: V \to K$ of $\ell$ such that
> $$
> |L(v)| \le p(v)\qquad \forall\,v \in V\,.
> $$

### Hahn–Banach in Normed Spaces and Consequences

> [!theorem]
> **Theorem: Theorem 4.1 (Hahn–Banach in a Normed Space)**
>
> Let $(V,\|\cdot\|_V)$ be a normed space over $K=\mathbb{R}$ or $\mathbb{C}$. Let $M$ be a subspace of $V$ and $\ell: M \to K$ a linear continuous functional (i.e. $\ell \in M'$). Then there exists a linear continuous functional $L: V \to K$ (i.e. $L \in V'$) such that
> $$
> L(v) = \ell(v)\quad \forall\,v \in M, \qquad \text{and}\qquad \|L\|_{V'} = \|\ell\|_{M'}\,.
> $$

> [!theorem]
> **Theorem: Theorem 4.3**
>
> Let $V \neq \{0\}$ be a normed space. Then for every nonzero $v \in V$, there exists some $L_v \in V'$ such that
> $$
> L_v(v) = \|v\|_V, \qquad \|L_v\|_{V'} = 1\,.
> $$
> Consequently, $V'$ (the dual space) is nonzero whenever $V$ is nonzero.

> [!theorem]
> **Corollary: Corollary 4.4**
>
> Let $V \neq \{0\}$ be a normed space. Then the norm of any vector can be computed as
> $$
> \|v\|_V = \sup_{\substack{L \in V' \\ L \neq 0}} \frac{|L(v)|}{\|L\|_{V'}} \qquad \forall\,v \in V\,.
> $$
> In particular, if $v\in V$ satisfies $L(v) = 0$ for every continuous linear functional $L \in V'$, then $v=0$.

> [!theorem]
> **Theorem: Theorem 4.5**
>
> Let $(V,\|\cdot\|_V)$ be a normed space over $K=\mathbb{R}$ or $\mathbb{C}$, and let $M$ be a closed proper subspace of $V$ (i.e. $M \subsetneq V$ is closed). Given any $v \in V \setminus M$, there exists a continuous linear functional $L_v \in V'$ such that
> $$
> L_v(u) = 0 \ \forall\,u \in M, \qquad L_v(v) = d(v, M) > 0, \qquad \|L_v\|_{V'} = 1\,,
> $$
> where $d(v,M) = \inf_{u\in M}\|v-u\|_V$ is the distance from $v$ to $M$.

> [!theorem]
> **Corollary: Corollary 4.6**
>
> Let $(V,\|\cdot\|_V)$ be a normed space and let $M$ be a closed proper subspace of $V$. For any $v \in V\setminus M$, with $d := d(v,M) > 0$, there exists a continuous linear functional $T_v \in V'$ such that
> $$
> T_v(u) = 0\quad \forall\,u \in M, \qquad T_v(v) = 1, \qquad \|T_v\|_{V'} = \frac{1}{d}\,.
> $$

> [!theorem]
> **Corollary: Corollary 4.7**
>
> Let $(V,\|\cdot\|_V)$ be a normed space and let $M$ be a subspace of $V$. If every continuous linear functional $L\in V'$ that vanishes on $M$ is identically zero, then $M$ is dense in $V$ (equivalently $M=\overline{M}=V$).

### Geometric Forms of Hahn–Banach

> [!theorem]
> **Theorem: Theorem 5.4 (Hahn–Banach, First Geometric Form)**
>
> Let $(V,\|\cdot\|_V)$ be a normed space over $K=\mathbb{R}$ or $\mathbb{C}$. Let $E$ and $F$ be two nonempty disjoint convex subsets of $V$, and assume that $E$ is open. Then there exists a closed hyperplane $H = \{L = \alpha\}$ (for some $L\in V'$ and $\alpha \in K$) that separates $E$ and $F$. In other words, there is $L \in V'$ and $\alpha \in \mathbb{R}$ such that
> $$
> L(v) \le \alpha \ \ \forall\,v \in E, \qquad L(w) \ge \alpha \ \ \forall\,w \in F\,.
> $$

> [!theorem]
> **Lemma: Lemma 5.5**
>
> Let $(V,\|\cdot\|_V)$ be a normed space over $K=\mathbb{R}$ or $\mathbb{C}$. Let $C \subset V$ be a convex open set containing $0_V$. Define the Minkowski functional of $C$ by
> $$
> \rho_C(v) := \inf\{\lambda > 0: \lambda^{-1} v \in C\}\,.
> $$
> Then $\rho_C: V \to [0,\infty)$ is a quasi-norm (sublinear and positively homogeneous), and moreover one has
> $$
> C \;=\; \{\,v \in V : \rho_C(v) < 1\,\}\,.
> $$

> [!theorem]
> **Lemma: Lemma 5.6**
>
> Let $(V,\|\cdot\|_V)$ be a normed space and let $C \subset V$ be a nonempty open convex proper subset. If $v_0 \in V \setminus C$, then there exists a continuous linear functional $L \in V'$ such that
> $$
> L(v) < L(v_0) \qquad \forall\,v \in C\,.
> $$
> In particular, the hyperplane $H = \{ v \in V : L(v) = L(v_0)\}$ separates the point $\{v_0\}$ and the set $C$.

> [!theorem]
> **Theorem: Theorem 5.7 (Hahn–Banach, Second Geometric Form)**
>
> Let $(V,\|\cdot\|_V)$ be a normed space over $K=\mathbb{R}$ or $\mathbb{C}$. Let $E$ and $F$ be two nonempty disjoint convex subsets of $V$, with $E$ closed and $F$ compact. Then there exists a closed hyperplane $H = \{L = \alpha\}$ (for some $L\in V'$ and $\alpha \in \mathbb{R}$) that *strictly* separates $E$ and $F$. That is, there exists $\varepsilon > 0$ and $L \in V'$ such that
> $$
> L(v) \le \alpha - \varepsilon \quad \forall\,v \in E, \qquad
> L(w) \ge \alpha + \varepsilon \quad \forall\,w \in F\,.
> $$

> [!theorem]
> **Corollary: Corollary 5.8**
>
> Let $(V,\|\cdot\|_V)$ be a normed space and let $A \subset V$ be a proper subspace ($A \neq V$). Then there exists a nonzero continuous linear functional $L \in V'$ such that $L(v) = 0$ for all $v \in A$.

## Baire Category and Banach’s Theorems

### Baire’s Theorem

> [!theorem]
> **Theorem: Theorem 1.1 (Baire Category Theorem)**
>
> Let $(X,d)$ be a complete metric space. If $(O_n)_{n\in\mathbb{N}}$ is a sequence of dense open subsets of $X$, then
> $$
> \bigcap_{n\in\mathbb{N}} O_n
> $$
> is dense in $X$ (and in particular is nonempty).

> [!theorem]
> **Corollary: Corollary 1.3**
>
> Let $(X,d_X)$ be a complete metric space which can be written as a countable union of closed sets: $X = \bigcup_{n\in\mathbb{N}} C_n$. Then
> $$
> \Omega := \bigcup_{n\in\mathbb{N}} \mathrm{Int}(C_n)
> $$
> is a dense open subset of $X$ (in fact $\Omega = X$). Equivalently, at least one of the closed sets $C_n$ must have a nonempty interior.

### Uniform Boundedness Principle

> [!theorem]
> **Theorem: Theorem 3.1 (Banach–Steinhaus Theorem)**
>
> Let $(V,\|\cdot\|_V)$ be a Banach space and $(W,\|\cdot\|_W)$ a normed space over the same field. Let $\{T_i: V \to W\}_{i\in I}$ be a family of continuous linear operators such that for each $v \in V$, the set $\{\|T_i(v)\|_W: i \in I\}$ is bounded. Then the operator norms of the $T_i$ are uniformly bounded; in fact
> $$
> \sup_{i\in I} \|T_i\|_{L(V,W)} < \infty\,.
> $$

> [!theorem]
> **Corollary: Corollary 3.2**
>
> Let $(V,\|\cdot\|_V)$ be a Banach space and $(W,\|\cdot\|_W)$ a normed space, and let $T_n: V \to W$ be a sequence of continuous linear operators. Assume that for each $v\in V$, the sequence $T_n(v)$ converges in $W$ to some limit denoted $T(v)$. Then the limit map $T: V \to W$ defined by $T(v) = \lim_{n\to\infty} T_n(v)$ is a continuous linear operator in $L(V,W)$. (In particular, pointwise limits of bounded linear maps are bounded linear.)

### Open Mapping Theorem

> [!theorem]
> **Theorem: Theorem 4.3 (Banach Open Mapping Theorem)**
>
> Let $(V,\|\cdot\|_V)$ and $(W,\|\cdot\|_W)$ be two Banach spaces over the same field $K$. If $T: V \to W$ is a surjective linear continuous operator, then $T$ is an open map.  In other words, there exists $\delta > 0$ such that
> $$
> T(B_V(0,1)) \supset B_W(0,\delta)\,,
> $$
> where $B_V(0,1)$ and $B_W(0,\delta)$ are the balls of radius $1$ and $\delta$ around $0$ in $V$ and $W$, respectively.

> [!theorem]
> **Corollary: Corollary 4.4**
>
> Let $(V,\|\cdot\|_V)$ and $(W,\|\cdot\|_W)$ be Banach spaces, and let $T: V \to W$ be a bijective linear continuous map. Then $T^{-1}: W \to V$ is also continuous.  (In particular, any bijective bounded linear operator between Banach spaces is an isomorphism of Banach spaces.)

### Closed Graph and Hellinger–Toeplitz Theorems

> [!theorem]
> **Theorem: Theorem 5.1 (Banach Closed Graph Theorem)**
>
> Let $(V,\|\cdot\|_V)$ and $(W,\|\cdot\|_W)$ be Banach spaces. Suppose $T: V \to W$ is a linear mapping such that the graph
> $$
> G_T := \{\,(v,w) \in V \times W : w = T v\,\}
> $$
> is a closed subset of the product space $V \times W$ (with the norm $N((v,w)) := \|v\|_V + \|w\|_W$). Then $T$ is continuous (bounded). Equivalently: if $T$ is a linear map for which $v_n \to v$ in $V$ and $T v_n \to w$ in $W$ together imply $w = T v$, then $T$ must be a bounded operator.

> [!theorem]
> **Theorem: Theorem 5.2 (Hellinger–Toeplitz Theorem)**
>
> Let $(H,(\cdot,\cdot))$ be a Hilbert space, and let $T: H \to H$ be a linear operator which is *symmetric*, meaning $(T v, w) = (v, T w)$ for all $v,w \in H$. Then $T$ is continuous (i.e. bounded as an operator on $H$).

## Projection on Convex Sets and Variational Inequalities

### Projection onto a Convex Set

> [!theorem]
> **Theorem: Theorem 2.1 (Projection onto a Closed Convex Subset)**
>
> Let $(H, (\cdot,\cdot))$ be a Hilbert space over $K=\mathbb{R}$ or $\mathbb{C}$, with induced norm $\|x\|_H = \sqrt{(x,x)}$. Let $K \subset H$ be a nonempty closed convex subset, and fix $u \in H$. Then there exists a unique $u_K \in K$ such that
> $$
> \|u - u_K\|_H = \inf_{v \in K} \|u - v\|_H\,.
> $$
> Moreover, this minimizing vector $u_K$ is characterized by the orthogonality condition
> $$
> (u - u_K,\; v - u_K) \;\le\; 0 \qquad \forall\,v \in K\,.
> $$
> In particular, defining $P_K: H \to H$ by $P_K(u) := u_K$, we obtain a mapping $P_K$ such that:
>
> 1. $P_K(H) = K$ (range is $K$);
> 2. $\|P_K(u_1) - P_K(u_2)\|_H \le \|u_1 - u_2\|_H$ for all $u_1,u_2 \in H$ ($P_K$ is $1$-Lipschitz, in fact nonexpansive).
> 3. $P_K$ is idempotent: $P_K(u) = u$ for all $u \in K$, and hence $P_K(P_K(u)) = P_K(u)$ for all $u \in H$.

### Stampacchia’s Theorem (Variational Inequality)

> [!theorem]
> **Theorem: Theorem 2.3 (Stampacchia’s Existence Theorem)**
>
> Let $(H,(\cdot,\cdot))$ be a real Hilbert space with dual $H'$ and induced norm $\|\cdot\|_H$. Let $K \subset H$ be a nonempty closed convex subset. Let $\ell \in H'$ be a continuous linear functional, and let $a(\cdot,\cdot): H \times H \to \mathbb{R}$ be a continuous bilinear form which is *coercive* and *symmetric* on $H$.  Then there exists a unique $u \in K$ such that
> $$
> a(u, v - u) \;\ge\; \langle \ell,\;v - u\rangle \qquad \forall\,v \in K\,,
> $$
> i.e. $u$ solves the variational inequality for $a$ and $\ell$ on the constraint set $K$.

### Lax–Milgram Theorem

> [!theorem]
> **Theorem: Theorem 2.6 (Lax–Milgram Theorem)**
>
> Let $(H,(\cdot,\cdot))$ be a real Hilbert space. Let $a(\cdot,\cdot): H \times H \to \mathbb{R}$ be a continuous bilinear form which is coercive (not necessarily symmetric). Let $\ell \in H'$ be a continuous linear functional on $H$. Then there exists a unique $u \in H$ such that
> $$
> a(u, v) = \langle \ell, v \rangle \qquad \forall\,v \in H\,.
> $$
> In other words, the linear operator $B: H \to H'$ defined by $v \mapsto [w \mapsto a(v,w)]$ is bijective, so for each $\ell \in H'$ there is a unique solution $u \in H$.
