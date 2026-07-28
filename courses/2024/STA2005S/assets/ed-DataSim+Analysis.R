#Latin Squares

if (!require("agricolae")) {
  install.packages("agricolae")
  library(agricolae)
}
if (!require("hash")) {
  install.packages("hash")
  library(hash)
}
if (!require("car")) {
  install.packages("car")
  library(car)
}
if (!require("lsr")) {
  install.packages("lsr")
  library(lsr)
}
if (!require("pwr")) {
  install.packages("pwr")
  library(pwr)
}

# We need to satisfy constraints:
# Sum all values in block = 0
# Sum of treatment effects = 0

# TODO potentially add a control -> duplicate the latin square, but have controls (just a normal latin square? no fertilizer)

# GENERATING DATA

h <- hash()
 general_mean <- 50
 h[["Radish"]] = 1.5
 h[["Carrot"]] = 1
 h[["Cucumber"]] = 0
  h[["Beetroot"]] = -2.5
#
  h[["Sandy"]] = 1.5
  h[["Clay"]] = 1
  h[["Black"]] = 0
  h[["Peat"]] = -2.5
#
  h[["0"]] = 0.4
 h[["10"]] = 0.2
 h[["20"]] = -0.3
 h[["30"]] = -0.3
#
 h[["A"]] = 2
 h[["B"]] = -4
 h[["C"]] = 5.5
 h[["D"]] = -3.5
#


   seed <- 42 # random seed (for reproducibility)
   tmts <- c("A", "B", "C", "D") # treatments
   gradient <- c("0", "10", "20", "30") # gradient angles
   outdesign <- design.graeco(tmts, gradient, seed = seed)
   glsd <- outdesign$book
#
#   # Assign labels to the rows
   levels(glsd$row) <- c("Beetroot", "Cucumber", "Radish", "Carrot")
#
#   # Assign labels to the columns
   levels(glsd$col) <- c("Black", "Clay", "Peat", "Sandy")
   colnames(glsd) <- c("plots", "plants", "soil", "treatment", "gradient")  # Adjust as necessary
# 
num_replicates <- 5
 n_obs <- num_replicates * nrow(glsd)
 frame <- do.call(rbind, replicate(num_replicates, glsd, simplify = FALSE))
 rownames(frame) <- NULL

 response <- vector(mode = "numeric", length = n_obs)
 for (i in 1:n_obs) {

   plant <- as.character(glsd$plants[(i-1) %% 16 + 1])
   soil <- as.character(glsd$soil[(i-1) %% 16 + 1])
   treat <- as.character(glsd$treatment[(i-1) %% 16 + 1])
   grad <- as.character(glsd$gradient[(i-1) %% 16 + 1])

  # deterministic component
   y <- general_mean + h[[plant]] + h[[soil]] + h[[treat]] + h[[grad]]

  # Random component
   error <- rnorm(1, 0, 3)

   response[i] = y + error
 }

 frame$response <- response

# saved in data.txt, so read in through this for analysis now
# frame <- read.table("data.txt", T)
frame

# ANALYSING DATA
model <- aov(response ~ treatment + soil + plants + gradient, data = frame)
summary(model)

# Diagnostic plots - Residuals are normal
# par(mfrow = c(2, 3))
par(mfrow = c(1,1))
qqPlot(resid(model), xlab = "Normal quantities", ylab = "Residuals from the data", main = "A normal Q-Q plot of the residuals") 
# plot(mod1)

# Purpose of the blue region:
#  The blue region provides a visual guide for assessing whether the observed data points (represented by dots on the plot) follow the expected theoretical distribution (usually a normal distribution in the context of ANOVA residuals).
# Interpretation:
#  If the majority of the points fall within this blue region, it suggests that the data is consistent with the theoretical distribution.
# Confidence level:
#  The blue region typically represents a 95% confidence envelope, though this can sometimes be adjusted.
#  This means that if the data truly follows the theoretical distribution, we would expect about 95% of the points to fall within this region.


library(ggplot2)


# Create the histogram and overlay a normal distribution curve
ggplot(data.frame(x = resid(model)), aes(x)) +
  geom_histogram(aes(y = ..density..), bins = 10, fill = "lightblue", 
                 color = "black") + 
  stat_function(fun = dnorm, args = list(mean =0, sd = sd(resid(model))), 
                color = "red", size = 1) +
  labs(title = "Histogram of the residuals with Normal Distribution Curve", 
       x = "Value", y = "Density")



sd(resid(model))


