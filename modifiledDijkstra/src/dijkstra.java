import java.io.FileNotFoundException;
import java.util.*;
public class dijkstra{

    public static void main(String[] arg) throws FileNotFoundException {

        dijkstra dijkstra = new dijkstra();
        Graph graph = new Graph();
        dijkstra.relax(graph.getVertex(0));
        for(Vertex v:graph.getVertices()){
            System.out.print("Vertex - "+v+" , Dist - "+ v.min+" , Path - ");
            for(Vertex pathvert:v.path) {
                System.out.print(pathvert+" ");
            }
            System.out.println(""+v);
        }
    }
    public void relax(Vertex src){
        src.min = 0;
        PriorityQueue<Vertex> queue = new PriorityQueue<Vertex>();
        queue.add(src);
        while(!queue.isEmpty()){
            Vertex u = queue.poll();
            for(Edge neigh:u.neigh){
                Double newDist = u.min+neigh.weight;
                if(neigh.target.min>newDist){
                    queue.remove(neigh.target);
                    neigh.target.min = newDist;
                    neigh.target.path = new LinkedList<Vertex>(u.path);
                    neigh.target.path.add(u);
                    queue.add(neigh.target);
                }
            }
        }
    }

}



