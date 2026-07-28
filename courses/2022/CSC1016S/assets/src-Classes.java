public class Classes {

    // Instance variables up here
    // See Player class as example
    public static void main(String[] args) {
        Player p = new Player(); // Create a new instance
        p.health = 5; // Set data like this as well for protected
        p.name = "Bitcholas";
        p.attack = new Attack();
        p.attack.damage = 10;

        // Or equivalently
        p.attack = new Attack(10);

        // Or using solely constructors:
        Attack a = new Attack(10);
        p = new Player(5, "Bitcholas", a);

        Player n = new Player();
        n.health = 15;
        p.attack(n);
        System.out.println("Player n was attacked. Their new health is: " + (n.isAlive() ? n.health : "Dead"));
        p.attack(n);
        System.out.println("Player n was attacked. Their new health is: " + (n.isAlive() ? n.health : "Dead"));
    }
}

class Player {
    int health;
    String name;
    Attack attack;

    public Player() {
    }

    public Player(int health, String name, Attack attack) {
        this.health = health;
        this.name = name;
        this.attack = attack;
    }

    boolean isAlive() {
        return health > 0;
    }

    void attack(Player a) {
        a.health -= attack.damage;
    }

    public String toString() {
        return "Name " + this.name; // this. refers to instance variable
    }

}

class Attack {
    int damage;
    String name;

    public Attack() {
    }

    public Attack(int damage) {
        this.damage = damage;
    }

    // Checks if 2 objects are equal
    public boolean equals(Attack a) {
        return a.damage == this.damage && a.name.equalsIgnoreCase(this.name);

    }
}
