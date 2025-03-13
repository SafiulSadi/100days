import java.util.*;
public class Twodarray{

    public static void largeSmall(int matrix[][]){
        int large = Integer.MIN_VALUE;
        int small = Integer.MAX_VALUE;
        for(int i= 0; i<matrix.length; i++){
            for(int j=0; j<matrix[0].length; j++){
                if(large < matrix[i][j]){
                    large = matrix[i][j];
                }
                if (small > matrix[i][j]) {
                    small = matrix[i][j];
                }
            }
        }
        System.out.println("largest number is: " + large +"and the smallest number is: "+ small);

    }

    public static void search(int matrix[][], int x){
        for(int i=0; i<matrix.length; i++){
            for(int j=0; j<matrix[0].length; j++){
                if(matrix[i][j] == x){
                    System.out.println("i & j: " + i+ "," +j );
                }
            }
        }
    }
    public static void printSpiral(int matrix[][]){
        int startRow = 0;
        int startCol = 0;
        int endRow = matrix.length-1;
        int endCol = matrix[0].length -1;

        while(startRow <= endRow && startCol <= endCol){
            for(int j=startCol; )
        }
    }
    public static void main(String[] args) {
         
        int matrix [][] = {{1,2,3,4},{5,6,7,8},{9,10,11,12}, {13,14,15,16}};

    }

}