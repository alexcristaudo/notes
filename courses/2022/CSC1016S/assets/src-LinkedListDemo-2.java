package Oct13_LinkedListIterator;

public class LinkedListDemo {
   public static void main(String args[]) {

      LinkedList list = new LinkedList();

      list.addToStart("alpha");
      list.addToStart("beta");
      list.addToStart("charlie");
      list.addToStart("delta");
      list.outputList();
      System.out.println();

      // Iterate list
      LinkedList.ListIterator i = list.iterator();
      while (i.hasNext())
         System.out.println(i.next());
      System.out.println();

      // Peek to next item
      i.restart();
      System.out.println(i.peek());
      i.next();
      System.out.println(i.peek());
      i.addHere("orange");
      System.out.println();
      i.restart();
      while (i.hasNext())
         System.out.println(i.next());
      System.out.println();

      // Peek to next item
      i.restart();
      i.next();
      i.next();
      i.next();
      System.out.println(i.peek());
      i.delete();
      System.out.println();
      i.restart();
      while (i.hasNext())
         System.out.println(i.next());
      System.out.println();
   }

}
