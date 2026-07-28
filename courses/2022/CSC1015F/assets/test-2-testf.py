# Practical Test 2
# Alexander Cristaudo
# 06 April 2022
# CRSALE010

def intAndString(str1, str2):
    """This function returns whether or not given 2 strings, one is a number and the other a string

    Params:
        str1 (str): Value 1 from the user
        str2 (str): Value 2 from the user

    Returns:
        boolean: True if one is a number and the other a string otherwise False
    """

    # String 1 is a number and the other is a string (and not the empty string with no value yet)
    if str1.isdigit() and (not str2.isdigit() and str2 != ""):
        return True

    # String 1 is a string and the other is a number
    elif not str1.isdigit() and str2.isdigit():
        return True

    # Either both strings or both numbers
    else:
        return False


cnt = 0  # A counter for the number of word-number/number-word pairs

# Only the newly inputted and the previous value need to be stored and compared with each input
valNew = ""  # The new input
valOld = ""  # The old input
valNew = input("Enter a value (or 'DONE'):\n")
while valNew != "DONE":
    if intAndString(valNew, valOld):
        cnt += 1

    # Make the new input the old one and input a new value
    valOld = valNew
    valNew = input("Enter a value (or 'DONE'):\n")

print("Number of word-number/number-word pairs:", cnt)
