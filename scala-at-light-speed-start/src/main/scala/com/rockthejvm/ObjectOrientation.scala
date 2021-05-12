package com.rockthejvm

object ObjectOrientation extends App{
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
}
