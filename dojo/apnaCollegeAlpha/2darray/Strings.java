import java.util.Scanner;

public class Strings {
    public static void printLetters(String str){
        for(int i = 0; i<str.length(); i++){
            System.out.print(str.charAt(i));
        }
    }
    public static boolean chackPalindrome(String str){
        int n = str.length();
        for(int i = 0; i<n/2;i++){
            if(str.charAt(i)!= str.charAt(n-1-i)){
                return false;
            }
        }
        return true;
    }
    public static void shortestDistance(String str){
        int x = 0;
        int y = 0;
        for (int i = 0; i < str.length(); i++){
            if(str.charAt(i) == 'E'){
                x++;
            }else if(str.charAt(i) == 'W'){
                x--;
            }else if(str.charAt(i) == 'N'){
                y++;
            }else{
                y--;
            }
        }
        System.out.println(Math.sqrt(Math.pow(x,2)+Math.pow(y,2)));

    }
    public static void main(String[] args) {
        // char arr[] = {'a', 'b','c','d'};
        // String str1 = new String("xyz");
        // Strings are IMMUTABLE
        // Scanner sc = new Scanner(System.in);
        // String name = sc.nextLine();
        // System.out.println(name.length());
        // concatenation 
        // .charAt()
        // String fullname = "Tony Stark";
        // System.out.println(fullname.charAt(0));
        // printLetters(fullname);
        // palindrome
        // String palindrome = "racecar";
        
        String str = "WNEENESENNN";
        System.out.println();
        shortestDistance(str);

    }
}
