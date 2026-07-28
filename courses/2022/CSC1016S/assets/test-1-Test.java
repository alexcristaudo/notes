public class Test {
   public static void main(String [] args_) {
      CharFilter charFilter = new CharFilter("abc");
      String one = charFilter.filter("e-Shibobo");
   
      String two = charFilter.filter("lekker");
   
      String three = charFilter.filter("Abercrombie");
   
      System.out.printf("%s, %s, %s.", one, two, three);
   }
}