# Shapiro-Wilk test
shap_test <- shapiro.test(residuals(model))
shap_test["p.value"]

# Result plots:

boxplot(response ~ treatment, data = frame, main = "Fertilizers against Weight (g)", xlab = "Fertilizers",
        ylab = "Weight measured (g)", las = 1, cex.axis = 1.2, cex.lab = 1.2)


# Check Equal Variance (if we want to)
with(frame, 
     tapply(response, treatment, sd))
frame$all_factors <- interaction(frame$plants, frame$soil, frame$treatment, frame$soil)

lev_test <- leveneTest(response ~ all_factors, data = frame)

# can do lev_test with just treatments as only variance is from the error term ideally
lev_test <- leveneTest(response ~ treatment, data = frame)
lev_test[1, "Pr(>F)"]
leveneTest(response ~ treatment * soil * gradient * plants, data = frame)
lev_test
# cur
model <- lm(response ~ plants + soil + treatment + soil, data = frame)
# plot(model, which = 1)  # Residuals vs Fitted
# plot(model, which = 3)  # Scale-Location plot


# Assuming you have a fitted model
# model <- lm(response ~ treatment + row + column + latin_letter, data = your_data)

# Custom function for variance ratio
var_ratio <- function(model) {
  vars <- tapply(residuals(model), model$model$treatment, var)
  return(max(vars) / min(vars))
}

library(car)
# Observed statistic
obs_stat <- var_ratio(model)


library(car)


# Independence of Residuals
acf(resid(model), main = "Autocorrelation Function for the Residuals")
durbinWatsonTest(model)


# Interaction Plot
interaction.plot(frame$plants, frame$soil, response)
mod <- aov(response ~ treatment + gradient + plants * soil, data = frame)
anova_summary <- summary(mod)

p_value_interaction <- anova_summary[[1]]["plants:soil", "Pr(>F)"]
p_value_interaction

cur_score <- cur_score + as.numeric(p_value_interaction)

# Power CHECK
# Estimate error variance with MSE?
rss <- sum(residuals(mod1)^2)
df_residual <- mod1$df.residual
mse <- rss / df_residual



eta_squared <- etaSquared(mod1, anova = TRUE)
effect_size_f <- sqrt(eta_squared / (1 - eta_squared))
effect_size <- max(effect_size_f[,1])

num_groups <- 4  # Number of groups (factors)

# Perform the power analysis for ANOVA
power_result <- pwr.anova.test(k = num_groups, 
                            f = effect_size, 
                            n = num_replicates, 
                            sig.level = 0.05, 
                            power = NULL)

# Print the result
as.numeric(power_result["power"])

# rm <- num_replicates * 4
# power.exp(rm = rm, df.num = 3, df.denom = 3*(rm - 1), delta = 25, sigma = sqrt(mse))


# Contrasts - Tukey
# wb.aov <- aov(response ~ soil * plants, data = frame)
# wb.hsd <- TukeyHSD(mod1)
# wb.hsd
# plot(wb.hsd, las = 1)
# summary(mod1)
# TODO what pairwise comparisons we want to do

# Graph of treatment means and 95% CI
par(mar = c(5, 4, 4, 2) + 0.1)  # Adjust margins
par(cex.axis = 1)  # Adjust axis text size
aov_treat <- aov(response ~ treatment, data = frame)
hsd_treat <- TukeyHSD(aov_treat)
plot(hsd_treat, las = 1)
aov_treat

# Get the means from the ANOVA model
mean <- model.tables(aov_treat, "means")
c_mean <- mean$tables$treatment["C"]
a_mean <- mean$tables$treatment["A"]

summary(model)
# CI is form (C-A) +- t_{error df = 67} MSE * sqrt(2/4)
mse <- 7.4
lower <- c_mean - a_mean - qt(1 - 0.025, 67) * sqrt(mse) * sqrt(1/2)
upper <- c_mean - a_mean + qt(1 - 0.025, 67) * sqrt(mse) * sqrt(1/2)
upper
lower

# model.tables(model, "means") the same means

# TODO: Maybe get a nicer looking graph than this
install.packages("ggplot2")
install.packages("multcompView")
library(ggplot2)
library(multcompView)

install.packages("multcomp")
library(multcomp)
L.out <- glht(m1b, linfct = t(L))
summary(L.out)

# C-A


# Convert Tukey HSD results to data frame
hsd_df <- as.data.frame(hsd_treat$treatment)
hsd_df$comparison <- rownames(hsd_df)

