import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

public class Oddities {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the name of the text file of dates:");
        String file = in.nextLine();
        in.close();
        try {
            Scanner read = new Scanner(new FileReader(file));
            while (read.hasNextLine()) {
                String dateStr = read.nextLine();
                String[] split = dateStr.split("/");
                Date date = new Date(split[0], split[1], split[2]);
                if (date.isOdd()) {
                    System.out.println("The date " + dateStr + " has all odd digits.");
                } else {
                    date.findNextDate();
                }
            }
            System.out.println("Done");
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }
}

class Date {
    private int day;
    private int month;
    private int year;

    public Date(String day, String month, String year) {
        this.day = Integer.parseInt(day);
        this.month = Integer.parseInt(month);
        this.year = Integer.parseInt(year);
    }

    public Date(int day, int month, int year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public Date(Date copy) {
        this(copy.day, copy.month, copy.year);
    }

    public boolean isOdd() {
        return isOdd(day) && isOdd(month) && isOdd(year);
    }

    public boolean isOdd(int num) {
        while (num != 0) {
            if ((num % 10) % 2 == 0) {
                return false;
            }
            num /= 10;
        }
        return true;
    }

    public void increaseDate() {
        int[] monthDays = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        this.day++;
        if (month == 2) {
            if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
                monthDays[1]++;
            }
        }
        if (this.day == monthDays[month - 1] + 1) {
            this.day = 1;
            month++;
        }
        if (month > 12) {
            year++;
            month = 1;
        }
    }

    public String toString() {
        return day + "/" + month + "/" + year;
    }

    public void findNextDate() {
        Date temp = new Date(this);
        int daysPassed = 0;
        while (!temp.isOdd()) {
            temp.increaseDate();
            daysPassed++;
        }
        System.out.println("The first date after " + this + " with all odd digits is " + temp + " which is "
                + daysPassed + (daysPassed == 1 ? " day" : " days") + " later.");

    }
}