# A program to reformat an input into the correct referencing format
# 16 March 2022
# Alexander Cristaudo
# CRSALE010

ref = input("Enter the reference:\n")
out = ""

# Gets the position of the ')' (which the part after the authors are listed)
authorPos = ref.index(")")

# Adds all the authors in title format
out+=ref[:authorPos+1].title()

out+=" "

# Gets the comma position for the about information
# This is done by splicing the ref variable into just the title and about section left, and the next comma is the about comma
# Due to splicing the ref variables length is shortened by authorPos+1
aboutComma = ref[authorPos+1:].index(",") + authorPos+1

# Adds the capital letter to the title
out += ref[authorPos+2:][0].upper() 

# Makes the rest of the title in lower case
out += ref[authorPos+2:aboutComma+2][1:].lower() 

# Adds all the about information in its given format
out += ref[aboutComma+2:]
print("Reformatted reference:")
print(out)