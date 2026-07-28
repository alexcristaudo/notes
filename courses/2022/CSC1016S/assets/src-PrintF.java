public class PrintF {
    public static void main(String[] args) {
        double price = 19.8;
        String name = "Alex";
        int age = 19;
        System.out.print("$");
        System.out.printf("%6.2f\n", price); // Same as python, 6 letters, 2 dps
        // Printing new line after -> %n or \n
        System.out.printf("%n%6.2f", price); // .2f = decimal points
        // Printing new line before
        // System.out.printf();
        System.out.printf("Start%8.2fEnd", price);

        System.out.println();
        System.out.println();

        System.out.printf("Name: %10s\nAge: %d\n", name, age); // 10 = space that string takes up (right aligned)
        // Note: cannot interchange

        System.out.println(String.format("The price is %f", price));
        // See symbol image - FormatSpecifier.png
    }
}