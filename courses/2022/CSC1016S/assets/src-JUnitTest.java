public class JUnitTest {
}

class Patient {
    public long patientID;
    public Person patient;
    public String vacType;
    public long vacNo;

    public void takeVaccine(String type, long no) {
        vacType = type;
        vacNo = no;
    }

    public String getVaccineDetails() {
        return "Type: " + vacType + ", No.: " + vacNo;
    }

    /*
     * Creating JUnit Test:
     * On JGrasp -> Tools - JUnit Test
     * VS Code needs JUnit files in a lib folder (auto generates)
     * Command Palate + Go To Test + Generate Test
     * 
     */
}

class Person {
    public String name;

}
