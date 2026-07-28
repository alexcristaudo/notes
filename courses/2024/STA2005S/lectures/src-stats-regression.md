---
title: Src Stats Regression
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [src-Stats_Regression.tex]
---
> [!warning]
> Compiled from **src-Stats_Regression.tex** by the built-in LaTeX renderer — Unhandled commands left as-is: \assignmentTitle, \rule, \textwidth, \vspace, \textcolor, \textsubscript, \textsuperscript, \sim
> The original .tex is attached above.

# %

\assignmentTitle{Alexander Cristaudo, Jesse Brodkin}{CRSALE010, BRDJES012}{Regression}

## Part One: Analysis

### Introduction

Air pollution in urban areas is a critical environmental and health concern, particularly due to its association with respiratory issues and other health problems. The concentration of particulate matter in the air serves as an indicator of the levels of pollution. As a result, this study aims to investigate the relationships between particulate matter concentration and several explanatory variables: traffic density, industrial activity, temperature, humidity, wind speed, day of the week, holiday status, and urban greenery coverage.
The primary focus of this investigation is to determine the individual impact of each explanatory variable on particulate matter levels, along with exploring potential interactions between some of these variables. The analytical approach will employ exploratory data analysis to understand and visualise the underlying relationships, followed by the development of a linear model to test these factors systematically.
We hypothesize that traffic density and industrial activity will have significant positive correlations with particulate matter concentration, while urban greenery is expected to demonstrate a significant negative correlation. This research will provide valuable insights for urban planners and policymakers, enabling the development of targeted strategies to mitigate air pollution in cities.

### Data Exploration

#### Density Plot

We first plot the density of the particulate matter levels as a histogram. This R code for this is:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
ggplot(data_tidy_air_quality, aes(x = particulate_matter)) +
  geom_histogram(aes(y = ..density..), bins = 10, fill = "lightblue", color = "black") +
  stat_function(fun = dnorm, args = list(mean = mean(particulate_matter), sd = sd(particulate_matter)),
                color = "red", size = 1) +
  labs(title = "Histogram of particulate matter with Normal Distribution Curve",
       x = expression("Particulate Matter (μg/m"^3*")"), y = "Density")
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

        {regression_assets/histogram.png}

*Density of Particulate Matter*

#### Pairwise Plots

Pairwise scatterplots were generated for all continuous variables in the dataset. This process involved three steps:

1. Identifying and selecting all numeric columns in R.
2. Creating a new data frame containing only these continuous variables.
3. Utilizing the 'ggpairs' function to generate the pairwise plots.

\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
# Selecting the continuous columns
numeric_cols <- sapply(data_tidy_air_quality, is.numeric)
frame_numeric <- data_tidy_air_quality[, numeric_cols]
# Making the plot
ggpairs(data = frame_numeric) +
  theme(axis.text.x =element_text(angle = 90))
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

        {regression_assets/pairwise.png}

*Pairwise Scatter Plots*

#### Categorical Variable Plots

An example of the R code for this was:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
# Make sure the plots are ordered
data_tidy_air_quality$industrial_ordered <- factor(data_tidy_air_quality$industrial_activity,
                                                 levels = c("None", "Low", "Moderate", "High"))
# Plotting the data
boxplot(particulate_matter ~ industrial_ordered,  data = data_tidy_air_quality,
main = "Particulate Matter against the Industrial Activity",  xlab = "Industrial Activity",
ylab = "Particulate Matter", las = 1,cex.axis = 1.2, cex.lab = 1.2,  col = "#89CFF0" )
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

        {regression_assets/categorical_variable.png}

*Categorical Boxplots*

#### Categorical Relationships