ggplot(hsd_df, aes(x = comparison, y = diff, ymin = lwr, ymax = upr)) +
  geom_pointrange(color = "blue") +
  geom_hline(yintercept = 0, linetype = "dashed", color = "red") +
  theme_minimal() +
  labs(
    title = "Tukey HSD Test Results",
    x = "Comparison",
    y = "Difference in Means"
  ) +
  theme(
    axis.text.x = element_text(angle = 45, hjust = 1),
    plot.title = element_text(size = 16, face = "bold"),
    axis.title = element_text(size = 14),
    axis.text = element_text(size = 12)
  )



# interaction.plot(frame$plants, frame$soil, response)
# check

mod <- aov(response ~ treatment + gradient + plants * soil, data = frame)
anova(mod)["plants:soil", "Pr(>F)"]

library(ggplot2)


influencePlot(mod1)

library(ggplot2)
library(gridExtra)
install.packages("reshape2")
library(reshape2)

residuals_mat <- matrix(resid(mod1), nrow = length(unique(frame$plants)), 
                        ncol = length(unique(frame$soil)), byrow = TRUE)
colnames(residuals_mat) <- unique(frame$soil)
rownames(residuals_mat) <- unique(frame$plants)
residuals_df <- melt(residuals_mat)
colnames(residuals_df) <- c("Plants", "Soil", "Residual")
p3 <- ggplot(residuals_df, aes(x = Soil, y = Plants, fill = Residual)) +
  geom_tile() +
  scale_fill_gradient2(low = "blue", high = "red", mid = "white", midpoint = 0) +
  theme_minimal() +
  labs(title = "Residual Heatmap")
p3

# 4. Orthogonality Check Plot
orthogonality <- cor(model.matrix(mod1)[,-1])
orthogonality_df <- melt(orthogonality)
p4 <- ggplot(orthogonality_df, aes(x = Var1, y = Var2, fill = value)) +
  geom_tile() +
  scale_fill_gradient2(low = "blue", high = "red", mid = "white", midpoint = 0, limits = c(-1, 1)) +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
  labs(title = "Orthogonality Check: Correlation between Model Terms")
p4

# 5. Gradient Effect Plot
p5 <- ggplot(frame, aes(x = gradient, y = response)) +
  geom_boxplot() +
  theme_minimal() +
  labs(title = "Gradient Effect on Response", x = "Gradient", y = "Response")
p5

# could do additivity test instead of interaction
frame$predicted <- predict(model)
p6 <- ggplot(frame, aes(x = predicted, y = response)) +
  geom_point() +
  geom_abline(intercept = 0, slope = 1, color = "red", linetype = "dashed") +
  theme_minimal() +
  labs(title = "Additivity Check: Observed vs Predicted", x = "Predicted Response", y = "Observed Response")
p6

library(ggplot2)
library(gridExtra)
library(reshape2)
library(GGally)
library(lme4)
library(car)

# 1. Interaction Network Plot
interaction_matrix <- cor(model.matrix(mod1)[,-1])
diag(interaction_matrix) <- 0
interaction_df <- melt(interaction_matrix)
p1 <- ggplot(interaction_df, aes(x = Var1, y = Var2)) +
  geom_tile(aes(fill = value)) +
  geom_text(aes(label = round(value, 2))) +
  scale_fill_gradient2(low = "blue", high = "red", mid = "white", midpoint = 0, limits = c(-1, 1)) +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
  labs(title = "Interaction Network")
p1

# 2. Marginal Model Plots
p2 <- ggpairs(frame[, c("response", "plants", "soil", "treatment", "gradient")], 
              lower = list(continuous = "smooth"), 
              diag = list(continuous = "barDiag"),
              upper = list(continuous = "cor")) +
  ggtitle("Marginal Model Plots")
p2

# 3. Variogram-like Plot for Spatial Correlation
frame$row_num <- as.numeric(factor(frame$plants))
frame$col_num <- as.numeric(factor(frame$soil))
frame$dist <- sqrt((frame$row_num - mean(frame$row_num))^2 + (frame$col_num - mean(frame$col_num))^2)
p3 <- ggplot(frame, aes(x = dist, y = resid(mod1))) +
  geom_point() +
  geom_smooth(method = "loess", se = FALSE) +
  theme_minimal() +
  labs(title = "Spatial Correlation Check", x = "Distance from Center", y = "Residuals")
p3

