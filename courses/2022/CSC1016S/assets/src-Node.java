package Oct11_LinkedList;

public class Node {
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

   public String getItem() {
      return item;
   }

   public Node getLink() {
      return link;
   }

   public String toString() {
      return "Node: " + item;
   }

}
