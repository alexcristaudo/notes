// A program to filter out characters from a String
// Alexander Cristaudo
// CRSALE010
// 22 August 2022

public class CharFilter {

   //Instance Variable
   String filterChars;
   
   // Constructor to set  the initial value for filterChars
   public CharFilter(String characters) {
      filterChars = characters;
   }
   
   // A method that returns true if a char c is in filterChars otherwise false
   public boolean filters(char c) {
      for (int i = 0; i<filterChars.length();i++) {
         if (filterChars.charAt(i)==c) {
           return true;
         }
      }
      return false;
   }
   
   // This filters out a word target and returns the word without any chars that need to be filtered out
   public String filter(String target) {
      String out = "";
      for (int i = 0; i<target.length();i++) {
         if (!filters(target.charAt(i))) {
            out += target.charAt(i);
         }
      }
      return out;
   }
}