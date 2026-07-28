// A Circle class extending from the Circle class
// CRSALE010
// Alexander Cristaudo
// 28 September 2022

public class Circle extends Shape {
    // Instance variable
    private double radius;

    // Parameterised constructor
    public Circle(String name, String colour, double radius) {
        // Calling the Shape constructor
        super(name, colour);

        // Setting the values to the instance variable
        this.radius = radius;
    }

    // Copy constructor
    public Circle(Circle c) {
        this(c.name, c.colour, c.radius);
    }

    // The format for a circle
    @Override
    public String toString() {
        // super.toString() calls the Shape toString() method
        return super.toString() + " Radius " + radius;
    }
}
