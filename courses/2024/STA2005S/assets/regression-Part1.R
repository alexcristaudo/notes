# DATA LOADING
#| results: hide
#| warning: false
#| message: false
#| error: false

if(!requireNamespace("remotes",quietly =TRUE)) {
  install.packages("remotes")
}

remotes::install_github("MiguelRodo/DataTidyRodoSTA2005S")
data("data_tidy_air_quality",package ="DataTidyRodoSTA2005S")

# PACKAGES
library(ggplot2)
library(GGally)

# DATA EXPLORATION
attach(data_tidy_air_quality)


### Create the histogram and overlay a normal distribution curve
ggplot(data_tidy_air_quality, aes(x = particulate_matter)) +
  geom_histogram(aes(y = ..density..), bins = 10, fill = "lightblue", 
                 color = "black") + 
  stat_function(fun = dnorm, args = list(mean = mean(particulate_matter), sd = sd(particulate_matter)), 
                color = "red", size = 1) +
  labs(title = "Histogram of particulate matter with Normal Distribution Curve", 
       x = expression("Particulate Matter (μg/m"^3*")"), y = "Density")

### Scatter plot for all continuous variables

# Select only the continuous columns
numeric_cols <- sapply(data_tidy_air_quality, is.numeric)
frame_numeric <- data_tidy_air_quality[, numeric_cols]

# Make the plot
ggpairs(data = frame_numeric, title = "Pairwise Scatterplots for the Continuous Variables") 


### Categorical Variable Plots

# Define the layout matrix and widths/heights for each cell
layout_matrix <- matrix(c(1, 2, 3), nrow = 1, byrow = TRUE)
layout(layout_matrix, widths = c(4.5, 6, 3), heights = c(1, 1))

# Make sure the plots are ordered
data_tidy_air_quality$industrial_ordered <- factor(data_tidy_air_quality$industrial_activity, 
                                                 levels = c("None", "Low", "Moderate", "High"))

