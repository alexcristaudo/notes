package Oct05_Generics;

import java.util.ArrayList;

public class Team<T> implements Comparable {

   private String name;
   private int points;
   private T captain;
   private ArrayList<T> squad;

   public Team(String n, int p) {
      this.name = n;
      this.points = p;
   }

   public Team(String n, int p, T c, ArrayList<T> s) {
      this.name = n;
      this.points = p;
      this.captain = c;
      this.squad = s;
   }

   public T getCaptain() {
      return captain;
   }

   public ArrayList<T> getSquad() {
      return squad;
   }

   public String getName() {
      return this.name;
   }

   public double getPoints() {
      return this.points;
   }

   public String toString() {
      return getName() + "\t" + getPoints();
   }

   public int compareTo(Object other) {
      Team otherTeam = (Team) other;

      if (getPoints() > otherTeam.getPoints()) {
         return -1;
      } else if (getPoints() < otherTeam.getPoints()) {
         return 1;
      } else {
         return 0;
      }
   }

   public boolean equals(Object otherObject) {
      if (otherObject == null)
         return false;
      else if (getClass() != otherObject.getClass())
         return false;
      else {
         Team otherTeam = (Team) otherObject;
         if (getName() == otherTeam.getName())
            return true;
         else
            return false;
      }
   }

}