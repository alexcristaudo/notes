// CSC1016S assignment 01
// Exercise 2
// Alexander Cristaudo
// CRSALE010
// 28 July 2022

import java.util.Scanner;

public class CalculateDuration {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        // Inputs from the user
        System.out.println("Enter time A:");
        String aText = in.nextLine();
        System.out.println("Enter time B:");
        String bText = in.nextLine();

        // Creating the Time objects from the input
        Time aTime = new Time(aText);
        Time bTime = new Time(bText);

        // Converting the Time objects into Duration objects
        Duration a = aTime.asDuration();
        Duration b = bTime.asDuration();

        // Getting the difference between the start and end time
        Duration length = (b.subtract(a));

        // Getting the difference in minutes
        int finalLength = (int) length.intValue("minute");

        System.out.println("The time " + bTime + " occurs " + finalLength + " minutes after the time " + aTime + ".");
        in.close();
    }
}
