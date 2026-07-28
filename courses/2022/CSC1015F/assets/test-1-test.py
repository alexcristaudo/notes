from math import sqrt

E = eval(input("Enter the value of E:\n"))
m = eval(input("Enter the value of m:\n"))
if m == 0:
    print("The value of m cannot be zero.")
else:
    root = sqrt(2*E/m)
    print("The answer is ", round(root), ".", sep = "")