package homework4;

public class bruteForce {
    public static int brute(int[] numbers){
        int largest_sum = 0;
        current = 0;
        for(int i = 0; i < numbers.length; i++){
            for(int a = i; a < numbers.length; a++){

            }
        }
    }
}

def array_max_consecutive_sum(numbers)
  largest_sum = 0
          current_sum = 0

          index_one = 0
          while index_one < numbers.count
        index_two = index_one
        while index_two < numbers.count
        current_sum = numbers[index_one..index_two].reduce(:+)
        if current_sum > largest_sum
        largest_sum = current_sum
        end
        index_two += 1
        end
        index_one += 1
        end
        largest_sum
        end
