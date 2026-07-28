# A program that checks if a word matches a specific pattern (with * representing multiple characters and ? 1 character)
# Alexander Cristaudo
# CRSALE010
# 29 April 2022

def match(pattern, word, possible=[], checked=False):
    """A function that checks if a word matches a specific pattern

    Args:
        pattern (str): The pattern to match
        word (str): The word being checked
        possible (list): The substrings that need to be in the word (these are formed by splitting by the *s)
        checked (bool): Whether the possible array has been used or not 

    Returns:
        bool: Whether the string matches the pattern (True) or not (False)

    """

    # This check to make sure the first index of the possible array match the first letters of the word (unless they have a ? or are blank)
    if not checked and pattern.split("*")[0] != word[:len(pattern.split("*")[0])] and "?" not in pattern.split("*")[0] and pattern.split("*")[0] != "":
        return False
    # This check to make sure the last index of the possible array match the last letters of the word (unless they have a ? or are blank)
    if not checked and pattern.split("*")[-1] != word[-len(pattern.split("*")[-1]):] and "?" not in pattern.split("*")[-1] and pattern.split("*")[-1] != "":
        return False
    if len(possible) == 0:
        # Checked is true if all values of possible have been used
        if checked:
            return True
        checked = True
        # Add the sequences of characters that need to be in the word
        possible = pattern.split("*")
        return match(pattern, word, possible, checked)
    else:
        if "?" in possible[0]:
            # Checks if the string in the pattern matches the correspoinding string in the word (either from the back or the front)
            if not simpleMatch(possible[0], word[:len(possible[0])]) and not simpleMatch(possible[0], word[-len(possible[0]):]):
                return False
            return match(pattern, word[len(possible[0]):], possible[1:], checked)
        else:
            # Checks if the string in the pattern matches the correspoinding string in the word (either from the back or the front)
            compare = word.find(possible[0])
            # Compare = -1 if the string is not in the word (and the later strings have to be later in the word since the word is sliced)
            if compare == -1:
                return False
            # Slices the word so that the string in the possible array is no longer in the string (starts at the next character)
            # Possible is shortened by 1 so as to get the next sequence of characters
            return match(pattern, word[compare+len(possible[0]):], possible[1:], checked)


def simpleMatch(pattern, word, i=0):
    """A function that checks if a word matches a specific pattern (using ?)

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
    return simpleMatch(pattern, word, i+1)
