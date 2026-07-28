---
title: Src Stats ED
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [src-Stats_ED.tex]
---
> [!warning]
> Compiled from **src-Stats_ED.tex** by the built-in LaTeX renderer — Unhandled commands left as-is: \assignmentTitle, \textwidth, \scalebox, \multirow, \multicolumn, \textcolor, \captionof, \rule…
> The original .tex is attached above.

# %

\assignmentTitle{Alexander Cristaudo, Jesse Brodkin}{CRSALE010, BRDJES012}{Experimental Design}

## Introduction

Fertilizer is crucial in modern agriculture and gardening due to its numerous benefits.
It can significantly enhance crop yields, promote plant growth, and improve overall plant health. Recognizing the importance of fertilizers, a local farming company aims to investigate the effectiveness of four popular fertilizer brands across various crop types and terrains. This study will consider different soil types and land gradients to provide a comprehensive analysis.
The primary goal of this research is to determine which fertilizer performs best under diverse conditions. By identifying the most effective fertilizer, the company can increase crop production, generate more income, and provide high-quality, organic produce to supermarkets. To achieve this objective, an experimental design will be implemented using four popular fertilizers:

- Omnia Fertilizer (A)
- Purefert (B)
- LM Marketing (C)
- Kynoch Fertilizer (D)

This design will help determine if there are significant differences between the fertilizers and, if so, quantify these differences.

## Objectives and A-Priori Hypothesis

The main objectives of this experiment are:

- To collect data following the experimental design
- To analyze the collected data thoroughly
- To determine if there are significant differences among the fertilizers
- To quantify any observed differences between fertilizers (provided there is a significant difference observed)
- To assess the validity of the experimental model
- To evaluate the necessity of the introduced blocking factors

Based on our current knowledge and expectations, we have formulated the following hypotheses:

- There will be a significant effect of fertilizer type on crop growth. This hypothesis is based on the understanding that fertilizers contribute substantially to the nutrients that crops receive.
- We predict that Omnia Fertilizer (A) will promote the best crop growth. This prediction is based on its widespread use in the agricultural industry.
- The blocking factors (soil type, plant type, and gradient) will prove necessary for controlling variability in the experiment.
- The experimental model will be valid, meeting all the assumptions outlined in the Model Checking section.

## Experimental Design

The experiment will be conducted using the following materials and setup:

- 16 identical pots (pots are identical as a control measure)
- 4 different types of soil: Sandy, Clay, Black, and Peat
- 4 different plant types: Radish, Carrot, Cucumber, and Beetroot
- 4 different soil gradients: $0 ^{\circ}, 10^{\circ}, 20^{\circ}, \text{ and } 30^{\circ}$

In this setup, the experimental units are the pots, while the observational units are the plants themselves. The response variable will be the yield of the plants (measured in grams) after a growth period of 6 weeks.
The experiment incorporates three blocking factors: The soil type, the plant type, and the soil gradient
~
Each of these factors could potentially affect plant growth, necessitating their inclusion as blocking factors. The treatments in this experiment are the four different fertilizers. To accommodate these multiple factors, we will use a Graeco-Latin square design. A Graeco-Latin Square is formed by taking a Latin Square and superimposing a second square with a different blocking factor in Greek letters. For our example, the Greek letters $\alpha, \beta, \gamma, \text{ and } \delta$ are the gradients $0^{\circ}, 10^{\circ}, 20^{\circ}, \text{ and } 30^{\circ}$ (in a random order, assigned during randomisation). An example of a Graeco-Latin square is:

    {0.36\textwidth}

        Latin-Square for 2 blocking factors
        \scalebox{0.9}{

| \multirow{2}{*}{Plant} | \multicolumn{4}{c|}{Soil Type} |  |  |  |
| --- | --- | --- | --- | --- |
| {2-5} | Sandy | Clay | Black | Peat |
| Radish | A | B | C | D |
| Carrot | B | A | D | C |
| Cucumber | C | D | A | B |
| Beetroot | D | C | B | A |

}

    +
    {0.2\textwidth}

        Third blocking factor
        \scalebox{1.2}{

| $\alpha$ | $\beta$ | $\gamma$ | $\delta$ |
| --- | --- | --- | --- |
| $\gamma$ | $\delta$ | $\alpha$ | $\beta$ |
| $\delta$ | $\gamma$ | $\beta$ | $\alpha$ |
| $\beta$ | $\alpha$ | $\delta$ | $\gamma$ |

}

    =
    {0.38\textwidth}

        Graeco-Latin square
        \scalebox{0.9}{

| \multirow{2}{*}{Plant} | \multicolumn{4}{c|}{Soil Type} |  |  |  |
| --- | --- | --- | --- | --- |
| {2-5} | Sandy | Clay | Black | Peat |
| Radish | \textcolor{red}{A$\alpha$} | B$\beta$ | C$\gamma$ | D$\delta$ |
| Carrot | B$\gamma$ | A$\delta$ | D$\alpha$ | C$\beta$ |
| Cucumber | C$\delta$ | D$\gamma$ | A$\beta$ | B$\alpha$ |
| Beetroot | D$\beta$ | C$\alpha$ | B$\delta$ | A$\gamma$ |

}

