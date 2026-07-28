public class Test {
    public static void main(String[] args) {
        CowsAndBulls c = new CowsAndBulls(3);
        System.out.println(c.guessesRemaining());
        System.out.println(c.gameOver());
        c.giveUp();
        System.out.println(c.gameOver());

    }
}
