package homework1;
import java.io.*;
import java.util.*;
import java.util.concurrent.TimeUnit;


public class homework1 {

        public static void main(String args[]) throws FileNotFoundException, InterruptedException {

//            //creating File instance to reference text file in Java
//            File text = new File("/Users/tamnguyen/Documents/GitHub/my-learning-journey/Algorithms/Homework1_DU/src/homework1/fib.txt");
//            ArrayList<Integer> fib = new ArrayList<Integer>();
//            //Creating Scanner instnace to read File in Java
//            Scanner scnr = new Scanner(text);

            //Reading each line of file using Scanner class
//            while(scnr.hasNextLine()){
//                String line = scnr.nextLine();
//                fib.add(Integer.valueOf(line));
//            }

//            for(int i = 0; i < fib.size() - 1; i++){
//
//                long startTime = System.currentTimeMillis();
//
//                GreatestCommonDivisor(fib.get(i), fib.get(i+1));
//
//                long endTime = System.currentTimeMillis();
//
//                long timeElapsed = endTime - startTime;
//
//                System.out.println(timeElapsed);
//
//            }
            int[] poly = {2, 6, 2, 9, 5,1,2,3,5,7,12,51,5,8,9,3,12,44,60,100,50,80,90,100,120,145,18,19, 12, 124, 12, 124, 54, 155, 3111, 12423, 50123};
            int x = 5;
            int n = poly.length;

//            int result = 0;
//            for(int i = 0; i < 10000; i++){
//                long startTime = System.currentTimeMillis();
//                int[] r = random();
//
//                result = horner(r,r.length,x);
//                long endTime = System.currentTimeMillis();
//                long timeElapsed = endTime - startTime;
//                System.out.println(timeElapsed);
////                System.out.println("Horner "  + result);
//            }


            int result1 = 0;
            long startTime1 = System.currentTimeMillis();
            for(int i = 0; i < 1000; i++){

                int[] r = random();
                result1 = horner(r,r.length,x);
            }
            long endTime1 = System.currentTimeMillis();
            long timeElapsed1 = endTime1 - startTime1;
            System.out.println(timeElapsed1);
//                System.out.println("Brute Force " + result1);

        }


    public static int bruteForce(int poly[], int n, int x)
    {
        // Initialize result
        int result = poly[0];
        // Evaluate value of polynomial using Horner's method
        for (int i=1; i<n; i++){
            result += (poly[i] * Math.pow(x, i));
        }
        return result;
    }
    public static int horner(int poly[], int n, int x)
    {
        // Initialize result
        int result = poly[0];
        // Evaluate value of polynomial using Horner's method
        for (int i=1; i < n; i++)
            result = result*x + poly[i];

        return result;
    }
    public static int[] random(){
        Random rd = new Random(); // creating Random object
        int[] arr = new int[20000];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = rd.nextInt(); // storing random integers in an array
            //System.out.println(arr[i]); // printing each array element
        }
        return arr;
    }
    public static int GreatestCommonDivisor (int a, int b)
    {
        int n = Math.min(a, b);
        int gcd, i;

        i = gcd = 1;
        while (i <= n) {
            if (a % i == 0 && b % i == 0)
                gcd = i;
            i = i + 1;
        }
        return gcd;
    }
    public static int gcd(int a, int b)
    {
        if(b == 0)
        {
            return a;
        }
        return gcd(b, a % b);
    }
}
