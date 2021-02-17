package Pizza;

import java.util.*;

public abstract class Pizza {
    String name;
    //So each of the pizza will have to use the factory-produced ingredients
    Dough dough;
    Sauce sauce;
    List<String> toppings = new ArrayList<String>();
    void prepare() {
        for(String topping : toppings){
            System.out.println(" " + topping);
        }
    }

    void bake(){
        System.out.print("Bake for 25 minutes at 350");
    }

    void cut(){
        System.out.println("Cutting the pizza into diagonal slices");
    }

    void box(){
        System.out.println("Place pizza in official PizzaStore box");
    }
    public String getName(){
        return this.name;
    }
}
