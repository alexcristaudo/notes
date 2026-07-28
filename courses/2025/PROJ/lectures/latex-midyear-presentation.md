---
title: Latex midyear presentation
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [latex-midyear_presentation.tex]
---
> [!warning]
> Compiled from **latex-midyear_presentation.tex** by the built-in LaTeX renderer — TikZ diagrams are shown as placeholders. Unhandled commands left as-is: \frame, \titlepage, \textwidth, \scriptsize, \small, \dim, \inf, \sup…
> The original .tex is attached above.

\frame{\titlepage}

\begin{frame}{Outline}

\end{frame}

## Motivation

\begin{frame}{Motivation}

- The Lebesgue measure works well for common sets, such as intervals, squares, cubes
- But how do we measure sets with complicated geometry? We need a new way to measure the size of these complicated sets, and assign them dimensions
- Examples:             \begin{itemize}
- Fractals
- Sets with non-natural dimensionality
- The Cantor Set is an example of both

         The Lebesgue measure has limitations

- Take the following example

    \end{itemize}
\end{frame}

\begin{frame}{Motivation}

*[TikZ diagram — open the .tex source to view]*

- Let $A$ be this curve. This curve has no area, so $\lambda_2(A)= 0$. This is because the dimension of this curve is not 2. On the other hand, $\lambda _1(A)$ is not defined. So, how can we measure this set? We use the Hausdorff measure

\end{frame}

## Hausdorff Measure

\begin{frame}{Intuitive Understanding}
    The idea is if $A$ is $n$-dimensional, $\diam A$ represents the longest side length of $A$ so $(\diam A)^n$ is the volume of an $n$-dimensional cube covering $A$.
1. If we cover $A$ with a covering $\{E_i\}_{i\in \mathbb{N}}$, then $\sum \limits _{i=1}^\infty \diam (E_i)^n$ is the sum of all $n$-dimensional cubes covering each $E_i$ and thus also $A$.
2. As the length of the cubes gets smaller, this sum converges to the volume of $A$. This accounts for "roughness" in a set

    {0.4\textwidth}
        {assets/cover_sphere_big_cube.png}

    {0.05\textwidth}
            $\to$

    {0.4\textwidth}
        {assets/cover_sphere_small_cubes.png}

\end{frame}

\begin{frame}{Hausdorff Measure: Definition}
\scriptsize{
    \begin{definition}[Hausdorff $d$-measure]
        Let $(X, d)$ be a metric space with $\diam (\emptyset) :=0$. For $d \geq 0$ and $\delta > 0$, define:

$$\begin{align}
            \mathcal{H}_\delta^d(A) := \inf\left\{\sum \limits _{i =1}^\infty (\diam (E_i))^d : A \subseteq \bigcup \limits _{i=1}^\infty E_i \text { and} \diam(E_i) \le \delta \right\}
        \end{align}$$

        If $A$ does not possess any covering, we have $\mathcal{H}_\delta ^d(A) := \inf \emptyset =\infty $.

The $d$-dimensional Hausdorff measure is then:

$$\begin{align}
            \mathcal{H}^d(A) := \lim_{\ \delta \to 0^+} \mathcal{H}_\delta^d(A) = \sup_{\delta > 0} \mathcal{H}_\delta^d(A)
        \end{align}$$

         If $ d=0$: Define $\mathcal{H}^0(\emptyset)=0$ and use the interpretation $0^0=1$ for any other sets so $\mathcal{H}^0$ is the counting measure.
    \end{definition}
    }

- All we require is $\diam (E_i) \le \delta $ for each $i \in \mathbb{N}$, so if $\delta \le \delta'$, then $ \mathcal{H}_\delta ^d(A) \ge \mathcal{H}_{\delta'}^d(A) $. The supremum form above is thus valid
- An alternative definition allows us to normalise the Hausdorff measure: $\mathcal{H}^d(A) = c_d \cdot \lim \limits _{\ \delta \to 0^+} \mathcal{H}_\delta^d(A)$, but we will use (2)

\end{frame}

\begin{frame}{Hausdorff Measure: Properties}
    For the $d$-dimensional Hausdorff measure $\mathcal{H}^d$:

- It is Borel measure (all Borel sets are Hausdorff measurable)
- Connection to Lebesgue: If $c_d = \frac{\pi^{d/2}}{2^d\Gamma(d/2+1)}$ then $\mathcal{H}^d$ equals the Lebesgue measure when $d$ is an integer. So the Hausdorff measure is the Lebesgue measure, simply scaled by a constant with $c_1 = 1$
- It is an outer measure on $X$. By Carathéodory's Extension Theorem, it is a measure on the $\sigma$-algebra of Hausdorff measurable sets
- Scaling property: For $\lambda > 0$, $\mathcal{H}^d(\lambda A) = \lambda^d \mathcal{H}^d(A)$ where $\lambda A:=\{\lambda a:a\in A\}$

\end{frame}

\begin{frame}{Behavior Across Dimensions}
 The following theorem is crucial to define the dimension of a set
 \small{
 \begin{block}{Theorem}
    For $0 \le s<t<\infty$ and $A \subseteq X$

1. $\mathcal{H}^s(A) < \infty \implies \mathcal{H}^t(A) = 0$
2. $\mathcal{H}^t(A)>0 \implies \mathcal{H}^s(A)=\infty$

 \end{block}
}

 \end{frame}

 \begin{frame}{Threshold Behaviour}

