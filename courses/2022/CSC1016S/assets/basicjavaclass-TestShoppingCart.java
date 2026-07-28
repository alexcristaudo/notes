// A program to add items to a shopping cart and display them
// Alexander Cristaudo
// CRSALE010
// 08 August 2022

import java.util.Scanner;

public class TestShoppingCart {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("How many items would you like to add to your Shopping Cart?:");
        int items = in.nextInt();

        // Creating a new ShoppingCart object
        ShoppingCart cart = new ShoppingCart();

        // Getting rid of the newline after the items integer input
        in.nextLine();
        if (items == 0)
            System.out.println("Your Shopping Cart is empty.");
        else {
            // Loops through all the items
            while (items > 0) {
                System.out.println("Enter the Product Name:");
                String name = in.nextLine();
                System.out.println("Enter the Quantity:");
                int amount = in.nextInt();

                // New line character discarded
                in.nextLine();

                System.out.println("Enter the Unit Cost:");
                // Converts String input into a double
                double unit = Double.parseDouble(in.nextLine());

                // Creates the item object from the inputs and adds it to the cart
                Item add = new Item(name, amount, unit);
                cart.addItems(add);
                items--;
            }
            System.out.println("The Shopping Cart has the following items:");
            // Using the queryCart() method to print the items
            cart.queryCart();
            System.out.println("--- Shopping Cart with all items ---");
            // Applies the discount
            cart.getDiscount("WELCOME20");
            // Prints the final invoice
            cart.printInvoice();
        }
        in.close();
    }
}
