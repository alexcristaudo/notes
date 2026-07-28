// A simulator class to simulate cars arriving and taking tickets, and leaving calculating time between arrival and departure
// Alexander Cristaudo
// CRSALE010
// 15 August 2022

import java.util.Scanner;

/**
 * The CarParkSim class contains the main car park simulation method.
 * It creates and manipulates the main objects, and handles user I/O.
 *
 * @author Stephan Jamieson and ...
 * @version 14/7/2019
 */
public class CarParkSim {

    public static void main(final String[] args) {
        final Scanner keyboard = new Scanner(System.in);
        // YOUR CODE HERE.
        // Declare variables to store a Clock and a Register object, create the relevant
        // objects and assign them.
        // New Clock and Register object
        Clock c = new Clock(new Time("00:00"));
        Register r = new Register();

        System.out.println("Car Park Simulator");
        // YOUR CODE HERE.
        // Print current time.
        System.out.println("The current time is " + c.examine() + ".");
        System.out.println("Commands: advance {minutes}, arrive, depart, quit.");
        System.out.print(">");
        String input = keyboard.next().toLowerCase();
        while (!input.equals("quit")) {
            if (input.equals("advance")) {
                // YOUR CODE HERE.
                // Advance the clock, print the current time.
                int time = keyboard.nextInt();
                keyboard.nextLine(); // Gets rid of the new line character
                c.advance(new Duration("minute", time)); // Advances the time
                System.out.println("The current time is " + c.examine() + "."); // Prints out the clock
            } else if (input.equals("arrive")) {
                // YOUR CODE HERE.
                // Create a new ticket, add it to the register, print details of ticket issued.
                String id = UIDGenerator.makeUID(); // Generates a unique ID
                // Gets the Time and creates a Ticket objects for the current time
                Time curTime = c.examine();
                Ticket ticket = new Ticket(curTime, id);
                r.add(ticket);
                System.out.println("Ticket issued: " + ticket + ".");
            } else if (input.equals("depart")) {
                // YOUR CODE HERE.
                // Determine if ticket is valid, i.e. in the register.
                // If not, print error message.
                // If yes, retreive it, calculate duration of stay and print it.
                String id = keyboard.next();
                keyboard.nextLine(); // Getting rid of the \n character
                if (r.contains(id)) { // Checks if the ticket is in the register
                    Ticket t = r.retrieve(id); // Getting the Ticket from the register
                    System.out.println("Ticket details: " + t + ".");
                    Time curTime = c.examine(); // Getting the current time
                    System.out.println("Current time: " + curTime + ".");
                    // Calculating how long the stay was (in minutes)
                    Duration stay = t.age(curTime);
                    System.out.println("Duration of stay: " + stay.format(stay, "minute") + ".");
                } else {
                    System.out.println("Invalid ticket ID.");
                }
            } else {
                System.out.println("That command is not recognised.");
                System.out.println("Commands: advance <minutes>, arrive, depart, quit.");
            }
            System.out.print(">");
            input = keyboard.next().toLowerCase();
        }
        System.out.println("Goodbye.");
        keyboard.close();
    }

}

/*
 * 
 * advance 360
 * arrive
 * advance 1
 * arrive
 * advance 2
 * arrive
 * depart 80000002
 * arrive
 * depart 80909993
 * depart 80000001
 * advance 89
 * depart 80000004
 * quit
 */