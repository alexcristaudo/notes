t = int(input())

for i in range(1, t+1):
    l, w, h = map(int, input().split())
    valid = l <= 50 and w <= 50 and h <= 50
    if not valid:
        print("Case ", i, ": bad", sep="")
    else:
        print("Case ", i, ": good", sep="")
