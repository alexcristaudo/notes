# model <- lm(particulate_matter ~ traffic_density + industrial_ordered + days_of_week_ordered +  wind_speed + holiday + urban_greenery + temperature + humidity, data = data_tidy_air_quality)
# summary(model)
# .68e-12 - humidity
# 0.7398 - temp
# confint(model, level = 0.95) |> signif(3)

# SSE_restricted <- sigma(model_no_industrial)^2 * model_no_industrial[["df.residual"]]
# k_restricted <- 150 - model_no_industrial[["df.residual"]]
# k_unrestricted <- 150 - model[["df.residual"]]
# SSE_unrestricted <- sigma(model)^2 * model[["df.residual"]]
# F_stat <- ((SSE_restricted - SSE_unrestricted) / (k_unrestricted - k_restricted)) / (SSE_unrestricted / (150 - k_unrestricted))
# pf(F_stat, k_unrestricted - k_restricted, 150 - k_unrestricted, lower.tail = FALSE) |> signif(4)
# 0.07073

## SANITY CEHCK - DOING WITH LINEAR COMBINATIONS
L <- matrix(c(0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
              0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), nrow = 3, byrow = TRUE)
B <- matrix(coef(model))

X <- model.matrix(model)
F_stat_2 <- (t(L %*% B) %*% solve(L %*% solve(t(X) %*% X) %*% t(L)) %*% (L %*% B))/(3 * sigma(model)^2)
F_stat_2
pf(F_stat_2, 3, model[["df.residual"]], lower.tail = FALSE) |> signif(4)
