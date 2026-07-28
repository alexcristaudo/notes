
# Use <file> = open(<filename>, <mode>)
# mode is one of 'r' (read), 'w' (overwrite), 'a' (append)
import os
file = open("openText.txt", "r")
cnt = 0
for line in file:
    cnt += 1
    print(cnt, ":", line, end="")
file.close()  # Must be closed when done

print()
print()

file = open("openText.txt", "r")
cnt = 0
for i in range(4):
    line = file.readline()
    cnt += 1
    print(cnt, ":", line, end="")
file.close()  # Must be closed when done

print()
print()

file = open("openText.txt", "r")
cnt = 0
lines = file.readlines()
for i in lines:
    cnt += 1
    print(cnt, ":", i, end="")
file.close()  # Must be closed when done

print()
print()

file = open("openText.txt", "r")
lines = file.read()
cnt = lines.count("\n") + 1
print(lines, "\nThere are a total of", cnt, "lines")
file.close()  # Must be closed when done

# Use:
# For encoding Unicode characters (default is ASCII)
file = open("openText.txt", "r", encoding="utf-8")
file.close()

# ? Write a program that counts the frequency of each word in a text file:
file = open("openText.txt", "r", encoding="utf-8")
data = file.read()
data = data.lower()
unwanted = {"\n", ",", "'", '"', ".", "&", ":", ";", ")", "(", "'s"}
for c in unwanted:
    data.replace(c, " ")
words = data.split(" ")

dct = {}
for word in words:
    if word != "":
        if word not in dct:
            dct[word] = 1
        else:
            dct[word] += 1

for i in dct:
    print("The word ---", i, "--- occurs", dct[i], "times")
print("The file contains", len(dct), "unique words")


# ! WRITING TO A TEXT FILE
# NOTE Overwrite deletes all the contents of the file and then writes the new content
# NOTE Using 'w' and the file is not found, the program then creates a new empty file
# NOTE Append does not delete the contents of the file
# NOTE When writing, the data is written into a buffer and when closing the file, the data is written into the file
# and so the data is not written if f.close() is not used

# ? Writing using print
file = open("writeFile.txt", "w")
print("Hello World (print)", file=file)
# Note the new line characters are not added automatically
file.write("Hello World (write)\n")
file.writelines(["Hello\n", "World"])


# * WRITING OBSERVATIONS

observation = input("Observation: ")
file = open("observations.txt", "w")
file.close()  # Get rid of contents

while observation:
    file = open("observations.txt", "a")
    # Print better -> automatically adds new line
    print(observation, file=file)
    file.close()  # Save
    observation = input("Observation: ")

print("Done")


# ? PYTHON PROGRAM TO WRITE PYTHON PROGRAMS
if not os.path.exists("Created Python Programs"):
    os.makedirs("Created Python Programs")

fName = input("Filename: ")
while fName:
    f = open("Created Python Programs/" + fName + ".py", "w")
    s = "print('This is the program with filename {0}')".format(fName)
    print(s, file=f)
    f.close()
    fName = input("Filename: ")

"""
file = open("useWritelines.txt", "w")
toWrite = ["Hello", "World"]
file.writelines(toWrite)
file.close()
"""

file = open("useWritelines.txt", "r")
nChar = file.read(5)
print(nChar)
file.close()

file = open("useWritelines.txt", "r")
nChar = file.readline()
print([nChar])
file.close()

file = open("useWritelines.txt", "r")
nChar = file.readlines()

print(nChar)
file.close()

# ! NONE OF THESE FUNCTIONS GET RID OF THE NEW LINE CHARACTER
