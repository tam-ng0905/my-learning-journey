import javax.xml.soap.Node;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class dijkstra {
    private PriorityQueue<Node> queue;
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
    static class Graph{
//        private int vertices;
        private LinkedList<Node> list;

        Graph() {
//            this.vertices = vertices;
            this.list = new LinkedList<Node>();
        }
        void addVertice(Node v){
            this.list.add(v);
        }
        public String toString(){
            return list.toString();
        }

    }
    public static void main(String[] args) throws FileNotFoundException {
        File text = new File("src/text.txt");
        Scanner input = new Scanner(text);
        List<Graph> lines = new ArrayList<Graph>();
        try {

            while (input.hasNextLine()) {
                String line = input.nextLine();
                char[] ln = line.toCharArray();
                char first = ln[0];
                Graph adList = new Graph();

                adList.addVertice(new Node(first, 0));
                for(int i = 1; i < ln.length; i++) {
                    if(!Character.isDigit(ln[i]) && Character.isDigit(ln[i+1])){
                        adList.addVertice(new Node(ln[i], (float) (ln[i + 1])));
                    }
                }
                lines.add(adList);
            }

            System.out.println(lines);
        } finally{
            input.close();
        }
        input.close();


        queue = new PriorityQueue<Node>(V, new Node());
    }
}
