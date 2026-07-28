package Oct11_LinkedList;

public class LinkedListDemo {
   public static void main(String args[]) {

      LinkedList list = new LinkedList();

      list.addToStart("alpha");
      list.addToStart("beta");
      list.addToStart("charlie");
      list.addToStart("delta");

      list.outputList();

      list.removeFromStart();
      list.removeFromStart();

      System.out.println();
      list.outputList();

      System.out.println();
      System.out.println(list.contains("delta"));
      System.out.println(list.contains("alpha"));
   }

}
