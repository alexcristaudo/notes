package Oct05_Generics;

public class Player {
   private String name;
   private int number;

   public Player(String n, int num) {
      this.name = n;
      this.number = num;
   }

   public String getName() {
      return this.name;
   }

   public int getNumber() {
      return this.number;
   }

   public String toString() {
      return getName() + " (" + getNumber() + ")";
   }
}