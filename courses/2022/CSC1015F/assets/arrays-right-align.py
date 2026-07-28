# A program which takes in names from the user and then prints them in a right aligned format
# Alexander Cristaudo
# 13 April 2022
# CRSALE010

names = []
enter = input("Enter strings (end with DONE):\n\n")
while enter != "DONE":
    names.append(enter)
    enter = input()

print("Right-aligned list:")
if len(names) != 0:
    # Gets the maximum length in names
    maximum = int(max(len(i) for i in names))
    for i in names:
        # Prints (maximum - length) spaces for each word and then the word
        print(" "*(maximum-len(i)), i, sep="")
