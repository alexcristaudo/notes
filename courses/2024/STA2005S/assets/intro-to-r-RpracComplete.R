## diamonds.R
## diamonds.csv: dataset containing price (in US $) and other attributes of almost 54,000 diamonds
## STA2005S 2023 R Intro Prac
## --------------------------

## 1. read data into R: data in file diamonds.csv
x
x <- 1
x
diamonds <- read.csv("diamonds.csv")

## 2. know about data frames

head(diamonds)     # x, y, z = length, width, depth
names(diamonds)
str(diamonds)

is.data.frame(diamonds)

## 3. accessing variables in data frames

carat
diamonds$carat

# 4. Exploratory Data Analysis

    # scatterplot: how does price change with carat (weight)

plot(
  diamonds$carat, diamonds$price,
  col = "blue",
  xlab = "Carat", ylab = "Price" 
  )

    # change ylab, xlab, pch = 19, col = "purple"

    # histograms of carat and price, next to each other
    
par(mfrow = c(1, 2)) # how many diagrams can be plotted at once

hist(diamonds$carat)
hist(diamonds$price)

par(mfrow = c(1, 1))


    # boxplots

boxplot()   # of price

    # continuous vs categorical variables

boxplot(price ~ color, data = diamonds)

    # find mean, standard deviation, minimum and maximum price

mean(diamonds$price)
sd(diamonds$price)
min(diamonds$price)
max(diamonds$price)
median(diamonds$price)

summary(diamonds$price)

# 5. Simple Linear Regression Model

mod.out <- lm(price ~ carat, data = diamonds) # lm is used to fit linear models
summary(mod.out)

  # add fitted regression line to scatterplot

plot(
  diamonds$carat, diamonds$price,
  col = "orange",
  xlab = "Carat", ylab = "Price" 
)
abline(mod.out) # This function adds one or more straight lines through the current plot.


