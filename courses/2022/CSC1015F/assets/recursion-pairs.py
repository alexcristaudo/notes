# A program that returns how many consecutive, equal characters there are
# Alexander Cristaudo
# CRSALE010
# 22 April 2022

def pairs(word, i=0):
    """A function that returns how many consecutive, equal characters there are

    Args:
        word (str): The sentence to check in
        i (int, optional): The position of the word to check. Defaults to 0.

    Returns:
        int: the counter of the number of consecutive, equal characters
    """
    if i >= len(word)-1:  # Iterated through all the characters
        return 0
    if word[i] == word[i+1]:
        # Adds 1 and increases the counter to the next pair of character
        return 1 + pairs(word, i+2)
    # Increases the counter to the next character (if the characters are not equal)
    return pairs(word, i+1)


def main():
    message = input("Enter a message:\n")
    print("Number of pairs:", pairs(message))


if __name__ == "__main__":
    main()
