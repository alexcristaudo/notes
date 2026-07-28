def sum(plate, i):
    if i == 0:
        return plate[i] + plate[i+1]
    if i == 39:
        return plate[i] + plate[i-1]
    return plate[i] + plate[i+1] + plate[i-1]


plate = [0 for i in range(40)]
plate[19] = 1
prevPop = [0 for i in range(40)]
prevPop[19] = 1

t = int(input())
input()
f = open("out1.txt", "a")

for test in range(t):
    density = list(map(int, input().split()))
    input()
    for i in plate:
        if i == 0:
            print(" ", end="")
            print(" ", end="", file=f)
        else:
            print(".", end="")
            print(".", end="", file=f)
    print()
    print(file=f)
    for day in range(49):
        out = ""
        for i in range(40):
            k = sum(prevPop, i)
            plate[i] = density[k]
            if plate[i] == 0:
                out += " "
            elif plate[i] == 1:
                out += "."
            elif plate[i] == 2:
                out += "x"
            else:
                out += "W"
        prevPop = plate.copy()
        print(out)
        print(out, file=f)

f.close()
# Density 1 = "."
# Density 2 = "x"
# Density 3 = "W"
