package homework5;

import java.util.Arrays;

public class countingSort {
    public static void countSort(int array[], int size) {
        int[] out = new int[size + 1];
        int a = array[0];
        for (int i = 1; i < size; i++) {
            if (array[i] > a)
                a = array[i];
        }
        int[] c = new int[a + 1];
        for (int i = 0; i < a; ++i) {
            c[i] = 0;
        }
        for (int i = 0; i < size; i++) {
            c[array[i]]++;
        }
        for (int i = 1; i <= a; i++) {
            c[i] += c[i - 1];
        }
        for (int i = size - 1; i >= 0; i--) {
            out[c[array[i]] - 1] = array[i];
            c[array[i]]--;
        }
        if (size >= 0) System.arraycopy(out, 0, array, 0, size);
    }
    public static void radixSort(int array[], int size) {
        int a = 0;
        for(int i = 1; i < array.length; i++){
            if (array[i] > a)
                a = array[i];
        }
        for (int i = 1; a / i > 0; i *= 10)
            countSort(array, size);
    }

    public static void main(String[] args){
        int[] arr = { 1, 22, 19, 8, 3, 3, 1, 10, 12, 9, 2, 44 };
        int size = arr.length;
        radixSort(arr, size);
    }
}
