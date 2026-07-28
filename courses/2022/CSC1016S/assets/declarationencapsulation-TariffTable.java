// A TariffTable class to store multiple Tariffs in one object
// Alexander Cristaudo
// CRSALE010
// 27 August 2022

public class TariffTable {

    // A ParkingTariff array for all the Tariffs
    ParkingTariff[] allTariff;

    // Instantiates the TariffTable with some size max size
    public TariffTable(int maxSize) {
        allTariff = new ParkingTariff[maxSize];
    }

    // A method that adds a ParkingTariff for a TimePeriod and Money
    public void addTariff(TimePeriod period, Money tariff) {
        // This loops until we get to the next available index in the array
        int i = 0;
        while (allTariff[i] != null) {
            i++;
        }
        // Creating a ParkingTariff from the parameters
        ParkingTariff temp = new ParkingTariff(period, tariff);

        // Throwing an exception if the tariff before does not precede the next tariff
        // to be added and also checks if they are adjacent
        if (i != 0 && !(allTariff[i - 1].getTime().adjacent(temp.getTime())
                && allTariff[i - 1].getTime().precedes(temp.getTime()))) {
            throw new IllegalArgumentException("Tariff periods must be adjacent.");
        }

        // Adding the tariff to the array
        allTariff[i] = new ParkingTariff(period, tariff);
    }

    // Getting the Money for a given Duration
    public Money getTariff(Duration lengthOfStay) {
        for (ParkingTariff t : allTariff) {
            // Checks if the ParkingTariff in the array is between the duration
            if (t.isBetween(lengthOfStay)) {
                return t.getMoney();
            }
        }
        // Returns null if there is no Duration
        return null;
    }

    // A toString for the format of a TariffTable
    public String toString() {
        String s = "";
        for (ParkingTariff t : allTariff) {
            if (t == null)
                break;
            s += t;
        }
        // Removing the final toString character
        return s.length() > 0 ? s.substring(0, s.length() - 1) : s;
    }

}
