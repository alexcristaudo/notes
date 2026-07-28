// This is a class that is used to create static methods to be used in the CowsAndBulls class
// CRSALE010
// Alexander Cristaudo
// 20 September 2022

public class NumberUtils {
    // Blank private constructor so no objects can be created
    private NumberUtils() {
    }

    // This method converts a number into an array with each digit an element of the
    // array
    public static int[] toArray(int number) {
        // Converting the integer into a string to use string methods
        String num = String.valueOf(number);
        int[] result = new int[num.length()];
        for (int i = 0; i < num.length(); i++) {
            // We implicitely convert num.charAt(i) into a string by ""+num.charAt(i),
            // because Integer.parseInt() requires a string
            result[i] = Integer.parseInt("" + num.charAt(i));
        }
        return result;
    }

    // This method checks how many bulls there are - that is - how many numbers are
    // equal in both arrays in the same index
    public static int countMatches(int numberA, int numberB) {
        // Converting the 2 numbers into arrays
        int[] a = toArray(numberA);
        int[] b = toArray(numberB);
        int count = 0;
        for (int i = 0; i < a.length; i++) {
            // Increment the counter if the element in a is the same as b
            if (a[i] == b[i]) {
                count++;
            }
        }
        return count;
    }

    // This checks how many cows there are - that is - how many numbers the arrays
    // share (regardless of their position)
    public static int countIntersect(int numberA, int numberB) {
        // Converting the 2 numbers into arrays
        int[] a = toArray(numberA);
        int[] b = toArray(numberB);
        int count = 0;
        // A for loop to check through a
        for (int i = 0; i < a.length; i++) {
            // A for loop to check through b
            for (int j = 0; j < b.length; j++) {
                // Checking if the numbers are the same
                if (a[i] == b[j]) {
                    count++;
                }
            }
        }
        return count;
    }

}
