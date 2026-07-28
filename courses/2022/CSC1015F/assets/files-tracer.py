# A program which adds/removes trace statements
# Alexander Cristaudo
# CRSALE010
# 04 May 2022

print("***** Program Trace Utility *****")
program = input("Enter the name of the program file: ")
f = open(program, "r")

writeData = '"""DEBUG"""\n'

# Indicates whether the current line is a function line
funcLine = False
funcName = ""

# Indicates whether to remove trace statements or add trace statements
removeTrace = False

for i in f:
    if i == '"""DEBUG"""\n':
        removeTrace = True
    if removeTrace:
        if '"""DEBUG"""' not in i:
            # Only adds the lines that aren't trace statements
            writeData += i
    else:
        if funcLine:
            # Adds the trace statement before the line (if the previous line is a function declaration)
            writeData += '    """DEBUG""";'
            writeData += "print('" + funcName + "')\n"
            funcLine = False
        if "def" in i:
            # Function declaration
            funcLine = True
            # funcName is between "def " and "("
            # E.g. def power()
            funcName = i[i.find("def") + 4: i.find("(")]
        # Adds all the existing lines as well
        writeData += i

f.close()

if removeTrace:
    # Removes the initially stored """DEBUG"""\n if removing trace statements
    writeData = writeData[len('"""DEBUG"""\n'):]
    print("Program contains trace statements")
    print("Removing...Done")
else:
    print("Inserting...Done")

# Writes the data into the file
f = open(program, "w")
f.write(writeData)
f.close()
