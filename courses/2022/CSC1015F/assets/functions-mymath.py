# A program to ask a user for a number and return that number and then calculate the factorial of the inputted parameter
# Alexander Cristaudo
# 05 April 2022
# CRSALE010


def get_integer(s):
    # get_integer(s) accepts an integer, s, from the user
    """This returns an integer inputted from the user

    Params:
        s (String): The variable the user will enter

    Returns:
        int: The int value for the variable
    """
    temp = s
    print("Enter ", temp, ":", sep="")
    s = input()
    while not s.isdigit():
        print("Enter ", temp, ":", sep="")
        s = input()
    s = int(s)
    return s


def calc_factorial(n):
    """This function calculates the factorial 

    Params:
        n (int): The nth factorial that must be calculated

    Returns:
        int: The nth factorial
    """

    out = 1
    for i in range(1, n+1):
        out *= i
    return out
