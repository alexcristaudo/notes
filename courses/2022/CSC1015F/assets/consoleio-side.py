# Name: Alexander Cristaudo
# Student Number: CRSALE010
# Date: 23 February 2022
# A program to calculate the final side (not hypotoneuse) for a right angled triangle

import math

a = eval(input("Enter the length of side a:\n"))
c = eval(input("Enter the length of side c:\n"))
if a <= 0 or c <= 0:
    print("Sorry, lengths must be positive numbers.")
else : 
    b = math.sqrt(c*c - a*a)
    print("The length of side b is ",b,".", sep = "")