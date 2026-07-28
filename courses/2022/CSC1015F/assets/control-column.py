n = eval(input("Enter a number:\n"))
for i in range(n, n+42, 7):
    if i//10 == 0:
        print(" ", end = "")
    print(i)