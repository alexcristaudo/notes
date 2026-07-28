---
title: MAM1019H Exam Questions
type: test
tags: [latex]
status: needs-review
source: latex
assets: [ExamNotes.tex]
---
> [!warning]
> Compiled from **ExamNotes.tex** by the built-in LaTeX renderer
> The original .tex is attached above.

# MAM1019H Exam Questions

{Screenshot 2022-11-07 at 21.07.38.png}

We can also prove injectivity with: (Note when we say $f(a)=f(b)$, we must mention $a,b\in D_f$)
Suppose $X \ne Y$, for any $X,Y\in \mathcal{P}(\mathbb{N})$. Then, WLOG, we may assume $\exists x\in X $ such that $x \notin Y$. Then $f(x) \in g(X)$. Now if $f(x) \in g(Y)$, then $\exists y\in Y$ such that $f(y)=f(x)$. But $f(y)=f(x) \Rightarrow x=y$ and $x\notin y$ so we must have that $f(x) \notin g(Y) \Rightarrow g(X) \ne g(Y)$
{Screenshot 2022-11-07 at 22.37.44.png};

    {Screenshot 2022-11-07 at 21.43.20.png}
{Screenshot 2022-11-07 at 22.05.09.png}
{Screenshot 2022-11-07 at 22.10.24.png}
{Screenshot 2022-11-07 at 22.15.38.png}
Another possible way is: $f:\mathcal{P}(\mathbb{N}) \to X$ defined by $f(X)=(x_1, x_2, x_3, ...)$ where
    $$
    x_i = 
    $\begin{cases}
        1 & \text{if } i\in A \\
        0 & \text{otherwise}
    \end{cases}$
    $$
When using CSB, state that $|A| \le |B|$ and $|B| \le |A| $ so $|A|=|B|$ rather than mentioning injectives

graphics*[scale = 1.2]{Screenshot 2022-11-07 at 22.44.14.png}
graphics*[scale = 1.2]{Screenshot 2022-11-07 at 22.57.07.png}

For (3), we define $f:\mathcal{F} \to \mathcal{P}(\mathbb{N})$ by $f(g) = \{n\in \mathbb{N}:g(n)=1\}$ and show this is bijective

For (4), $f:\mathcal{F} \to \mathcal{P}(\mathbb{R})$ then $\mathbb{R} < \mathcal{P}(\mathbb{R})$
We can also provide an injection $\mathbb{R} \to \mathcal{F}$, then assume a surjection exists. Then consider
    $$
        h(x) = 
        $\begin{cases}
            1 & \text{if } g(x)(x) = 0 \\
            0 & \text{otherwise}
        \end{cases}$
    $$

Here, $g(x)$ returns some function and we take that function at $x$. Every $x\in \mathbb{R}$ differs to this function so not surjective

graphics*[]{Screenshot 2022-11-07 at 23.09.17.png}
Suppose $g'(a) = g'(b)$. Then $x_a = x_b \Rightarrow x_a\in g^{-1}({a})$ and $x_a \in g^{-1}(b)$. But $a$ can only map to one element, so $a=b$
graphics*[scale = 0.4]{Screenshot 2022-11-07 at 23.17.00.png}

graphics*[scale = 0.5]{Screenshot 2022-11-07 at 23.17.41.png}

graphics*[]{Screenshot 2022-11-07 at 23.34.16.png}
When checking if something is well ordered, first check linearly ordered. Then try provide order isomorphism to $\mathbb{N}$. We have the implication if $(P, \le)$ is well ordered, and $P \cong Q$, then $(Q, \preceq)$ is well ordered. So if $(Q, \preceq)$ is not well ordered, there is no isomorphism. If we cannot provide isomorphism, it can still be well ordered. Try the subset method then. With isomorphic method, dont need to show linearly ordered but do for using the definition
        graphics*[scale = 0.58]{Screenshot 2022-11-08 at 15.24.43.png}
Unless otherwise stated, can use $s(n)=n+1=1+n, 1\cdot n=n=n\cdot 1...$ all have been proven already + associativity, commutativity, distributivity of addition
graphics*[scale = 0.6]{Screenshot 2022-11-08 at 20.15.33.png}
If unsure, include a proper associative proof

graphics*[scale = 0.6]{Screenshot 2022-11-08 at 20.20.51.png}

graphics*[scale = 0.6]{Screenshot 2022-11-08 at 20.29.53.png}

graphics*[scale = 1.2]{Screenshot 2022-11-08 at 20.37.06.png}
