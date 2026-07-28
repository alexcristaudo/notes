# A program to output the graph of a function
# 16 March 2022
# Alexander Cristaudo
# CRSALE010

import math

# Stores the coordinates of the function
allCoords = {}
func = input("Enter a function f(x):\n")
for i in range(-10, 11):
    temp = ""
    
    # Replaces any 'x' value with the value of
    temp = func.replace("x", "(" + str(i) + ")")
    
    # Stores the coordinates of the function
    allCoords[i] = round(eval(temp))


for y in range(10, -11, -1):
    for x in range(-10, 11):
        
        # Outputs an 'o' if this is a point
        if allCoords[x] == y:
            print("o", end = "")
        # Outputs a vertical line if this is part of the y axis
        elif x == 0 and y != 0:
            print("|", end = "")
        # Outputs a horizontal line if this is part of the x axis
        elif y == 0 and x != 0:
            print("-", end = "")
        #Outputs a + if it is the origin
        elif y == 0 and x == 0:
            print("+", end = "")
        # Otherwise a blank space
        else:
            print(" ", end = "")
    print()