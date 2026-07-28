package Interface;

public class Square extends Graphic implements Shape, Drawable {
    // We extend an abstract class
    private double length;

    public Square(double l) {
        length = l;
    }

    public double getLength() {
        return length;
    }

    @Override
    public double getPerimeter() {
        return 4 * length;
    }

    @Override
    public double getArea() {
        return length * length;
    }

    public String toString() {
        return "SQUARE WITH LENGTH: " + length;
    }

    @Override
    public void draw() {
        System.out.println("Drawing square... [ ]");

    }

    @Override
    public void display() {
        draw();
        System.out.println("Drawing at: x = " + getX() + " y = " + getY());
    }

}
