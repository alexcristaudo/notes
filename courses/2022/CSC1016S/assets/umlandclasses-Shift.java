// A Shift class to represent the shift of an employee
// Alexander Cristaudo
// CRSALE010
// 04 September 2022

public class Shift {

    // 2 CalendarTimes that represent the start and end of a shift
    private CalendarTime start;
    private CalendarTime finish;

    // Parameterised constructor
    public Shift(CalendarTime start, CalendarTime finish) {
        this.start = start;
        this.finish = finish;
    }

    // Get methods for the start and finish of a shift
    public CalendarTime start() {
        return start;
    }

    public CalendarTime finish() {
        return finish;
    }

    // Checks if a week is in a shift
    public boolean inWeek(Week w) {
        // A week is in a shift if the week includes the start or the finish date
        return w.includes(start.date()) || w.includes(finish.date());
    }

    // Checks if a shift includes a date
    public boolean includesDate(Date date) {
        // A shift includes a date if the start date is before (or equal to) the start
        // date and the finish date falls after the given date
        return start.date().compareTo(date) <= 0 && finish.date().compareTo(date) >= 0;
    }

    // Returns the length of the shift
    public Duration length() {
        return finish.subtract(start);
    }

    // The standard format for a shift
    public String toString() {
        return start + " - " + finish;
    }

}
