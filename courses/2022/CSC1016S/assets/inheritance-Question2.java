// A driver class that creates a new Car from inputted data
// CRSALE010
// Alexander Cristaudo
// 28 September 2022

import java.util.Scanner;

public class Question2 {
    public static void main(String[] args) {
        // Data inputted by the user
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the vehicle manufacturer:");
        String manufacturer = in.nextLine();
        System.out.println("Enter the name of the vehicle owner:");
        String name = in.nextLine();
        System.out.println("Enter the owner's gender:");
        String gender = in.nextLine();
        System.out.println("Enter the owner's programme of study:");
        String program = in.nextLine();
        System.out.println("Enter the owner's Institution name:");
        String institution = in.nextLine();
        System.out.println("Enter the owner's hobbies:");
        String hobbies = in.nextLine();
        System.out.println("Enter the owner's age:");
        int age = in.nextInt();
        in.nextLine(); // Throw away the new line character
        System.out.println("Enter the number of cylinders in the engine:");
        int numCylinders = in.nextInt();
        in.nextLine(); // Throw away the new line character
        System.out.println("Enter the car seating capacity:");
        int capacity = in.nextInt();
        in.nextLine(); // Throw away the new line character
        System.out.println("Enter the weight of the car:");
        double weight = in.nextDouble();
        in.nextLine(); // Throw away the new line character

        // Creating a new Student from the data inputted
        Student owner = new Student(name, age, gender, institution, program, 2022, hobbies);

        // Using the toString from a created Car object from the data
        System.out.println(new Car(numCylinders, manufacturer, owner, capacity, weight));
        in.close();

    }
}
