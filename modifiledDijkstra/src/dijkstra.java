import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class dijkstra {
    static class Graph{
//        private int vertices;
        private LinkedList<Character> list;

        Graph() {
//            this.vertices = vertices;
            this.list = new LinkedList<Character>();
        }
        void addVertice(Character v){
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
                adList.addVertice(first);
                for(int i = 1; i < ln.length; i++) {
                    if(!Character.isDigit(ln[i])){
                        adList.addVertice(ln[i]);
                    }
                }
                lines.add(adList);
            }

            System.out.println(lines);
        } finally{
            input.close();
        }
        input.close();
    }
}
