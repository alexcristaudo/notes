# A program that performs the pushing of data left, up, down and right in the grid
# Alexander Cristaudo
# CRSALE010
# 22 April 2022

import util


def push_up(grid):
    """A function that pushes the data in the grid up

    Param:
        grid (list): The grid with the data to push
    """
    # i = row, j = column

    for i in range(4):
        for j in range(4):
            # This didMerge variable indicates whther a merge has already happened
            # (and stops a block with the same value as the new merged block from merging)
            didMerge = False
            if grid[i][j] != 0:
                # Check for merge (with the value below = the value)
                if i-1 >= 0 and grid[i-1][j] == grid[i][j]:
                    # Merges and changes the value of the one being pushed up to 0
                    grid[i-1][j] *= 2
                    grid[i][j] = 0
                    didMerge = True
            # if (rather than elif) is used because if a merge is done this cell is now 0
            if grid[i][j] == 0:
                # traverses the cells below to find the first non-zero cell
                for k in range(i+1, 4):
                    if grid[k][j] != 0:
                        # Checks if merge with cell above
                        if i-1 >= 0 and grid[i-1][j] == grid[k][j] and didMerge == False:
                            grid[i-1][j] *= 2
                            grid[k][j] = 0
                            # Merging upon moving up creates a space and this
                            # loop finds the next number and moves it into the space
                            for p in range(i, 4):
                                if grid[p][j] != 0:
                                    grid[i][j] = grid[p][j]
                                    grid[p][j] = 0
                                    break
                        else:
                            # Moves cell up
                            grid[i][j] = grid[k][j]
                            grid[k][j] = 0
                        break


def push_down(grid):
    """A function that pushes the data in the grid down

    Param:
        grid (list): The grid with the data to push
    """
    # i = row, j = column
    for i in range(3, -1, -1):
        # i is looped from 3 to 0 to start from the bottom and move up
        for j in range(4):
            # This didMerge variable indicates whther a merge has already happened
            # (and stops a block with the same value as the new merged block from merging)
            didMerge = False
            if grid[i][j] != 0:
                # Check for merge (with the value above = the value)
                if i+1 <= 3 and grid[i+1][j] == grid[i][j]:
                   # Merges and changes the value of the one being pushed down to 0
                    grid[i+1][j] *= 2
                    grid[i][j] = 0
                    didMerge = True
            # if (rather than elif) is used because if a merge is done this cell is now 0
            if grid[i][j] == 0:
                # traverses the cells above (which is why looping backwards from i-1) to find the first non-zero cell
                for k in range(i-1, -1, -1):
                    if grid[k][j] != 0:
                       # Checks if merge with cell below
                        if i+1 <= 3 and grid[i+1][j] == grid[k][j] and didMerge == False:
                            grid[i+1][j] *= 2
                            grid[k][j] = 0
                            # Merging upon moving down creates a space and this
                            # loop finds the next number and moves it into the space
                            for p in range(i, -1, -1):
                                if grid[p][j] != 0:
                                    grid[i][j] = grid[p][j]
                                    grid[p][j] = 0
                                    break
                        else:
                           # Moves cell down
                            grid[i][j] = grid[k][j]
                            grid[k][j] = 0
                        break


def push_left(grid):
    """A function that pushes the data in the grid left

    Param:
        grid (list): The grid with the data to push
    """
    # i = row, j = column
    for i in range(4):
        for j in range(4):
            # This didMerge variable indicates whther a merge has already happened
            # (and stops a block with the same value as the new merged block from merging)
            didMerge = False
            if grid[i][j] != 0:
                if j-1 >= 0 and grid[i][j-1] == grid[i][j]:
                    # Merges and changes the value of the one being pushed left to 0
                    grid[i][j-1] *= 2
                    grid[i][j] = 0
                    didMerge = True
            # if (rather than elif) is used because if a merge is done this cell is now 0
            if grid[i][j] == 0:
                # traverses the cells to the right to find the first non-zero cell
                for k in range(j+1, 4):
                    if grid[i][k] != 0:
                        # Checks if merge with cell to the left
                        if j-1 >= 0 and grid[i][j-1] == grid[i][k] and didMerge == False:
                            grid[i][j-1] *= 2
                            grid[i][k] = 0
                            # Merging upon moving left creates a space and this
                            # loop finds the next number and moves it into the space
                            for p in range(j, 4):
                                if grid[i][p] != 0:
                                    grid[i][j] = grid[i][p]
                                    grid[i][p] = 0
                                    break
                        else:
                            # Moves cell left
                            grid[i][j] = grid[i][k]
                            grid[i][k] = 0
                        break


def push_right(grid):
    """A function that pushes the data in the grid right

    Param:
        grid (list): The grid with the data to push
    """
    # i = row, j = column
    for i in range(4):
        # j is looped from 3 to 0 to work from the right leftwards
        for j in range(3, -1, -1):
            # This didMerge variable indicates whther a merge has already happened
            # (and stops a block with the same value as the new merged block from merging)
            didMerge = False
            # Check for merge (with the value below = the value)
            if grid[i][j] != 0:
                # traverses the cells to the right to find the first non-zero cell
                if j+1 <= 3 and grid[i][j+1] == grid[i][j]:
                    grid[i][j+1] *= 2
                    grid[i][j] = 0
                    didMerge = True
            # if (rather than elif) is used because if a merge is done this cell is now 0
            if grid[i][j] == 0:
                for k in range(j-1, -1, -1):
                    if grid[i][k] != 0:
                        # Checks if merge with cell to the left
                        if j+1 <= 3 and grid[i][j+1] == grid[i][k] and didMerge == False:
                            grid[i][j+1] *= 2
                            grid[i][k] = 0
                            # Merging upon moving right creates a space and this
                            # loop finds the next number and moves it into the space
                            for p in range(j, -1, -1):
                                if grid[i][p] != 0:
                                    grid[i][j] = grid[i][p]
                                    grid[i][p] = 0
                                    break
                        else:
                            # Moves cell right
                            grid[i][j] = grid[i][k]
                            grid[i][k] = 0
                        break