We see the categorical relationships via interaction plots. An example code for this is:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
# Define the colours used in the interaction plots
colours <- c("red", "blue", "lightblue", "purple")
# Making the interaction plot
interaction.plot(industrial_ordered, holiday, particulate_matter,
  xlab = "Industrial Activity", ylab = "Mean of the Particulate Matter",
  col = colours, lty = 1, lwd = 2, las = 1, trace.label = "Holiday Status"
)
title("Interaction Plot of the Industrial Activity with Holiday Status on Particulate Matter levels")
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
~
The interaction plots are as follows:

    {0.5\textwidth}

        {regression_assets/holiday_industrial.png}

*Holiday and Industrial Activity interaction*

    {0.5\textwidth}

        {regression_assets/holiday_week.png}

*Holiday and Day of the Week interaction*

        {regression_assets/industrial_week.png}

*Industrial Activity and the Day of the Week interaction*

#### Comments

Analysis of the particulate matter distribution and its relationships with various factors reveals several key insights.

- Based on Figure 1, the distribution of particulate matter appears to follow a normal distribution.
- Figure 2 suggests that both humidity and traffic density have positive effects on particulate matter levels, with humidity showing the strongest influence, demonstrated by a moderate correlation coefficient of 0.547. On the other hand, urban greenery seems to have a negative impact on the particulate matter concentration. The strength of this is moderate with a correlation coefficient of -0.355. Additionally, the correlation coefficient between temperature and humidity is 0.224, suggesting a potentially weak collinearity between these two factors.
- Figure 3 suggests a potentially positive relationship between industrial activity and particulate matter levels. Other variables examined in the study appear to have no significant effect.
- The interaction plots provide additional information about the relationships between variables. They show no significant interaction between the industrial activity and holiday status, nor between holiday status and days of the week. The relationship between industrial activity and the day of the week appears more complex, but ultimately, no significant interaction is present.

### Simple Linear Regression

#### Model Fitting

We start first by creating vectors for the simple linear regression equation $Y = \beta_0\mathbf{1} + \beta_1 \mathbf{X}$.
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
num_obs <- nrow(data.frame(particulate_matter)) # number of observations
mat_one <- rep(c(1), each = num_obs) # vector of 1's, with num_obs 1's
X <- traffic_density
Y <- particulate_matter
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
Here, the rep(...) function is used to replicate the 1 a total of $n = \text{num\_obs}$ times. Then we solve the OLS equations:

$$\begin{align}
    \hat{\beta} _0 & = \bar{Y} - \hat{\beta} _1 \cdot \bar{X} \notag \\ 
    \hat{\beta} _1 & = \frac{Cov(X,Y)}{Var(X)} \notag
\end{align}$$

\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
b1 <- cov(X, Y) / var(X)
b0 <- mean(Y) - b1 * mean(X)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

