// A TimePeriod class that stores a TimePeriod as 2 Duration objects, representing the lower and upper bound
// Alexander Cristaudo
// CRSALE010
// 27 August 2022

public class TimePeriod {
    // Instance variables
    private Duration lowerBound;
    private Duration upperBound;

    // Parameterised constructor
    public TimePeriod(Duration lowerBound, Duration upperBound) {
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
    }

    // Gets for the lower bound and upper bound
    public Duration lowerBound() {
        return lowerBound;
    }

    public Duration upperBound() {
        return upperBound;
    }

    // Checks if the TimePeriod includes a Duration
    public boolean includes(Duration duration) {
        // compareTo is positive if the duration comes after the parameter
        // likewise it is negative if it is the other way around
        return duration.compareTo(lowerBound) >= 0 && upperBound.compareTo(duration) > 0;
    }

    // Checks if the TimePeriod precedes another (entered as parameter)
    public boolean precedes(TimePeriod other) {
        return upperBound.compareTo(other.lowerBound()) <= 0;
    }

    // Checks if a time period is adjacent to another (entered as parameter)
    public boolean adjacent(TimePeriod other) {
        // Two time periods are adjacent if ones upper bound is another ones lower bound
        // compareTo is zero if they are equal (in value)
        return other.upperBound().compareTo(lowerBound) == 0
                || other.lowerBound().compareTo(upperBound) == 0;
    }

    // A toString for the format of a time period
    public String toString() {
        // The format method converts a Duration into words
        return "[" + lowerBound.format(lowerBound, "minute") + " .. " +
                upperBound.format(upperBound, "minute") + "]";
    }
}
