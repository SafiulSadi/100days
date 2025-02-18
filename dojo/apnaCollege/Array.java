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
    public static void main(String[] args) {
        int numbers[] = {2, 4, 6, 8, 10, 12, 14, 16};
        String menu[] = {"coke", "fanta", "dew"};
        int key = 12;
        reverse_array(numbers);
        for (int i : numbers) {
            
            System.out.print(i+", ");
        }
    }
    
}