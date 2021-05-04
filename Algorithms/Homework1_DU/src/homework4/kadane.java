package homework4;

public class kadane {
    public static int kadane(int[] arr) {

        int size = arr.length;
        int start = 0;
        int end = 0;

        int max = arr[0], ending = arr[0];

        for (int i = 0; i < size; i++) {
            if (arr[i] > ending + arr[i]) {
                start = i;
                ending = arr[i];
            } else
                ending = ending + arr[i];

            if (max < ending) {
                max = ending;
                end = i;
            }
        }
        return max;
    }
    public static void main(String[] args){
        int[] arr = new int[]{1,-5,6,-1,0,2,5,-7,8,5,5,-5};
        System.out.println(kadane(arr));
    }
}
