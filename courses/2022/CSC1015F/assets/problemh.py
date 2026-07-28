import sys


def max(i, j):
    return i if i > j else j


def min(i, j):
    return i if i < j else j


num = True

linesIn = []

for line in sys.stdin:
    linesIn.append(line)

print(linesIn)
