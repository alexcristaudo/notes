---
title: Riemann--Stieltjes Integration and Expectation in Statistics
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [stieltjies.tex]
---
> [!warning]
> Compiled from **stieltjies.tex** by the built-in LaTeX renderer — Unhandled commands left as-is: \title, \author, \date, \em, \bf
> The original .tex is attached above.

# Riemann--Stieltjes Integration and Expectation in Statistics

\title{Riemann--Stieltjes Integration and Expectation in Statistics}
\author{}
\date{}

## Introduction

The {\em Riemann--Stieltjes integral} extends the familiar Riemann integral by integrating a function $f(x)$ with respect to another function $g(x)$.  In fact, the Riemann--Stieltjes integral $\int_a^b f(x)\,dg(x)$ is defined via Riemann sums of the form
$$
\sum_{i=1}^n f(c_i)\bigl[g(x_i)-g(x_{i-1})\bigr],
$$
and reduces to the usual Riemann integral when $g(x)=x$.  Thus it generalizes the Riemann integral.  This added generality is useful in probability and statistics: for instance, it provides a unified framework for expectations of both discrete and continuous distributions.

## Definition of the Riemann--Stieltjes Integral

> [!definition]
> **Definition: Riemann--Stieltjes Integral**
>
> Let $f$ and $g$ be real-valued functions on the interval $[a,b]$.  A {\em partition} $P$ of $[a,b]$ is a finite sequence $a = x_0 < x_1 < \cdots < x_n = b$.  For each subinterval $[x_{i-1},x_i]$, pick a sample point $c_i \in [x_{i-1},x_i]$.  Then the Riemann--Stieltjes sum is
> $$
> S(P,f,g) \;=\; \sum_{i=1}^n f(c_i)\,\bigl[g(x_i)-g(x_{i-1})\bigr].
> $$
> If, as the mesh of the partition goes to zero, the sums $S(P,f,g)$ converge to a limit $A$ that is independent of the choice of points $c_i$, this limit is the Riemann--Stieltjes integral of $f$ with respect to $g$, denoted
> $$
> \int_a^b f(x)\,dg(x) \;=\; \lim_{\|P\|\to 0} S(P,f,g).
> $$
> Typically one assumes $g$ is a monotone (or more generally bounded-variation) function, which ensures existence of the integral in many cases.

By construction, if $g(x)=x$, the Riemann--Stieltjes integral reduces to the ordinary Riemann integral.  More generally, if $g$ is differentiable with derivative $g'(x)$, then
$$
\int_a^b f(x)\,dg(x) 
=\int_a^b f(x)\,g'(x)\,dx,
$$
when $g'$ is Riemann-integrable.  This shows that Riemann--Stieltjes can be thought of as a change-of-variables in integration.  However, crucially, the definition does not require $g$ to be differentiable or even continuous.  For example, if $g$ has a jump discontinuity at a point $s$, then $\int_a^b f(x)\,dg(x)$ picks up the value $f(s)$ times the jump in $g$ at $s$ (assuming $f$ is continuous at $s$).  In the extreme case of a single jump of size 1 at $s$, one obtains $\int_a^b f\,dg=f(s)$.  This observation underlies how discrete distributions are handled via Stieltjes integrals in probability.

## Properties

The Riemann--Stieltjes integral shares many properties with the Riemann integral.  It is linear in the integrand: for constants $\alpha,\beta$,
$$
\int_a^b (\alpha f(x) + \beta h(x))\,dg(x) = \alpha\int_a^b f(x)\,dg(x) + \beta\int_a^b h(x)\,dg(x).
$$
If $g$ is nondecreasing, then $\int_a^b f\,dg$ exists whenever $f$ is continuous (or more generally when $f$ has at most jump discontinuities distinct from those of $g$).  A simple sufficient condition is: if $f$ is continuous and $g$ is of bounded variation on $[a,b]$, then the Riemann--Stieltjes integral exists.

> [!theorem]
> **Theorem: Integration by Parts**
>
> If $f$ and $g$ are such that the Riemann--Stieltjes integrals below exist, then the following integration-by-parts formula holds:
> $$
> \int_a^b f(x)\,dg(x)
> = f(b)\,g(b) - f(a)\,g(a) - \int_a^b g(x)\,df(x).
> $$

 This generalizes the usual integration-by-parts.  For example, if $g$ is differentiable, then $df(x)=f'(x)\,dx$ and one recovers the standard formula $\int f\,dg = f\,g - \int g\,df$.  Integration by parts is often useful in probability, for instance in relating expectation and distribution functions.

