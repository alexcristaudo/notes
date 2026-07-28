n = eval(input("Enter the start number:\n"))
for i in range(n, n+7):
    if i//10 == 0:
        print(" ", end = "")
    print(i, end = " ")