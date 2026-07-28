# A program to convert a date-tome (yyyy-mm-dd hh:mm) into English text
# 16 March 2022
# Alexander Cristaudo
# CRSALE010

out = ""
date = input("Enter the date and time (yyyy-mm-dd hh:mm):\n")

# Finds the position of the space (to separate between days and hours)
spaceInd = date.index(" ")

# Dictionary with the months paired with an arithmetic unit
months = {"01": "January", "02": "February", "03": "March", "04": 
        "April", "05": "May", "06": "June", "07": "July", "08": "August", 
        "09":"September", "10": "October", "11": "November", "12": "December"}

# int(date[spaceInd+1:][0:2]) returns the 'hh' in a date
if int(date[spaceInd+1:][0:2]) >= 12:
    # Add the hours to the output - 12 (to get to pm), with the minutes and add pm
    if int(date[spaceInd+1:][0:2]) == 12: 
        out+=(date[spaceInd+1:][0:2]) + date[spaceInd+3:] + " pm"
        
    else: 
        out+=str(int(date[spaceInd+1:][0:2])-12) + date[spaceInd+3:] + " pm"
        
elif int(date[spaceInd+1:][0:2]) < 10:
    # Add the hh:mm without the '0' on the hour unit
    if int(date[spaceInd+1:][0:2]) > 0:
        out+=date[spaceInd+2:] + " am"
        
    # Otherwise if 00, then it is 12am
    else: 
        out+="12" + date[spaceInd+3:] + " am"
else:
    out+=date[spaceInd+1:] + " am"

out += " on the "

# date[8:10] returns the day it happens on
day = int(date[8:10])

# If day ends in 1, add st to the day (unless 11th)
if day%10 == 1: 
    if day == 11:
        out+= "11th"
    else:
        out+= str(day//10) + "1st" if day//10 > 0 else "1st"

# If day ends in 2, add nd to the day (unless 12th)
elif day%10 == 2: 
    if day == 12:
        out+= "12th"
    else:
        out+= str(day//10) + "2nd" if day//10 > 0 else "2nd"

# If day ends in 3, add rd to the day (unless 13th)
elif day%10 == 3: 
    if day == 13:
        out+= "13th"
    else: 
        out+= str(day//10) + "3rd" if day//10 > 0 else "3rd"

#Otherwise add th
else: out+=str(day) + "th"

# date[5:7] returns the month (numerically) and month[date[5:7]] returns the name of the month
out+=" of " + months[date[5:7]]

# date[2:4] returns final 2 digits of the year
out+=" '" + date[2:4]
print(out)