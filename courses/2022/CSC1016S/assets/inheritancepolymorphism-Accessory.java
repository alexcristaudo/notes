// A class representing an Accessory as a child to Computer
// Alexander Cristaudo
// CRSALE010
// 17 October 2022

import java.util.ArrayList;

public class Accessory extends Computer {
    // Note there are no added instance variables needed

    // Parameterised constructor
    public Accessory(String serialNumber, String manufacturer, String colour) {
        // Calling Computer constructor
        super(serialNumber, manufacturer, colour);
    }

    // A static method to delete an element from an ArrayList if they have the same
    // serial number. Doing this in this class means get methods are not needed
    public static boolean delete(ArrayList<Computer> arr, String serial) {
        // Looping through the array
        for (Computer a : arr) {
            if (a.serialNumber.equals(serial)) {
                // Removing the element
                arr.remove(a);
                // We return true to indicate an element has been deleted
                return true;
            }
        }
        return false; // False if no element has been deleted
    }

    // Same format as the Computer class
    public String toString() {
        return super.toString();
    }
}
