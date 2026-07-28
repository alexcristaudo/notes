// A simulator class to simulate cars arriving and taking tickets, and leaving calculating time between arrival and departure
// Alexander Cristaudo
// CRSALE010
// 27 August 2022

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

        // New Clock, Register and TariffTable objects
        Clock c = new Clock(new Time("00:00"));
        Register r = new Register();
        TariffTable table = new TariffTable(10);

        // Populates the tariff table with the default tariffs
        populateTariff(table);

        System.out.println("Car Park Simulator");

        // Print current time.
        System.out.println("The current time is " + c.examine() + ".");
        System.out.println("Commands: tariffs, advance {minutes}, arrive, depart, quit.");
        System.out.print(">");
        String input = keyboard.next().toLowerCase();
        while (!input.equals("quit")) {
            if (input.equals("advance")) {

                // Advancing the clock, print the current time.
                int time = keyboard.nextInt();
                keyboard.nextLine(); // Gets rid of the new line character
                c.advance(new Duration("minute", time)); // Advances the time
                System.out.println("The current time is " + c.examine() + "."); // Prints out the clock
            } else if (input.equals("arrive")) {

                // Gets the Time and creates a Ticket objects for the current time
                Time curTime = c.examine();
                Ticket ticket = new Ticket(curTime);

                // Adding the ticket to the register
                r.add(ticket);
                System.out.println("Ticket issued: " + ticket + ".");
            } else if (input.equals("depart")) {

                // Gets the id of the ticket
                String id = keyboard.next();
                keyboard.nextLine(); // Getting rid of the \n character
                // Checks if it is a valid id
                if (r.contains(id)) { // Checks if the ticket is in the register
                    Ticket t = r.retrieve(id); // Getting the Ticket from the register
                    System.out.println("Ticket details: " + t + ".");
                    Time curTime = c.examine(); // Getting the current time
                    System.out.println("Current time: " + curTime + ".");
                    // Calculating how long the stay was (in minutes)
                    Duration stay = t.age(curTime);
                    System.out.println("Duration of stay: " + stay.format(stay, "minute") + ".");

                    Money cost = table.getTariff(stay); // Getting the cost of the stay
                    System.out.println("Cost of stay : " + cost + ".");
                } else {
                    // Printing an error if the ID is not valid
                    System.out.println("Invalid ticket ID.");
                }
            } else if (input.equals("tariffs")) {
                // Print the tariff table.
                System.out.println(table);
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

    // This method adds the default tariffs to the TariffTable
    public static void populateTariff(TariffTable table) {

        // Creates a Currency object
        Currency rand = new Currency("R", "ZAR", 100);

        // Instantiates a lower and upper bound Duration objects
        Duration lower = null;
        Duration upper = null;

        // Adds each Tariff into the Tariff Table

        lower = new Duration("minute", 0);
        upper = new Duration("minute", 30);
        table.addTariff(new TimePeriod(lower, upper), new Money("R10.00", rand));

        lower = new Duration("minute", 30);
        upper = new Duration("minute", 60);
        table.addTariff(new TimePeriod(lower, upper), new Money("R15.00", rand));

        lower = new Duration("minute", 60);
        upper = new Duration("minute", 180);
        table.addTariff(new TimePeriod(lower, upper), new Money("R20.00", rand));

        lower = new Duration("minute", 180);
        upper = new Duration("minute", 240);
        table.addTariff(new TimePeriod(lower, upper), new Money("R30.00", rand));

        lower = new Duration("minute", 240);
        upper = new Duration("minute", 300);
        table.addTariff(new TimePeriod(lower, upper), new Money("R40.00", rand));

        lower = new Duration("minute", 300);
        upper = new Duration("minute", 360);
        table.addTariff(new TimePeriod(lower, upper), new Money("R50.00", rand));

        lower = new Duration("minute", 360);
        upper = new Duration("minute", 480);
        table.addTariff(new TimePeriod(lower, upper), new Money("R60.00", rand));

        lower = new Duration("minute", 480);
        upper = new Duration("minute", 600);
        table.addTariff(new TimePeriod(lower, upper), new Money("R70.00", rand));

        lower = new Duration("minute", 600);
        upper = new Duration("minute", 720);
        table.addTariff(new TimePeriod(lower, upper), new Money("R90.00", rand));

        lower = new Duration("minute", 720);
        upper = new Duration("minute", 1440);
        table.addTariff(new TimePeriod(lower, upper), new Money("R100.00", rand));
    }

}
