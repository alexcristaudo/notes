## diamonds.R
## diamonds.csv: dataset containing price (in US $) and other attributes of almost 54,000 diamonds
## STA2005S 2023 R Intro Prac
## --------------------------

## 1. read data into R: data in file diamonds.csv 
diamonds <- read.csv()

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

plot( , data = diamonds)

    # change ylab, xlab, pch = 19, col = "purple"

    # histograms of carat and price, next to each other
    
par(mfrow = c(1, 2))

hist()

    # boxplots

boxplot()   # of price

    # continuous vs categorical variables

boxplot(price ~ color, data = diamonds)

    # find mean, standard deviation, minimum and maximum price

mean()
sd()
min()
max()


# 5. Simple Linear Regression Model

mod.out <- lm(   , data = diamonds)
summary(mod.out)

  # add fitted regression line to scatterplot

plot( , data = diamonds)
abline(mod.out)


