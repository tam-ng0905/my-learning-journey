package com.rockthejvm

object ObjectOrientation extends App{

  //`extends App` is equivalent to Java as: public static void main(String[] args)
  class Animal{
    val age: Int = 0
    def eat() = println("I'm eating")
  }
  val anAnimal = new Animal


  class Dog(val name: String) extends Animal{ //constructor definition
  }
  val aDog = new Dog("Lassie")

  //constructor arguments are not fields: need to put a val before the constructor argument

  aDog.name

  val aDeclaredAnimal: Animal = new Dog("Hachi")
  aDeclaredAnimal.eat() //the most derived method will be called at runtime


  //abstract class
  abstract class WalkingAnimal{
    protected val hasLegs = true //by default public, can restrict by using protected or private
    def walk(): Unit
  }

  //"interface" = ultimate abstract type
  trait Carnivor{
    def eat(animal: Animal): Unit
  }
  trait Philosopher{
    def ?!(thought: String): Unit //?! is a valid method name
  }

  class Crocodile extends Animal with Carnivor with Philosopher {// can use 'with' multiple times
    override def eat(animal: Animal): Unit = println("I am eating you, animal!")
    override def ?!(thought: String): Unit = println("I was thinking")
  }

  val aCroc = new Crocodile
  aCroc.eat(aDog)
  aCroc eat aDog //infix notation = object method argument, only avalable for methods with ONE argument

  aCroc ?! "What if we could fly?"

  //Operators in Scala are actually methods

  val basicMath = 1 + 2


  //anonymous classes
  val dinasaur = new Carnivor{
    override def eat(animal: Animal): Unit = println("I am a dinosaur so I can eat pretty much anything")
  }


  //singleton object
  object MySingleton { //the only instance
    val mySpecialValue = 5123
    def mySpecialMethod(): Int = 5232
    def apply(x: Int): Int = x + 1
  }

  MySingleton.mySpecialMethod()
  MySingleton.apply(432)
  MySingleton(432)


  //companion object - because they share the same name with the class
  object Animal {
    val canLiveIndefinitely = false
  }
  val animalsCanLiveForever = Animal.canLiveIndefinitely //"static" filed/methods

  //case classes -- lightweight data structures with some boilerplate
  //- sensible equals and hash code
  //- serialization
  //- companion with apply
  //-pattern matching
  case class Person(name: String, age: Int)

  //may be constructed without `new` keyword
  val bob = Person("Bob", 52)

  //exceptions
  try {
    //code that can throw
    val x: String = null
    x.length
  } catch { // catch(exception e) {..}
    case e: Exception => "Some faulty error message"
  } finally{
    //execute some coed no matter what
  }

  //Generics
  abstract class MyList[T]{
    def head: T
    def tail: MyList[T]
  }

  //using a generic with a concrete type
  val aList: List[Int] = List(1,2,3) //List.apply(1,2,3)
  val first = aList.head //int
  val rest = aList.tail

  val aStringList = List("Hello", "Scala")
  val firstString = aStringList.head //string


  //Point 1: in Scala we usually operate with IMMUTABLE values/objects
  //Any modification to an object must return ANOTHER object

  /*
    Benefit:
  1) works miracles in multithread env
  2) helps making sense of the code ("resoning about")
   */
  val reverseList = aList.reverse // returns a New list

  //Point 2: Scala is closest to the OO ideal


}
