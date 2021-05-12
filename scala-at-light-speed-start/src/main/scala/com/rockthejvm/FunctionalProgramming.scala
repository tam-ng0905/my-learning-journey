package com.rockthejvm

object FunctionalProgramming extends App {
  class Person(name: String){
    def apply(age: Int) = println(s"I have aged $age years")
  }

  val bob = new Person("Bob")
  bob.apply(43)
  bob(43)


  /*
    Funtional programming:
    -compose functions in
    -pass function as args
    -return functions as results

    Conclusion: FunctionX = Function1, Function2, ... Function22
   */
  val simpleIncrementer = new Function1[Int, Int]{
    override def apply(arg: Int): Int = arg + 1
  }

  simpleIncrementer(23) // == simpleIncrementer.apply(23)

  //ALL SCALA FUNCTIONS ARE INSTANCES OF THESE FUNCTION_X TYPES
  val stringConcat = new Function2[String, String, String]{
    override def apply(arg: String, arg2: String): String = arg + arg2
  }

  stringConcat("I love", " Scala")// "I love Scala"
  //syntax sugars
  val doubler: Function1[Int, Int] = (x: Int) => 2 * x
  doubler(3)
  /*
  equivalent to much longer:
  new Function1[Int, Int]{
    override def apply(x: Int) = 2 * x
  }
   */



  println(doubler(5))

  //higher-order function: take functions as args/return functions as results
  val aMappedList = List(1,2,3).map(x => x + 1)

}
