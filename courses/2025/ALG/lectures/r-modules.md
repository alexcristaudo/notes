---
title: R Modules
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [R-Modules.tex]
---
> [!warning]
> Compiled from **R-Modules.tex** by the built-in LaTeX renderer — Unhandled commands left as-is: \overbrace, \underbrace
> The original .tex is attached above.

# R-Modules

## Definition

> [!definition]
> **Definition**
>
> {R-Modules}{}
> Let $R$ be a ring. A module over $R$ is a triple $(M, +, \cdot )$ consisting of a set $M$ and binary operations
>
>     $+:M\times M \to M$, \ \ $\cdot :R\times M\to M$
>
> such that
>
> 1. $(M, +)$ is an abelian group (with identity, say, $0$)
> 2. For all $r,r_1,r_2\in R$ and all $m,m_1,m_2\in M$, the operation $\cdot $ satisfies              $(r_1+r_2)\cdot m=r_1 \cdot m+r_2\cdot m$
> $r\cdot (m_1+m_2)=r\cdot m_1+r\cdot m_2$
> $r_1 \cdot (r_2 \cdot m)=(r_1 r_2)\cdot m$
> $1_R \cdot m=m$          This is called a left $R$-module (scalar multiplying on the left). Similarly, a right $R$-module multiplies on the right

Note that we dont need to require $M$ to be abelian, it follows from the properties that

    $(1+1)(a+b)=a+b+a+b$ but also
$(1+1)(a+b)=(1+1)a+(1+1)b=a+a+b+b$ and so
$a+b+a+b = a+a+b+b$ so $b+a=a+b$

Some examples of an R-module include:
\begin{enumerate}
     If $R = F$ is a field, then an $F$-module is a vector space over $F$
     If $R=\mathbb{Z}$, then a $\mathbb{Z}$-module is an abelian group where $\cdot :\mathbb{Z} \times A \to A$ maps

        $(n,a) \mapsto $\begin{cases}
            \overbrace{a+a+...+a}^{n  copies} & n>0
0 & n=0
-(\underbrace{a+a+...+a}_{n  copies}) & n < 0
        \end{cases}$$
    \end{center}
    \item The trivial $R$-module is the $R$-module with the trivial abelian group $A = \{0\}$. The action is the just $r\cdot 0=0$
    \item A ring $R$ is an $R$-module, with the scalar multiplication being the multiplication for the ring
    \item $R^n$ is an $R^{n-1}$-module, viewed as 
\end{enumerate}
\newpage 
\section{Homomorphisms}

> [!definition]
> **Definition**
>
> {Homomorphism}{} \\
> Let $R$ be a ring (fixed) and $A, A'$ be abelian groups. Then a module homomorphism is a map $f: A\to A'$ such that
> \begin{itemize}
>     \item $f(a+b)=f(a)+f(b)$
>     \item $f(ra)=rf(a)$
> \end{itemize}
> (that is, it is a homomorphism of abelian groups with the added condition that $f(ra)=rf(a)$)

~\\
Note that an R-module with abelian group $A$ is initial and terminal (in the category $\text{R-Mod}$) must have a unique homomorphism to every other R-module with abelian group $A$. Just as is the case with the category $\text{Ab}$, this is the trivial R-module \\ ~\\
The zero homomorphism is defined as
\[
\begin{tikzcd}[column sep=huge, row sep=huge]
A \arrow[r, "0"] & B 
\end{tikzcd}
\]
\begin{center}
    $a \mapsto 0_B$
\end{center}

\section{Kernels and Images}

> [!definition]
> **Definition**
>
> {Kernels and Images}{}\\
>     Let $f: A\to B$ be an $R$-module homomorphism. Then
>     \begin{center}
>         $\text{Im} (f) = \{b \in B: \exists a\in A, f(a)=b\}$ \\
>         $\ker (f)=\{x \in A:f(x)=0\}$
>     \end{center}

\section{Submodules}

