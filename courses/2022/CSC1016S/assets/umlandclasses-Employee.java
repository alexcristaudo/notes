// An employee class to represent the name, id and shifts for an employee
// CRSALE010
// 04 September 2022

import java.util.ArrayList;
import java.util.List;

public class Employee {

    // Instance variables
    private String name;
    private String uid;

    // An arrayList for the shifts
    private ArrayList<Shift> shift;

    // Parameterised constructor
    public Employee(String name, String uid) {
        this.name = name;
        this.uid = uid;
        // Creates an empty arraylist
        shift = new ArrayList<Shift>();
    }

    // Get methods for the name and uid
    public String name() {
        return name;
    }

    public String UID() {
        return uid;
    }

    // Signs in the user - given the adding time but the end time is null because
    // this is not known yet
    public void signIn(Date d, Time t) {
        Shift add = new Shift(new CalendarTime(d, t), null);
        shift.add(add);
    }

    // Signing out of a shift
    public void signOut(Date d, Time t) {
        int pos = shift.size() - 1;
        // Getting the last sign in shift
        Shift edit = shift.get(pos);
        Shift finish = new Shift(edit.start(), new CalendarTime(d, t));

        shift.set(pos, finish);
    }

    // Checks if the user is currently present
    public boolean present() {
        if (shift.size() == 0) {
            return false;
        }
        // This is true if the last shift has a start CalendarTime but no end
        // CalendarTime
        return shift.get(shift.size() - 1).start() != null && shift.get(shift.size() - 1).finish() == null;
    }

    // Checks if a user has worked on a given date
    public boolean worked(Date d) {
        for (Shift s : shift) {
            // If the shift includes the date - return true
            if (s.includesDate(d)) {
                return true;
            }
        }
        return false;
    }

    // Checks if the user has worked during a week
    public boolean worked(Week w) {
        for (Shift s : shift) {
            if (s.inWeek(w)) {
                return true;
            }
        }
        return false;
    }

    // Get the List of all shifts on a date
    public List<Shift> get(Date d) {
        ArrayList<Shift> out = new ArrayList<Shift>();
        for (Shift s : shift) {
            if (s.includesDate(d)) {
                // Adds the shift if the shift includes the date
                out.add(s);
            }
        }
        return out;
    }

    // Get the List of all shifts that include a week
    public List<Shift> get(Week w) {
        ArrayList<Shift> out = new ArrayList<Shift>();
        for (Shift s : shift) {
            if (s.inWeek(w)) {
                // Adds the shift if the shift includes the week
                out.add(s);
            }
        }
        return out;
    }

    // Gets the Duration worked in a week
    public Duration hours(Week w) {
        // Blank duration
        Duration time = new Duration("hour", 0);
        // All the Shifts from the week
        ArrayList<Shift> inWeek = new ArrayList<Shift>(get(w));
        for (Shift s : inWeek) {
            // Adding the Duration to the final time
            time = time.add(s.length());
        }
        return time;
    }
}
