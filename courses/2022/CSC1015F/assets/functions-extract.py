# A program that extracts data in the format BEGIN temp_press:Xcoordinate,Ycoordinate emanetiS END
# and presents this data separately
# Alexander Cristaudo
# 05 April 2022
# CRSALE010

def location(block):
    """The location function gets and returns the location component in title case.

    Params:
        block (String): The string containing the block of data extracted from get_block (the useful information)

    Returns:
        String: The location component in title case
    """

    # There are no spaces after the , so the string is sliced and the first space is found
    commaInd = block.find(",")
    # Since the string is sliced, the actual index is commaInd away
    locationSpace = block[commaInd:].find(" ") + commaInd
    # Reverse the block string
    block = block[::-1]
    # Make the location space applicable to the reversed string
    locationSpace *= -1
    # 4 is the starting index since block ends with " END" (before reversed)
    location = block[4:locationSpace]
    return location.title()  # Title case


def temperature(block):
    """A function that returns the temperature component of the block as a float

    Params:
        block (String): The string containing the block of data extracted from get_block (the useful information)

    Returns:
        float: The temperature component of the block
    """

    beginInd = block.find(" ")+1
    endInd = block.find("_")
    temperature = float(block[beginInd:endInd])
    return temperature


def x_coordinate(block):
    """A function that returns the x coordinate of the block as a string

    Params:
        block (String): The string containing the block of data extracted from get_block (the useful information)

    Returns:
        String: The x coordinate of the block
    """

    beginInd = block.find(":")+1
    endInd = block.find(",")
    x_coordinate = block[beginInd:endInd]
    return x_coordinate


def y_coordinate(block):
    """A function that returns the y coordinate of the block

    Params:
        block (String): The string containing the block of data extracted from get_block (the useful information)

    Returns:
        String: The y coordinate component of the block
    """

    # THE y coordinate lies between a , and a space
    # The space is the first space after the ,
    beginInd = block.find(",") + 1

    # Since block[beginInd:] reduces the length of the string, beginind is added to compensate
    endInd = block[beginInd:].find(" ") + beginInd
    y_coordinate = block[beginInd:endInd]
    return y_coordinate


def pressure(block):
    """Returns the pressure component of the block

    Params:
        block (String): The string containing the block of data extracted from get_block (the useful information)

    Returns:
        float: The pressure component of the block
    """

    startInd = block.find("_")+1
    endInd = block.find(":")  # Pressure lies between a _ and a :
    pressure = float(block[startInd:endInd])
    return pressure


def get_block(data):
    """This function extracts the sub string starting with "BEGIN" and ending with "END"

    Params:
        data (String): The raw data from the sensor

    Returns:
        String: The block of data that holds the information needed from the raw data
    """

    startInd = data.find('BEGIN')
    endInd = data.find('END') + 3
    return data[startInd:endInd]


def main():
    data = input('Enter the raw data:\n')
    block = get_block(data)
    print('Site information:')
    print('Location:', location(block))
    print('Coordinates:', y_coordinate(block), x_coordinate(block))
    print('Temperature: {:.2f} C'.format(temperature(block)))
    print('Pressure: {:.2f} hPa'.format(pressure(block)))


if __name__ == '__main__':
    main()
