package Pizza;

public class NYPizzaStore extends PizzaStore{

    @Override
    protected Pizza createPizza(String item) {
        Pizza pizza = null;
        PizzaIngredientFactory ingredientFactory = new NYPizzaIngredientFactory();

        if(item.equals("cheese")){
            return new NYStyleCheesePizza(ingredientFactory);
        } else if (item.equals("veggie")){
            //return new NYStyleVeggiePizza();
            return null;
        } else return null;
    }
}
