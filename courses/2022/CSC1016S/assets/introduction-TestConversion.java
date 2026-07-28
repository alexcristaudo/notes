// CSC1016S assignment 01
// Exercise 1
// Lebeko Poulo
// PLXLEB003
// 2021-08-07

// A test program for metric conversion.

import java.util.*;

public class TestConversion{
   // Function definitions
   public TestConversion()
   {
   
   }
 
   public static void main(String[] args)
   {
      Conversion metric = new Conversion();
            
      double feet2m, inches, feet2inch, kilometres;
      int choice;
      
      Scanner keyboard = new Scanner(System.in);
      
      System.out.println("------ Metric Conversion -------");
      System.out.println("Enter 1 for Feet to Metres.");
      System.out.println("Enter 2 for Inches to Centimetres.");
      System.out.println("Enter 3 for Feet to Inches.");
      System.out.println("Enter 4 for Kilometres to Miles.");
      
      choice = keyboard.nextInt();
      
      switch(choice)
      {
         case 1:
            System.out.println("Enter the value in Feet:");
            feet2m = keyboard.nextDouble();
            System.out.printf(feet2m + "ft = " + "%.3f" + "m", metric.feet2Metres(feet2m));
            break;
         
         case 2:
            System.out.println("Enter the value in Inches:");
            inches = keyboard.nextDouble();
            System.out.printf(inches + "in = " + "%.3f" + "cm", metric.inches2Cm(inches));
            break;

         case 3:
            System.out.println("Enter the value in Feet:");
            feet2inch = keyboard.nextDouble();
            System.out.printf(feet2inch + "ft = " + "%.3f" + "in", metric.feet2Inches(feet2inch));
            break;
            
         case 4:
            System.out.println("Enter the value in Kilometres:");
            kilometres = keyboard.nextDouble();
            System.out.printf(kilometres + "km = " + "%.3f" + "miles", metric.kilometres2Miles(kilometres));
            break;
         
         default:
            System.out.println("You did not enter any of the given choices.");
      }
      keyboard.close();
      
   }
}