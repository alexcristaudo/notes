package Interface;

public class InterfaceDemo {
    public static void main(String[] args) {
        Circle c = new Circle(3.0);
        System.out.println(c);

        Square s = new Square(2.0);
        System.out.println(s);
        s.display();
    }
}
