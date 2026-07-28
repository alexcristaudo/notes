# A Program that creates a 4x4 grid, prints the contents of the grid, checks if a player has lost or won the game,
# creates a copy of the grid and checks if 2 grids are equal
# Alexander Cristaudo
# 13 April 2022
# CRSALE010

def create_grid(grid):
    """A function that creates a 4x4 grid

    Params:
        grid (list): An empty list

    Returns:
        list: The created 4x4 2D array containing only 0's
    """
    for i in range(4):
        # Adds an empty list into the grid
        grid.append([])
        for j in range(4):
            # Adds 4 0's to each list in the grid
            grid[i].append(0)
    return grid


def print_grid(grid):
    """A function which prints out the grid 

    Params:
        grid (list): The grid containing the data
    """
    for i in range(6):
        for j in range(6):
            # Checks if it is the corner (i = 0, 5 and j = 0, 5 are the corners)
            if str(i) in ["0", "5"] and str(j) in ["0", "5"]:
                print("+", end="")
            # Checks if it is a horizontal border
            elif str(i) in ["0", "5"]:
                print("-"*5, end="")
            elif str(j) in ["0", "5"]:
                print("|", end="")
            # Checks if it is a horizontal border
            elif grid[i-1][j-1] == 0:
                # Prints 5 spaces if there is no number (column width of 5)
                print(" "*5, end="")
            else:
                # Prints the number and then the rest of the 5 character length is spaces
                print(grid[i-1][j-1], " " *
                      (5-(len(str(grid[i-1][j-1])))), sep="", end="")
        # Creates a new line after each row is printed
        print()


def check_lost(grid):
    """A function that checks if there are no open spaces or numbers equal next to each other

    Params:
        grid (list): The grid with the data

    Returns:
        bool: A true value if the game is lost, false otherwise (by the criteria above)
    """
    for i in range(0, 4):
        for j in range(0, 4):
            if grid[i][j] == 0:
                return False
            # Prevents an index out of range exception
            if i != 3 and j != 3:
                if grid[i][j] == grid[i][j+1] or grid[i][j] == grid[i+1][j]:
                    # Only the value to the right and below need to be checked because the left value
                    # would have been checked when grid[i][j] was that value (and thus the value to the right
                    # would be the current value in grid[i][j])
                    return False
    # returns True if False has not been returned
    return True


def check_won(grid):
    """A function that checks if there is some value >= 32 in the grid (and this means the user wins)

    Params:
        grid (list): The grid that has the data of the numbers

    Returns:
        bool: True if the user has won otherwise False
    """
    for i in range(4):
        for j in range(4):
            if grid[i][j] >= 32:
                return True
    return False


def copy_grid(grid):
    """A function that copies the contents of the grid into a new list and returns that list

    Params:
        grid (list): The original grid

    Returns:
        list: The new list (with a different reference to the original list) with the same contents
    """
    # initializes the list with all 0's
    newGrid = [[0 for i in range(4)] for j in range(4)]
    for i in range(4):
        for j in range(4):
            newGrid[i][j] = grid[i][j]
    return newGrid


def grid_equal(grid1, grid2):
    """A function that checks if 2 grids have the same contents

    Params:
        grid1 (list): The first grid 
        grid2 (list): The second grid

    Returns:
        bool: True if they have the same contents otherwise False
    """
    for i in range(4):
        for j in range(4):
            if grid1[i][j] != grid2[i][j]:
                return False
    return True
