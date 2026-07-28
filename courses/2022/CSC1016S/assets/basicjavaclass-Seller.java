// A Seller class used to create Seller objects
// Alexander Cristaudo
// CRSALE010
// 08 August 2022

public class Seller {

    // Attributes
    public String id;
    public String name;
    public String location;
    public String product;
    public double unitPrice;
    public int numberUnits;

    // Parameterised constructor to store values in the attributes
    public Seller(String id, String name, String location, String product, double unitPrice, int numberUnits) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.product = product;
        this.unitPrice = unitPrice;
        this.numberUnits = numberUnits;
    }

    public String toString() {
        // This formatter rounds the price to 2 decimal places
        String unit = String.format("%.2f", unitPrice);

        // Replaces the comma in the price with a fullstop
        unit = unit.replace(",", ".");

        // The object representation that is needed
        return "ID of the seller: " + id + "\nName of the seller: " + name + "\nLocation of the seller: " + location +
                "\nThe product to sell: " + product + "\nProduct unit price: R" + unit
                + "\nThe number of available units: " + numberUnits;

    }
}