In this design, each cell represents a unique combination of plant type, soil type, gradient, and fertilizer. For example, the \textcolor{red}{$A\alpha$} in the Sandy column and Radish row represents a pot, with sandy soil, radish planted, and the soil sculpted to a gradient of $\alpha$ which is exposed to fertilizer 'A'.
An alternative interpretation is viewing the Greek letters as a $z$-axis in 3D space, representing the different gradient levels. The $x$-axis represents the different plants, and the $y$-axis is the soil type. This is represented by:

    {0.27\textwidth}

        {ed_assets/overall_view.png}

*Overall view of the treatments in this cubic structure*

    {0.27\textwidth}

        {ed_assets/xz-view}

*A view of the $xz$-plane (showing the different $x$ and $z$ components)*

    {0.27\textwidth}

        {ed_assets/xy-view}

*A view of the $xy$-plane (showing the different $x$ and $y$ components)*

To increase the reliability of our results, we will create 5 replicates for each experimental unit. This will be achieved by using four additional pots with the same blocking values and fertilizer for each unique combination. These replicates will be grown simultaneously but independently and placed apart to ensure that weather conditions and other nuisance factors are not identical across replicates.
We anticipate several potential challenges in conducting this experiment:

1. Uneven water distribution among pots
2. Variations in sunlight exposure
3. Temperature fluctuations
4. Pest infestations
5. Unpredictable weather conditions (e.g., hailstorms)

To mitigate these difficulties, we will implement the following control measures:

1. Water management: Each plant will receive a measured amount of water corresponding to its specific needs (e.g., beetroot needs 2.5cm of water every week).
2. Sunlight exposure: Pots with the same plants will be kept close to each other to ensure approximately equal sunlight exposure.
3. Randomized placement: The placement of pots will be randomized to minimize systematic environmental effects. (this is done when assigning factors to experimental units in Randomisation)
4. Regular monitoring: The experiment will be closely monitored for any signs of pest infestation or disease.

While we cannot control weather conditions, the close proximity of the pots will ensure that all plants are exposed to the same weather events.

## Randomization

### Theory

Start with a standard Graeco-Latin Square. The Graeco-Latin square can be thought of as a Latin Square with a third blocking factor added which is represented by the Greek letters: $\alpha, \beta, \gamma, \delta$. In our case each row represents a unique ‘plant’, each column represents a unique type of ‘soil’ and each Greek letter represents a level of ‘gradient’. Let $A, B, C, D$ be the different fertilizers and the Greek letters represent the gradient (assigned later). We randomize as follows:

1. Start with the $4 \times 4 $ Latin square:
| \multirow{2}{*}{Plant} | \multicolumn{4}{c|}{Soil Type} |  |  |  |
| --- | --- | --- | --- | --- |
| {2-5} | Sandy | Clay | Black | Peat |
| Radish | A | B | C | D |
| Carrot | B | A | D | C |
| Cucumber | C | D | A | B |
| Beetroot | D | C | B | A |

   ~
