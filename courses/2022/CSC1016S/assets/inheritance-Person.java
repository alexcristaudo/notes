// A Person class acting as a base class storing the name, age and gender
// CRSALE010
// Alexander Cristaudo
// 28 September 2022

public class Person {

    // Instance variables for a person
    String name;
    int age;
    String gender;

    // Parameterised constructor
    public Person(String name, int age, String gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // Copy constructor
    public Person(Person p) {
        this(p.name, p.age, p.gender);
    }

    // Gets and sets for the instance variables
    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setName(String name) {
        this.name = name;
    }

}
