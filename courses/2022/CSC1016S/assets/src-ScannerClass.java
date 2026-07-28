import java.io.File;
import java.util.Scanner;

public class ScannerClass {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Note: sc.nextInt() remains on the same line, so sc.nextLine() returns
        // everything after the integer
        int num = sc.nextInt();
        String rest = sc.nextLine();
        System.out.println("Num: " + num + "\nRest: " + rest + " *");
        // Inputs:
        // 2 Hello
        // 2Hello
        // 2

        // Outputs:
        // Num: 2
        // Rest: hello * // * Note the extra space

        // Error - need a space after an int

        // Num: 2
        // Rest: * // * An empty string

        // ! When enterring a double, a comma must be used not a point
        double next = sc.nextDouble();
        System.out.println(next);

        // Input:
        // 2.3
        // 2,3

        // Output:
        // Error
        // 2.3

        // ! Using scanner.next() stores the next word
        String word1 = sc.next();
        String word2 = sc.next();
        String restOf = sc.nextLine();

        System.out.println("1: " + word1 + " 2: " + word2 + " REST: " + restOf);

        // Input:
        // hello world yes

        // Output:
        // 1: hello 2: world REST: yes [Note that space]

        // Reading a text file
        try {
            Scanner read = new Scanner(new File("filepath"));
            read.nextLine();
        } catch (Exception e) {

        }

        // * Using a Delimeter
        sc.useDelimiter("##"); // Changes the delimeter
        String course = sc.next();
        String year = sc.next();
        System.out.println("C: " + course + " Y: " + year);

        // Input:
        // CSC1016S##2022## (last ## represents the end)
        // Without the ##, it does not store the year until the next ## is enterred
        // (adding potential new line characters to year)

        // Output:
        // C: CSC1016 Y: 2022

        sc.close();
    }
}
