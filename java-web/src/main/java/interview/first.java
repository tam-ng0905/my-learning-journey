package interview;

import java.util.ArrayList;

public class first {
    public ArrayList<Integer> solution(int[] arr){

        //Take in an array
        //Goal: return an array of peaks
        //
        //4 8 8 4
        ArrayList<Integer> result = new ArrayList<Integer>();
        for(int i = 1; i < arr.length - 1; i++){
            int previous = arr[i-1];
            int next = arr[i + 1];
            if(arr[i] > previous ){
                //do cases
                result.add(arr[i]);
            }


        return result;
    }
}
