x <- c(4, 10, 21)
y <- c(5, 0, 9)

x %*% t(y)


z <- matrix(c(1, 4, 10, 5), nrow = 2, ncol = 2, byrow = TRUE)
z

z[1,1]
z[2,2]
diag(z)
sum(diag(z))

len <- dim(z)[1]
for (i in 1:len) {
  # In a loop, automatic printing is turned off, as it is inside a function. You need to explicitly print something in both cases if you want to see the output
  print(z[i,i])
}


# find the inverse with solve
solve(z)
