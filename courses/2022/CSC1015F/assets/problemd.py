def isValidRoute(a, b, n):
    return a % n == b % n


line = input()
while line != "-1":
    a, b, n = map(int, line.split())
    for i in range(n, -1, -1):
        if isValidRoute(a, b, i):
            print(i)
            break
    line = input()
