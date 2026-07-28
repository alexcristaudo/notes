---
title: Template template
type: reference
tags: [latex]
status: needs-review
source: latex
assets: [template-template.tex]
---
> [!warning]
> Compiled from **template-template.tex** by the built-in LaTeX renderer — Unhandled commands left as-is: \bibitem
> The original .tex is attached above.

### Question 1

Examples of custom commands: $X_1,...,X_n\iid\normal{\mu}{\sigma^2}$, $\trace(\b{H})=p$. Code example:

```
# Compute the optimally-smoothed mean
lambdaOpt <- 10^logLambda[which(estimationError == min(estimationError))]
smoothOperatorOpt <- fdPar(bSplineBasis, int2Lfd(2), lambdaOpt)
smoothSpectrumOpt <- smooth.basis(logFreq, rawData, smoothOperatorOpt)
smoothMeanOpt <- PhiMatrix

# Plot data along unsmoothed mean and optimally-smoothed mean
matplot(logFreq, rawData, type="l", col=brewer.pal(8, "Set2"), xlab="Log frequency", ylab="Log power spectrum", main="Raw data with optimally-smoothed and\n unsmoothed means")
lines(logFreq, unsmoothedMean, lwd=2.5, col="firebrick3")
lines(logFreq, smoothMeanOpt, lwd=2.5, col="blue3")
```

> [!theorem]
> **Theorem: Leibniz integral rule**
>
> Let $f(x,t)$ and its partial derivative $\frac{\partial}{\partial x}f(x,t)$ be continuous in $x$ and $t$ in some region of the $(x,t)$ plane that includes $a(x)\leq t\leq b(x)$ and $x_0\leq x\leq x_1$. Suppose also that the functions $a(x)$ and $b(x)$ are continuous and have continuous derivatives for $x_0\leq x\leq x_1$. Then, for $x_0\leq x\leq x_1$, we have:
> $$\frac{\dv}{\dv x}\int_{a(x)}^{b(x)}f(x,t)\dv t = f(x,b(x))\cdot \frac{\dv}{\dv x} b(x) - f(x, a(x))\cdot \frac{\dv}{\dv x}a(x) + \int_{a(x)}^{b(x)}\frac{\partial}{\partial x}f(x,t)\dv t$$
> If $a(x)=a$ and $b(x)=b$, where $a$ and $b$ are constants, then the above reduces to:
> $$\frac{\dv}{\dv x}\int_{a}^{b}f(x,t)\dv t = \int_a^b\frac{\partial}{\partial x}f(x,t)\dv t$$

\begin{thebibliography}{2}

\bibitem{book1}
  Last name, first name.
  *Book Title*.
  Publisher, Year.
  Print.

\bibitem{webpage1}
  Last name, first name. ``Webpage Title''.
  Website name, Organization name.
  Online; accessed Month Date, Year.
  `www.URLhere.com`

\end{thebibliography}
