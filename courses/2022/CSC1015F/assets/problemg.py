t = int(input())

for test in range(t):
    n = int(input())
    days = [True for i in range(n)]
    p = int(input())
    cnt = 0
    for protest in range(p):
        p_i = int(input())-1
        change = p_i+1
        while p_i < n:
            if days[p_i] and (p_i+1) % 7 != 0 and (p_i+1) % 7 != 6:
                days[p_i] = False
                cnt += 1
            p_i += change
    print(cnt)
