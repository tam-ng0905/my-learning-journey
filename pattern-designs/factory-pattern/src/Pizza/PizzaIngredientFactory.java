package Pizza;

public interface PizzaIngredientFactory {
    public Dough createDough();
    public Sauce createSauce();
    public Cheese createCheese();
    public Veggies[] createVeggies();
    public Clams createClams();
}


//TODO with the interface:
//1. Build a factory for every region. To do this, subclass of PizzaIngredient Factory that implements each create method
//2. Implement a set of ingredient classes to be used with the factory, like ReggianoCheese, RedPeppers, and ThickCrustDough. These classes can be shared among regions where appropriate.
//3. Then we still need to hook all this up by working our new ingredient factories into our old PizzaStore code.
