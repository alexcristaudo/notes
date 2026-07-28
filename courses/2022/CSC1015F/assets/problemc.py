n, m, c = map(int, input().split())
seq = 1
while not (n == 0 and m == 0 and c == 0):
    consumption = []
    on = [False for i in range(n)]
    blown = False
    totalConsumption = maxConsumption = 0

    for i in range(n):
        consumption.append(int(input()))

    for i in range(m):
        toggle = int(input())
        on[toggle-1] = not on[toggle-1]
        if on[toggle-1]:
            totalConsumption += consumption[toggle-1]
            if totalConsumption > maxConsumption:
                maxConsumption = totalConsumption
            if totalConsumption > c:
                blown = True
                break
        else:
            totalConsumption -= consumption[toggle-1]
    print("Sequence", seq)
    seq += 1
    if not blown:
        print("Fuse was not blown.")
        print("Maximal power consumption was", maxConsumption, "amperes.")
    else:
        print("Fuse was blown.")

    n, m, c = map(int, input().split())
