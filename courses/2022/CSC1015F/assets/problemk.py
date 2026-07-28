def alphabetical(lst):
    for i in range(len(lst)-1):
        for j in range(i, len(lst)):
            if lst[i][3] > lst[j][3]:
                lst[i], lst[j] = lst[j], lst[i]


def sort(lst):
    for i in range(len(lst)-1):
        for j in range(i, len(lst)):
            pass


t, g = map(int, input().split())
teams = {}
scores = {}

# data needed is points, goal difference, scored, name, suffered, games played

for i in range(t):
    team = input()
    teams[team] = [0 for i in range(3)]
    teams[team].append(team)
    teams[team] += [0, 0]

for score in range(g):
    data = input().split()

    score = [int(data[1]), int(data[3])]
    if score[0] > score[1]:
        teams[data[0]][0] += 3

    elif score[0] < score[1]:
        teams[data[4]][0] += 3
    else:
        teams[data[0]][0] += 1
        teams[data[4]][0] += 1

    teams[data[0]][5] += 1
    teams[data[4]][5] += 1  # Games played
    teams[data[0]][2] += score[0]
    teams[data[4]][4] += score[0]  # Scored + against
    teams[data[0]][4] += score[1]
    teams[data[4]][2] += score[1]

    teams[data[0]][1] += score[0]-score[1]
    teams[data[4]][1] += score[1]-score[0]

vals = list(teams.values())
print(teams)
del teams
alphabetical(vals)
print(vals[:][:3])
vals[:][:3].sort()
print(vals)

pos = 1
posChanged = True
for ind, i in enumerate(vals):
    if posChanged:
        print(pos, ".", " "*(16-len(i[3])), i[3], "  ", sep="", end="")
        if i[5] == 0:
            percent = "N/A"
        else:
            percent = round(i[0]/(i[5]*3)*100, 2)
            if len(str(percent).split(".")[1]) == 1:
                percent = str(percent) + "0"
        print(i[0], i[5], i[2], str(i[4]) +
              "{:>3}".format(i[1]), sep="  ", end="")
        print("{0:>7}".format(percent))
        posChanged = False
    else:
        print(" "*(18-len(i[3])), i[3], "  ", sep="", end="")
        if i[5] == 0:
            percent = "N/A"
        else:
            percent = round(i[0]/(i[5]*3)*100, 2)
            if len(str(percent).split(".")[1]) == 1:
                percent = str(percent) + "0"
        print(i[0], i[5], i[2], str(i[4]) +
              "{:>3}".format(i[1]), sep="  ", end="")
        print("{0:>7}".format(percent))

    if ind == len(vals)-1 or vals[ind][0] != vals[ind+1][0] or vals[ind][1] != vals[ind+1][1] or vals[ind][2] != vals[ind+1][2]:
        posChanged = True
    pos += 1
