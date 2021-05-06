package homework4;

import java.util.Random;

public class devide {
    static int crossing(int arr[], int l, int m, int h)
    {
        int sum = 0;
        int left_sum = Integer.MIN_VALUE;
        for (int i = m; i >= l; i--) {
            sum = sum + arr[i];
            if (sum > left_sum)
                left_sum = sum;
        }
        sum = 0;
        int right_sum = Integer.MIN_VALUE;
        for (int i = m + 1; i <= h; i++) {
            sum = sum + arr[i];
            if (sum > right_sum)
                right_sum = sum;
        }
        return Math.max(left_sum + right_sum,
                Math.max(left_sum, right_sum));
    }
    static int devide(int arr[], int l, int h)
    {
        if (l == h)
            return arr[l];
        int m = (l + h) / 2;
        return Math.max(
                Math.max(devide(arr, l, m),
                        devide(arr, m + 1, h)),
                crossing(arr, l, m, h));
    }

    public static void main(String[] args){
        int result;
        int[] r = random();
        long startTime = System.currentTimeMillis();
        for(int i = 0; i < 1000; i++){
            result = devide(r, 0, r.length - 1);
        }
        long endTime = System.currentTimeMillis();
        long timeElapsed = (endTime - startTime)/1000;
        System.out.println(timeElapsed);
    }
    public static int[] random(){
        Random rd = new Random(); // creating Random object
        int[] arr = new int[3000];
        int max = 5000;
        int min = -1000;
        for (int i = 0; i < arr.length; i++) {
            arr[i] = rd.nextInt(max - min) + min;
        }
        return arr;
    }
}
