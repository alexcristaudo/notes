public class OtherNotes {

    // Constants naming convention is all upper case
    private static double PI = 3.14;

    public static void main(String[] args) {
        String[] arr = { "Hello", "World", "for" };
        for (String i : arr) { // for i in arr java equivalent
            System.out.println(i);
        }

        System.out.println(PI);
        // Checking if a word is is an int, dont need to store the conversion in int
        String word = "";
        while (true) {
            try {
                Integer.parseInt(word); // dont need assignment
                break;
            } catch (NumberFormatException e) {
                continue;
            }
        }
    }
}
