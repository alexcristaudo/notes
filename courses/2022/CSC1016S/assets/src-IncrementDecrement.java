public class IncrementDecrement {
    public static void main(String[] args) {
        int j = 0;
        int i = ++j + j * 5;
        // i = 6, j is increased then used
        // NOTE that this goes left to right (not order of operations)
        j = 0;
        i = j * 5 + ++j;
        // 1

        j = 0;
        i = j++ + j * 5;
        // i=5

        i = 3;
        int a = i++; // a = 3, i = 4
        int b = ++a; // b = 4, a = 4
    }
}
