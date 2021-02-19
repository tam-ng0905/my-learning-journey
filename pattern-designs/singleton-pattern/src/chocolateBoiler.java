public class chocolateBoiler {
    private boolean empty;
    private boolean boiled;

    private static chocolateBoiler uniqueInstance;

    private chocolateBoiler(){
        this.empty = true;
        this.boiled = false;

    }

    public static chocolateBoiler getInstance(){
        if(uniqueInstance == null){
            uniqueInstance = new chocolateBoiler();
        }
        return uniqueInstance;
    }

    public void fill(){
        if(isEmpty()){
            empty = false;
            //fill this with milk/chocolate mixture
        }
    }
    public boolean isEmpty(){
        return empty;
    }

}
