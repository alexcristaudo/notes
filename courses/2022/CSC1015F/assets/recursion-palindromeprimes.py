# A program that checks if a word is a palindrome
# Alexander Cristaudo
# CRSALE010
# 22 April 2022

import math
import sys
sys.setrecursionlimit(30000)  # Increases the amount of recursion


def palindrome(word, pos=0):
    """A function that checks if a word is a palindrome

    Args:
        word (str): The word to check
        pos (int, optional): The positin of the word to check. Defaults to 0.

    Returns:
        bool: whether the word is a palindrome or not
    """
    if pos >= len(word)//2:  # Only need to check the first half of the word
        return True
    if word[pos] != word[-pos-1]:  # Compares the index at pos to the index at pos backards
        return False
    return palindrome(word, pos+1)  # Checks the next index


def prime(n, div=2):
    """A function that checks if a number is a prime

    Args:
        n (int): The number being checked
        div (int, optional): The possible divisors of the word to check. Defaults to 2.

    Returns:
        bool: Whether the word is a prime or not
    """
    if div > math.sqrt(n):  # Only need to check up to (and including) sqrt(n) [at least one factor has to be less than sqrt(n) if n is a composite number]
        return True
    if n % div == 0:  # If some number < n divides it, then it is not prime
        return False
    return prime(n, div+1)  # Increase the divisor by one


def palindromePrimes(n, m):
    """A function that returns all palindromic prime numbers from n to m

    Args:
        n (int): the starting number
        m (int): the ending number

    Returns:
        str: A string of all palindromic prime numbers from n to m
    """
    if n > m:
        return ""  # Stop recursion after n > m
    if palindrome(str(n)) and prime(n):
        # Adds n and continues recursing with n incremented by 1
        return str(n) + "\n" + palindromePrimes(n+1, m)
    # Continues recursing with n incremented by 1
    return palindromePrimes(n+1, m)


def main():
    n = eval(input("Enter the starting point N:\n"))
    m = eval(input("Enter the ending point M:\n"))
    print("The palindromic primes are:")
    print(palindromePrimes(n, m))


if __name__ == '__main__':
    main()
