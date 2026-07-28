package Oct05_Generics;

import java.util.ArrayList;
import java.util.Collections; // Collections.sort(d)

public class GenericsDemo {

   public static void main(String[] args) {

      // 1. Create Pairs of things
      Pair<String> p1 = new Pair<String>("Hello", "goodbye");
      System.out.println(p1);
      System.out.println();

      Pair<Integer> p2 = new Pair<Integer>(23, 42);
      System.out.println(p2);
      System.out.println();

      Team team1 = new Team("Liverpool", 99);
      Team team2 = new Team("Everton", 19);
      Pair<Team> p3 = new Pair<Team>(team1, team2);
      System.out.println(p3);
      System.out.println();

      // 2. Create Triplets of things (implement Triplet first)
      Triplet<String> t1 = new Triplet<String>("Hello", "Goodbye", "Welcome");
      System.out.println(t1);

      // 3. Make team generic (change Team first)
      ArrayList<String> squad = new ArrayList<String>();
      squad.add("Salah");
      squad.add("Thiago");
      squad.add("Firmino");
      Team<String> team3 = new Team<String>("Liverpool", 99, "Henderson", squad);

      System.out.println(team3);
      System.out.println("Captain: " + team3.getCaptain());
      System.out.println("Squad: " + team3.getSquad());

      Player captain = new Player("Henderson", 14);
      ArrayList<Player> liverpoolSquad = new ArrayList<Player>();
      liverpoolSquad.add(new Player("Salah", 11));
      liverpoolSquad.add(new Player("Thiago", 6));
      liverpoolSquad.add(new Player("Firmino", 9));

      Team<Player> team4 = new Team<Player>("Liverpool", 99, captain, liverpoolSquad);
      System.out.println(team4);
      System.out.println("Captain: " + team4.getCaptain());
      System.out.println("Squad: " + team4.getSquad());

      // Player captain = new Player("Henderson", 14);
      // ArrayList<Player> liverpoolSquad = new ArrayList<Player>();

      //
      // Team<Player> teamOfStrings = new Team<Player>("Liverpool", 99,
      // liverpoolSquad, captain);
      // System.out.println(teamOfStrings.getCaptain());
      // System.out.println(teamOfStrings.getSquad());

   }
}