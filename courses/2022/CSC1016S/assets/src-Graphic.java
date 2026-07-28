package Interface;

public abstract class Graphic {
    private double x;
    private double y;

    public Graphic() {
        x = 0.0;
        y = 0.0;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public abstract void display();
}
