import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

public class Order {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the name of the word lists text file:");
        String file = in.nextLine();
        in.close();
        try {
            Scanner read = new Scanner(new FileReader(file));
            while (read.hasNextLine()) {
                String search = read.nextLine();
                longestSubsequence(search);
            }
            System.out.println("Done");
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void longestSubsequence(String search) {
        int max = 0;
        int count = 0;
        int index = 0;
        for (String word : search.split(" ")) {
            int subsequence = currentSubsequence(search, word, index);
            if (subsequence == max) {
                count++;
            }
            if (subsequence > max) {
                max = subsequence;
                count = 1;
            }
            index += word.length() + 1;

        }
        if (count == 1) {
            System.out.println("Longest is " + max + ".");
        } else {
            System.out.println("Multiple solutions length " + max + ".");
        }
    }

    public static int currentSubsequence(String search, String pos, int index) {
        String rest = search.substring(index);
        int length = 0;
        for (String s : rest.split(" ")) {
            if (pos.compareTo(s) <= 0) {
                length++;
                pos = s;
            } else {
                return length;
            }
        }
        return length;
    }
}
