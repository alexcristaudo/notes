package Interface;

public class Circle implements Shape {

    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getPerimeter() {
        return Math.PI * 2 * radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }

    public String toString() {
        return "CIRCLE WITH RADIUS: " + radius;
    }

}
