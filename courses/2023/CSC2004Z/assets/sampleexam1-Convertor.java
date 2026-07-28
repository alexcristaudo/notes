import java.util.Scanner;

public class Convertor {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter a time or 'quit':");
        String out = in.nextLine();
        while (!out.equals("quit")) {
            Time t = new Time(out);
            System.out.println(t.printTime());
            System.out.println("Enter a time or 'quit':");
            out = in.nextLine();
        }
        System.out.println("Done");
        in.close();
    }
}

class Time {
    int hour;
    int minute;

    public Time(String time) {
        String[] arr = time.split(":");
        hour = Integer.parseInt(arr[0]);
        minute = Integer.parseInt(arr[1]);
    }

    public String printTime() {
        String out = "";
        if (minute % 5 <= 2) {
            // Round down
            if (minute % 5 != 0) {
                out += "about ";
            }
            minute = minute - minute % 5;
        } else {
            // Round up
            if (minute % 5 != 0) {
                out += "about ";
            }
            minute = minute + (5 - minute % 5);
            hour += minute / 60;
            minute %= 60;
        }

        String[] hours = { "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
                "twelve" };
        String[] mins = { "five", "ten", "fifteen", "twenty", "twenty five" };

        if (minute == 0) {
            out += hours[hour - 1] + " o'clock";
            return out;
        }
        if (minute % 15 == 0 && minute != 30) {
            out += "quarter";
        } else if (minute == 30) {
            out += "half";
        } else {
            if (minute > 30) {
                out += mins[(60 - minute) / 5 - 1];
            }
            if (minute < 30) {
                out += mins[minute / 5 - 1];
            }
        }

        if (minute > 30) {
            out += " to ";
            out += hours[hour % 12];
        }
        if (minute <= 30) {
            out += " past ";
            out += hours[hour - 1];
        }

        return out;
    }

}