# test program for english/piglatin translator

import piglatin

choice = input("(E)nglish or (P)ig Latin?\n")
action = choice[:1]
if action == 'E':
    s = input("Enter an English sentence:\n")
    new_s = piglatin.to_pig_latin(s)
    print("Pig-Latin:")
    print(new_s)
elif action == 'P':
    s = input("Enter a Pig Latin sentence:\n")
    new_s = piglatin.to_english(s)
    print("English:")
    print(new_s)
