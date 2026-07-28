// CSC1016S assignment 01
// Exercise 1
// Alexander Cristaudo
// CRSALE010
// 28 July 2022

// A java program for metric conversion.

public class Conversion {
   // Function definitions
   public Conversion() {

   }

   public double feet2Metres(double feet) {
      double metres;

      // Your code here
      metres = feet / 3.2808;
      return metres;
   }

   public double inches2Cm(double inch) {
      double centimetre;

      // Your Code here
      centimetre = inch / 0.39370;
      return centimetre;
   }

   public double feet2Inches(double feet) {
      double inches;

      // Your Code here
      inches = feet * 12.000;
      return inches;
   }

   public double kilometres2Miles(double kilometres) {
      double miles;

      // Your code here
      miles = kilometres * 0.6214;
      return miles;
   }

}