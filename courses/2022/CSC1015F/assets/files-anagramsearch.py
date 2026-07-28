# A program that takes all anagrams with a certian list and writes them into a file
# Alexander Cristaudo
# CRSALE010
# 04 May 2022

def dictVal(n):
    """A function that returns a dictionary representation the number of characters a word has

    Params:
        n (str): The word to be checked

    Returns:
        dict: A dictionary that is a counter for the number of characters a word has
    """
    dict = {}
    for i in n:
        # Adds one to the existing counter if the letter is already in the dictionary
        if i in dict:
            dict[i] += 1
        else:
            # Creates a new key with the letter and makes the counter for it one
            dict[i] = 1
    return dict


print("***** Anagram Finder *****")
try:
    f = open("EnglishWords.txt", "r", encoding="utf-8")
    word = input("Enter a word: \n").lower()

    # This stores the anagrams of the word
    anagrams = []

    # Boolean value indicating whether START has been passed or not
    started = False
    for i in f:
        if started:
            # Removes the last character and checks if they are anagrams
            if i[-1] == "\n":
                if dictVal(word) == dictVal(i[:-1]) and word != i[:-1]:
                    anagrams.append(i[:-1])
            else:
                # This is the last word, so the "\n" character does not have to be removed
                if dictVal(word) == dictVal(i) and word != i:
                    anagrams.append(i)
        elif i == "START\n":
            started = True

    anagrams.sort()
    if len(anagrams) == 0:
        print("Sorry, anagrams of '", word, "' could not be found.", sep="")
    else:
        print(anagrams)
except FileNotFoundError as e:
    print("Sorry, could not find file 'EnglishWords.txt'.")
