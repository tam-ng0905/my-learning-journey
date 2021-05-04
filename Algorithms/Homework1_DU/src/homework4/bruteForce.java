package homework4;

public class bruteForce {
    public static int brute(int[] numbers){
        int n = numbers.length;
        int maximumSubArraySum = Integer.MIN_VALUE;
        int start = 0;
        int end = 0;

        for (int i = 0; i < n; i++) {

            int sum = 0;

            for (int a = i; a < n; a++) {
                sum += numbers[a];

                if (sum > maximumSubArraySum) {
                    maximumSubArraySum = sum;
                    start = i;
                    end = a;
                }
            }
        }
        System.out.println(start);
        System.out.println(end);
        return maximumSubArraySum;
    }

    public static void main(String[] args){
        int[] arr = new int[]{1,-5,6,-1,0,2,5,-7,8,5,5,-5};
        System.out.println(brute(arr));
    }
}
