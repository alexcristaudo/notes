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


print("***** Anagram Set Search *****")
length = int(input("Enter word length:\n"))
print("Searching...")
try:
    f = open("EnglishWords.txt", "r", encoding="utf-8")
    # This stores all anagrams
    allAnagrams = []
    # Adds all words with the given length to reduce the number of items to search
    allWithLen = []

    # Checked indicates whether START has been passed or not
    checked = False
    allLines = f.readlines()

    for i in range(len(allLines)):
        if i != len(allAnagrams)-1:
            # Removes the "\n" character
            allLines[i] = allLines[i][:-1]
        if len(allLines[i]) == length and checked:
            # Adds words with the right length
            allWithLen.append(allLines[i])
        if not checked:
            # Makes checked True if START is passed
            if allLines[i] == "START":
                checked = True

    for i in range(len(allWithLen)-1):
        anagrams = [allWithLen[i]]

        # Loops through the rest of the words
        for j in range(i+1, len(allWithLen)):
            if dictVal(allWithLen[j]) == dictVal(allWithLen[i]):
                anagrams.append(allWithLen[j])
        # Checks if the word has an anagram (initially the anagrams list contains the first word)
        if len(anagrams) > 1:
            isIn = False
            # Checks if the word is already in the list containing all anagrams
            for j in allAnagrams:
                # Only anagrams[0] is needed to be checked
                # because if this word is already in the list
                # then all the others will be as well
                if anagrams[0] in j:
                    isIn = True
                    break
            if not isIn:
                anagrams.sort()
                # Appends if the word is not in the list
                allAnagrams.append(anagrams)

    allAnagrams.sort()

    fn = input("Enter file name:\n")
    print("Writing results...")

    # Clears any content in the file (or creates it if the file does not exist)
    f = open(fn, "w")
    f.close()

    # Appends each list of anagrams
    f = open(fn, "a")
    for i in allAnagrams:
        print(i, file=f)
    f.close()
except FileNotFoundError as e:
    print("Sorry, could not find file 'EnglishWords.txt'")