Now we randomise this Latin square. This involves getting a random permutation of the rows and afterwards, a random permutation of the columns.  {0.6\textwidth}         ~
2. Then to randomize the Greek letters, we get a random permutation of $(0, 10, 20, 30)$. Then the first value represents the gradient corresponding to $\alpha$, the second to $\beta$, the third to $\gamma$ and the fourth to $\delta$. This will effectively randomise the 4 different $xy$-planes representing each Greek letter, visualised in Figure 4 on the right      {0.3\textwidth}          \begin{flushright}         {ed_assets/random_greek.png}                  \captionof{figure}{Greek letters $xy$-plane}                   \end{flushright}
3. Now we superimpose the Greek letters onto the Latin square to get our Graeco-Latin square
4. Now we need to assign the letters $A,B,C,D$ to different fertilizers. This will be done by listing the fertilizers Omnia, Purefert, LM, Kynoch, then generating a random permutation of $(A,B,C,D)$, then the first letter is assigned to Omnia, second letter to Purefert, third letter to LM and fourth letter to Kynoch.
5. Finally, we get a random order in which the plants are planted, and a random order that the plants are harvested to reduce time-based bias. We will to this in a similar fashion, labeling experimental units as follows: 1-4 are the units in the first row, from left to right, of the Graeco-Latin square. 5-8 is for the second row, 9-12 for the third, and 13-16 for the fourth. We then generate a random permutation of $(1, 2, ..., 16)$ and that is our order. We have to get 2 permutations, one for planting, and one for harvesting

### R Code

The following R function was used to randomise the structure of the Graeco-Latin Square:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
seed <- 42 # random seed (for reproducibility)
tmts <- c("A", "B", "C", "D") # treatments
gradient <- c("0", "10", "20", "30") # gradient angles
outdesign <- design.graeco(tmts, gradient, seed = seed)
glsd <- outdesign$book
# Assign labels to the rows
levels(glsd$row) <- c("Beetroot", "Cucumber", "Radish", "Carrot")
# Assign labels to the columns
levels(glsd$col) <- c("Black", "Clay", "Peat", "Sandy")
# Renaming columns
colnames(lsd) <- c("plots", "plants", "soil", "treatment", "gradient")  
\end{minted}
\vspace{-15pt} 
\par\noindent\rule{\textwidth}{0.4pt}
The design.graeco(...) (from the agricolae package) generates a random Graeco-Latin square design, taking in the treatments and greek letters (gradients) as parameters to randomly assigned them to experimental units in a valid manner. The rows are the plants, in the order: Beetroot, Cucumber, Radish, and Carrot. The columns are the soil types, in the order: Black, Clay, Peat, and Sandy. This order was determined prior to creating the Graeco-Latin square structure by using the sample(...) function. This takes in a list and returns a random permutation of it. This was done to eliminate any bias based on assigning what columns and rows are represent what values. 
\par\noindent\rule{\textwidth}{0.4pt}
\vspace{-25pt} 
\begin{minted}{r}
sample(c("Radish", "Carrot", "Cucumber", "Beetroot"))
sample(c("Sandy", "Clay", "Black", "Peat"))
\end{minted}
\vspace{-15pt} 
\par\noindent\rule{\textwidth}{0.4pt}

\section{Design after Randomization}
We ended up with the following 16 unique treatment and blocking combinations: \\

\begin{table}[ht]
\centering
\begin{tabular}{llllll}
\toprule
\textbf{plots} & \textbf{plants} & \textbf{soil} & \textbf{treatment} & \textbf{gradient} \\
\midrule
101 & Beetroot  & Black  & D & 0  \\
102 & Beetroot  & Clay   & A & 10 \\
103 & Beetroot  & Peat   & C & 30 \\
104 & Beetroot  & Sandy  & B & 20 \\
201 & Cucumber  & Black  & A & 30 \\
202 & Cucumber  & Clay   & D & 20 \\
203 & Cucumber  & Peat   & B & 0  \\
204 & Cucumber  & Sandy  & C & 10 \\
301 & Radish    & Black  & C & 0  \\
302 & Radish    & Clay   & B & 30 \\
303 & Radish    & Peat   & D & 10 \\
304 & Radish    & Sandy  & A & 0  \\
401 & Carrot    & Black  & B & 10 \\
402 & Carrot    & Clay   & C & 20 \\
403 & Carrot    & Peat   & A & 20 \\
404 & Carrot    & Sandy  & D & 30 \\
\bottomrule
\end{tabular}
\caption{Graeco-Latin Square Structure}
\end{table}

