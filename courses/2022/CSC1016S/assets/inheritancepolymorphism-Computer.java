// A base class for the Accessory, Screen and Box
// Alexander Cristaudo
// CRSALE010
// 17 October 2022

public class Computer {

    // Instance variables common to all 3 classes
    String serialNumber;
    String manufacturer;
    String colour;

    // Parameterised constructor
    public Computer(String serialNumber, String manufacturer, String colour) {
        this.serialNumber = serialNumber;
        this.manufacturer = manufacturer;
        this.colour = colour;
    }

    // toString format needed for the base classes
    public String toString() {
        return serialNumber + ", " + manufacturer + ", " + colour;
    }
}
