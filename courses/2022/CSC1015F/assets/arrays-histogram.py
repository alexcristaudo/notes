# A program which takes in marks and sorts them into mark categories

inputted = input("Enter a space-separated list of marks:\n")
# Converts the marks into integers in a list
marks = map(int, inputted.split())
# A dictionary that stores the mark category and their counter (for how many marks are in that category)
num = {"1 ": 0, "2+": 0, "2-": 0, "3 ": 0, "F ": 0}

# Creates a criteria list to find what category a users mark is in
criteria = [[75, "1 "], [70, "2+"], [60, "2-"], [50, "3 "], [0, "F "]]

for i in marks:
    for j in criteria:
        # Finds the first category where the user mark is greater
        if i >= j[0]:
            # Adds 1 to the category in the dictionary (with j[1] being the category)
            num[j[1]] += 1
            break

for i in num:
    # Prints the category, then an X the number of marks times
    print(i, "X"*num[i], sep="|")
