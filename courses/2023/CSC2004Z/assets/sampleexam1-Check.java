import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Check {
    static class Card {
        String shape;
        String colour;
        String pattern;

        public Card(String shape, String colour, String pattern) {
            this.shape = shape;
            this.colour = colour;
            this.pattern = pattern;
        }

        public boolean same(Card comp) {
            return this.shape.equals(comp.shape) && this.colour.equals(comp.colour)
                    && this.pattern.equals(comp.pattern);
        }

        public boolean distinct(Card comp) {
            return !this.shape.equals(comp.shape) && !this.colour.equals(comp.colour)
                    && !this.pattern.equals(comp.pattern);
        }

    }

    public static void main(String[] args) {
        System.out.println("Enter the name of the cards file:");
        Scanner in = new Scanner(System.in);
        String fileName = in.nextLine();

        try {
            Scanner read = new Scanner(new File(fileName));
            while (read.hasNextLine()) {
                String line = read.nextLine();
                System.out.println("Processing: " + line);
                System.out.println(validateLine(line) ? "Valid" : "Invalid");
            }
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }
        System.out.println("Done");
    }

    public static boolean validateLine(String line) {
        String[] cardsString = line.split(" ");
        Card[] cards = new Card[3];
        int i = 0;
        for (String card : cardsString) {
            String[] parts = card.split(",");
            cards[i] = new Card(parts[0], parts[1], parts[2]);
            i++;
        }
        return valid(cards);
    }

    public static boolean valid(Card[] cards) {
        boolean conditionOne = cards[0].distinct(cards[1]) && cards[1].distinct(cards[2])
                && cards[2].distinct(cards[0]);
        boolean conditionTwo = cards[0].same(cards[1]) && cards[1].same(cards[2]);
        return conditionOne || conditionTwo;
    }
}
