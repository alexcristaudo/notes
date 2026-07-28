package Oct11_LinkedList;

public class LinkedList {
   private Node head;

   public LinkedList() {
      head = null;
   }

   public void addToStart(String newItem) {
      head = new Node(newItem, head);
   }

   public void outputList() {
      Node position = head;
      while (position != null) {
         System.out.println(position);
         position = position.getLink();
      }
   }

   public boolean removeFromStart() {
      if (head != null) {
         head = head.getLink();
         return true;
      } else
         return false;

   }

   private Node find(String target) {
      Node position = head;
      while (position != null) {
         if (position.getItem().equals(target))
            return position;
         position = position.getLink();
      }
      return null;

   }

   public boolean contains(String target) {
      return (find(target) != null);
   }
}
