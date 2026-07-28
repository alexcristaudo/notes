if (!requireNamespace("DataTidy23RodoSTA2005S", quietly = TRUE)) {
  if (!requireNamespace("remotes", quietly = TRUE)) {
    utils::install.packages("remotes")
  }
  remotes::install_github("MiguelRodo/DataTidy23RodoSTA2005S")
}
library(tibble)
data("data_tidy_ad", package = "DataTidy23RodoSTA2005S")

data_tidy_ad |>
  head() |>
  knitr::kable()

Y <- matrix(data_tidy_ad[["sales"]])
X_mat <- data_tidy_ad |>
  dplyr::select(-sales) |>
  dplyr::mutate(intercept = 1) |>
  dplyr::select(intercept, everything()) |>
  as.matrix()

beta_vec_hat = solve(t(X_mat) %*% X_mat) %*% t(X_mat) %*% Y
beta_radio_hat = beta_vec_hat[3]

n <- 200
p <- 4
s2 <- (t(Y-X_mat %*% beta_vec_hat) %*% (Y-X_mat %*% beta_vec_hat))/(n-p)

sqrt(s2) |> signif(4)
C <- solve(t(X_mat) %*% X_mat)

beta_radio_se <- sqrt(s2 * C[3, 3])

test_stat_radio <- beta_radio_hat/beta_radio_se
test_stat_radio

pt(abs(test_stat_radio), df = n-p, lower.tail = FALSE)


mod <- lm(formula=sales ~ ., data = data_tidy_ad)
summary(mod)

beta_vec_hat

# QUESTION 2
l <- matrix(c(0,1,0,1))

estimator <- t(l) %*% beta_vec_hat 
se <- sqrt(s2 * (t(l) %*% C %*% l))

test_stat_2 <- estimator / se

pt(test_stat_2, df = 196, lower.tail = FALSE)


# QUESTION 3 - F-test
L <- matrix(c(0, 0, 0, 
              1, 0, 0,
              0, 1, 0, 
              0, 0, 1), ncol=4)

F_stat = (t(L %*% beta_vec_hat) %*% solve(L %*% C %*% t(L)) %*% (L %*% beta_vec_hat))/(3 * s2)

pf(F_stat, 3, 196, lower.tail = FALSE)
