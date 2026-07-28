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

# CONSTANTS
b0 <- 30
sigma2 <- 100
temperature <- data_tidy_air_quality$temperature
num_obs = nrow(data.frame(temperature))

# For reproducibility
set.seed(123)


### SCENARIO A

# Counting the Type I errors
count <- 0

# Running 1000 simulations
for (i in 1:1000) {
  # 150 uniformly distributed error terms
  e <- runif(num_obs, -sqrt(300), sqrt(300))
  
  # Corresponding Y values
  Y <- 30 + e
  
  # Fitting the model and getting the p-value
  model <- lm(Y ~ temperature)
  p_value <- summary(model)$coefficients[, 4][2]
  
  # Adding to the counter if it is significant
  if (p_value < 0.05) {
    count <- count + 1
  }
}
print((count) / 1000) # Proportion rejected



### SCENARIO B

# Reset the counter
count <- 0
for (i in 1:1000) {
  # Generate 150 different variances from the gamma distribution
  variance <- rgamma(num_obs, shape = 200, scale = 1/2)
  
  # Generate the error terms based on the different variances
  e <- rnorm(num_obs, 0, sqrt(variance))
  
  # Set the relevant Y values
  Y <- b0 + e
  
  # Fit the model and run the hypothesis test
  model <- lm(Y ~ temperature)
  p_value <- summary(model)$coefficients[, 4][2]
  
  if (p_value < 0.05) {
    count <- count + 1
  }
}
print((count) / 1000)



### SCENARIO C

# Generating correlated errors function
generate_ar1_errors <-function(n, rho, var_epsilon) {
  # n: number of observations
  # rho: correlation coefficient
  # var_epsilon: desired variance of the errors
  sigma_u_squared<-var_epsilon*(1-rho^2)
  u<-rnorm(n,mean =0,sd =sqrt(sigma_u_squared))
  epsilon<-numeric(n)
  epsilon[1]<-u[1]
  for(i in 2:n) {
    epsilon[i]<-rho*epsilon[i-1]+u[i]
    }
  return(epsilon)
}

# Reset our counter
count <- 0
for (i in 1:1000) {
  # Generating our correlated errors
  epsilon <- generate_ar1_errors(num_obs, 0.3, sigma2)
  
  # Our Y values
  Y = b0 + epsilon
  
  # Fit the model and run the test
  model <- lm(Y ~ temperature)
  p_value <- summary(model)$coefficients[, 4][2]
  
  if (p_value < 0.05) {
    count <- count + 1
  }
}
print((count) / 1000)
