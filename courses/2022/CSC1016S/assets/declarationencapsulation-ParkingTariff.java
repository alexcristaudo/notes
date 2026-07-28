// A ParkingTariff class to store the Money and Duration for a given Tariff
// Alexander Cristaudo
// CRSALE010
// 27 August 2022

public class ParkingTariff {

    // A Money and TimePeriod object associated with each Tariff
    private TimePeriod time;
    private Money money;

    // Parameterised Constructor
    public ParkingTariff(TimePeriod time, Money money) {
        this.time = time;
        this.money = money;
    }

    // Get methods for the Money and the TimePeriod
    public Money getMoney() {
        return money;
    }

    public TimePeriod getTime() {
        return time;
    }

    // Checks if a Duration is between the TimePeriod instance variable
    public boolean isBetween(Duration lengthOfStay) {
        return time.includes(lengthOfStay);
    }

    // The standard format for each tariff
    public String toString() {
        return time + " : " + money + "\n";
    }

}
