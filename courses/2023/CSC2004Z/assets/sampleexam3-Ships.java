import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

public class Ships {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the name of the ship data file:");
        String filename = in.nextLine();
        in.close();

        try {
            Scanner reader = new Scanner(new FileReader(filename));
            int count = 1;
            while (reader.hasNextLine()) {
                Ship one = new Ship(reader.nextLine());
                Ship two = new Ship(reader.nextLine());
                System.out.print("Pair " + count + ": ");
                one.intersect(two);
                count++;
            }
            System.out.println("Done");
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }
}

class Ship {

    double[] equation;
    double x;
    double y;

    public Ship(String line) {
        String[] split = line.split(" ");
        equation = new double[] { Double.parseDouble(split[0]), Double.parseDouble(split[1]),
                Double.parseDouble(split[2]) };
        x = Double.parseDouble(split[3]);
        y = Double.parseDouble(split[4]);
    }

    public void intersect(Ship comp) {
        double xInt = (this.equation[1] * comp.equation[2] - comp.equation[1] * this.equation[2])
                / (this.equation[0] * comp.equation[1] - this.equation[1] * comp.equation[0]);
        double yInt = (this.equation[2] * comp.equation[0] - comp.equation[2] * this.equation[0])
                / (this.equation[0] * comp.equation[1] - this.equation[1] * comp.equation[0]);

        double dist1 = Math.sqrt((x - xInt) * (x - xInt) + (y - yInt) * (y - yInt));
        double dist2 = Math.sqrt((comp.x - xInt) * (comp.x - xInt) + (comp.y - yInt) * (comp.y - yInt));
        String closer = "";

        String xIntFormat = String.format("%.1f", xInt);
        String yIntFormat = String.format("%.1f", yInt);
        String dist1Format = String.format("%.1f", dist1);
        String dist2Format = String.format("%.1f", dist2);

        if (Math.round(dist1) < Math.round(dist2))
            closer = "Ship S1 is nearest.";
        else if (Math.round(dist2) < Math.round(dist1))
            closer = "Ship S2 is nearest.";
        else
            closer = "Tied.";

        System.out.println(
                "Intersection point: (" + xIntFormat + ", " + yIntFormat + "); Ship S1's distance is " + dist1Format
                        + "; Ship S2's distance is " + dist2Format + "; " + closer);

    }

}