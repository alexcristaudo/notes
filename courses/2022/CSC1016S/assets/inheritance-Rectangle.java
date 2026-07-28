// A Rectangle class inheriting from the Shape class
// CRSALE010
// Alexander Cristaudo
// 28 September 2022

public class Rectangle extends Shape {

    // Instance variables
    private double length;
    private double width;

    // Parameterised constructor
    public Rectangle(String name, String colour, double length, double width) {
        // Calling the Shape constructor
        super(name, colour);

        // Setting initial values to the instance variables
        this.length = length;
        this.width = width;
    }

    // Copy constructor
    public Rectangle(Rectangle r) {
        this(r.name, r.colour, r.length, r.width);
    }

    // Standard output format for a Rectangle
    @Override
    public String toString() {
        // super.toString() calls the Shape toString() method
        return super.toString() + " Length " + length + " Width " + width;
    }
}
