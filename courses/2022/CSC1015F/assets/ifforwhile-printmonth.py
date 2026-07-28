# A program to output the calendar for a specific month, starting on a specific day
# Alexander Cristaudo
# CRSALE010
# 14 March 2022

month = input("Enter the month ('January', ..., 'December'):\n")
day = input("Enter the start day ('Monday', ..., 'Sunday'):\n")

# This dictionary stores the months and the number of days those months have
months = {"January": 31, "February": 28, "March": 31, "April": 30, "May": 31, "June": 30, 
        "July": 31, "August": 31, "September": 30, "October": 31, "November":30, "December": 31}

# An array containing the days (used for calculations with indices)
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
print(month)
print("Mo Tu We Th Fr Sa Su")
dayCnt = 0

# Print out spaces until we get to the entered day
while days[dayCnt] != day:
    print("  ", end = " ")
    dayCnt += 1

for i in range(1, months[month]+1):
    # i // 10 is only true if the number i has one character
    # This therefore prints a space before if it is a one digit number
    if i//10 == 0:
        print(" ", end = "")
    print(i, end = " ")
    
    # Prints a new line if the 'i' value corresponds to Sunday
    if dayCnt%7 == 6:
        print()
    dayCnt+=1