> [!definition]
> **Definition**
>
> {Submodules}{} \\
>   Let $M$ be an $R$-module and $N \subseteq M$ (denoted $N \le M$) if it is a subgroup of $(M, +)$ and $r\cdot n\in N$ for all $r\in R, n\in N$. Equivalently, a subset $N \subseteq M$ is a submodule if, for all $a,b \in N$ and $r \in R$
>   \begin{enumerate}
>       \item $a+b \in N$
>       \item $ra \in N$
>   \end{enumerate}
>   We have $N$ is a a subgroup of $(M, +)$ iff for all $a,b \in N$, $a-b\in N$. But if the 2 conditions above hold, then for $r = -1$ (the additive inverse of $1$, which is guaranteed to be in the ring), then, by distributivity, $(1+(-1))\cdot a=a+(-1)\cdot a=0$ so $(-1)\cdot a=-a$, it means that for $a,b \in N$, then $a-b \in N$ and $N$ is a subgroup

> [!theorem]
> **Lemma**
>
> {}{}\\
>     $\text{Im}(f)$ is a submodule of $B$ and $\ker (f)$ is a submodule of $A$

\begin{prf}{}{}
    \begin{enumerate}
        \item For $f(a), f(b) \in \text{Im}(f)$, since $f$ is a homomorphism, $f(a)+f(b)=f(a+b) \in \text{Im}(f)$. Similarly, $rf(a) = f(ra) \in \text{Im}(f)$
        \item For $a,b\in \ker (f)$, $f(a+b)=f(a)+f(b)=0$ so $a+b \in \ker (f)$. $f(ra)=rf(a)=0$ so $ra \in \ker (f)$
    \end{enumerate}
\end{prf}

> [!theorem]
> **Lemma**
>
> {R-Modules}{}\\
>     $\text{Im}(f)$ and $\ker (f)$ form $R$-modules, with the induced scalar multiplication

\begin{prf}{}{}\\
    Property (2) above holds as $A$ and $B$ are $R$-modules with $\text{Im}(f) \subseteq B$ and $\ker (f) \subseteq A$. We have shown above that  $\cdot_B :R\times \text{Im}(f) \to \text{Im}(f)$ and $\cdot _A:R \times \ker (f)\to \ker (f)$ are well-defined. We need that $(\ker (f), +)$ and $(\text{Im}(f), +)$ are abelian groups. From groups, we know they form groups and since $(A,+)$ and $(B, +)$ are abelian, so are these
\end{prf}

\section{The Category R-Mod}
The R-modules form a category, denoted R-Mod, with morphisms being R-module homomorphisms. Now, a pointed category in category theory is a category that possesses a zero object (initial and terminal). So, since the trivial $R$-module is both initial and terminal, R-Mod is a pointed category. Pointed categories have kernels and cokernels, so we can study this notion in $R$-modules

> [!definition]
> **Definition**
>
> {Category Theory Definition}{}
> \begin{enumerate}
>     \item The kernel of a morphism $f: X \to Y$ is a pair $(K,k)$ where $K$ is an object and $k:K\to X$ is a morphism such that $fk=0$, and for any other morphism $g: Z \to X$ such that $fg=0$, there exists a unique morphism $h:Z \to K$ such that $kh=g$
>     \item The cokernel of a morphism $f:X\to Y$ is a pair $(C,c)$ where $C$ is an object and $c:Y \to C$ is a morphism such that $cf=0$ and for any other morphism $g: Y \to Z$ such that $gf=0$, there exists a unique morphism $h:C \to Z$ such that $hc=g$
> \end{enumerate}

