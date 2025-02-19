import java.util.*;
public class Array {
    public static int linearSearch(int numbers[], int key){
        int i = 0;
        for(i=0; i< numbers.length; i++){
            if(numbers[i] == key){
                return i;

            }
        }
        return -1;   
    }
    public static int searchMenu(String menu[], String food){
        for(int i = 0; i < menu.length; i++){
            if(menu[i] == food){
                return i;
            }
            
        }
        return -1;
    }

    public static int large(int arr[]){
        Integer largest = Integer.MIN_VALUE;
        for(int i=0; i<arr.length; i++){
            if(arr[i] > largest ){
                largest = arr[i];
            }
        }
        return largest;
    }
    public static int binary_search(int arr[], int key){
        int start = 0;
        int end = arr.length - 1;
        int mid = (start + end)/2;
        while(start <= end){
            mid = (start + end)/2;
            if(arr[mid] == key){
                return mid;
            }else if(arr[mid] > key){
                end = mid -1;
            }else if(arr[mid] < key){
                start = mid + 1;
            }
            System.err.println(mid);
        }
        return -1;
    }
    public static void reverse_array(int arr[]){
        int temp = 0;
        int start = 0;
        int end = arr.length-1;
        while(start<end){
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    public static void pair_print(int arr[]){
        int cnt = 0;
        for(int i= 0; i<arr.length; i++){
            for(int j=i+1; j<arr.length; j++){
                System.out.print("(" + arr[i]+", " +arr[j] + ")" );
                cnt ++;
            }
        }
        System.out.println(cnt);
    }
    public static void printSubarrays(int arr[]){
        int start = 0;
        int end = start + 1;
        for(int i = 0; i < arr.length; i++){
            System.out.print("["+arr[i]+"]");

            for(int j= i +1;j<arr.length; j++ ){
                System.out.print("[");
                for(int k=i; k<=j; k++){
                    System.out.print(+arr[k]+", ");
                }
                System.out.print("]");
                System.out.println();
            }
        }
    }
    public static void sum_of_subarray(int arr[]){
        int sum[] = new int[15];
        int index = 0;

        for(int i = 0; i < arr.length; i++){
            for(int j=i; j<arr.length; j++){
                int s = 0;
                for(int k=i; k<=j; k++){
                    s += arr[k];
                    
                }
                sum[index]= s;
                index ++;
            }
        }
        Integer max = Integer.MIN_VALUE;
        Integer min = Integer.MAX_VALUE;
        for(int i = 0; i< sum.length; i++){
            if(max < sum[i]){
                max = sum[i];
            }
            if(min > sum[i]){
                min = sum[i];
            }

        }
        System.out.println("max is: " +max);
        System.out.println("min is: " +min);

    }
    public static void main(String[] args) {
        int numbers[] = {2, 4, 6, 8, 10};
        int numberss[] = {1, -2, 6, -1, 3};
        String menu[] = {"coke", "fanta", "dew"};
        int key = 12;
        
        sum_of_subarray(numberss);
        
    }
    
}