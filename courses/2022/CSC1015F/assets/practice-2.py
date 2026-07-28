# Practice
# Alexander Cristaudo

"""
n = int(input("Enter the number of lines in the triangle: "))
for i in range(n):
    for j in range(i):
        print("* ", end = "")
    print()


for i in range(n):
    # total = 2*n - 1
    # as you go up, one space is added to the front and back of the triangle
    spaces = 2*(n-1)-2*i
    print(" "*spaces, "* "*(2*i-1), " "*(spaces-1), sep = "")

    # without spaces between stars
    
    spaces = n-i-1
    print(" "*spaces, "*"*(2*i-1), " "*(spaces-1), sep = "")
    

print()

for i in range(n, 0, -1):
    for j in range(i):
        print("* ", end = "")
    print()




throat = input("Do you have a sore throat (y/n)")
cough = input("Do you have a dry cough (y/n)")
headache = input("Do you have a headache (y/n)")

num = 0
if throat.upper() == 'Y' or throat.upper() == "YES":
    num+=1
if headache.upper() == 'Y' or headache.upper() == "YES":
    num+=1
if cough.upper() == 'Y' or cough.upper() == "YES":
    num+=1

if num == 3:
    print("Status: RED")
elif num > 0:
    print("Status: AMBER")
else:
    print("Status: GREEN")



# Approximate the log (base 10) of an integer using repeated division

num = eval(input("Enter a number: "))
# log_10(n) = y <=> 10^y = n

cnt = -1
while num > 0:
    cnt+=1
    num//=10
print(cnt)



for i in range(0, 10000):
    print("Unicode number: ", i, "and the symbol: ", chr(i))

# Going from char to unicode
s = input("Enter some string: ")
for i in s:
    print("Symbol: \"", i, "\" and the unicode number: ", ord(i), sep = "")



# to lowercase using unicode 

n = input("Enter a string: ")
for i in n:
    #capital
    if i>='A' and i<='Z':
        print(chr(ord("a") +ord(i) - ord("A")), end = "")
    else:
        print(i, end = "")


# A program to output the calendar for a specific month, starting on a specific day
# Alexander Cristaudo
# CRSALE010
# 14 March 2022

month, day, dayCnt, months, days, func = input("Enter the month ('January', ..., 'December'):\n"), input("Enter the start day ('Monday', ..., 'Sunday'):\n"), 0, {"January": 31, "February": 28, "March": 31, "April": 30, "May": 31, "June": 30, "July": 31, "August": 31, "September": 30, "October": 31, "November":30, "December": 31}, ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], lambda n : print("  "*n)
print(month, "\nMo Tu We Th Fr Sa Su", end = "\n")
while days[dayCnt] != day:  
    print("  ", end = " ")
    dayCnt += 1
for i in range(1, months[month]+1):
    if i//10 == 0: print(" ", end = "")
    print(i, end = " ")
    if dayCnt%7 == 6:print()
    dayCnt+=1
# Hello world




def func(a):
    global b
    b = 4
    a = 3


b = 2
func(0)
print(b)



def Myst(arr):
    y = []
    if arr != []:
        y.append(arr[0])
        for i in range(1, len(arr)):
            y.append(y[i-1]+arr[i])
    return y


print(Myst([2, 3, 10, 20, 1, 4]))


def newMyst(arr, y=[]):
    if len(y) == 0:
        y.append(arr[0])
        arr.pop(0)
    if len(arr) == 0:
        return y
    y.append(y[-1] + arr[0])
    return newMyst(arr[1:], y)


print(newMyst([2, 3, 10, 20, 1, 4]))

n = "x\n"
"""

print(ord("b")-ord("a"))


def checkLowercase(c):
    within = ord("A")-ord("a")
    if ord(c) - ord("a") > 0 and ord(c) < ord("z"):
        print("Lower")
    elif ord(c) - ord("a") > within and ord("Z") >= ord(c):
        print("Upper")
    else:
        print('NONE')
    print(within)


checkLowercase("1")
