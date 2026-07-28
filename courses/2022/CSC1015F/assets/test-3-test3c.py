# CSC1015F Practical Test 3: Version C
# Alexander Cristaudo
# CRSALE010
# May 2022
# A program that counts the total number of consonants in a string.

# A function that counts total number of consonants from 0 to n-1
def totalConsonants(string, n):  # 'n' is the length of the string
    # base case
    if n == 0:
        return 0

    # recursive step
    elif string[0].upper() not in "AEIOU0123456789 ":
        return 1 + totalConsonants(string[1:], n-1)
    return totalConsonants(string[1:], n-1)


# Driver program
def main():
    word = input("Enter a string:\n")
    print("The total number of consonants is",
          totalConsonants(word, len(word)), end=".")


main()
