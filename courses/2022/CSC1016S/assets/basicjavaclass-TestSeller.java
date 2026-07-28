// A program to create Seller objects and print the data from them
// Alexander Cristaudo
// CRSALE010
// 08 August 2022

import java.util.Scanner;

public class TestSeller {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Please enter the details of the seller.");

        // All the inputs from the user
        System.out.print("ID: ");
        String id = in.nextLine();

        System.out.print("Name: ");
        String name = in.nextLine();

        System.out.print("Location: ");
        String location = in.nextLine();

        System.out.print("Product: ");
        String product = in.nextLine();

        System.out.print("Price: ");
        String tempPrice = in.nextLine();
        // Removes the R from the price
        double price = Double.parseDouble(tempPrice.substring(1));

        System.out.print("Units: ");
        int units = in.nextInt();

        // Creates the Seller object and uses the toString method
        Seller person = new Seller(id, name, location, product, price, units);
        System.out.println("The seller has been successfully created:");
        System.out.println(person);
        in.close();
    }
}
