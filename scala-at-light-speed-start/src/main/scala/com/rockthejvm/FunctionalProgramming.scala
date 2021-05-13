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

  val aFlatMappedList = List(1,2,3).flatMap(x => List(x, 2 * x))

  println(aFlatMappedList)

  val aFilteredList = List(1,2,3,4,5).filter(_ <= 2) // == x => x <= 3


  val allPair = List(1,2,3).flatMap(number => List('a', 'b', 'c').map(letter => s"$number - $letter"))

  println(allPair)


  val alternativePairs = for {
    number <- List(1,2,3)
    letter <- List('a', 'b', 'c')
  } yield s"$number - $letter"

  //list
  val aList = List(1,2,3,4,5)
  val firstElement = aList.head
  val aPrepenededList = 0 ::aList //List(0,1,2,3,4,5)
  val anExtendedList = 0 +: aList :+ 6 //List(0,1,2,3,4,5,6)


  //sequence
  val aSequence: Seq[Int] = Seq(1,2,3) //Seq.apply(1,2,3)
  val accessedElement = aSequence(1) //the element at index 1: 2


  //vectors: fast Seq implementation
  val aVector = Vector(1,2,3,4,5)


  val aSet = Set(1,2,3,4,1,2,3)
  val setHas5 = aSet.contains(5)

  val anAddedSet = aSet + 5 //Set(1,2,3,4,5)


  //ranges
  val aRange = 1 to 1000
  val twoBytwo = aRange.map(x => 2 * x).toList // List(2,4,6,8.., 2000)

  //tupple = group of values under the same value
  val aTuple = ("Bon Jovi", "Rock", 1982)

  //maps
  val aPhonebook: Map[String, Int] = Map(
    ("Daniel", 123123),
    "Jane" -> 241232
  )


}