## Stieltjes Integration in Statistics

In probability theory, the Riemann--Stieltjes integral provides a unified definition of expectation for any real-valued random variable (discrete, continuous, or mixed).  Let $X$ be a random variable with cumulative distribution function (CDF) $F(x)=P(X\le x)$.  If $f$ is any function (e.g.\ $f(x)=x$ for expectation), and the integral below exists, then the expected value of $f(X)$ is defined by the Stieltjes integral with respect to $F$:
$$
\mathbb{E}[f(X)] \;=\; \int_{-\infty}^\infty f(x)\,dF(x).
$$
This definition works regardless of whether $X$ has a probability density function.  Indeed, if $F$ is differentiable with density $p(x)=F'(x)$, this reduces to the familiar integral $\int f(x)p(x)\,dx$.  But if $X$ is discrete or has jumps, the Stieltjes form still applies.  In particular, for any random variable $X$ with CDF $F$, the identity
$$
\mathbb{E}[f(X)] \;=\; \int_{-\infty}^\infty f(x)\,dF(x)
$$
holds in full generality.  For example, the $n$th moment $\mathbb{E}[X^n]=\int_{-\infty}^\infty x^n\,dF(x)$ always makes sense if $F$ is any CDF.

## Examples of Expected Values via Stieltjes Integrals

> [!example]
> **Example: Discrete Distribution**
>
> Suppose $X$ is a discrete random variable taking values $x_1,\dots,x_k$ with probabilities $p_1,\dots,p_k$.  Its CDF $F(x)$ is a step function with jumps of size $p_i$ at $x_i$.  By the step-function property, the Stieltjes integral for the expectation becomes a sum of jumps:
> $$
> \mathbb{E}[X]
> = \int_{-\infty}^\infty x\,dF(x)
> = \sum_{i=1}^k x_i\bigl(F(x_i)-F(x_i^-)\bigr)
> = \sum_{i=1}^k x_i\,p_i,
> $$
> since $F(x_i)-F(x_i^-)=p_i$.  This recovers the usual formula for the mean of a discrete distribution.  For instance, if $P(X=0)=1/2$ and $P(X=1)=1/2$, then $F(x)$ jumps by $1/2$ at $0$ and by $1/2$ at $1$, and the Stieltjes integral gives $\mathbb{E}[X]=0\cdot\tfrac12 + 1\cdot\tfrac12 = \tfrac12$.

> [!example]
> **Example: Continuous Distribution**
>
> Let $X$ be uniformly distributed on $[0,1]$.  Then $F(x)=x$ for $0\le x\le 1$ (and $0$ for $x<0$, $1$ for $x>1$).  We compute
> $$
> \mathbb{E}[X]
> = \int_{-\infty}^\infty x\,dF(x)
> = \int_{0}^1 x\,d(x)
> = \int_{0}^1 x\,dx
> = \left.\frac{x^2}{2}\right|_{0}^{1}
> = \frac12.
> $$
> Here we used the fact that $dF(x)=dx$ on $[0,1]$ because $F(x)=x$ has derivative 1.  This agrees with the well-known $\frac{1}{2}$ mean of the uniform distribution.  Similarly, if $F$ were a smooth CDF with density $f(x)=F'(x)$, one would write $\int x\,dF = \int x f(x)\,dx$.

## Integration by Parts for Stieltjes Integrals

As noted above, an important property is the integration-by-parts formula.  In practice, one sometimes uses it to simplify Stieltjes integrals.  For example, if $F$ is a CDF and $u(x)$ is a differentiable function, one can write
$$
\int_a^b u(x)\,dF(x)
= \bigl[u(x)F(x)\bigr]_a^b - \int_a^b F(x)\,du(x).
$$
If $F$ is continuous at the endpoints, the boundary terms simplify, and one often obtains alternative expressions for expectations or covariances.  The general theory guarantees this formula whenever the integrals involved exist.

 {\bf Summary.} The Riemann--Stieltjes integral $\int f\,dg$ generalizes the usual integral by allowing a nontrivial integrator function $g$.  It is formally defined as a limit of sums $f(c_i)[g(x_i)-g(x_{i-1})]$.  When used in probability, taking $g(x)=F(x)$, the CDF of a random variable, one gets the unified expression $\mathbb{E}[f(X)] = \int f(x)\,dF(x)$ that handles discrete and continuous cases together.  Integration by parts and other properties carry over, making the Riemann--Stieltjes integral a powerful tool in statistics.
