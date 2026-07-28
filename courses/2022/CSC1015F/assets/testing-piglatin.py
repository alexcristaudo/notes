# A program to convert between pig latin and english sentences
# Alexander Cristaudo
# CRSALE010
# 11 April 2022

def to_pig_latin(sentence):
    """A function that converts an english sentence into pig latin

    Args:
        sentence (string): an english sentence

    Returns:
        string: the english sentence in pig latin
    """
    words = sentence.split()
    out = ""
    for i in words:
        if i[0].upper() in "AEIOU":  # Checks if the word starts with a vowel
            i += "way"
            out += i+" "  # Appends way if it has and adds to the out variable
        else:
            consCnt = 0
            # Checks how many consonants the word starts with
            while consCnt < len(i) and i[consCnt].upper() not in "AEIOU":
                consCnt += 1
            # Adds the vowels, then an "a", then the consonants followed with "ay"
            i = i[consCnt:] + "a" + i[:consCnt] + "ay"
            out += i + " "
    return out[:-1]  # Gets rid of the last space in the out variable


def to_english(sentence):
    """A function that converts a pig latin sentence into english 

    Args:
        sentence (string): the sentence in pig latin

    Returns:
        string: the pig latin sentence in eng;ish
    """
    words = sentence.split()
    out = ""
    for i in words:
        consCnt = 0
        # Checks if the last 3 characters are "way" (this means the word started with a vowel)
        if i[-3:] == "way":
            # Adds the rest of the string (without the "way")
            out += i[:-3] + " "
        else:
            # Checks how many consonants the word starts with
            while i[-3-consCnt].upper() not in "AEIOU":
                # -3-consCnt goes from before the last "ay" (the first consonant)
                # and keeps going backwards until there is no consonant at that index
                consCnt += 1
            # Adds the consonants at the from + the rest of the word
            out += i[-3-consCnt+1:-2] + i[:-3-consCnt] + " "
    return out[:-1]  # Gets rid of the last space added to out
