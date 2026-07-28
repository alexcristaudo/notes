import org.junit.Test;
import org.junit.Assert; // Need this import for Assert.assertEquals not to be deprecated
import org.junit.Before; //Not auto added

public class PracticeTest {

    @Before // Not auto added
    public void setUp() {

    }

    // Test format:
    @Test
    public void testName() {

    }

    @Test
    public void testTakeVaccine() {
        Patient x = new Patient();
        x.takeVaccine("J&J", 1234);
        Assert.assertEquals("Type: J&J, No.: 1234", x.getVaccineDetails());
    }
}
