package homework4;

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
    public static void main(String[] args)
    {
        int[] arr = new int[]{1,-5,6,-1,0,2,5,-7,8,5,5,-5};
        int max_sum = devide(arr, 0, arr.length - 1);
        System.out.println(max_sum);
    }
}
