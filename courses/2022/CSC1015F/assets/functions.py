def power(a, b):
    """Returns a to the power of b

    Args:
        a (float): The base of the power
        b (float): The power raised to 

    Returns:
        float: a to the power of b
    """
    return a ** b


def main():
    """Main method for the program
    """
    print(power(2, 3))
    print(power.__doc__)


if __name__ == "__main__":
    main()
