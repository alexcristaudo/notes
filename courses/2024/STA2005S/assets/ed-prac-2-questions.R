# -----Q1-----

# DATA
cathode <- read.table("data.txt", header= TRUE)
cathode$Tube
cathode$Tube <- as.factor(cathode$Tube)

# What is a factor in R?
# A factor is an R data type used to store categorical variables, which can be either ordered or unordered.
# Factors are especially useful when dealing with categorical data in statistical modeling and graphics because R treats factors differently from other data types.
# For example, if Tube was previously a character vector with values like "A", "B", "C", converting it to a factor would store these as distinct categories or levels, which R can then use in statistical analysis or plotting.

boxplot(Time ~ Tube, data = cathode, las = 1)
# las = 1 makes the labels on the y axis horizontal

mod1 <- aov(Time ~ Tube, data = cathode)
summary(mod1)

model.tables(mod1, type = "means")
# model.tables(mod1, type = "effects")
# this gives us the alpha values

new.df <- data.frame(Tube = "B")
predict(mod1, newdata = new.df)

fitted(mod1)

resid(mod1)


m.lm <- lm(Time ~ Tube - 1, data = cathode)
# the -1 removes the intercept so estimates 
# Time = mean(1) Tube_1 + mean(2) Tube_2 + ...
summary(m.lm)


m3 <- lm(Time ~ C(Tube, contr.sum), data = cathode)
summary(m3)
model.matrix(m3)

Y <- cathode$Time
X <- model.matrix(m3)
solve(t(X) %*% X) %*% (t(X) %*% Y)



# For hypothesis testing conclusions, there are:
# MUST NOT MENTION SIGNIFICANT. WE DO NOT (REJECT) OR (NOT REJECT)
# A: Strong evidence against the null hypothesis
# B: No evidence against the null hypothesis
# C: Little/weak evidence against the null hypothesis