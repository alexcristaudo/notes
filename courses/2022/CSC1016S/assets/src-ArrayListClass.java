import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class ArrayListClass {
    public static void main(String[] args) {

        ArrayList<String> arr = new ArrayList<String>(Arrays.asList("123", "xyz"));

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a word: ");
        String word = sc.nextLine();
        while (!word.equals("D")) {
            arr.add(word);

            System.out.println("Enter a word: ");
            word = sc.nextLine();

        }
        System.out.println(arr);
        sc.close();

        // Can't use == with Strings - checks if their memory location is the same
        // Checks the reference of the string - checks if they are the same object
        // Can use on primitives? int, boolean, char

        // You get index using
        int idx = arr.indexOf("123");
        System.out.println(idx);

        // Removes element 123
        // arr.remove("123");
        arr.remove(0); // Can do either
        System.out.println(arr);

        // Get with
        System.out.println(arr.get(0));

        // Size of list
        int size = arr.size();
        System.out.println(size);

        ArrayList<Integer> i = new ArrayList<Integer>(Arrays.asList(1, 2, 3));
        i.remove(1); // Index > Value
        System.out.println(i);

        // But
        i.remove(Integer.valueOf(1));
        System.out.println(i);

    }
}
