// A Vehicle class acting as a base class. 
// CRSALE010
// Alexander Cristaudo
// 28 September 2022

public class Vehicle {
    // Instance variables
    int cylinders;
    String manufacturer;
    Student owner;

    // Parameterised constructor
    public Vehicle(int numCylinders, String maker, Student owner) {
        this.cylinders = numCylinders;
        this.manufacturer = maker;
        this.owner = owner;
    }

    // Copy constructor
    public Vehicle(Vehicle v) {
        this(v.cylinders, v.manufacturer, v.owner);
    }

    // Standard format for a Vehicle
    public String toString() {
        return manufacturer + ", " + cylinders + " cylinders, owned by " + owner;
    }
}
