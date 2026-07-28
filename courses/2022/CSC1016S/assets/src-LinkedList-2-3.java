package Oct13_LinkedListIterator;

public class LinkedList {
   private class Node {
      private String item;
      private Node link;

      public Node() {
         item = null;
         link = null;
      }

      public Node(String newItem, Node newLink) {
         item = newItem;
         link = newLink;
      }

      public String toString() {
         return "Node: " + item;
      }
   }

   public class ListIterator {
      private Node position;
      private Node previous;

      public ListIterator() {
         position = head;
         previous = null;
      }

      public void restart() {
         position = head;
         previous = null;
      }

      public boolean hasNext() {
         return (position != null);
      }

      public String next() {
         if (!hasNext())
            return "No items left";
         String toReturn = position.item;
         previous = position;
         position = position.link;
         return toReturn;
      }

      public String peek() {
         if (!hasNext())
            return "No items left to peek at";
         return position.item;
      }

      public void addHere(String newItem) {
         if (position == null && previous != null)
            // Iterator at the end of list, so add to end
            previous.link = new Node(newItem, null);
         else if (position == null || previous == null)
            // List is empty OR position is head node
            LinkedList.this.addToStart(newItem);
         else {
            // previous and position are consecutive nodes
            Node temp = new Node(newItem, position);
            previous.link = temp;
            previous = temp;
         }
      }

      public void delete() {
         if (position == null)
            System.out.println("Nothing to delete.");
         else if (previous == null) {
            // Remove node at head
            head = head.link;
            position = head;
         } else {
            // previous and position are consecutive nodes
            previous.link = position.link;
            position = position.link;
         }
      }
   }

   private Node head;

   public LinkedList() {
      head = null;
   }

   public ListIterator iterator() {
      return new ListIterator();
   }

   public void addToStart(String newItem) {
      head = new Node(newItem, head);
   }

   public void outputList() {
      Node position = head;
      while (position != null) {
         System.out.println(position);
         position = position.link;
      }
   }

   public boolean removeFromStart() {
      if (head != null) {
         head = head.link;
         return true;
      } else
         return false;

   }

   private Node find(String target) {
      Node position = head;
      while (position != null) {
         if (position.item.equals(target))
            return position;
         position = position.link;
      }
      return null;

   }

   public boolean contains(String target) {
      return (find(target) != null);
   }
}
