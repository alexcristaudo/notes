# Reverse a string
# Alexander Cristaudo
# 4 April 2022
# CRSALE010

"""
PLANNING:
Say we have A B C
We can iterate and get each of these
A
B
C
We want C B A
So B must be added before A -> BA and similarly CBA
"""


def box(text, padding=0):
    print("\u250F", "\u2501"*(len(text)+4*padding+2), "\u2513", sep="")
    for i in range(0, padding):
        print("\u2503", " "*(len(text)+2+4*padding), "\u2503", sep="")
    print("\u2503", " "*(2*padding+1), text,
          " "*(2*padding+1), "\u2503", sep="")
    for i in range(0, padding):
        print("\u2503", " "*(len(text)+2+4*padding), "\u2503", sep="")
    print("\u2517", "\u2501"*(len(text)+4*padding+2), "\u251B", sep="")


def reverse(c, str):
    return c + str


def main():
    """
    inp = input("Enter a String: ")
    out = ""
    for i in inp:
        out = reverse(i, out)
    print(out)
    """
    box("Hello")


if __name__ == "__main__":
    main()
# ALTERNATIVELY:


def string_reverse(s):
    reverse = ""
    for c in s:
        reverse = c + reverse
    return reverse