\section{Pilot Study}
Although we did not perform a pilot experiment for this study, it would have been beneficial to do so. Here's an expanded description of how we would conduct a pilot study (for the following values: Beetroot, Fertilizer A, Sandy Soil, $10^{\circ}$ gradient
\begin{enumerate}
    \item Setup: 
    \begin{itemize}
        \item Use one pot with sandy soil
        \item Plant a beetroot seed
        \item Apply Omnia Fertilizer (Fertilizer A)
        \item Position the pot in full sun (ideal for beetroot growth)
    \end{itemize}
    \item Soil preparation:
    \begin{itemize}
        \item Layer the soil in the pot at an angle of approximately $10 ^{\circ}$
        \item Plant the seed in the soil
        \item Apply an initial dose of Fertilizer A
    \end{itemize}
    \item Care Routine:
    \begin{itemize}
        \item Water the beetroot with approximately 2.5cm of water every week
        \item Apply fertilizer every 2 weeks
    \end{itemize}
    \item Duration: 
    \begin{itemize}
        \item Let the beetroot grow for 6 weeks
    \end{itemize}
    \item Harvesting and recording the data:
    \begin{itemize}
        \item After 6 weeks, carefully extract the beetroot
        \item Clean the beetroot thoroughly
        \item Use a scale and measure how much the beetroot weighs
        \item Record the weight of the beetroot as the observation
        \item Note any challenges that occurred during the 6 weeks and adjust the procedure accordingly
    \end{itemize}
    
\end{enumerate}
\section{The Model}
\begin{center}
We have 3 blocking factors and one treatment factor, each with 4 levels. Thus, our model is represented: 
     M0 
\end{center}
\section{Data Collection}
Based on the model, there is a true value for the general mean, 4 true values for each blocking effect and 4 true values for each fertilizer. On this, an error term is added. We define arbitrary values to these parameters and add a random error term for each experimental unit to generate data. This was done by using a HashMap data structure, which assigns a string name to a number. The R code is:
\par\noindent\rule{\textwidth}{0.4pt}
\vspace{-25pt} 
\begin{minted}{r}
h <- hash() # create the HashMap
h[["Radish"]] = 1.5 # assign string "Radish" to 1.5
h[["Carrot"]] = 1
h[["Cucumber"]] = 0
h[["Beetroot"]] = -2.5
h[["Sandy"]] = 1.5
h[["Clay"]] = 1
h[["Black"]] = 0
h[["Peat"]] = -2.5
h[["0"]] = 0.4
h[["10"]] = 0.2
h[["20"]] = -0.3
h[["30"]] = -0.3
h[["A"]] = 2
h[["B"]] = -4
h[["C"]] = 5.5
h[["D"]] = -3.5
\end{minted}
\vspace{-15pt} 
\par\noindent\rule{\textwidth}{0.4pt}
Then whenever, for example, $h[["A"]]$ is used, the value 2 is obtained and used instead. After this, the Graeco-Latin square is created (as outlined in Randomisation). Then a 'frame' is created to account for more observations (replicates). This duplicates the values in 'glsd', by using rbind(...) to bind the rows returned from replicate(...), which replicates 'glsd' 'num\_replicates' times. The do.call(...) function applies the rbind(...) function onto the replicate(...)
\par\noindent\rule{\textwidth}{0.4pt}
\vspace{-25pt} 
\begin{minted}{r}
num_replicates <- 5
n_obs <- num_replicates * nrow(glsd)
frame <- do.call(rbind, replicate(num_replicates, glsd, simplify = FALSE))
\end{minted}
\vspace{-15pt} 
\par\noindent\rule{\textwidth}{0.4pt}
Finally, a loop is used to generate 'n\_obs' different observations, adding a random error term:

