public class StringClass {
    public static void main(String[] args) {
        System.out.println("Hello".equalsIgnoreCase("hElLo"));
        System.out.println("ABC".compareTo("BCD"));
        // If the first string is lexicographically greater than the second string, it
        // returns a positive number (difference of character value). If the first
        // string is less than the second string lexicographically, it returns a
        // negative number, and if the first string is lexicographically equal to the
        // second string, it returns 0.
        System.out.println("ABC".compareToIgnoreCase("abc"));
        // Note that this uses unicode numbers, so ignore case ignores cases
        System.out.println("ABC".compareTo("abc"));
        // This is not the same. The difference returned is the unicode difference

        // * CARRIAGE RETURN
        System.out.println("Hello" + "\r" + "Word");
        // This goes to the beginning of the current line and any text
        // overrides the old text outputted

    }

}
