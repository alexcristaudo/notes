// A class representing a line denoted by 2 points as a child class to VectorObject
// Alexander Cristaudo
// CRSALE010
// 17 October 2022

public class PtLine extends VectorObject {

    // Storing the second point (the first is stored in VectorObject)
    int x1;
    int y1;

    // Parameterised constructor
    public PtLine(int id, int x, int y, int x1, int y1) {
        // Calling the VectorObject constructor
        super(id, x, y);

        // Initialisation
        this.x1 = x1;
        this.y1 = y1;
    }

    // Implementing Bresenham algorithm
    @Override
    public void draw(char[][] matrix) {

        // We use local variables instead of the instance variables to not permanently
        // change them, just modify the local variables
        int x = this.x;
        int x1 = this.x1;
        int y = this.y;
        int y1 = this.y1;
        boolean steep = Math.abs(y1 - y) > Math.abs(x1 - x);

        if (steep) {
            // Swapping (x0, y0) and (x1, y1)
            int temp = x;
            x = y;
            y = temp;

            temp = x1;
            x1 = y1;
            y1 = temp;
        }
        if (x > x1) {
            // Swapping (x0, x1) and (y0, y1)
            int temp = x;
            x = x1;
            x1 = temp;

            temp = y;
            y = y1;
            y1 = temp;
        }
        int ys = 0;
        if (y < y1)
            ys = 1;
        else
            ys = -1;

        int yPlot = y; // This variable is the one plotted for y
        double error = 0;
        // We need to convert both sides to doubles to do normal division, not integer
        // division
        double m = ((double) (Math.abs(y1 - y))) / ((double) (x1 - x));

        // Looping through all the x values to plot
        for (int xPlot = x; xPlot <= x1; xPlot++) {
            if (steep) {
                matrix[xPlot][yPlot] = '*';
            } else {
                matrix[yPlot][xPlot] = '*';
            }
            error += m;
            if (error > 0.5) {
                yPlot += ys;
                error--;
            }
        }
    }

}