data_tidy_air_quality$days_of_week_ordered <- factor(data_tidy_air_quality$day_of_week, 
                               levels = c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"))


boxplot( particulate_matter ~ industrial_ordered, 
         data = data_tidy_air_quality, 
         main = "Particulate Matter against the Industrial Activity", 
         xlab = "Industrial Activity", 
         ylab = "Particulate Matter", 
         las = 1,cex.axis = 1.2, cex.lab = 1.2, 
         col = "#89CFF0" )

boxplot( particulate_matter ~ days_of_week_ordered, 
         data = data_tidy_air_quality, 
         main = "Particulate Matter against the days of the week", 
         xlab = "Days of the Week", 
         ylab = "Particulate Matter", 
         las = 1,cex.axis = 1.2, cex.lab = 1.2, 
         col = "lightblue" )

boxplot( particulate_matter ~ holiday, 
         data = data_tidy_air_quality, 
         main = "Particulate Matter against Holiday Status", 
         xlab = "Holiday Status", 
         ylab = "Particulate Matter", 
         las = 1,cex.axis = 1.2, cex.lab = 1.2, 
         col = "#F0F8FF" )



### Categorical Relationships

# Attaching the new columns created
attach(data_tidy_air_quality)

# Define the colours used in the interaction plots
colours <- c("red", "blue", "lightblue", "purple")

# Reset grid setting
par(mfrow = c(1,1))
  
# Create the interaction plot
interaction.plot(industrial_ordered, holiday, particulate_matter,
  xlab = "Industrial Activity",
  ylab = "Mean of the Particulate Matter",
  col = colours,
  lty = 1, lwd = 2, las = 1,
  trace.label = "Holiday Status"
)
title("Interaction Plot of the Industrial Activity with Holiday Status on Particulate Matter levels")


# Create the interaction plot
interaction.plot(days_of_week_ordered, holiday, particulate_matter,
   xlab = "Days of the Week",
   ylab = "Mean of the Particulate Matter",
   col = colours,
   lty = 1, lwd = 2, las = 1,
   trace.label = "Holiday Status"
)
title("Interaction Plot of the Days of the Week with Holiday Status on Particulate Matter levels")


# Create the interaction plot
interaction.plot(days_of_week_ordered, industrial_ordered, particulate_matter,
   xlab = "Days of the Week",
   ylab = "Mean of the Particulate Matter",
   col = colours,
   lty = 1, lwd = 2, las = 1,
   trace.label = "Industrial Activity"
)
title("Interaction Plot of the Days of the Week with Industrial Activity on Particulate Matter levels")



### Model Fitting

num_obs <- nrow(data.frame(particulate_matter)) # number of observations
mat_one <- rep(c(1), each = num_obs) # Column of 1's

X <- traffic_density
Y <- particulate_matter

# Solving using the OLS equations
b1 <- cov(X, Y) / var(X)
b0 <- mean(Y) - b1 * mean(X)

# Displaying the output
# \u2080 is the unicode for a subscript 0. \u2081 is one
cat(paste(" β\u2080     β\u2081\n", b0 |> signif(4),"", b1 |> signif(4)))

# Solving for C matrix
b_vec <- c(b0, b1)
X_mat <- cbind(mat_one, X)
C_mat <- solve(t(X_mat) %*% X_mat)

# Solving for s^2
s2 <- (t(Y - X * b1 - mat_one * b0) %*% (Y - X * b1 - mat_one * b0)) / (num_obs - 2)

# Printing - \u00B2 is a superscript 2
cat(paste(" s\u00B2\n", s2 |> signif(4)))

# Evaluating the standard error, t-value and p
b_val <- 0 # Used for indexing in the C matrix

print_string <- "β[n] | Estimate | Std. Error | T-value | P-value  \n"
for (b in b_vec) {
  # Standard error
  se <- sqrt(s2 * C_mat[b_val + 1, b_val + 1]) 
  # test statistic
  t_b <- b / se
  # p-value
  p_val <- 2 * pt(abs(t_b), df = num_obs - 2, lower.tail = FALSE) 
  b_val <- b_val + 1 
  # Adding to a string for visually appealling output
  print_string <- paste(print_string, b_val - 1, "  |  ", b |> signif(4), " |  ", se |> signif(4), ifelse(b_val == 2, " | ", "   | "), t_b |> signif(4), " | ", p_val |> signif(4), "\n")
}
cat(print_string)

# Calculating the SSE, MSE and RSE (Residual Standard Error)
SSE <- s2 * (num_obs-2)
MSE <- s2
RSE <- sqrt(MSE)
cat(paste("Residual Standard Error:", RSE |> signif(4), "on", num_obs - 2, "df"))

# Calculating SST
SST <- t(Y - mean(Y)) %*% (Y - mean(Y))

# R2 and adjusted R2
R2 <- 1 - SSE/SST
adjusted_R2 <- 1 - (1-R2) * ((num_obs-1)/(num_obs - 2))

cat(paste(" Multiple R2  === ", R2 |> signif(4), "\n", "Adjusted R2  === ", adjusted_R2 |> signif(4)))

# Our F statistic and our p-value
F_stat <- ((SST - SSE) / (2-1)) / MSE
F_p_value <- pf(F_stat, 1, num_obs - 2, lower.tail = FALSE)

cat(paste("F-statistic:", F_stat |> signif(4), "on 1 and 148 DF\n    p-value:", F_p_value |> signif(4)))



### Simultaneous Hypothesis Test

# Categorical -> B0 is None, B1 is Low, B2 is Moderate, B3 is High

# Getting the indicator matrix
high <- ifelse(industrial_activity == "High", 1, 0)
moderate <- ifelse(industrial_activity == "Moderate", 1, 0)
low <- ifelse(industrial_activity == "Low", 1, 0)
ones <- rep(c(1), each = num_obs)
X <- cbind(ones, low, moderate, high) # this is our design matrix

Y <- particulate_matter

# Running our hypothesis test using the L matrix below

L <- cbind(c(0,0,0), c(1,0,0), c(0,1,0), c(0,0,1))

# Solving for the estimates (X'X)^-1 X'Y
b_vec <- solve(t(X) %*% X) %*% t(X) %*% Y
# Solving for s^2
s2 <- (t(Y - X %*% b_vec) %*% (Y - X %*% b_vec)) / (num_obs - 4)
# The corresponding F statistic
F_stat <- (t(L %*% b_vec) %*% solve(L %*% solve(t(X) %*% X) %*% t(L)) %*% (L %*% b_vec))/(3 * s2)
# Our p-value
cat(pf(F_stat, 3, num_obs - 4, lower.tail = FALSE) |> signif(4))


### Fit Model
# Ensure ordered
model <- lm(particulate_matter ~ traffic_density + industrial_ordered + days_of_week_ordered +  wind_speed + holiday + urban_greenery + temperature * humidity, data = data_tidy_air_quality)
confint(model, level = 0.95) |> signif(3)

model_temp <- lm(particulate_matter ~ traffic_density + industrial_ordered + days_of_week_ordered +  wind_speed + holiday + urban_greenery + temperature + humidity, data = data_tidy_air_quality)
confint(model_temp, level = 0.95) |> signif(3)

### Hypothesis Test
# Testing the effect of temperature
model_no_temp <- lm(particulate_matter ~ traffic_density + industrial_ordered + days_of_week_ordered +  wind_speed + holiday + urban_greenery + humidity, data = data_tidy_air_quality)
anova(model_no_temp, model)

# Testing the effect of humidity
model_no_humid <- lm(particulate_matter ~ traffic_density + industrial_ordered + days_of_week_ordered +  wind_speed + holiday + urban_greenery + temperature, data = data_tidy_air_quality)
anova(model_no_humid, model)

# Testing the effect of industrial categorical factors
model_no_industrial <- lm(particulate_matter ~ traffic_density + days_of_week_ordered +  wind_speed + holiday + urban_greenery + temperature + humidity, data = data_tidy_air_quality)
anova(model_no_industrial, model)

