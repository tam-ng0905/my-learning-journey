import java.util.*;
public class Vertex implements Comparable<Vertex>{
    public final Character name;
    public double min = 9999999;
    public ArrayList<Edge> neigh;
    public LinkedList<Vertex> path;
    public int compareTo(Vertex other){
        return Double.compare(min,other.min);
    }
    public Vertex(Character name){
        this.name = name;
        neigh = new ArrayList<Edge>();
        path = new LinkedList<Vertex>();
    }
    public String toString(){
        return name.toString();
    }
}