# 4. Random Effects Plot
mod_mixed <- lmer(response ~ treatment + gradient + (1|plants) + (1|soil), data = frame)
ranef_df <- data.frame(
  Effect = c(rep("Plants", length(ranef(mod_mixed)$plants)), 
             rep("Soil", length(ranef(mod_mixed)$soil))),
  Level = c(rownames(ranef(mod_mixed)$plants), rownames(ranef(mod_mixed)$soil)),
  Estimate = c(ranef(mod_mixed)$plants[[1]], ranef(mod_mixed)$soil[[1]])
)
p4 <- ggplot(ranef_df, aes(x = Level, y = Estimate, fill = Effect)) +
  geom_bar(stat = "identity") +
  facet_wrap(~ Effect, scales = "free_x") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
  labs(title = "Random Effects of Plants and Soil")
p4

# 5. Influential Observations Plot
influence <- influence.measures(mod1)
p5 <- ggplot(data.frame(Index = 1:nrow(frame), Cook = cooks.distance(mod1)), aes(x = Index, y = Cook)) +
  geom_point() +
  geom_hline(yintercept = 4/nrow(frame), linetype = "dashed", color = "red") +
  theme_minimal() +
  labs(title = "Influential Observations (Cook's Distance)", x = "Observation Index", y = "Cook's Distance")
p5

# 6. Effect Size Plot
anova_results <- anova(mod1)
effect_sizes <- etaSquared(mod1)
effect_df <- data.frame(
  Term = rownames(effect_sizes),
  EffectSize = effect_sizes[,1]
)
p6 <- ggplot(effect_df, aes(x = reorder(Term, -EffectSize), y = EffectSize)) +
  geom_bar(stat = "identity", fill = "skyblue") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
  labs(title = "Effect Sizes (Eta Squared)", x = "Model Terms", y = "Eta Squared")
p6


library(ggplot2)
library(gridExtra)
library(dplyr)
library(viridis)
library(ggridges)
library(ggalluvial)
library(plotly)

# Custom theme for consistency
theme_custom <- theme_minimal() +
  theme(
    plot.title = element_text(hjust = 0.5, size = 14, face = "bold"),
    axis.title = element_text(size = 12),
    axis.text = element_text(size = 10),
    legend.title = element_text(size = 12),
    legend.text = element_text(size = 10)
  )

# 1. Enhanced Treatment Effect Plot
ggplot(frame, aes(x = treatment, y = response, fill = treatment)) +
  geom_violin(trim = FALSE) +
  theme_minimal() +
  theme(plot.title = element_text(hjust = 0.5, size = 14, face = "bold")) +
  geom_boxplot(width = 0.4, fill = "white", alpha = 0.5) +
  labs(title = "Fertilizers against Weight (g)", x = "Fertilizer", y = "Weight (g)") +
  theme(legend.position = "none")

# 2. Radial Layout of Graeco-Latin Square
square_data <- unique(frame[, c("plants", "soil", "treatment", "gradient")])
square_data$angle <- (as.numeric(factor(square_data$plants)) - 1) * 2 * pi / length(unique(square_data$plants))
square_data$radius <- as.numeric(factor(square_data$soil))

p2 <- ggplot(square_data, aes(x = angle, y = radius, fill = treatment, label = gradient)) +
  geom_tile(aes(width = 2*pi/length(unique(square_data$plants)), height = 0.9), color = "white") +
  geom_text(color = "white", size = 3) +
  scale_fill_viridis_d() +
  coord_polar() +
  theme_void() +
  labs(title = "Radial Layout of Graeco-Latin Square") +
  theme(legend.position = "bottom")
p2

# good for which conditions may be best for each plant?
# 3. Ridge Plot for Response Distribution
p3 <- ggplot(frame, aes(x = response, y = interaction(plants, soil), fill = plants)) +
  geom_density_ridges(scale = 3, alpha = 0.8) +
  scale_fill_viridis_d() +
  theme_custom +
  labs(title = "Response Distribution by Plants and Soil", x = "Response", y = "Plants-Soil Combination") +
  theme(axis.text.y = element_text(size = 8))
p3

# 4. Interactive 3D Scatter Plot
p4 <- plot_ly(frame, x = ~as.numeric(factor(plants)), y = ~as.numeric(factor(soil)), z = ~response, 
              color = ~treatment, text = ~paste("Treatment:", treatment, "<br>Gradient:", gradient),
              type = "scatter3d", mode = "markers") %>%
  layout(scene = list(xaxis = list(title = "Plants"), 
                      yaxis = list(title = "Soil"), 
                      zaxis = list(title = "Response")),
         title = "3D Visualization of Graeco-Latin Square")
p4

