# A program which converts a decimal number into gumatj and vice versa, as well as adds and multiplies 2
# gumatj numbers together
# Alexander Cristaudo
# 11 April 2022
# CRSALE010

def gumatj_to_decimal(a):
    """Converts a gumatj number into a decimal number

    Args:
        a (int): The gumatj number to convert

    Returns:
        int: the decimal number
    """
    out = 0
    # Allows the use of both the index and value at some position
    for i, val in enumerate(str(a)):
        # Calculation to convert from base 5 to base 10
        out += int(val)*5**(len(str(a))-i-1)
    return out


def decimal_to_gumatj(a):
    """A function which converts a decimal number to a gobject number

    Args:
        a (int): A decimal number to convert

    Returns:
        int: The gumatj number gotten from the decimal number
    """
    if a == 0:
        return "0"
    out = ""
    while a > 0:
        # Get all the remainders and add them to the output string
        out += str(a % 5)
        a //= 5
    # Return the reversed string (this is needed when converting from base 5 to base 10 with remainders)
    return out[::-1]


def gumatj_add(a, b):
    """A function which adds 2 gumatj numbers together

    Args:
        a (int): gumatj number 1
        b (int): gumatj number 2

    Returns:
        int: The sum of the 2 gumatj numbers as a gumatj number
    """
    sum = gumatj_to_decimal(
        a) + gumatj_to_decimal(b)  # Adds the 2 numbers as decimals
    return decimal_to_gumatj(sum)  # Converts the decimal back to gumatj


def gumatj_multiply(a, b):
    """A function which multiplies 2 gumatj numbers together

    Args:
        a (int): gumatj number 1
        b (int): gumatj number 2

    Returns:
        int: the product of the 2 gumatj numbers as a gumatj number
    """
    mult = gumatj_to_decimal(
        a)*gumatj_to_decimal(b)  # Calculates the product as a decimal number
    # Converts that decimal number back into gumatj
    return decimal_to_gumatj(mult)
