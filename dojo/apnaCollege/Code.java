import java.util.*;
class Code{
    public static void butter_fly(int n){
        for(int i=1; i<=n; i++){
            for(int j = 1; j<=i; j++){
                System.out.print("*");
            }
            for(int j = 1; j<= 2*(n-i); j ++){
                System.out.print(" ");
            }
            for (int j = 1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=n; i>=1; i--){
            for(int j = 1; j<=i; j++){
                System.out.print("*");
            }
            for(int j = 1; j<= 2*(n-i); j ++){
                System.out.print(" ");
            }
            for (int j = 1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void solid_rhombus(int n){
        for(int i=1; i <= n; i++){
            for (int j=1; j<= n-i; j++){
                System.out.print(" ");
            }
            for(int j=1; j<=n; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void holow_rhombus(int n){
        for(int i=1; i <= n; i++){
            for (int j=1; j<= n-i; j++){
                System.out.print(" ");
            }
            for(int j=1; j<=n; j++){
                if(i==1||i==n||j==1||j==n){

                    System.out.print("*");
                }else{

                    System.out.print(" ");
                }

            }
            System.out.println();
        }
    }
    // the diamond pattern needs to be learned
    public static void diamond(int n){
        for(int i = 1; i<=n; i++){
            for(int j=n; j>=n- i; j--){
                System.out.print(" ");
            }
            for(int j = 1; j<= i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        diamond(4);
    }
}