import java.util.ArrayList;
import java.util.Scanner;

public class Bookings {
    public static void main(String[] args) {
        System.out.println("Enter the number of bookings:");
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Enter the bookings, one per line:");
        ArrayList<Time[]> bookings = new ArrayList<Time[]>();
        int clashes = 0;
        for (int i = 0; i < num; i++) {
            String booking = scanner.nextLine();
            String[] split = booking.split(" - ");
            Time[] time = { new Time(split[0]), new Time(split[1]) };

            for (Time[] t : bookings) {
                if (!(time[0].noStartClash(t) || time[1].noEndClash(t))) {
                    clashes++;
                }
            }
            bookings.add(time);
        }
        scanner.close();
        if (clashes == 0) {
            System.out.println("Good to go!");
        } else {
            System.out.println("Let's play Sardines! Number of pairs that clash: " + clashes + ".");
        }

    }
}

class Time {
    int hour;
    int min;

    public Time(String booking) {
        String[] split = booking.split(":");
        hour = Integer.parseInt(split[0]);
        if (booking.contains("pm") && hour != 12) {
            hour += 12;
        }
        min = Integer.parseInt(split[1].substring(0, 2));
    }

    public int minRep() {
        return hour * 60 + min;
    }

    public boolean noStartClash(Time[] time) {
        // Starts after ends
        return this.minRep() >= time[1].minRep();
    }

    public boolean noEndClash(Time[] time) {
        // Ends before next starts
        return this.minRep() <= time[0].minRep();
    }

}