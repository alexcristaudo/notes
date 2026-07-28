// A testing class to test the functions of Time.java
// Alexander Cristaudo
// CRSALE010
// 15 August 2022

import org.junit.Test;
import org.junit.Assert;

public class TestOfTime {

    // Tests
    @Test
    public void testOne() {
        // Test to check if the String is stored
        Time t = new Time("13:45");
        Assert.assertEquals(t.toString(), "13:45:00");
    }

    @Test
    public void testTwo() {
        // Checks if the Duration between 2 times is correct
        Time a = new Time("13:45");
        Time b = new Time("13:46");
        Duration ans = new Duration("minute", 1);
        Assert.assertEquals(ans, b.subtract(a));
    }

    @Test
    public void testThree() {
        // Checks if a time subtracted from itself is 0
        Time a = new Time("13:45");
        Duration ans = new Duration(0);
        Assert.assertEquals(ans, a.subtract(a));
    }

    @Test
    public void testFour() {
        // Checks if the Duration as milliseconds is correct
        Duration ans = new Time("13:46").subtract(new Time("13:45"));
        Assert.assertEquals(ans.intValue("millisecond"), 60000);
    }

    @Test
    public void testFive() {
        // Checks if the Duration as seconds is correct
        Duration ans = new Time("13:46").subtract(new Time("13:45"));
        Assert.assertEquals(ans.intValue("second"), 60);
    }

    @Test
    public void testSix() {
        // Checks if the Duration as minute is correct
        Duration ans = new Time("13:46").subtract(new Time("13:45"));
        Assert.assertEquals(ans.intValue("minute"), 1);
    }

    @Test
    public void testSeven() {
        // Checks if the Duration as hours is correct
        Duration ans = new Time("14:45").subtract(new Time("13:45"));
        Assert.assertEquals(ans.intValue("hour"), 1);
    }

}
