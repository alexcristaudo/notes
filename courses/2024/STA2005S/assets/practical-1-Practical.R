library(ggplot2)
library(tibble)

data("data_tidy_tobacco", package = "DataTidy23RodoSTA2005S")

cor_mat <- cor(data_tidy_tobacco)
cor_mat |> signif(2) # |>: This is a pipe operator, often used in functional programming languages like R. It passes the output of the left-hand side (corr_mat) as the first argument to the right-hand side function 

install.packages("dlpyr")

# all the rows corresponding to potas 
X_mat <- data_tidy_tobacco[, "potas"] |> dplyr::mutate(intercept = 1) |> dplyr::select(intercept, potas) |> as.matrix()
y_vec <- data_tidy_tobacco[, "burn"] |>
  as.matrix()

beta_vec <- solve(t(X_mat) %*% X_mat) %*% t(X_mat) %*% y_vec
beta_vec |> signif(2)

n <- nrow(X_mat)
k <- ncol(X_mat)
pred_vec <- X_mat %*% beta_vec
s2 <- sum((y_vec - pred_vec)^2) / (n - k)
s2 |> signif(2)

install.packages("cowplot")

x_vec <- range(data_tidy_tobacco$potas, max(data_tidy_tobacco$potas))
range_len <- diff(x_vec)
x_vec <- x_vec + c(-0.025, 0.025) * range_len
y_vec <- beta_vec[1] + beta_vec[2] * x_vec
ggplot(
  tibble::tibble(x = x_vec, y = y_vec)
)+
  cowplot::theme_cowplot() +
  cowplot::background_grid(major = "xy") +
  geom_point(mapping = aes(x = potas, y = burn), data = data_tidy_tobacco) + geom_line(aes(x = x, y = y), col = "dodgerblue") +
  labs(x = "Potassium", y = "Burn rate")


fit <- lm(burn ~ potas, data = data_tidy_tobacco)
summary(fit)

beta_vec <- coef(fit) |> as.matrix()
y_vec <- beta_vec[1] + beta_vec[2] * x_vec
ggplot(
  tibble::tibble(x = x_vec, y = y_vec) )+
  cowplot::theme_cowplot() +
  cowplot::background_grid(major = "xy") +
  geom_point(
    mapping = aes(x = potas, y = burn), data = data_tidy_tobacco
  )+
  geom_line(aes(x = x, y = y), col = "dodgerblue") +
  labs(x = "Potassium", y = "Burn rate")

