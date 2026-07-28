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
outdesign2 <- design.graeco(tmts, gradient, seed = seed)
glsd2 <- outdesign2$book
#
#   # Assign labels to the rows
levels(glsd2$row) <- c("Beetroot", "Cucumber", "Radish", "Carrot")
#
#   # Assign labels to the columns
levels(glsd2$col) <- c("Black", "Clay", "Peat", "Sandy")
colnames(glsd2) <- c("plots", "plants", "soil", "treatment", "gradient")  # Adjust as necessary
# 
num_replicates <- 5
n_obs <- num_replicates * nrow(glsd2)
frame <- do.call(rbind, replicate(num_replicates, glsd2, simplify = FALSE))
# rownames(frame) <- NULL

response2 <- vector(mode = "numeric", length = n_obs)
for (i in 1:n_obs) {
  
  plant <- as.character(glsd2$plants[(i-1) %% 16 + 1])
  soil <- as.character(glsd2$soil[(i-1) %% 16 + 1])
  treat <- as.character(glsd2$treatment[(i-1) %% 16 + 1])
  grad <- as.character(glsd2$gradient[(i-1) %% 16 + 1])
  
  # deterministic component
  y2 <- general_mean + h[[plant]] + h[[soil]] + h[[treat]] + h[[grad]]
  
  # Random component
  error <- rnorm(1, 0, 3)
  
  response2[i] = y2 + error
}

frame2$response <- response2

# saved in data.txt, so read in through this for analysis now
# frame <- read.table("data.txt", T)
frame2
anova(aov(response ~ treatment + gradient*plants + soil, data = frame2))["gradient:plants", "Pr(>F)"]
anova(aov(response ~ treatment*gradient + plants + soil, data = frame2))["treatment:gradient", "Pr(>F)"]
anova(aov(response ~ treatment + gradient*soil + plants, data = frame2))["gradient:soil", "Pr(>F)"]
anova(aov(response ~ treatment*soil + plants + gradient, data = frame2))["treatment:soil", "Pr(>F)"]
anova(aov(response ~ treatment*plants + gradient + soil, data = frame2))["treatment:plants", "Pr(>F)"]
