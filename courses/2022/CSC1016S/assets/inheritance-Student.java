// A Student class inheriting from the Person class
// CRSALE010
// Alexander Cristaudo
// 28 September 2022

public class Student extends Person {
    // Instance variables
    private String nameOfInstitution;
    private String programOfStudy;
    private int yearOfStudy;
    private String hobbies;

    // Parameterised constructor
    public Student(String name, int age, String gender, String nameOfInstitution, String program, int yearOfStudy,
            String hobbies) {
        // Calling the Person constructor
        super(name, age, gender);

        // Setting initial values for the instance variables
        this.nameOfInstitution = nameOfInstitution;
        this.programOfStudy = program;
        this.yearOfStudy = yearOfStudy;
        this.hobbies = hobbies;
    }

    // Copy constructor
    public Student(Student s) {
        this(s.name, s.age, s.gender, s.nameOfInstitution, s.programOfStudy, s.yearOfStudy, s.hobbies);
    }

    // Gets and set methods
    public int getYearOfStudy() {
        return yearOfStudy;
    }

    public String getHobbies() {
        return hobbies;
    }

    public String getNameOfInstitution() {
        return nameOfInstitution;
    }

    public String getProgramOfStudy() {
        return programOfStudy;
    }

    public void setHobbies(String hobbies) {
        this.hobbies = hobbies;
    }

    public void setNameOfInstitution(String nameOfInstitution) {
        this.nameOfInstitution = nameOfInstitution;
    }

    public void setProgramOfStudy(String programOfStudy) {
        this.programOfStudy = programOfStudy;
    }

    public void setYearOfStudy(int yearOfStudy) {
        this.yearOfStudy = yearOfStudy;
    }

}
