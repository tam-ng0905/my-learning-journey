package homework1;


public class RandomizedSort {

        public static void random(int arr[],int low,int high)
        {
            int random = (int) Math.floor(Math.random() * high);
            int pivot = random+low;
            int temp1=arr[pivot];
            arr[pivot]=arr[high];
            arr[high]=temp1;
        }

        public static int partition(int arr[], int low, int high)
        {
            int pivot = arr[high];
            random(arr,low,high);
            int i = (low-1);
            for (int j = low; j < high; j++)
            {
                if (arr[j] < pivot)
                {
                    i++;
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }

            int temp = arr[i+1];
            arr[i+1] = arr[high];
            arr[high] = temp;

            return i+1;
        }

        public static void sort(int arr[], int low, int high)
        {
            if(high == 1){
                return;
            }
            if (low < high)
            {
                int pivot = partition(arr, low, high);
                sort(arr, low, pivot-1);
                sort(arr, pivot+1, high);
            }
        }
}
