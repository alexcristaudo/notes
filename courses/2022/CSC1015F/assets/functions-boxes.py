# A module to print a 5x5 square with *s as the border/either print or return a string for a rectangle with *s as the border
# Alexander Cristaudo
# 05 April 2022
# CRSALE010

def print_square():
    """This function  returns a string containing a 5x5 box.

    Returns:
        string : a 5x5 box
    """

    out = "* "*5 + "\n"  # Top row of the box
    for i in range(3):
        out += "* " + "  "*3 + "*" + "\n"  # 3 middle rows of the box
    out += "* "*5 + "\n"  # Bottom row of the box
    return out


def print_rectangle(width, height):
    """This function prints a box with a given width and height

    Args:
        width (int): The width of the box
        height (int): The height of the box
    """

    print("* "*width)  # Top row of the box (The number of *s = width)
    # Middle of the box that is *'s and spaces
    for i in range(height-2):
        print("* ", "  "*(width-2), "*", sep="")
    print("* "*width)  # Bottom row of the box (The number of *s = width)


def get_rectangle(width, height):
    """ returns a string containing a box with given width and height

    Args:
        width (int): The width of the box
        height (int): The height of the box

    Returns:
        String: A box with a given width and height
    """

    out = ""
    out += "* "*width + "\n"  # Top row of the box (The number of *s = width)

    # Middle of the box that is *'s and spaces
    for i in range(height-2):
        out += "* " + "  "*(width-2) + "*" + "\n"
    out += "* "*width  # Bottom row of the box (The number of *s = width)
    return out