So if $\ker (f)=(K,k)$
\[
\begin{tikzcd}[column sep=huge, row sep=huge]
K \arrow[r, "k"] & X \arrow[r, "f"] & Y 
\end{tikzcd}
\]
This satisfies:
\[
\begin{tikzcd}[row sep=large, column sep=large]
& Z \arrow[d, "g"] \arrow[dl, dashed, "h"] \\
K  \arrow[r, "k"'] & X \arrow[r, "f"] & Y
\end{tikzcd}
\]
Then in $R$-modules, for kernel $(\ker(f), k)$ where $k$ is the inclusion map, we get the universal property of kernels:
\[
\begin{tikzcd}[row sep=large, column sep=large]
& K' \arrow[d, "k'"] \arrow[dl, dashed, "h"] \\
\ker (f)  \arrow[r, hook, "k"'] & A \arrow[r, "f"] & B
\end{tikzcd}
\]
such that $fk=0$ and $fk'=0 \Rightarrow \exists !h:K' \to \ker (f)$ such that $kh=k'$

\begin{prf}{}{}\\
    Clearly $(fk)(a) = f(a)=0$ for $a\in \ker (f)$. Now suppose that $fk'=0$. We want some $h:K' \to \ker (f)$ such that $kh=k' \iff (kh)(a)=k'(a) \iff h(a)=k'(a)$. So, define $h$ like this. This proves the uniqueness if we can show that $k'(a) \in \ker (f)$. That follows from the fact that $fk'=0$.
\end{prf}
\section{Quotient R-Modules}
Before defining a quotient module, recall that in groups, if $N \triangleleft A$, then $A/N$ is a quotient group (the group of cosets)

Now let $T$ be a submodule of $A$. Then it is a subgroup, and every subgroup of an abelian group is normal. So $A/T$ is an abelian group, and we can show it is an $R$-module: \\
Given a submodule $T \subseteq A$, the quotient module $A/T$ is formed by taking the set of cosets $A/T=\{a+T:a\in A\}$ with the operations
\begin{itemize}
    \item $(a+T)+(b+T)=(a+b)+T$ 
    \item $r \cdot (a+T)=(r\cdot a)+T$
\end{itemize}
This gives an R-module structure. \\ Note that the quotient $A/T$ is the quotient of groups under $+$ with the added condition $r\cdot (m+N)=rm+N$. This operation can be shown to be well-defined and makes $A/T$ an $R$-module
\\ ~\\ We will use notation $[a]$ for $a + T$

> [!theorem]
> **Theorem**
>
> {Universal Property of Quotient Modules}{}\\
>     \[
> \begin{tikzcd}[row sep=large, column sep=large]
> T \arrow[r, hook, "i"] & A \arrow[rr, "q"] \arrow[dr, "f"] & & A/T \arrow[dl, dashed, "h"] \\ & & B
> \end{tikzcd}
> \]
> For all $f: A \to B$, we have that $fi=0 \Rightarrow \exists !h:A/T \to B$ such that $hq=f$

\begin{prf}{}{}\\
We want that $hq(a)=f(a) \iff h([a])=f(a)$. Then this is how we define $h$, with if $[a]=[b]$, then $a-b \in T$ so $f(a-b)=0 \iff f(a)=f(b)$ so this is well-defined. Moreover, this definition is clearly unique
    
\end{prf}

\section{Cokernels}
Recall the diagram for cokernels is:

    \[
\begin{tikzcd}[row sep=large, column sep=large]
X \arrow[r, "f"] & Y \arrow[r, "c"] \arrow[dr, "g"] & C \arrow[d, dashed, "h"] \\ & & Z
\end{tikzcd}
\]
such that $cf=0$ and $gf=0 \Rightarrow \exists  !h:C\to Z$ such that $hc=h$. Before showing what this is in $R$-modules, notice that

    \[
\begin{tikzcd}[row sep=large, column sep=large]
A \arrow[rr, "f"] \arrow[dr, "e"] & & B \arrow[r] & B/\text{Im}(f) \\ & \text{Im}(f) \arrow[ur, hook, "i"]
\end{tikzcd}
\]
with $e(a)=f(a)$ (surjectivity) and $i$ is injective
~\\ We can extend this diagram to:
    \[
\begin{tikzcd}[row sep=large, column sep=large]
A \arrow[rr, "f"] \arrow[dr, "e"] & & B \arrow[rr, "q"] \arrow[dr, "q'"] & & B/\text{Im}(f) \arrow[dl, dashed, "h"] \\ & \text{Im}(f) \arrow[ur, hook, "i"] & & Q'
\end{tikzcd}
\]
And this satisfies the conditions:
\begin{prf}{}{}\\
    We need to show
    \begin{enumerate}
        \item $qf = 0$
        \item $\forall q':B \to Q'$, $q'f=0 \Rightarrow \exists !h:B/\text{Im}(f) \to Q'$ such that $hq=q'$
    \end{enumerate}
    To do this:
    \begin{enumerate}
        \item $qf(a) = [f(a)] = \text{Im}(f) = 0_{B/\text{Im}(f)}$
        \item We want $(hq)(b) = q'(b) \iff h([b])=q'(b)$. Thus define $h$ as such, and notice that $[a]=[b] \Rightarrow a-b \in \text{Im}(f) \Rightarrow a-b=f(x) \Rightarrow q'(a-b)=q'(f(x))=0 \Rightarrow q'(a)=q'(b) \Rightarrow h([a])=h([b])$
    \end{enumerate}
\end{prf}
So we can define

> [!definition]
> **Definition**
>
> {Cokernels in R-Modules}{} \\
> Let $R$ be a ring and $f: A \to B$ be a homomorphism of $R$-modules.
> \begin{center}
>     $\text{coker}(f)=(B/\text{Im}(f), q)$ where $q$ is the canonical map $q:B \to B/ \text{Im}(f)$
> \end{center}

\newpage
\section{Products and Coproducts}

> [!theorem]
> **Theorem**
>
> {About projections and injections}{} \\
> Let $R$ be a ring and $\{A_i\}_{i\in I}$ a nonempty family of R-modules, $\prod _{i \in I}A_i$ as the direct product, $\coprod _{i\in I}A_i$ be the direct sum
> \begin{enumerate}
>     \item $\prod _{i \in I}A_i$ is an R-module with the action defined by $r\cdot \{a_i\}_{i \in I} = \{r\cdot a_i\}_{i\in I}$
>     \item $\coprod _{i \in I}A_i$ is a submodule of $\prod _{i \in I}A_i$
>     \item For each $k \in I$, the canonical projection $\pi _k:\prod _{i\in I}A_i \to A_k$ is an R-module epimorphism
>     \item For each $k \in I$, the canonical projection $\iota _k: A_k \to \coprod _{i \in I} A_i$ is an R-module monomorphism
> \end{enumerate}

> [!definition]
> **Definition**
>
> {Product and Coproduct}{}\\
>     Let $R$ be a ring and $(A_i)_{i \in I}$ be a family of $R$-modules. The (external) direct product of $(A_i)_{i\in I}$ is the module $\prod \limits _{i\in I}A_i$. The (external) coproduct is $\coprod \limits _{i \in I}A_i$

Our claim is that if $I = \{1,2,...,n\}$ is finite, then our direct product and coproduct coincide and we will write this as a direct sum
\section{Direct Sums}

> [!definition]
> **Definition**
>
> {Categorical definition}{}\\
> Let $A$ and $B$ be $R$-modules. The direct sum $A \oplus B$ is the set $A \oplus B$, equipped with maps
>
> \[
> \begin{tikzcd}
> A \arrow[r, shift left=1.5ex, "\iota_1"] & A \oplus B \arrow[l, shift left=1.5ex, "\pi_1"] \arrow[r, shift left=1.5ex, "\pi_2"] & B \arrow[l, shift left=1.5ex, "\iota_2"]
> \end{tikzcd}
> \]
> with the conditions
> \begin{enumerate}
>     \item $\pi _1 \iota _1=1_A$
>     \item $\pi _2 \iota _2=1_B$
>     \item $\pi _1 \iota _2=0$
>     \item $\pi _2 \iota _1=0$
>     \item $\iota _1 \pi_1 + \iota _2\pi _2=1_{A\oplus B}$
> \end{enumerate}
> then the construction in R-mod involves
> \begin{enumerate}
>     \item $A \oplus B = A \times B$
>     \item $\pi _1(a,b)=a$
>     \item $\pi _2(a,b)=b$
>     \item $\iota _1(a)=(a,0)$
>     \item $\iota _2(b)=(0,b)$
> \end{enumerate}
> satisfies the property

\newpage

> [!theorem]
> **Theorem**
>
> {The universal property}{}\\
>     In $R$-modules, a direct sum $A \oplus B$ satisfies the universal property in that for all $R$-modules $C$ and any homomorphism $f:C \to A$ and $g:C \to B$, there exists a unique homomorphism $h:C \to A \oplus B$ such that $\pi _1 h=f$ and $\pi _2h = g$
>
>
> \[
> \begin{tikzcd}[column sep=huge, row sep=huge]
> A \arrow[r, shift left=2ex, "\iota_1"] &
> A \oplus B \arrow[l, shift left=2ex, "\pi_1"'] \arrow[r, shift left=2ex, "\pi_2"] &
> B \arrow[l, shift left=2ex, "\iota_2"] \\
> & C \arrow[ul, bend left=30, "f"] \arrow[u, dashed, "h"] \arrow[ur, bend right=30, "g"'] &
> \end{tikzcd}
> \]

\begin{prf}{}{}\\
Let $C $ be an $R$-module and $g: C \to B$ and $f: C \to A$. We can define $h: C \to A\oplus B$ by: $h(c) = (f(c), g(c))$. But a categorical proof, without using elements involves letting $ h = \iota _1 f + \iota _2g$ then it satisfies the properties. To prove uniqueness, suppose we have another $h': C \to A \oplus B$ such that $\pi _1h'=f$ and $\pi _2h' = g$. Then
\begin{center}
    $\pi _1h=\pi _1h' \Rightarrow \iota _1\pi _1h=\iota _1\pi_1h'$ \\ 
    $\pi _2h=\pi _2h' \Rightarrow \iota _2\pi _2h=\iota _2\pi_2h'$ \\ 
    So $(\iota _1\pi _1 +\iota _2 \pi _2 )h = (\iota _1\pi _1+\iota _2\pi _2)h' \Rightarrow h=h'$
\end{center}

\end{prf}

This uniqueness proof gives us a notion of jointly epic

> [!definition]
> **Definition**
>
> {Jointly epic and monic}{}\\
> $f$ and $g$ are joitly epic if for all $u,v:B \to C$, $uf=vf$ and $ug=vg \Rightarrow u=v$
> \[
> \begin{tikzcd}[column sep=huge, row sep=huge]
> A \arrow[r, "f"] & B \arrow[r, shift left=1.2ex, "u"] \arrow[r, shift right=1.2ex, "v"'] & C \\
> A' \arrow[ur, "g"'] &
> \end{tikzcd}
> \]
>
> $f$ and $g$ are jointly monic iff for all $u,v:A \to B,$
> $
> \begin{rcases*}
> fu = fv  \\ gu = gv
> \end{rcases*} \Rightarrow u=v
> $
>
> \[
> \begin{tikzcd}[column sep=huge, row sep=huge]
> & & C \\ A \arrow[r, shift left=1.2ex, "u"] \arrow[r, shift right=1.2ex, "v"'] & B \arrow[ur, "f"] \arrow[dr, "g"] & \\ & & D
> \end{tikzcd}
> \]

> [!theorem]
> **Lemma**
>
> {}{}
> \begin{enumerate}
>     \item $\iota_1 $ and $\iota _2$ are jointly epic
>     \item $\pi _1$ and $\pi _2$ are jointly monic
>     \item $\pi _1 $ and $\pi _2$ are split epimorphisms
>     \item $\iota _1$ and $\iota _2$ are split monomorphisms
> \end{enumerate}

> [!definition]
> **Definition**
>
> {Coproduct of A and B}{}\\
>
> \[
> \begin{tikzcd}[column sep=huge, row sep=huge]
> & C & \\ A \arrow[r, "\iota _1"] \arrow[ur, "f"'] & A+B \arrow[u, dotted, "h"] & B \arrow[l, "\iota _2"] \arrow[ul, "g"]
> \end{tikzcd}
> \]
> satisfies the universal property that for all $f: A \to C, g:B \to C$ there exists a unique $h:A+B \to C$ where $h \iota _1=f$ and $h\iota _2 = g$
> We have the same property when $A+B=A \oplus B$

> [!definition]
> **Definition**
>
> {Directed Sum Diagram}{}\\
> If we have an R-module $C$ with the 5 directed sum properties,
> \[
> \begin{tikzcd}
> A \arrow[r, shift left=1.5ex, "\iota_1"] & C \arrow[l, shift left=1.5ex, "\pi_1"] \arrow[r, shift left=1.5ex, "\pi_2"] & B \arrow[l, shift left=1.5ex, "\iota_2"]
> \end{tikzcd}
> \]
> Then we call this diagram a Direct sum diagram of $R$-modules

> [!theorem]
> **Theorem**
>
> {}{}
>
> \[
> \begin{tikzcd}[row sep=6em, column sep=8em]
>  &
> C \arrow[dl, bend right=50, "\pi _1"'] \arrow[dr, bend left=50, "\pi _2"] \arrow[dd, dotted, bend right = 20, "\varphi"] & \\
> A \arrow[ur,  "\iota_1"] \arrow[dr, "\iota _1'"'] & & B \arrow[ul, "\iota _2"'] \arrow[dl,  "\iota _2 '"'] \\ & C' \arrow[ul, bend left=50, "\pi _1 '"'] \arrow[ur, bend right=50, "\pi _2 '"] \arrow[uu, dotted, bend right = 20, "\varphi '"']
> \end{tikzcd}
> \]
> Suppose we have 2 direct sum diagrams. Then there exists an isomorphism between $C$ and $C'$. That is, there are homomorphisms $\varphi :C \to C'$ and $\varphi ':C'\to C$ such that $\varphi \varphi ' = 1_{C'}$ and $\varphi ' \varphi =1_C$

\begin{prf}{}{}\\
We have shown $\varphi $ and $\varphi ' $ exist. Now
\begin{center}
    $\pi _1 ' \varphi \varphi ' = \pi _1 \varphi '=\pi _1'=\pi _1' 1_{C'}$ \\ 
    $\pi _2 ' \varphi' \varphi  = \pi _2 \varphi '=\pi _2'=\pi _2' 1_{C'}$
\end{center}
Then since $\pi _1'$ and $\pi _2'$ are jointly monic, $\varphi \varphi ' = 1_{C'}$. The other direction follows similarly. Can also try prove using jointly epic of $\iota $'s
    
\end{prf}

> [!theorem]
> **Theorem**
>
> {}
> In a direct sum diagram
> \[
> \begin{tikzcd}
> A \arrow[r, shift left=1.5ex, "\iota_1"] & A \oplus B \arrow[l, shift left=1.5ex, "\pi_1"] \arrow[r, shift left=1.5ex, "\pi_2"] & B \arrow[l, shift left=1.5ex, "\iota_2"]
> \end{tikzcd}
> \]
> We have
> \begin{enumerate}
>     \item $(A, \iota _1)$ is the kernel of $\pi _2$
>     \item $(B, \iota _2)$ is the kernel of $\pi _1$
>     \item $(B, \pi _2)$ is the cokernel of $\iota _1$
>     \item $(A, \pi _1)$ is the cokernel of $\iota _2$
> \end{enumerate}
> TODO when i get waht the fuck a kernel is

\section{Extended Direct Sums}
Clearly we can generalise to a finite number of R-modules with index set $I$, each with projections and injections with conditions
\begin{itemize}
    \item $\pi _i \iota _i = 1_{A_i}$
    \item $\pi _i \iota _j = 0$ for $i \ne j$
    \item $\sum \iota _i \pi _i = 1_{\oplus _{i \in I}A_i}$
\end{itemize}

\[
\begin{tikzcd}
A_i \arrow[r, shift left=1.5ex, "\iota_i"] & \oplus_{i \in I}A_i \arrow[l, shift left=1.5ex, "\pi_i"]
\end{tikzcd}
\]

Now an $n$-tuple $(a_1, a_2,...,a_n)$ can be thought of as a map $f:I \to \coprod_{i \in I} A_i$, $i \mapsto (a_i, i)$ for $a_i \in A_i$. So our set becomes $\{f:I \to \coprod_{i \in I} A_i : f(i)\in A_i\}$ with operations $(f+g)(i) = f(i) + g(i)$ and $(rf)(i) = r(f(i))$. Now let $I$ be infinite. We know $\prod _{i \in I} = \{f:I \to \coprod_{i \in I} A_i : f(i)\in A_i\}$. In this scenario, we define $\pi _i(f) = f(i)$ and $\iota _i:A_i \to \oplus _{i \in I}A_i$ will be defined as
$\iota _i(x_i)(j) = $\begin{cases}
    0 & i \ne j \\ x_i & i=j
\end{cases}$$
and our external direct sum = coproduct $\sum _{i \in I}A_i = \{f:I \to \coprod_{i \in I} A_i : f(i)\in A_i\ , \{i \in I:f(i) \ne 0\} \text{ is finite}\}$
