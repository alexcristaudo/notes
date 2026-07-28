// A driver class that stores Boxes, Screens and Accessories and performs operations on them
// Alexander Cristaudo
// CRSALE010
// 17 October 2022

import java.util.Scanner;
import java.util.ArrayList;

public class Question1 {
    public static void main(String[] args) {
        // To get user input
        Scanner in = new Scanner(System.in);

        // Polymorphism to store all subclasses in one ArrayList
        ArrayList<Computer> all = new ArrayList<Computer>();
        String choice = ""; // Initialisation

        System.out.println("Welcome to Great International Technology");

        while (!choice.equals("Q")) {
            // Prompt to the user
            System.out.println("MENU: add (B)ox, add (S)creen, add (A)ccessories, (D)elete, (L)ist, (Q)uit");
            choice = in.nextLine();
            choice = choice.toUpperCase();

            // Initialisation to be able to use in the if statements and switch case
            String serial = "";
            String manufacturer = "";
            String colour = "";

            // If we are adding a box, screen, accessory or removing something we get the
            // serial number
            if ("BSAD".contains(choice)) {
                System.out.println("Enter the serial number");
                serial = in.nextLine();
            }
            // Adding an object needs the rest of the data
            if ("BSA".contains(choice)) {
                System.out.println("Enter the manufacturer");
                manufacturer = in.nextLine();
                System.out.println("Enter the colour");
                colour = in.nextLine();
            }
            boolean remove = true; // Indicates whether or not something was removed or not
                                   // Initialised as true so that we can change to false if nothing is removed. If
                                   // another choice is made, it is true and done will be printed

            switch (choice) {
                case "B":
                    // Need memory for a box
                    System.out.println("Enter the amount of memory (MB)");
                    int memory = in.nextInt();
                    in.nextLine(); // Getting rid of new line character
                    // Adding a Box object
                    all.add(new Box(serial, manufacturer, colour, memory));
                    break;
                case "S":
                    // Need screen size for a screen
                    System.out.println("Enter the screen size in inches");
                    int inches = in.nextInt();
                    in.nextLine(); // Getting rid of new line character
                    // Adding a Screen object
                    all.add(new Screen(serial, manufacturer, colour, inches));
                    break;
                case "A":
                    // An accessory needs no more information. We add an Accessory object
                    all.add(new Accessory(serial, manufacturer, colour));
                    break;
                case "D":
                    // Changes the boolean variable to true if found otherwise false
                    remove = Accessory.delete(all, serial);
                    if (!remove)
                        System.out.println("Not found"); // States it was not found
                    break;
                case "L":
                    // Listing all the objects
                    for (Computer a : all) {
                        // If the object is an Accessory, we need to put "Accessories: " instead of
                        // using the class name
                        if (a.getClass() == Accessory.class) {
                            System.out.println("Accessories: " + a);
                        } else {
                            // String.valueOf(a.getClass()) returns a string version of "class Box". the
                            // substring removes the "class " and leaves just the Box
                            System.out.println(String.valueOf(a.getClass()).substring(6) + ": " + a);
                        }
                    }
                    break;
            }
            // Printing done if an object was removed / the remove operation was not done
            if (!choice.equals("Q") && remove)
                System.out.println("Done");
        }
        in.close();
    }
}
