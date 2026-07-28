// A Car class inheriting from the Vehicle class
// CRSALE010
// Alexander Cristaudo
// 28 September 2022

public class Car extends Vehicle {
    // Instance variables for a Car
    private int capacity;
    private double weight;

    // Parameterised constructor
    public Car(int numCylinders, String maker, Student owner, int passengers, double weight) {
        // Calling the Vehicle constructor
        super(numCylinders, maker, owner);

        // Setting the values to the instance variable
        this.capacity = passengers;
        this.weight = weight;
    }

    // Copy constructor
    public Car(Car c) {
        this(c.cylinders, c.manufacturer, c.owner, c.capacity, c.weight);
    }

    // The formatting for a Car
    @Override
    public String toString() {
        return manufacturer + ", " + cylinders + " cylinders, owned by " + owner.getName() + ", a " + owner.getAge()
                + "-year old " + owner.getGender() + " studying " + owner.getProgramOfStudy() + " at "
                + owner.getNameOfInstitution() + ". " + owner.getName() + " likes " + owner.getHobbies() + "."
                + "\nThe car is a " + capacity + "-seater weighing " + weight + " kg";
    }
}
