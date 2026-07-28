# Q7
battery <- read.table("batmanu.txt", header = T)
battery$Temp <- as.factor(battery$Temp)
# model.tables(mod1, 'means')
boxplot(Life ~ Temp, data = battery, main = "CRD for Battery Lifetimes", xlab = "temperature",
        ylab = "battery lifetime", las = 1, cex.axis = 1.2, cex.lab = 1.2)


mod2 <- aov(Life ~ Temp + Manu, data = battery)
summary(mod2)



# Q8
potlatin <- read.table("potlatin.txt", header = T)
mod2 <- aov(Yield ~ Treat + Row + Column, data = potlatin)
# Yield independent
summary(mod2)

# Such a design for agricultural experiments is often used if one has, for example, an irrigation gradient (e.g. from
# much to less water) and perpendicular to that, for example, a soil gradient (from heavy clay to sandy soil). The
# plots are then arranged as columns and rows and the fertilizer treatments assigned to these plots as a Latin Square
# Design.
# Potato yield differs significantly with different treatments (fertilizers) (F = 32.5 with 5 and 20 d.f., p < 0.001). Also,
# rows differed and columns differed in yield. This suggests that it was a good idea to block for the two factors (both                                                                                                                 F values are > 1). Effective blocking will result in more accurate estimates (smaller standard errors), and therefore
# more accurate conclusions about differences between treatments.
boxplot(Yield ~ Treat, data = potlatin)

group <- ifelse(potlatin$Treat %in% c("A", "B", "C"), "Low Nitrogen", "High Nitrogen")
data <- data.frame(potlatin$Yield, group)
boxplot(potlatin.Yield ~ group, data = data)
