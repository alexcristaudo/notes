// A Register class for adding tickets to a register object
// Alexander Cristaudo
// CRSALE010
// 15 August 2022

public class Register {

    // Attributes - a tickets array of Ticket objects
    private Ticket[] tickets;
    private int numTickets;

    // Creates a new Ticket object array with 100 spaces
    public Register() {
        tickets = new Ticket[100];
    }

    // Adds a ticket to the register
    public void add(Ticket ticket) {
        tickets[numTickets] = ticket;
        numTickets++; // Incrementing the counter accesses the next index next time around
    }

    // Checks if a ticket is in the register
    public boolean contains(String ticketID) {
        for (int i = 0; i < numTickets; i++) {
            if (tickets[i].ID().equals(ticketID)) {
                return true;
            }
        }
        return false; // returns false if not in the register (otherwise true is returned)
    }

    // Returns the Ticket object with a given ticketID
    public Ticket retrieve(String ticketID) {
        for (int i = 0; i < numTickets; i++) {
            if (tickets[i].ID().equals(ticketID)) {
                return tickets[i];
            }
        }
        return null; // In place in case no ticket is found
    }
}
