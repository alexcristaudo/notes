// A class to represent a game of Cows and Bulls
// CRSALE010
// Alexander Cristaudo
// 20 September 2022

public class CowsAndBulls {
    public final static int NUM_DIGITS = 4;
    public final static int MAX_VALUE = 9876;
    public final static int MIN_VALUE = 1234;
    public final static int MAX_GUESSES = 10;

    // num is the number to guess
    private int num;

    // guess is how many guesses have been made
    private int guess;

    // This stores the previous guess to check if the game is over or not
    private int prevGuess;

    // Creating a game based on a seed
    public CowsAndBulls(int seed) {
        // Creating a number picker from the seed
        NumberPicker pick = new NumberPicker(seed, 1, 9);
        int res = 0;
        // 0 guesses initially
        guess = 0;
        // Creating a number of the right length by multiplying by 10 (to allow for
        // another digit) then picking another random number
        while (String.valueOf(res).length() != NUM_DIGITS) {
            res *= 10;
            res += pick.nextInt();
        }
        num = res;
    }

    // A method to return how many guesses we have left
    public int guessesRemaining() {
        return MAX_GUESSES - guess;
    }

    // Return a Result object based on the guess made by the user
    public Result guess(int guessNumber) {
        // Using the NumberUtil methods to get how many cows and bulls
        int bulls = NumberUtils.countMatches(guessNumber, num);
        int cows = NumberUtils.countIntersect(guessNumber, num) - bulls; // We subtract bulls because they are not cows
                                                                         // but are counted by countIntersect

        // Store the previous guess
        prevGuess = guessNumber;

        // Increment the guess counter
        guess++;
        // Creating the new Result object from how many cows and bulls there are
        return new Result(cows, bulls);
    }

    // A method to giveUp - by setting the number of guesses made to the max guesses
    public int giveUp() {
        this.guess = MAX_GUESSES;
        return num;
    }

    // A method to check if the game is over or not
    // The game is won if the user has guessed the password
    // It is also over if all the guesses are used or it is not if there are some
    // guesses left
    public boolean gameOver() {
        boolean correct = guess(prevGuess).isCorrect();
        return correct ? true : guess >= MAX_GUESSES; // This is equivalent to if
        // (correct) return true; else return guesses == MAX_GUESSES
    }
}
