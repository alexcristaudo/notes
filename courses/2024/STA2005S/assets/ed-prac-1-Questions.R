#Q2

eus <- 1:20
treats <- c("A", "B", "C", "D", "E")
treats <- rep(treats, each = 4)

rndm <- sample(treats)
frame <- data.frame(eus, rndm)
frame


#Q3
treats <- c("A", "B", "C", "D", "E")
b1 <- sample(treats)
b2 <- sample(treats)
b3 <- sample(treats)
b4 <- sample(treats)
design <- rbind(b1, b2, b3, b4) # combine rows or columns
design


#Q4
music <- c("M1", "M2")
loud <- c("L1", "L2")
# merge strings - c <- merge(a,b)
# matrix multiplication only works for complex values
treats <- c(outer(music,loud,FUN=paste,sep="")) # This is another way that does not result in wacky shit. Can rep with this

# (a)
treats <- rep(treats, each = 4)
eus <- 1:16
ans <- data.frame(eus, sample(treats))

# (b)
males = sample(rep(treats, each = 2))
females = sample(rep(treats, each = 2))
design <- rbind(males, females)
design


#Q5 TODO

#Q6
ob1 <- rnorm(5, mean = 5, sd = 2)
ob2 <- rnorm(5, mean = 10, sd = 2)
ob3 <- rnorm(5, mean = 15, sd = 2)
ob4 <- rnorm(5, mean = 10, sd = 2)

# the above code generates data/observations/response values
# for the 4 treatment groups, 5 values for each group
# note all of the observations come from a normal distribution
# with the same standard deviation
# only the group means differ

# -- to keep these data (or any data) in a spreadsheet or a data file
# we need a column for each variable

response <- c(ob1, ob2, ob3, ob4) # response
treat <- rep(c(50, 100, 150, 200), each = 5) # treatment factor

boxplot(response ~ treat, xlab = "temperature", ylab = "response")
plot(response ~ treat, xlab = "temperature", ylab = "response")

# CONTINUOUS
m1 <- lm(response ~ treat)
summary(m1)
abline(m1)

# CATEGORICAL
temp <- as.factor(treat)
m2 <- lm(response ~ temp)
summary(m2)

