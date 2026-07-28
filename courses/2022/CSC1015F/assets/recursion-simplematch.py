# A program that checks if a word matches a specific pattern (? represents 1 character)
# Alexander Cristaudo
# CRSALE010
# 22 April 2022

def match(pattern, word, i=0):
    """A function that checks if a word matches a specific pattern

    Args:
        pattern (str): The pattern to match 
        word (str): The word to match the pattern
        i (int, optional): The character in the word to check. Defaults to 0.

    Returns:
        bool: Whether the word matches the specific pattern
    """
    if len(pattern) != len(word):
        return False
    if i == len(word):  # Iterated throughout the entire word
        return True
    elif pattern[i] != word[i] and pattern[i] != "?":
        return False
    # Increase the counter by 1 to check the next character
    return match(pattern, word, i+1)