\begin{Verbatim}[commandchars=
\{\}]
\textcolor{gray}{# Output:}
\textcolor{gray}{ β\textsubscript{0}     β\textsubscript{1}}
\textcolor{gray}{ 18.12  0.084   }
\end{Verbatim}
After this, we find the estimated variance $s^2 = \frac{(Y - \hat{\beta}_0\mathbf{1} - \hat{\beta }_1 X)^T(Y - \hat{\beta}_0\mathbf{1} - \hat{\beta }_1 X)}{n-k}$ for $n=$ num_obs ($= 150$), $k = 2$
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
s2 <- (t(Y - X * b1 - mat_one * b0)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
\begin{Verbatim}[commandchars=
\{\}]
\textcolor{gray}{# Output:}
\textcolor{gray}{ s\textsuperscript{2}}
\textcolor{gray}{ 143.6}
\end{Verbatim}
Next, we find the standard error of the components using $\widehat{s.e}.(\hat{\beta}_i) = \sqrt{s^2 (C_{(i+1)(i+1)})}$ for matrix $C = (X^T X)^{-1}$.
 Additonally, the test statistic is $t = \frac{\hat{\beta}_i}{\widehat{s.e}.(\hat{\beta}_i)}$ and the p-value is $2P(T_{n-k} > |t|)$ are calculated. This is done in R with:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
X_mat <- cbind(mat_one, mat_two) # Our design matrix
C_mat <- solve(t(X_mat)
b_val <- 0 # A counter for accessing indices
for (b in b_vec) {
  se <- sqrt(s2 * C_mat[b_val + 1, b_val + 1]) # Getting the standard error
  t_b <- b / se # Getting the t-value
  p_val <- 2 * pt(abs(t_b), df = num_obs - 2, lower.tail = FALSE) # Getting the p-value
  b_val <- b_val + 1
}
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

\begin{Verbatim}[commandchars=
\{\}]
\textcolor{gray}{# Output:}
\textcolor{gray}{β[n] | Estimate | Std. Error | T-value | P-value  }
\textcolor{gray}{ 0   |   18.12  |   20.38    |  0.889  |  0.3755 }
\textcolor{gray}{ 1   |   0.084  |   0.04065  |  2.066  |  0.04055}
\end{Verbatim}
After this, $SSE = (n-k)s^2$, $MSE = \frac{SSE}{n-k} = s^2$ and the Residual Standard Error $ = \sqrt{MSE}$ are calculated:

\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
SSE <- s2 * (num_obs-2)
MSE <- s2
RSE <- sqrt(MSE)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
\begin{Verbatim}[commandchars=
\{\}]
\textcolor{gray}{# Output:}
\textcolor{gray}{    Residual Standard Error: 11.98 on 148 df}
\end{Verbatim}
Now $SST = (Y - \bar{Y})^T(Y - \bar{Y})$ is calculated. From this, the Multiple $R^2$ value is calculated using $R^2 = 1 - \frac{SSE}{SST}$, and thus the Adjusted $R^2 = 1 - (1 - R^2) \frac{n-1}{n-k}$ is calculated
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
SST <- t(Y - mean(Y))
R2 <- 1 - SSE/SST
adjusted_R2 <- 1 - (1-R2) * ((num_obs-1)/(num_obs - 2))
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
\begin{Verbatim}[commandchars=
\{\}]
\textcolor{gray}{# Output:}
\textcolor{gray}{ Multiple R2  ===  0.02804 }
\textcolor{gray}{ Adjusted R2  ===  0.02147}
\end{Verbatim}
Finally, the F statistic is calculated using $\frac{MSR}{MSE} = \frac{(SST-SSE)/(k-1)}{MSE}$ with $k=2$. The p-value is calculated using an F-statistic with $k-1=1$ and $n-k = 148$ degrees of freedom. This is achieved with:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
F_stat <- ((SST - SSE) / (2-1)) / MSE
F_p_value <- pf(F_stat, 1, num_obs - 2, lower.tail = FALSE)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
\begin{Verbatim}[commandchars=
\{\}]
\textcolor{gray}{# Output:}
\textcolor{gray}{F-statistic: 4.269 on 1 and 148 DF}
\textcolor{gray}{    p-value: 0.04055}
\end{Verbatim}

#### Simultaneous Hypothesis Tests

The model we are fitting is given by $Y = \beta_0 \mathbf{1} + \beta_{Low}\mathbf{X_{Low}} + \beta_{Moderate}\mathbf{X_{Moderate}} + \beta_{High}\mathbf{X_{High}}$ where $\beta_0$ is the reference level corresponding to "None". The vectors $\mathbf{X_i}$ above are the indicator vectors representing whether that coefficient is used. We first create the indicator vectors as above:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
# Indicator vectors
high <- ifelse(industrial_activity == "High", 1, 0)
moderate <- ifelse(industrial_activity == "Moderate", 1, 0)
low <- ifelse(industrial_activity == "Low", 1, 0)
ones <- rep(c(1), each = num_obs)
# Combine into design matrix
X <- cbind(ones, low, moderate, high)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
This gives us the desired design matrix. Now we solve for $\hat{\beta} = (X^T X)^{-1}X^TY$ and $s^2 = \frac{(Y - X \mathbf{\hat{\beta}})^T(Y - X \mathbf{\hat{\beta}})}{n-4} \ \ (k=4)$:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
Y <- particulate_matter
b_vec <- solve(t(X)
s2 <- (t(Y - X
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
Then we use matrix $L = $\begin{pmatrix}
    0 & 1 & 0 & 0
0 & 0 & 1 & 0
0 & 0 & 0 & 1
\end{pmatrix}$$ to test $H_0: $\begin{pmatrix}
    \beta_1 \\ \beta_2 \\ \beta_3
\end{pmatrix}$ = $\begin{pmatrix}
    0 \\ 0 \\ 0
\end{pmatrix}$$. We use F statistic $F = \frac{(L\hat{\beta})^T(L(X^TX)^{-1}L^T)^{-1}(L\hat{\beta})}{3s^2}$ with 3 and $n-4 = 146$ degrees of freedom:

\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
L <- cbind(c(0,0,0), c(1,0,0), c(0,1,0), c(0,0,1)) # Our L matrix
# The corresponding F statistic
F_stat <- (t(L
cat(pf(F_stat, 3, num_obs - 4, lower.tail = FALSE) |> signif(4)) # Printing the p-value
\end{minted}

\vspace{-15pt}
\rule{\textwidth}{0.4pt}
\begin{Verbatim}[commandchars=
\{\}]
\textcolor{gray}{# Output:}
\textcolor{gray}{    0.001502}
\end{Verbatim}
This p-value is significant ($<0.05$), so we conclude that at least one $\beta _i \ne 0$

### Multiple Linear Regression

#### The Model

We fit the model and display the individual confidence intervals with:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
# Our full model with the interaction factor
model <- lm(particulate_matter ~ traffic_density + industrial_ordered + days_of_week_ordered
+  wind_speed + holiday + urban_greenery + temperature * humidity, data = data_tidy_air_quality)
confint(model, level = 0.95) |> signif(3) # Displaying the 95
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

```
2.5
(Intercept)                   -21.80000 47.4000
traffic_density                 0.01550  0.1440
industrial_orderedLow          -3.17000  8.4900
industrial_orderedModerate      0.60500 12.3000
industrial_orderedHigh         -0.25000 11.0000
days_of_week_orderedTuesday    -5.99000  6.0100
days_of_week_orderedWednesday  -5.35000  5.6600
days_of_week_orderedThursday   -5.54000  5.8700
days_of_week_orderedFriday     -8.06000  3.2200
days_of_week_orderedSaturday  -12.40000  3.3900
days_of_week_orderedSunday    -10.20000  6.0400
wind_speed                     -0.80400  0.8430
holidayYes                     -4.72000  6.7200
urban_greenery                 -0.41400 -0.1770
temperature                    -1.15000  0.5890
humidity                       -0.11100  0.4960
temperature:humidity           -0.00876  0.0209
```

#### Hypothesis Testing

If we consider the linear model without the terms we are testing, getting a reduced model, we can use the 'anova' function to get the p-value associated with that term being 0.
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
# Testing the effect of temperature
model_no_temp <- lm(particulate_matter ~ traffic_density + industrial_ordered + days_of_week_ordered
+  wind_speed + holiday + urban_greenery + humidity, data = data_tidy_air_quality)
anova(model_no_temp, model)
# Testing the effect of humidity
model_no_humid <- lm(particulate_matter ~ traffic_density + industrial_ordered + days_of_week_ordered
+  wind_speed + holiday + urban_greenery + temperature, data = data_tidy_air_quality)
anova(model_no_humid, model)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

\begin{Verbatim}[commandchars=
\{\}]
\textcolor{gray}{# Output:}
\textcolor{gray}{  Res.Df   RSS Df Sum of Sq      F Pr(>F)}
\textcolor{gray}{1    135 11096                        }
\textcolor{gray}{2    134 11087  1    9.1621 0.1107 0.7398}

\textcolor{gray}{# Output:}
\textcolor{gray}{  Res.Df   RSS Df Sum of Sq      F    Pr(>F)    }
\textcolor{gray}{1    135 16101                        }
\textcolor{gray}{2    134 11087  1    5014.5 60.609 1.684e-12 ***}
\end{Verbatim}
 To test for the significance of the industrial levels, we fit the reduced model:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
# Model with no industrial terms
model_no_industrial <- lm(particulate_matter ~ traffic_density + days_of_week_ordered
+  wind_speed + holiday + urban_greenery + temperature + humidity, data = data_tidy_air_quality)
anova(model_no_industrial, model)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}
\begin{Verbatim}[commandchars=
\{\}]
\textcolor{gray}{# Output:}
\textcolor{gray}{  Res.Df   RSS Df Sum of Sq      F  Pr(>F)  }
\textcolor{gray}{1    137 11682                              }
\textcolor{gray}{2    134 11087  3    595.49 2.3991 0.07073}
\end{Verbatim}

#### Interpretation

1. **Traffic Density:**
The confidence interval for traffic_density (95% CI: [0.01550, 0.1440]) does not contain 0, indicating statistical significance. We can conclude that traffic density has a small but positive effect on particulate matter levels. In particular, for each unit increase in traffic density, the amount of particulate matter increases by between 0.01550 and 0.1440 units. The average particulate matter increases by 0.07975 units
2. **Urban Greenery:**
Urban greenery is significant with a 95% CI of [-0.414, -0.177], which doesn't include 0. This indicates a negative effect on particulate matter levels. As urban greenery increases, particulate matter levels decrease, suggesting that green spaces may help reduce air pollution. In particular, for each unit increase in traffic density, the average amount of particulate matter decreases by 0.2955 units
3. **Industrial Activity: Moderate.**
The effect of moderate industrial activity is significantly different from the reference level ("None"), with a 95% CI of [0.605, 12.3]. This suggests that moderate industrial activity is associated with higher particulate matter levels compared to no industrial activity. However, the wide confidence interval indicates uncertainty about the magnitude of this effect. The effect could be small or large, but is positive
4. **Temperature:**
The hypothesis test for temperature yielded a p-value of 0.7398, which is not statistically significant at the conventional 0.05 level. We cannot conclude that temperature has a significant effect on particulate matter levels in this model.
5. **Humidity:**
The test for humidity's effect resulted in a highly significant p-value of 1.684e-12. This provides strong evidence that humidity has an effect on particulate matter levels. The nature and magnitude of this effect directly is not analysed.
6. **Overall Industrial Activity:**
While moderate industrial activity showed a significant effect individually, the overall effect of industrial activity on particulate matter levels is not significant (p-value = 0.07073). This suggests that while there may be differences between specific levels of industrial activity, the variable as a whole does not have a statistically significant impact on particulate matter levels at the 0.05 significance level.
7. **Interaction between Huidity and Temperature:**
The confidence interval for this interaction contains 0, suggesting that there is no significant interaction effect on particulate matter levels
8. **The other parameters** are not significant as their confidence intervals of not contain 0. Specifically,

### Conclusion

#### Summary

In summary, the model suggests that traffic density and urban greenery have significant effects on particulate matter levels, with increased traffic associated with higher levels and increased greenery associated with lower levels. Humidity also plays a significant role with a positive effect, while the effects of temperature are not statistically significant in the model. While the impact of moderate industrial activity is individually significant, the overall industrial activity is not statistically significant in this model. There is no significant interaction between temperature and humidity, and all the other factors are also not statistically significant

#### Recommendations

Based on our analysis, a multi-faceted approach to reducing particulate matter levels in urban areas is recommended. The primary focus should be on increasing urban greenery, as this has shown the most significant impact on improving air quality. Following this, efforts to reduce traffic density should be implemented, although the effect may be less pronounced than that of urban green spaces. While these factors can be directly influenced by urban planning, it's important to note that humidity also plays a significant role in particulate matter levels. Since humidity is largely dependent on weather conditions and not easily controllable, public health strategies should include warning systems to alert residents about increased air pollution risks during periods of high humidity. This comprehensive approach addresses the most influential factors identified in our study while also acknowledging the need for public awareness regarding environmental conditions that can exacerbate air quality issues.

#### Future Research

Collect further data relating to different industrial activity levels. The fact that a Moderate industrial activity level is significant, but not High appears to be inconsistent. Further research into whether industrial activity has an effect or not should be considered.

## Part Two: Simulation

### Scenario A: Violation of Normality

#### Methodology

We conduct 1000 independent trials. For each simulation:

1. We generate $num\_obs = 150$ residual points from a uniform distribution with mean 0 and variance $\sigma^2 = 100$, deliberately introducing a violation of the normality assumption (the parameters of the uniform distribution is described in Simulation below). This introduces a violation of normality of the residuals.
2. The response variable $Y$ is calculated as $Y = \beta_0 + \epsilon = 30 + \epsilon$

For reproducibility, a seed of 123 is set at the beginning of the simulation process.

#### Simulation

The residuals follow a uniform distribution, $\epsilon \sim U(a,b)$. To achieve a mean of 0, we set $a=-b$. The variance of this distribution is given by:
$$Var(\epsilon) = \frac{(b-a)^2}{12} = \frac{4b^2}{12} = \frac{b^2}{3}$$
To obtain the desired variance of 100, we solve for $b$:
$$100 = \frac{b^2}{3} \implies b = \sqrt{300} \text{ for } b > 0$$
For each simulation, we:

1. Generate the residuals and calculate $Y$
2. Fit a linear model of $Y$ against the temperature
3. Extract the p-value associated with the temperature coefficient. If the p-value is below 0.05, we increment a counter
4. The proportion of rejected tests (p-value < 0.05) out of the total simulations is then calculated and reported

The following code implements this simulation:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
num_obs = nrow(data.frame(temperature)) # Our n value
count <- 0 # Counter for keeping track of the proportion rejected
for (i in 1:1000) {
  # Generating uniformly distributed errors
  e <- runif(num_obs, -sqrt(300), sqrt(300))
  Y <- 30 + e

  # Fit the model and check if it is significant
  model <- lm(Y ~ temperature)
  p_value <- summary(model)$coefficients[, 4][2]
  
  if (p_value < 0.05) {
    count <- count + 1
  }
}
print((count) / 1000)
\end{minted}
\vspace{-15pt} 
\par\noindent\rule{\textwidth}{0.4pt}
\subsubsection*{Results}
Our final result was a proportion of $0.043$. This is similar to the expected rate of $0.05$, so we conclude that the violation of the normality assumption does not majorly affect the Type I error probability (with a large sample size)
\subsection{Scenario B: Violation of Homoscedasticity}
\subsubsection*{Methodology}
We conduct 1000 independent trials. For each simulation:
\begin{enumerate}
    \item Generate a random variance point from a Gamma distribution with a mean of 100, and a variance of 50 from this distribution
    \item Create $num_obs$ error points from normal distributions, with varying variances. This creates the violation of homoscedasticity
    \item Calculate the response variable $Y$ using these error terms
\end{enumerate}
Specifically:
\begin{itemize}
    \item The variance generation: $V \sim Gamma(\lambda = 2, \alpha = 200)$, ensuring $E(V) = 100$ and $Var(V) = 50$.
    \item Error term generation: For each observation $i$, $\epsilon_i \sim N(0, v_i^2)$, where $v_i^2$ is the generated variance.
    \item Response variable calculation: $Y = \beta_0 + \epsilon$, with $\beta_0 = 30$.
\end{itemize}
For reproducibility, a seed of 123 is set at the beginning of the simulation process (note that he output from this simulation is run in the same session after Scenario A)
\subsubsection*{Simulation Details}
The simulation procedure for each trial is as follows:
\begin{enumerate}
    \item Generate error terms as described in the methodology.
    \item Fit a linear model using the 'lm(...)' function
    \item Extract the p-value associated with the temperature coefficient.
    \item If the p-value is below 0.05, increment a counter.
\end{enumerate}
The proportion of rejected tests (p-value < 0.05) out of the total simulations is then calculated and reported.  The R code implementing this simulation is as follows:
\par\noindent\rule{\textwidth}{0.4pt}
\vspace{-25pt} 
\begin{minted}{r}
count <- 0 # Counter for keeping track of the proportion rejected
Y <- vector(length = num_obs)
for (i in 1:1000) {
  # Generate 150 different variances from the gamma distribution
  variance <- rgamma(num_obs, shape = 200, scale = 1/2)
  # Generate the error terms based on the different variances
  e <- rnorm(num_obs, 0, sqrt(variance))
  Y <- b0 + e # Set the Y values
  # Fit the model and check if it is significant
  model <- lm(Y ~ temperature)
  p_value <- summary(model)$coefficients[, 4][2]
  if (p_value < 0.05) {
    count <- count + 1
  }
}
print((count) / 1000)
\end{minted}
\vspace{-15pt}
\rule{\textwidth}{0.4pt}

#### Results

Our final result was a proportion of $0.056$. This is similar to the expected rate of $0.05$, so we conclude that the violation of the homoscedasticity assumption does not majorly affect the Type I error probability (for large sample sizes)

### Scenario C: Violation of Independence

We conduct 1000 independent trials. For each simulation:

- Utilize the provided generate_ar1_errors function to create correlated error terms. This is done using arguments $n = num\_obs, \rho = 0.3, var\_epsilon = 100$. This introduces a violation of independence.
- Calculate $Y = \beta_0 + \epsilon$

For reproducibility, a seed of 123 is set at the beginning of the simulation process (note that the result produced is the result after running Simulation A and B in the same session)

#### Simulation Details

The simulation procedure for each trial is as follows:

- Generate correlated error terms using the generate_ar1_errors function.
- Construct the response variable $Y$ using these error terms.
- Fit a linear model using the lm function.
- Extract the p-value associated with the temperature coefficient. If the p-value is below 0.05, increment a counter

The proportion of rejected tests (p-value < 0.05) out of the total simulations is then calculated and reported. The R code implementing this simulation is as follows:
\rule{\textwidth}{0.4pt}
\vspace{-25pt}
\begin{minted}{r}
count <- 0 # Counter
for (i in 1:1000) {
  epsilon <- generate_ar1_errors(num_obs, 0.3, sigma2) # Generating our correlated errors
  Y = b0 + epsilon
  # Fit the model and check if it is significant
  model <- lm(Y ~ temperature)
  p_value <- summary(model)$coefficients[, 4][2]
  
  if (p_value < 0.05) {
    count <- count + 1
  }
}
print((count) / 1000)
\end{minted}
\vspace{-15pt} 
\par\noindent\rule{\textwidth}{0.4pt}
\subsubsection*{Results}
Our final result was a proportion of $0.046$. This is similar to the expected rate of $0.05$, so we conclude that the violation of the independence assumption does not majorly affect the Type I error probability

### Conclusion

Our simulation study investigated the robustness of linear regression to violations of three key assumptions: normality of residuals, homoscedasticity, and independence of errors. The results, based on 1000 simulations for each scenario, are as follows:

- Non-normal residuals: 4.3% rejection rate
- Heteroscedasticity: 5.6% rejection rate
- Correlated errors: 4.6% rejection rate

From this, we can note that all these rejection rates are similar to the expected error rate of 5%. This allows us to conclude that linear regression appears robust to these violations. As a result, the implications of hypothesis testing when the assumptions are violated are similar to those when they are not. It is important to note that if the violations are more severe, there might be a larger impact on the Type I error proportion. Additionally, a smaller sample size will give less reliable results.
