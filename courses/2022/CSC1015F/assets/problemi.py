line = ""


def moveBin1(array):
    return array[1] + array[2]


def moveBin2(array):
    return array[0] + array[2]


def moveBin3(array):
    return array[1] + array[0]


def calcMin(moveBrown, moveGreen, moveClear):
    minimum = moveBrown[0] + moveGreen[0] + moveClear[0]
    out = ""
    for b in range(3):
        for g in range(3):
            for c in range(3):
                if minimum > moveBrown[b] + moveGreen[g] + moveClear[c]:
                    minimum = moveBrown[b] + moveGreen[g] + moveClear[c]


while line != "-1":
    allLines = map(int, input().split())
    brown = [allLines[i] for i in range(0, 9, 3)]
    green = [allLines[i] for i in range(1, 9, 3)]
    clear = [allLines[i] for i in range(2, 9, 3)]

    moveBrown = [moveBin1(brown), moveBin2(brown), moveBin3(brown)]
    moveGreen = [moveBin1(green), moveBin2(green), moveBin3(green)]
    moveClear = [moveBin1(clear), moveBin2(clear), moveBin3(clear)]
