
# Menu to store an entered message, retrieve that message, view a list of files and display
# what is in the file
# Alexander Cristaudo
# CRSALE010
# 14 March 2022

# mes stores the entered message
mes = "no message yet"

# input from the user
inp = ""

while inp != "X":
    print("Welcome to UCT BBS")
    print("MENU")
    
    print("(E)nter a message")
    print("(V)iew message")
    print("(L)ist files")
    print("(D)isplay file")
    print("e(X)it")
    
    # .upper() makes input not case sensitive
    inp = input("Enter your selection:\n").upper()
    if inp == "E":
        mes = input("Enter the message:\n")
    elif inp == "V":
        print("The message is:", mes)
    elif inp == "L":
        print("List of files: 42.txt, 1015.txt")
    elif inp == "D":
        fn = input("Enter the filename:\n")
        if fn == "42.txt":
            print("The meaning of life is blah blah blah ...")
        elif fn == "1015.txt":
            print("Computer Science class notes ... simplified")
            print("Do all work")
            print("Pass course")
            print("Be happy")
        else:
            print("File not found")
print("Goodbye!")