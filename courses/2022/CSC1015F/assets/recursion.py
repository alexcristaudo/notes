def factorial(n):
    if n == 0:
        return 1
    return n*factorial(n-1)


def calcxn(x, n):
    if n == 0:
        return 1
    return x*calcxn(x, n-1)


print(calcxn(2, 4))


def numCharsInString(str):
    if len(str) == 0:
        return 0
    return 1 + numCharsInString(str[1:])


print(numCharsInString("ABCDEFG"))


def countWordsInList(list):
    if len(list) == 0:
        return 0
    return 1 + countWordsInList(list[1:])


print(countWordsInList(["A", "B", "C"]))


def replaceChars(string, char, replace):
    if len(string) == 0:
        return ""
    if string[0] == char:
        return replace + replaceChars(string[1:], char, replace)
    return string[0] + replaceChars(string[1:], char, replace)


print(replaceChars("ABCDEAFATG", "A", "1"))


def gcd(a, b):
    if a % b == 0:
        return b
    return gcd(b, a % b)


print(gcd(6, 8))


def reverse(n):
    if len(n) == 0:
        return ""
    return n[-1] + reverse(n[:-1])


print(reverse("ABCD"))


def triangle(n):
    if n == 0:
        return
    print("*"*n)
    triangle(n-1)


triangle(5)


def sumMtoN(m, n):
    if m == n:
        return n
    return m + sumMtoN(m+1, n)


print(sumMtoN(4, 8))


def halfHourGlass(word):
    if len(word) == 0:
        return ""
    print(word)
    halfHourGlass(word[:-1])
    if len(word) != 1:
        print(word)


halfHourGlass("MARSUPIAL")


def fullHourGlass(word, n=0):
    if n == 0:
        n = len(word)
    if len(word) == 0:
        return ""
    print(" "*(n-len(word)//2), word, " "*(n-len(word)//2), sep="")
    fullHourGlass(word[:-1], n)
    if len(word) != 1:
        print(" "*(n-len(word)//2), word, " "*(n-len(word)//2), sep="")


fullHourGlass("MARSUPIAL")

def r_sum(list):
    sum = 0
    for i in list:
        if not type(i) == int:
            sum += + r_sum(i)
        else:
            sum += i
    return sum


print(r_sum([1, 2, [11, 13], [8, [2, 3]]]))
