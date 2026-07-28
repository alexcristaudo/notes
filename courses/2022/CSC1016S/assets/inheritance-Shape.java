// A Shape class acting as a Base class storing a name and colour
// CRSALE010
// Alexander Cristaudo
// 28 September 2022

public class Shape {
    // Instance variables
    String name;
    String colour;

    // Parameterised constructor
    public Shape(String name, String colour) {
        this.name = name;
        this.colour = colour;
    }

    // Copy constructor
    public Shape(Shape s) {
        this(s.name, s.colour);
    }

    // Standard toString for a Shape
    @Override
    public String toString() {
        return name + " " + colour;
    }
}
