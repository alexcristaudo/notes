public class Constructors {

    String name;
    int age;
    boolean isDead;
    /*
     * A constructor is a special method to initialize instance variables
     * No return type - not even void
     * Normally overloadded (default - blank and parameterised constructor)
     * public ClassName(params) {code}
     */

    public Constructors() {
        this.name = "Alex";
        this.age = 19;
        this.isDead = false;
        // These are the default values
    }

    public Constructors(String name, int age, boolean isDead) {
        // Parameterized constructor - overloading
        this.name = name;
        this.age = age;
        this.isDead = isDead;
    }
}

class TestConstructor {
    public static void main(String[] args) {
        // If a constructor is invoked again with the new keyword, then the first is
        // discarded and an entirely new object is created
        Constructors c = new Constructors();
        System.out.println(c); // reference for c
        c = new Constructors();
        System.out.println(c); // different reference

        // If you create a param construcor, then the default constructor is overriden
        // and cannot be used unless created
        // Without param, there is a default blank constructor, see below
        DefaultConstructor d = new DefaultConstructor();

        // this allows anything in the class to access itself, you dont need to use this
        // but helpful for params with same name

    }
}

class DefaultConstructor {

}