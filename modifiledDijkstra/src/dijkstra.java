import javax.xml.soap.Node;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class dijkstra {
    private static PriorityQueue<Node> queue = new PriorityQueue<Node>();
    private static List<List<Node>> list = new LinkedList<>();
    private int distance[];

    static class Node{
        private Character key;
        private float value;

        public Node(Character key, float value) {
            this.key = key;
            this.value = value;
        }
        public String toString(){
            return key + " " + value;
        }
    }

    public static void main(String[] args) throws FileNotFoundException {
        File text = new File("src/text.txt");
        Scanner input = new Scanner(text);
        try {

            while (input.hasNextLine()) {
                String line = input.nextLine();
                char[] ln = line.toCharArray();
                char first = ln[0];
                List<Node> adList = new LinkedList<>();

                adList.add(new Node(first, 0));
                for(int i = 1; i < ln.length; i++) {
                    if(!Character.isDigit(ln[i]) && Character.isDigit(ln[i+1])){
                        adList.add(new Node(ln[i], (float) (ln[i + 1])));
                    }
                }
                list.add(adList);
            }


        } finally{
            input.close();
        }
        input.close();
        Set<Node> hash_Set = new HashSet<Node>();
        float[] distance = new float[list.size()];
        queue.add(list.get(0).get(0));
        while(queue.size() > 0){
            Node current = queue.peek();
            int index = 0;
            for(int i = 0; i < list.size(); i++){
                if(list.get(i).get(0).equals(current)){
                    index = i;
                }
            }
            hash_Set.add(current);
            for(Node a : list.get(index)){
                if((distance[index] + a.value) < distance[index+1]){

                }
            }
        }



    }
}
