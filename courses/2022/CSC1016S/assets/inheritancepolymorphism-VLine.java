// A class to represent a vertical line as a subclass of VectorObject
// Alexander Cristaudo
// CRSALE010
// 17 October 2022

public class VLine extends VectorObject {

    // Single instance variable for a vertical line (not part of VectorObject)
    int length;

    // Parameterized constructor
    public VLine(int id, int x, int y, int length) {
        // Calling the Parent constructor
        super(id, x, y);
        // Initialising the length
        this.length = length;
    }

    // Overriden draw method
    @Override
    public void draw(char[][] matrix) {
        // For a vertical line, the column stays the same (the x value) and the row
        // changes, representing the y values
        // We loop through the possible y values
        for (int y = this.y; y < this.y + this.length; y++) {
            // Setting every point to a * on the line
            matrix[y][this.x] = '*';
        }
    }

}