- This creates a "threshold behaviour" for any set $A$
- If $\mathcal{H}^d(A)$ is a finite, nonzero value, then for every $s \in [0,\infty)$ with $s \ne d$, we either have $\mathcal{H}^s(A)$ is infinite, or zero. More specifically,
~
$\mathcal{H}^s(A) = $\begin{cases}         \infty  &  if s < d
finite, nonzero number &  if  s = d
0   &  if s > d     \end{cases}$$
    \end{center}
    ~\\ ~\\ ~\\
    \begin{center}
        
        \begin{tikzpicture}[scale=0.3]
    
    \draw[->] (0,0) -- (10,0) node[right] {$s$ (dimension parameter)};
    \draw[->] (0,0) -- (0,7) node[left] {$H^s(A)$};
    
    
    \draw (0,-0.1) node[below] {$0$};
    \draw (3,-0.1) node[below] {$d$};

    
    
    \draw[dashed] (3,0) -- (3,6);
    
    
    \draw[blue, thick] (0,6) -- (3,6);  
    \draw[blue, thick] (3,0) -- (10,0); 
    
    
    \filldraw[blue] (3,3) circle (0.1) node[right=1cm] {$0 < H^d(A) < \infty$};
    \draw[blue] (3,0) circle (0.15);
    
    
    \node[blue] at (3.5,6.5) {$H^s(A) = \infty$};
    \node[blue] at (6.5,0.7) {$H^s(A) = 0$};
    
    
\end{tikzpicture}
    \end{center}
    \end{itemize}
\end{frame}

\section{Hausdorff Dimension}

\begin{frame}{Hausdorff Dimension: Definition}
    \begin{definition}[Hausdorff dimension]
        For a set $A \subseteq X$, the Hausdorff dimension is:
        

$$\begin{align}             \dim(A) = \inf\{d \geq 0 : \mathcal{H}^d(A) = 0\} = \sup\{d \geq 0 : \mathcal{H}^d(A) = \infty\}         \end{align}$$

        For this definition, we take $\sup \emptyset =0$
    \end{definition}
    
    \begin{itemize}
        \item At the critical dimension $d = \dim(A)$, three cases are possible:
            \begin{itemize}
                \item $\mathcal{H}^d(A) = 0$

                \item $0 < \mathcal{H}^d(A) < \infty$

                \item $\mathcal{H}^d(A) = \infty$

            \end{itemize}
        \item The dimension can be infinity or zero
    \end{itemize}
\end{frame}

\begin{frame}{Properties of Hausdorff Dimension}
    For sets $A, B \subseteq X$:
    \begin{itemize}
        \item Monotonicity: If $A \subseteq B$, then $\dim(A) \leq \dim(B)$
        \item Countable stability: $\dim\left(\bigcup\limits _{n \in \mathbb{N}} A_n\right) = \sup \limits _{n \in \mathbb{N}} \dim(A_n)$
        \item For $\lambda > 0$, $\dim(\lambda A) = \dim(A)$
        \item It is possible for $\mathcal{H}^d(A)=\infty$ for every $d \in [0, \infty)$. An example is $\mathbb{R}$ are infinite dimensional in $(\mathbb{R}, d_D)$
        \item $\dim \mathbb{R}^n=n$ for the normal metric
        
        
        
        
        
        
        
        
        
        
        
    \end{itemize}
\end{frame}
\section{The Cantor Set}

\begin{frame}{Example: Cantor Set}

        
        

\begin{minipage}{0.6 \textwidth}
\small{
\begin{itemize}
        \item Begin with the interval $C_0 =[0,1]$
    \item Remove the middle third $(\frac{1}{3}, \frac{2}{3})$ to get $C_1 = [0, \frac{1}{3}] \cup [\frac{2}{3}, 1]$
    \item Remove the middle third from each remaining interval to get $C_2 = [0, \frac{1}{9}]\cup [\frac{2}{9}, \frac{1}{3}] \cup [\frac{2}{3}, \frac{7}{9}] \cup [\frac{8}{9}, 1]$
    \item Continue this process indefinitely, with $C_n$ the result at the $n$th iteration
    \item The Cantor set is the set as $n \to \infty$, that is, $\mathcal{C} := \lim _{n \to \infty}C_n= \bigcap \limits _{n\in \mathbb{N}}C_n$
    
\end{itemize}}
\end{minipage}
\begin{minipage}{0.39 \textwidth}
  \begin{center}
\includegraphics[width = \textwidth]{assets/cantor.png}    
\end{center}
\end{minipage}

\end{frame}
\begin{frame}{Cantor Set Properties}
This Cantor Set is interesting because:
\begin{itemize}
    \item It is uncountable
    \item It contains no intervals
    \item It has dimension $d = \frac{\ln 2}{\ln 3} \approx0.631 $ (this also means it has zero Lebesgue measure)
    \item $\mathcal{H}^d(\mathcal{C})=1$
    \item $\mathcal{H}^d_\delta (\mathcal{C})<\mathcal{H}^d(\mathcal{C})$ for any $\delta >0$

\end{frame}

\begin{frame}{Questions?}

        \Huge Thank you for your attention!
~
Please ask any questions

\end{frame}
