// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class HelloWorld {

    public static void main(String[] args) {
        int[][] arr = new int[5][];

        for (int j = 0; j < 5; j++) {
            arr[j] = new int[j];
            for (int i = 0; i < j; i++) {
                arr[j][i] = i;
            }
        }

        System.out.println("++");
        for (int i = 0; i < arr.length; i++) {
            System.out.print("|");
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(" " + arr[i][j] + " ");
            }
            System.out.println("|");
        }
        System.out.println("+---------------+");
    }
}
