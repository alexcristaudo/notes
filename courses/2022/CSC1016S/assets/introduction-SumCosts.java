// CSC1016S assignment 01
// Exercise 3
// Alexander Cristaudo
// CRSALE010
// 28 July 2022

import java.util.Scanner;

public class SumCosts {
    public static void main(String[] args) {
        // Creating a new Currency object for the rand
        Currency rand = new Currency("R", "ZAR", 100);
        Scanner sc = new Scanner(System.in);

        // Instantiating a total Money object
        Money total = new Money("R0.00", rand);

        System.out.println("Enter an amount or '[D]one' to quit:");
        String response = sc.nextLine();
        while (!response.equals("Done") && !response.equals("D")) {
            // Adding the user input into the total Money object
            total = total.add(new Money(response, rand));

            // Getting further input
            System.out.println("Enter an amount or '[D]one' to print the sum and quit:");
            response = sc.nextLine();
        }
        // Outputting the total
        System.out.println("Total: " + total);
        sc.close();
    }
}
