// A class for a Box which is a subclass of Computer
// Alexander Cristaudo
// CRSALE010
// 17 October 2022

public class Box extends Computer {
    // A box has memory along with the attributes in the Computer class
    int memory;

    // Parameterised constructor
    public Box(String serialNumber, String manufacturer, String colour, int memory) {
        // Calling the Computer constructor
        super(serialNumber, manufacturer, colour);
        // Initialize the memory
        this.memory = memory;
    }

    // toString format for a box
    public String toString() {
        return super.toString() + ", " + memory;
    }
}
