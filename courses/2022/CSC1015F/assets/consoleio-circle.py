# Name: Alexander Cristaudo
# Student Number: CRSALE010
# Date: 23 February 2022
# A program to calculate the area of a circle by approximating the value of pi

import math

# Approximating the value of pi
pi = 2*(2/math.sqrt(2))*(2/math.sqrt(2+math.sqrt(2)))*(2/math.sqrt(2+math.sqrt(2+math.sqrt(2))))
oldPi = pi

# Formatting pi to 4 decimal places
pi = str(pi)

# Adding 3 extra 0's ensures that there will be no out of bounds error
pi+="000"

# Rounding up
if int(pi[4]) >= 5:
    pi = pi.split(".")[0] + "." + pi.split(".")[1][:3] + str(int(pi[3])+1)

# Else just store the 4 decmal places
else:
    pi = pi.split(".")[0] + "." + pi.split(".")[1][:4]

print("Approximation of pi:", pi)

# Input the radius
r = eval(input("Enter the radius:\n"))

#Calculating the area using the old (more accurate) pi value
area = oldPi*(r**2)

area = str(area)

# Adding 3 extra 0's ensures that there will be no out of bounds error
area+="000"

# Rounding up
if int(area[4]) >= 5:
    area = area.split(".")[0] + "." + area.split(".")[1][:3] + str(int(area.split(".")[1][3])+1)

# Else just store the 4 decmal places
else:
    area = area.split(".")[0] + "." + area.split(".")[1][:4]

print("Area:",area)