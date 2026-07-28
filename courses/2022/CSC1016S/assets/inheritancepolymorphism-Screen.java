// A class representing a Screen (as a subclass of Computer)
// Alexander Cristaudo
// CRSALE010
// 17 October 2022

public class Screen extends Computer {
    // The screen has a size along with the instance of the Computer class
    int size;

    // Parameterised constructor
    public Screen(String serialNumber, String manufacturer, String colour, int size) {
        // Calling the Computer constructor
        super(serialNumber, manufacturer, colour);
        // Initialising the size
        this.size = size;
    }

    // toString format for a screen. Note we cannot use super.toString() as this
    // requires the colour before manufacturer
    public String toString() {
        return serialNumber + ", " + colour + ", " + manufacturer + ", " + size;
    }
}
