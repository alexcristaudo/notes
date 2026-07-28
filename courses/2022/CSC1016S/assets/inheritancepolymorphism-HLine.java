// A class to represent a horizontal line as a subclass of VectorObject
// Alexander Cristaudo
// CRSALE010
// 17 October 2022

public class HLine extends VectorObject {

    // Single instance variable for a horizontal line (not part of VectorObject)
    int length;

    // Parameterized constructor
    public HLine(int id, int x, int y, int length) {
        // Calling the Parent constructor
        super(id, x, y);
        // Initialising the length
        this.length = length;
    }

    // Overriden draw method
    @Override
    public void draw(char[][] matrix) {

        // For a horizontal line, the row stays the same (the y value) and the column
        // changes, representing the x values
        // We loop through the possible x values
        for (int x = this.x; x < this.x + this.length; x++) {
            // Setting every point to a * on the line
            matrix[this.y][x] = '*';
        }
    }

}