\par\noindent\rule{\textwidth}{0.4pt}
\vspace{-25pt} 
\begin{minted}{r}
general_mean <- 50
response <- vector(mode = "numeric", length = n_obs)
for (i in 1:n_obs) {
   plant <- as.character(glsd$plants[(i-1)
   soil <- as.character(glsd$soil[(i-1) 
   treat <- as.character(glsd$treatment[(i-1)
   grad <- as.character(glsd$gradient[(i-1) 

   # deterministic component
   y <- general_mean + h[[plant]] + h[[soil]] + h[[treat]] + h[[grad]]

   # Random component
   error <- rnorm(1, 0, 3)

   response[i] = y + error
} 
frame$response <- response
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

## Experimental Methods

When fitting the data, we will use an ANOVA table. This will include the fertilizer, and all 3 blocking factors to determine whether there is an effect of the fertilizers, and whether blocking improved the design. This will use the aov(...) method. We will represent the fertilizer responses in a modified boxplot, from ggplot(...) using geom_violin(...) to show a compact display of a continuous distribution. Based on this model, we assume the following:

- The errors are normal. For this, we will use a normal qqPlot(...) and plot a histogram of the residuals, The Shapiro-Wilk test will get the p-value for testing normality (from shapiro.test(...))
- The errors are independent. We will plot the autocorrelation function for the residuals, using the acf(...) function. We will also use the Durbin-Watson test, which is a test for autocorrelation in the residuals. This uses the durbinWatsonTest(...) function.
- Equal variances in the error terms. For this, we use the Levene test, which assesses the equality of variances. The R function is leveneTest(...)
- The model assumes no interactions between plants, gradient, soil and fertilizer. We use the aov(...) function with the interaction to calculate the p-value for no interaction

Should there be a significant difference between fertilizers, Tukey's 95% confidence intervals for all pairwise contrasts of differences between means will be displayed, using aov(...) to get the model, and TukeyHSD(...) to create the confidence intervals. This will allow us to see which fertilizers are significantly different.

## Exploratory Data Analysis

The data produced is found in Appendix A.
We first consider the modified version of a boxplot of the fertilizers against the response, based on the following code:

\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
ggplot(frame, aes(x = treatment, y = response, fill = treatment)) +
  geom_violin(trim = FALSE) +
  theme_minimal() +
  theme(plot.title = element_text(hjust = 0.5, size = 14, face = "bold")) +
  geom_boxplot(width = 0.4, fill = "white", alpha = 0.5) +
  labs(title = "Fertilizers against Weight (g)", x = "Fertilizer", y = "Weight (g)") +
  theme(legend.position = "none")
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

        {ed_assets/boxplot1.png}

*Plotting the fertilizers against growth*

According to Figure 5, it seems as if Fertilizer C produced the greatest yield, followed by Fertilizer A, with B and D having similar yields (with D slightly higher). The variance of A, B, and D appear similar, with C only slightly bigger (by considering their interquartile range). The advantage of this plot over a standard boxplot is that this shows the density of the observations as well. From this, we see that most of D's data is much higher than B, so we expect D to be higher than B

## ANOVA

We perform an ANOVA F test by running the following R code:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
model <- aov(response ~ treatment + soil + plants + gradient, data = frame)
summary(model)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
The result of this was:

| \toprule
** ** | **Df** | **Sum Sq** | **Mean Sq** | **F value** | **Pr(\textgreater F)** | ** ** |
| --- | --- | --- | --- | --- | --- | --- |
| \midrule
treatment | 3 | 1160.4 | 386.8 | 52.076 | \textless 2e-16 |  |
| soil | 3 | 80.9 | 27.0 | 3.628 | 0.0173 |  |
| plants | 3 | 262.0 | 87.3 | 11.757 | 2.8e-0.6 |  |
| gradient | 3 | 40.9 | 13.6 | 1.837 | 0.1488 |  |
| Residuals | 67 | 497.7 | 7.4 | ~ | ~ |  |
| \bottomrule |  |  |  |  |  |  |

*ANOVA Result*

The F statistic for differences among the treatment means is $F = 52.076$. The p-value is $<2 \times 10^{-16}$, giving very strong evidence to suggest that there are differences between the
fertilizers with respect to plant growth. Since, for each of the blocking factors, we have $F > 1$, we can conclude that blocking for that factor increased the efficiency of the design. There also appears to be more evidence that the plants used have a larger impact than the soil used and that the soil used had a larger impact than the gradient, with the gradient not making a notable impact.

## Model Checking

### Normality of Residuals

A key assumption in a Graeco-Latin square assumption is that the residuals $e_{ijkl} \sim N(0, \sigma^2)$ for some error variance $\sigma^2$, and for every $\{ijkl\} \in D$. We will test this assumption by using a normal qqPlot() ( taking in the residuals) and a histogram of the residuals (using ggplot(...), with geom_histogram(..) to plot the histogram, and stat_function(...) to overlay a normal distribution). The following R code achieved this:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
1. qqPlot(resid(model), xlab = "Normal quantities",
    ylab = "Residuals from the data", main = "A normal Q-Q plot of the residuals")
2. ggplot(data.frame(x = resid(model)), aes(x)) +
    geom_histogram(aes(y = ..density..), bins = 10, fill = "lightblue",
                 color = "black") +
    stat_function(fun = dnorm, args = list(mean =0, sd = sd(resid(model))),
                color = "red", size = 1) +
    labs(title = "Histogram of the residuals with Normal Distribution Curve",
       x = "Value", y = "Density")
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

        {ed_assets/qqplot.png}

*qqPlot of the residuals*

The blue region provides a visual guide for assessing whether the observed data points (the residuals, represented by dots on the plot) follow a normal distribution. The blue region represents a 95% confidence envelope, thus since all of the points are in this region, it suggests the residuals are normally distributed

        {ed_assets/hist.png}

*Histogram of the residuals, overlayed with a normal distribution*

As seen above, the distribution of the residuals seems slightly skewed to the left, but not enough to discredit the normality assumption. Otherwise, the residuals seem to follow a normal distribution. The Shapiro-Wilk test confirms this, returning a p-value of 0.543 from the following code:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
shap_test <- shapiro.test(residuals(model))
shap_test["p.value"]
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

### Interactions

A Graeco-Latin Square design assumes no interaction between the treatments and all the blocking factors (including all blocking factors with each other). Considering there are so many factors at play, an interaction plot may not be useful. Instead, an ANOVA test is run to test the interaction between 'plants' and 'soil':
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
mod <- aov(response ~ treatment + gradient + plants * soil, data = frame)
anova(mod)["plants:soil", "Pr(>F)"]
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
The result is a p-value of 0.94, suggesting there is no interaction between these 2 factors. The same test can be performed for all pairwise combinations of the factors. The results of this are all 0.94:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
anova(aov(response~treatment+gradient*plants+soil,data=frame))["gradient:plants", "Pr(>F)"]
anova(aov(response~treatment*gradient+plants+soil,data=frame))["treatment:gradient", "Pr(>F)"]
anova(aov(response~treatment+gradient*soil+plants,data=frame))["gradient:soil", "Pr(>F)"]
anova(aov(response~treatment*soil+plants+gradient,data=frame))["treatment:soil", "Pr(>F)"]
anova(aov(response~treatment*plants+gradient+soil,data=frame))["treatment:plants", "Pr(>F)"]
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

### Independence of Residuals

Our model assumes that the residuals are independent. To test this, the autocorrelation graphing function, acf, and the Durbin-Watson test can be performed. The R code for this is:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
acf(resid(model), main = "Autocorrelation Function for the Residuals")
durbinWatsonTest(model)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
The Durbin-Watson test returns a p-value of 0.692. The graph is:

        {ed_assets/acf.png}

*ACF for the Residuals*

The autocorrelation is below 0.2 for all lags $\ge 1$. This suggests that the residuals are independent

### Equality of Variance

The variance of the residuals must be the same, regardless of the blocking and treatment factor of that experimental unit. A Levene test is used to check for equality of variance. The R code for this is:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
leveneTest(response ~ treatment * soil * gradient * plants, data = frame)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

The output is a p-value of 0.582, indicating that there is no evidence to suggest that the variances are different among all the groups

## Confidence Intervals and Contrasts

We wish to compare all the treatments. Since we are doing all pairwise comparisons, Tukey's method is the best choice. The R code to display the 95% confidence intervals for the difference in means of the fertilizers is given by:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
aov_treat <- aov(response ~ treatment, data = frame)
hsd_treat <- TukeyHSD(aov_treat)
plot(hsd_treat, las = 1)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
The resulting graph is:

        {ed_assets/CI_1.png}

*Tukey's 95% confidence intervals*

We see that there is a significant positive difference in $C-D$ and $C-B$ since 0 is not in either confidence interval. On the other hand, 0 is contained in the confidence interval for $C-A$. We can thus suggest that $C$ is better than both $B$ and $D$, but not necessarily $A$. Similarly, the data suggests $A$ is better than $B$ and $D$. So the 2 best fertilizers are $A$ and $C$. $B-D$ contains $0$ as well, so we cannot conclude that either is better than the other. Thus the order of fertilizers is $D=B<A=C$.

## Conclusion

The experiment aimed to determine the most effective fertilizer among four popular brands (Omnia, Purefert, LM Marketing, and Kynoch) for various crop types, soil types and land slopes. Using a Graeco-Latin square design, allowing for three blocking factors: soil type, plant type, and soil gradient. The response variable was plant yield in grams after 6 weeks. We can infer that the best fertilizers are A and C and that the model we used was reliable given the data obtained (with respect to independent and normal error with equal variances, and no interactions). There was a significant difference in the fertilizers, but fertilizer A (Omnia) was not uniquely the best fertilizer. The blocking factors were necessary. Some limitations include that the experiment was conducted in pots, possibly not representing real-world farming and that the study was only over 6 weeks. This is not a problem in that it provides a cheap alternative, and the crops chosen mature very quickly so the limited time frame is not a major concern. This study could be improved by allowing for more replicates, to get stronger and more reliable means of fertilizers, and by increasing the time frame

## Appendix

### Appendix A - Data

\small

| plots | plants | soil | treatment | gradient | response |
| --- | --- | --- | --- | --- | --- |
| 101 | Beetroot | Black | D | 0 | 42.44103 |
| 102 | Beetroot | Clay | A | 10 | 55.61700 |
| 103 | Beetroot | Peat | C | 30 | 49.49524 |
| 104 | Beetroot | Sandy | B | 20 | 41.77122 |
| 201 | Cucumber | Black | A | 30 | 51.20965 |
| 202 | Cucumber | Clay | D | 20 | 43.61643 |
| 203 | Cucumber | Peat | B | 0 | 44.80407 |
| 204 | Cucumber | Sandy | C | 10 | 55.62197 |
| 301 | Radish | Black | C | 20 | 54.75571 |
| 302 | Radish | Clay | B | 30 | 43.75314 |
| 303 | Radish | Peat | D | 10 | 46.21739 |
| 304 | Radish | Sandy | A | 0 | 51.45373 |
| 401 | Carrot | Black | B | 10 | 48.41580 |
| 402 | Carrot | Clay | C | 0 | 58.31807 |
| 403 | Carrot | Peat | A | 20 | 57.22445 |
| 404 | Carrot | Sandy | D | 30 | 50.30513 |
| 101 | Beetroot | Black | D | 0 | 48.39476 |
| 102 | Beetroot | Clay | A | 10 | 54.05918 |
| 103 | Beetroot | Peat | C | 30 | 49.97996 |
| 104 | Beetroot | Sandy | B | 20 | 44.93734 |
| 201 | Cucumber | Black | A | 30 | 52.10256 |
| 202 | Cucumber | Clay | D | 20 | 39.78905 |
| 203 | Cucumber | Peat | B | 0 | 45.70355 |
| 204 | Cucumber | Sandy | C | 10 | 57.67939 |
| 301 | Radish | Black | C | 20 | 59.69905 |
| 302 | Radish | Clay | B | 30 | 48.07053 |
| 303 | Radish | Peat | D | 10 | 50.50088 |
| 304 | Radish | Sandy | A | 0 | 55.98397 |
| 401 | Carrot | Black | B | 10 | 48.82097 |
| 402 | Carrot | Clay | C | 0 | 59.01749 |
| 403 | Carrot | Peat | A | 20 | 49.04274 |
| 404 | Carrot | Sandy | D | 30 | 49.60584 |
| 101 | Beetroot | Black | D | 0 | 44.67699 |
| 102 | Beetroot | Clay | A | 10 | 50.01757 |
| 103 | Beetroot | Peat | C | 30 | 50.88783 |
| 104 | Beetroot | Sandy | B | 20 | 43.38612 |

\small

| ~ ~ ~ ~ | ~ ~ ~ ~ ~ | ~ ~ ~ ~ | ~ ~ ~ ~ ~ ~ ~ | ~ ~ ~ ~ ~ ~ | ~ ~ ~ ~ ~ ~ |
| --- | --- | --- | --- | --- | --- |
| 201 | Cucumber | Black | A | 30 | 49.73476 |
| 202 | Cucumber | Clay | D | 20 | 47.90952 |
| 203 | Cucumber | Peat | B | 0 | 38.91918 |
| 204 | Cucumber | Sandy | C | 10 | 54.82792 |
| 301 | Radish | Black | C | 20 | 54.86445 |
| 302 | Radish | Clay | B | 30 | 46.20405 |
| 303 | Radish | Peat | D | 10 | 48.19833 |
| 304 | Radish | Sandy | A | 0 | 55.62645 |
| 401 | Carrot | Black | B | 10 | 46.78891 |
| 402 | Carrot | Clay | C | 0 | 61.84203 |
| 403 | Carrot | Peat | A | 20 | 52.77762 |
| 404 | Carrot | Sandy | D | 30 | 46.19486 |
| 101 | Beetroot | Black | D | 0 | 50.09778 |
| 102 | Beetroot | Clay | A | 10 | 51.34750 |
| 103 | Beetroot | Peat | C | 30 | 49.90362 |
| 104 | Beetroot | Sandy | B | 20 | 42.26582 |
| 201 | Cucumber | Black | A | 30 | 51.83567 |
| 202 | Cucumber | Clay | D | 20 | 49.15930 |
| 203 | Cucumber | Peat | B | 0 | 43.93766 |
| 204 | Cucumber | Sandy | C | 10 | 49.41717 |
| 301 | Radish | Black | C | 20 | 60.38384 |
| 302 | Radish | Clay | B | 30 | 51.92809 |
| 303 | Radish | Peat | D | 10 | 46.21345 |
| 304 | Radish | Sandy | A | 0 | 58.21337 |
| 401 | Carrot | Black | B | 10 | 47.97043 |
| 402 | Carrot | Clay | C | 0 | 56.17609 |
| 403 | Carrot | Peat | A | 20 | 51.59704 |
| 404 | Carrot | Sandy | D | 30 | 49.87681 |
| 101 | Beetroot | Black | D | 0 | 44.61801 |
| 102 | Beetroot | Clay | A | 10 | 46.54736 |
| 103 | Beetroot | Peat | C | 30 | 50.54577 |
| 104 | Beetroot | Sandy | B | 20 | 41.93832 |
| 201 | Cucumber | Black | A | 30 | 53.71333 |
| 202 | Cucumber | Clay | D | 20 | 50.53263 |
| 203 | Cucumber | Peat | B | 0 | 45.95102 |
| 204 | Cucumber | Sandy | C | 10 | 53.61549 |
| 301 | Radish | Black | C | 20 | 51.41945 |
| 302 | Radish | Clay | B | 30 | 43.62753 |
| 303 | Radish | Peat | D | 10 | 45.44893 |
| 304 | Radish | Sandy | A | 0 | 58.00125 |
| 401 | Carrot | Black | B | 10 | 51.54292 |
| 402 | Carrot | Clay | C | 0 | 56.62063 |
| 403 | Carrot | Peat | A | 20 | 49.09522 |
| 404 | Carrot | Sandy | D | 30 | 49.98148 |

*Agricultural Experiment Data*
