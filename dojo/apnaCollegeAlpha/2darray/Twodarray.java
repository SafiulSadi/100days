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
            for(int j=startCol; j<=endCol; j++){
                System.out.print(matrix[startRow][j]+ " ");
            }
            for(int i=startRow+1; i<=endRow; i++){
                
                System.out.print(matrix[i][endCol]+ " ");

            }
            for(int j = endCol-1; j>=startCol; j--){
                if(startRow == endRow){
                    break;
                }
                System.out.print(matrix[endRow][j] + " ");

            }
            for(int i=endRow-1; i> startRow; i--){
                if(startCol == endCol){
                    break;
                }
                System.out.print(matrix[i][startCol]+" ");
            }
            startRow++;
            startCol++;
            endRow--;
            endCol--;
        }
    }
    public static int diagonalSum(int matrix[][]){
        int psum = 0;
        int ssum = 0;
        // for(int i=0; i<matrix.length; i++){
        //     for(int j=0; j<matrix[0].length; j++){
        //         if(i==j){
        //             psum+=matrix[i][j];
        //         }
        //         if(j + i==matrix.length - 1 ){
        //             ssum += matrix[i][j];
        //         }
        //     }
        // }
        // System.out.println(psum+ssum);
        // return psum+ssum;
        for(int i=0; i<matrix.length; i++){
            // pd
            psum += matrix[i][i];
            //sd
            if(i!=matrix.length-1-i)
                ssum += matrix[i][matrix.length-1-i];
        }
    }
    public static void main(String[] args) {
         
        int matrix [][] = {
            {1,2,3,4},
            {5,6,7,8},
            {9,10,11,12},
             {13,14,15,16}};
        diagonalSum(matrix);

    }

}