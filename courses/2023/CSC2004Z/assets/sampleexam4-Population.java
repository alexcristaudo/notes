import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Scanner;

public class Population {
    public static void main(String[] args) {
        System.out.println("Enter the file name:");
        Scanner in = new Scanner(System.in);
        String fileName = in.nextLine();
        in.close();
        try (Scanner read = new Scanner(new FileReader(fileName))) {
            int size = read.nextInt();
            read.nextLine();
            ArrayList<Critter> critters = new ArrayList<Critter>();
            for (int i = 0; i < size; i++) {
                critters.add(new Critter(read.nextLine()));
            }

            int m = read.nextInt();
            read.nextLine();

            for (int i = 0; i < m; i++) {
                String[] mate = read.nextLine().split(" ");
                int[] mating = { Integer.parseInt(mate[0]), Integer.parseInt(mate[1]) };
                Critter child = critters.get(mating[0] - 1).mate(critters.get(mating[1] - 1));
                critters.add(child);
            }

            for (Critter c : critters) {
                System.out.println(c);
            }
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }
}

class Critter {
    String code;

    public Critter(String code) {
        this.code = code;
    }

    public Critter mate(Critter c) {
        String one = this.code;
        String two = c.code;
        String newCode = "";

        int maxLen = (one.length() > two.length()) ? one.length() : two.length();
        for (int i = 0; i < maxLen; i++) {
            if (i < one.length()) {
                newCode += one.charAt(i);
            }
            if (newCode.length() == 10) {
                break;
            }
            if (i < two.length()) {
                newCode += two.charAt(i);
            }
            if (newCode.length() == 10) {
                break;
            }
        }
        return new Critter(newCode);

    }

    public String toString() {
        return "[" + code + "]";
    }
}
