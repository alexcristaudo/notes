package Oct05_Generics;

public class Triplet<T> extends Pair<T> {
   private T third;

   public Triplet() {
      super();
      third = null;
   }

   public Triplet(T firstItem, T secondItem, T thirdItem) {
      super(firstItem, secondItem);
      third = thirdItem;
   }

   public T getThird() {
      return third;
   }

   public String toString() {
      return ("first: " + getFirst().toString() + "\n"
            + "second: " + getSecond().toString() + "\nthird: " + third.toString());
   }

   public boolean equals(Object otherObject) {
      if (otherObject == null)
         return false;
      else if (getClass() != otherObject.getClass())
         return false;
      else {
         Triplet<T> otherPair = (Triplet<T>) otherObject;
         return (getFirst().equals(otherPair.getFirst())
               && getSecond().equals(otherPair.getSecond())
               && third.equals(otherPair.getThird()));
      }
   }

}