# 5. Alluvial Plot for Factor Relationships
p5 <- ggplot(frame,
             aes(axis1 = plants, axis2 = soil, axis3 = treatment, axis4 = gradient, y = response)) +
  geom_alluvium(aes(fill = treatment), width = 1/12) +
  geom_stratum(width = 1/12, fill = "white", color = "grey") +
  geom_label(stat = "stratum", aes(label = after_stat(stratum))) +
  scale_x_discrete(limits = c("Plants", "Soil", "Treatment", "Gradient"), expand = c(.05, .05)) +
  scale_fill_viridis_d() +
  theme_custom +
  labs(title = "Alluvial Plot of Factor Relationships")
p5

# 6. Heatmap of Response
response_mean <- frame %>%
  group_by(plants, soil) %>%
  summarize(mean_response = mean(response))

p6 <- ggplot(response_mean, aes(x = plants, y = soil, fill = mean_response)) +
  geom_tile() +
  scale_fill_viridis_c() +
  theme_custom +
  labs(title = "Heatmap of Mean Response", x = "Plants", y = "Soil", fill = "Mean Response")
p6

# 1. Bubble Plot of Treatment Effects
treatment_effects <- frame %>%
  group_by(treatment, gradient) %>%
  summarise(mean_response = mean(response),
            se_response = sd(response) / sqrt(n())) %>%
  ungroup()

p1 <- ggplot(treatment_effects, aes(x = treatment, y = gradient, size = mean_response, color = mean_response)) +
  geom_point(alpha = 0.7) +
  scale_size_continuous(range = c(3, 15)) +
  scale_color_viridis_c() +
  theme_custom +
  labs(title = "Treatment Effects by Gradient", x = "Treatment", y = "Gradient", size = "Mean Response", color = "Mean Response")
p1

# 2. Circular Barplot for Factor Contributions
factor_contributions <- data.frame(
  factor = c("Treatment", "Plants", "Soil", "Gradient", "Residuals"),
  contribution = c(sum((anova(mod1)$`Sum Sq`)[1]),
                   sum((anova(mod1)$`Sum Sq`)[2]),
                   sum((anova(mod1)$`Sum Sq`)[3]),
                   sum((anova(mod1)$`Sum Sq`)[4]),
                   sum((anova(mod1)$`Sum Sq`)[5]))
)

factor_contributions$proportion <- factor_contributions$contribution / sum(factor_contributions$contribution)
factor_contributions$ymax <- cumsum(factor_contributions$proportion)
factor_contributions$ymin <- c(0, head(factor_contributions$ymax, n=-1))

p2 <- ggplot(factor_contributions, aes(ymax=ymax, ymin=ymin, xmax=4, xmin=3, fill=factor)) +
  geom_rect() +
  coord_polar(theta="y") +
  xlim(c(2, 4)) +
  theme_void() +
  scale_fill_brewer(palette="Set2") +
  geom_label(x=3.5, aes(y = (ymin + ymax)/2, label = scales::percent(proportion)), size=4) +
  labs(title = "Factor Contributions to Variance", fill = "Factor")
p2

library(ggplot2)
library(dplyr)
library(tidyr)
library(patchwork)

install.packages("gganimate")
library(gganimate)


library(scales)

install.packages("ggforce")
library(ggforce)

library(ggrepel)

install.packages("waffle")
library(waffle)

# 3. Animated Interaction Plot
interaction_data <- frame %>%
  group_by(plants, soil, treatment) %>%
  summarise(mean_response = mean(response)) %>%
  ungroup()

p3 <- ggplot(interaction_data, aes(x = plants, y = mean_response, color = soil, group = soil)) +
  geom_line() +
  geom_point(size = 3) +
  theme_custom +
  transition_states(treatment, transition_length = 2, state_length = 1) +
  enter_fade() +
  exit_fade() +
  labs(title = "Treatment: {closest_state}", x = "Plants", y = "Mean Response", color = "Soil") +
  theme(legend.position = "bottom")
p3

# 4. Waffle Chart for Treatment Distribution
treatment_counts <- as.data.frame(table(frame$treatment))
treatment_counts$fraction <- treatment_counts$Freq / sum(treatment_counts$Freq)
treatment_counts$Freq <- round(treatment_counts$fraction * 100)

p4 <- ggplot(treatment_counts, aes(fill = Var1, values = Freq)) +
  geom_waffle(n_rows = 10, size = 0.5, colour = "white") +
  scale_fill_brewer(palette = "Set3") +
  coord_equal() +
  theme_void() +
  theme(legend.position = "bottom") +
  labs(title = "Treatment Distribution", fill = "Treatment")
p4






