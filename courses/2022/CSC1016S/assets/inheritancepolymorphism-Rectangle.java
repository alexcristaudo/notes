// A class to represent a Rectangle as a subclass of VectorObject
// Alexander Cristaudo
// CRSALE010
// 17 October 2022

public class Rectangle extends VectorObject {
    // Instance variables -> the lengths of the sides
    int xLen;
    int yLen;

    // Parameterised constructor
    public Rectangle(int id, int x, int y, int xLen, int yLen) {
        // Calling the VectorObject constructor
        super(id, x, y);
        // Initialisation of the instance variables
        this.xLen = xLen;
        this.yLen = yLen;
    }

    // Overriding the abstract draw method
    @Override
    public void draw(char[][] matrix) {
        // For a rectangle, we loop through both the x and y
        for (int y = this.y; y < this.y + this.yLen; y++)
            for (int x = this.x; x < this.x + this.xLen; x++)
                matrix[y][x] = '*';
                // y is the first index because y indicates the row. x is the column

    }

}
