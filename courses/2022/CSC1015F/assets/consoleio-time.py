# Name: Alexander Cristaudo
# Student Number: CRSALE010
# Date: 23 February 2022
# A program to check if time enterred is valid

hours = eval(input("Enter the hours:\n"))
minutes = eval(input("Enter the minutes:\n"))
seconds = eval(input("Enter the seconds:\n"))
valid = True

if hours < 0 or hours > 23:
    valid = False
if minutes < 0 or minutes > 59:
    valid = False
if seconds < 0 or seconds > 59:
    valid = False

if valid:
    print("Your time is valid.")
else:
    print("Your time is invalid.")