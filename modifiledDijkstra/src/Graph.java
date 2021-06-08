import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;
public class Graph {
    private ArrayList<Vertex> vertices;
    public Graph() throws FileNotFoundException {
        vertices = new ArrayList<Vertex>();
        ArrayList<Character> indexes = new ArrayList<>();
        File text = new File("src/text.txt");
        Scanner input = new Scanner(text);
        ArrayList<ArrayList<Character>> lines = new ArrayList<>();
        try {

            while (input.hasNextLine()) {
                String line = input.nextLine();
                char[] aList = line.toCharArray();

                ArrayList<Character> ln = new ArrayList<>();

                for(char c : aList){
                    ln.add(c);
                }
                lines.add(ln);
            }
        } finally{
            input.close();
        }
        input.close();
        for (ArrayList<Character> line : lines) {
            vertices.add(new Vertex(line.get(0)));
            indexes.add(line.get(0));
        }
        for (ArrayList<Character> line : lines) {
            for (int a = 1; a < line.size(); a++) {
                if (!Character.isDigit(line.get(a)) && Character.isDigit(line.get(a + 1))) {
                    add(indexes.indexOf(line.get(0)), indexes.indexOf(line.get(a)), line.get(a + 1));
                }
            }
        }
    }
    public void add(int src, int dest, double weight){
        Vertex s = vertices.get(src);
        Edge new_edge = new Edge(vertices.get(dest),weight);
        s.neigh.add(new_edge);
    }

    public ArrayList<Vertex> getVertices() {
        return vertices;
    }

    public Vertex getVertex(int v){
        return vertices.get(v);
    }
}
