import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;
import java.io.FileReader;
import java.io.FileNotFoundException;

public class BucketList {
    public static void main(String[] args) {
        System.out.println("Enter the name of the categories file:");
        Scanner in = new Scanner(System.in);
        String filename = in.nextLine();

        try (Scanner read = new Scanner(new FileReader(filename))) {
            ArrayList<String> added = new ArrayList<String>();
            HashMap<String, ArrayList<String>> map = new HashMap<String, ArrayList<String>>();
            map.put("", new ArrayList<String>());
            while (read.hasNextLine()) {
                String add = read.nextLine();
                added.add(add);
                map.put(add, new ArrayList<String>());
            }
            System.out.println("Enter a comma-separated list of words:");
            String[] words = in.nextLine().split(",");
            for (String word : words) {
                if (word.startsWith(" ")) {
                    word = word.substring(1);
                }
                String longest = "";
                for (String add : added) {
                    if (word.startsWith(add) && add.length() > longest.length()) {
                        longest = add;
                    }
                }
                map.get(longest).add(word);
            }

            System.out.println("Categorised:");
            String print = "";
            for (String s : added) {
                if (!s.equals("") && map.get(s).size() != 0) {
                    print = s + ": ";
                    for (String paired : map.get(s)) {
                        print += paired + ", ";
                    }
                    print = print.substring(0, print.length() - 2) + ".";
                    System.out.println(print);
                } else if (map.get(s).size() == 0) {
                    System.out.println(s + ":");
                }
            }
            if (map.get("").size() != 0) {
                System.out.println("Uncategorised:");
                print = "";
                for (String paired : map.get("")) {
                    print += paired + ", ";
                }
                print = print.substring(0, print.length() - 2) + ".";
                System.out.println(print);
            }
            System.out.println("Done");

        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }
        in.close();
    }
}
