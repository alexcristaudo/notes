# A program that checks if a word is a palindrome
# Alexander Cristaudo
# CRSALE010
# 22 April 2022

def palindrome(word, pos=0):
    """A function that checks if a word is a palindrome

    Args:
        word (str): The word being checked
        pos (int, optional): The index of the word being checked. Defaults to 0.

    Returns:
        str: Whether the word is a palindrome ("Palindrome!") or not ("Not a palindrome!")
    """
    if pos >= len(word)//2:  # Only need to check half the word
        return "Palindrome!"
    # Compares the current position to the position (from the back) [-1 onto it because pos 0 checks with pos -1]
    if word[pos] != word[-pos-1]:
        return "Not a palindrome!"
    return palindrome(word, pos+1)  # Increments the position counter


def main():
    word = input("Enter a string:\n")
    print(palindrome(word))


if __name__ == "__main__":
    main()
