from vpython import *

N = eval(input("Enter N, the number of oscillators: "))
q = eval(input("Enter Q, the total quanta: "))

print(combin(q+N-1, q))
