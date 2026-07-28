// This is a class that is used to create 2-D vector objects 
// CRSALE010
// Alexander Cristaudo
// 20 September 2022

public class Vector {

    // A vector has an x and y coordinate
    private double x;
    private double y;

    // Parameterised constructor
    public Vector(double x, double y) {
        this.x = x;
        this.y = y;
    }

    // Returning the magnitude of a vector - the sum of the squares of the
    // components, square rooted
    public double getMagnitude() {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    // Adding two vectors together - by adding their components
    public Vector add(Vector v) {
        return new Vector(this.x + v.x, this.y + v.y);
    }

    // Scalar product of a vector - multiply each component by the multiplier
    public Vector multiply(double multiplier) {
        return new Vector(this.x * multiplier, this.y * multiplier);
    }

    // The dot product between two vectors - the product of their components with
    // the other vectors corresponding component, all added together
    public double dotProduct(Vector v) {
        return this.x * v.x + this.y * v.y;
    }

    // The standard formatting for a vector
    public String toString() {
        return String.format("v = (%.2f, %.2f)", this.x, this.y);
    }
}
