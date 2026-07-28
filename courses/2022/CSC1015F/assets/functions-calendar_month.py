# A program that takes in a month and year and outputs the calendar of that month on that year
# Alexander Cristaudo
# 05 April 2022
# CRSALE010

import math


def day_of_week(day, month, year):
    """Returns the day of the week (as an integer)

    Params:
        day (int): The day of the month
        month (int): The month pf the year
        year (int): The year

    Returns:
        int: The day of the week (1 Monday, 2 Tuesday...)
    """
    # THIS IS DONE USING ZELLERS CONGRUENCE
    if month == 1 or month == 2:
        month += 12
        year -= 1
    # CALCULATION FOR ZELLERS CONGRUENCE
    # print(day + )
    h = (day+math.floor((13*(month+1)/5)) + year + math.floor(year/4) -
         math.floor(year/100) + math.floor(year/400)) % 7
    h = (h+5) % 7
    h += 1
    return h


def is_leap(year):
    """A function that determines if a year is a leap year

    Params:
        year (int): the year for the calendar

    Returns:
        boolean: True if it is a leap year otherwise false
    """

    """
    CONDITIONS FOR A LEAP YEAR
    1. A year may be a leap year if it is evenly divisible by 4.
    2. Years that are divisible by 100 must also be divisible by 400. 
    """

    if year % 4 == 0 and year % 100 != 0:
        return True
    elif year % 4 == 0 and year % 400 == 0:
        return True
    else:
        return False


def month_num(month_name):
    """This function returns the associated month number (So 1 for January...)

    Params:
        month_name (String): The name of the month

    Returns:
        int: The integer corresponding to the month
    """

    # This dictionary pairs the month name with the corresponding integer value and thus
    # when months[name] is called, the month number is returned
    month_name = month_name.title()
    months = {"January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6,
              "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12}
    return months[month_name]


def num_days_in(month_num, year):
    """This function returns the number of days in a given month on a certain year.

    Params:
        month_num (int): The integer representing the month
        year (int): The integer representing the year

    Returns:
        int: The number of days in a given month on a given year
    """

    # The months 1,3,5,7,8,10,12 are all the months with 31 days (1 = January, 2 = February, 3 = March...)
    if month_num in {1, 3, 5, 7, 8, 10, 12}:
        return 31
    # If it is a leap year then february has 29 days
    elif month_num == 2 and is_leap(year):
        return 29
    elif month_num == 2:
        return 28
    else:
        return 30


def num_weeks(month_num, year):
    """A function that returns the number of weeks on a month on a day

    Params:
        month_num (int): The integer representing the month
        year (int): The integer representing the year

    Returns:
        int: The number of weeks in that month on that year
    """

    totalDays = num_days_in(month_num, year)
    firstDay = day_of_week(1, month_num, year)

    # Reducing totalDays by (7-firstDay+1) leaves the weeks from 2 until the end (with the end possibly not a full week)
    # so then the roof of totalDays/7 is the number of weeks for that period (+1 for the first week)
    totalDays -= (7-firstDay+1)
    return math.ceil(totalDays/7) + 1


def week(week_num, start_day, days_in_month):
    """A function a string consisting of the day of the month for each day in that week, 
    starting with Monday and ending with Sunday. 

    Params:
        week_num (int): An integer number representing the week number it is
        start_day (int): The starting day of the month
        days_in_month (int): The number of days in the month

    Returns:
        String: the day of the month for each day in that week
    """
    out = ""
    for i in range(1, 8):
        # i represents the day of the week
        # (week_num-1)*7 is the number of days passed
        # This does not account for starting on a different day hence (startday-1) is subtracted
        # E.G. Starting on Tuesday means 1 day is taken off, Wednesday = 2...
        # i (the day of the week) is then added on
        dayNum = (week_num-1)*7 - (start_day-1) + i
        if dayNum > 0 and dayNum <= days_in_month:
            if dayNum < 10:
                out += " " + str(dayNum) + " "
            else:
                out += str(dayNum) + " "
        else:
            out += "   "
    return out


def main():
    monthName = input("Enter month:\n")
    year = int(input("Enter year:\n"))
    monthNum = month_num(monthName)
    numOfWeek = num_weeks(monthNum, year)

    print(monthName)
    print("Mo Tu We Th Fr Sa Su")
    for i in range(1, numOfWeek+1):
        print(week(i, day_of_week(1, monthNum, year), num_days_in(monthNum, year)))


if __name__ == '__main__':
    main()
