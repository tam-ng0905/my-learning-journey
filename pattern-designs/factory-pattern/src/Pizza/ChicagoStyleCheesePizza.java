package Pizza;

public class ChicagoStyleCheesePizza extends Pizza{
    PizzaIngredientFactory ingredientFactory;
    public ChicagoStyleCheesePizza(PizzaIngredientFactory ingredientFactory){
        this.ingredientFactory = ingredientFactory;
//        name = "Chicago Style Deep Dish Cheese Pizza";
//        dough = "Extra Thick Crust Dough";
//        sauce = "Plum Tomato Sauce";

        toppings.add("Shredded Mozzarella Cheese");

    }
    public void prepare(){
        System.out.println("Preparing " + name);
        dough = ingredientFactory.createDough();
        sauce = ingredientFactory.createSauce();
        cheese = ingredientFactory.createCheese();
    }

    void cut(){
        System.out.println("Cutting the pizza into square slices");
    }
}
