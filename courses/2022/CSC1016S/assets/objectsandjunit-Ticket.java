// A Ticket class to used create Ticket objects
// Alexander Cristaudo
// CRSALE010
// 15 August 2022

public class Ticket {
    // Attributes
    String id;
    Time issueTime;

    // The parameterised constructor to store the values for the attributes
    public Ticket(Time currentTime, String ID) {
        id = ID;
        issueTime = currentTime;
    }

    // A method to return the ID
    public String ID() {
        return id;
    }

    // Gets the age of a ticket as a Duration object
    public Duration age(Time currentTime) {
        return currentTime.subtract(issueTime);
    }

    // The toString to output the ticket format
    public String toString() {
        return "Ticket[id=" + id + ", time=" + issueTime + "]";
    }
}
