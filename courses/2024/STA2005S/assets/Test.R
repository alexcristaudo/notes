ggplot(data = mpg) + 
  geom_point(mapping = aes(colour = displ < 5))
