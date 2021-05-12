package com.rockthejvm

class Basics extends App{
  val meaningOfLie: Int = 42

  val aBoolean = false //type is optional

  val aString = "I love Scala"

  val composeString = "I " + "love" + aString

  val aInterpolation = s"The meaning of life is $meaningOfLie"

  val anExpression = 2 + 3

  //if-expression
  val ifExpression = if(meaningOfLie > 43) 56 else 999

  val chainedIfExpression =
    if(meaningOfLie > 43) 56
    else if (meaningOfLie > 43) 56
    else 0


  //code blocks
  val codeBlock = {
    val aLocalValue = 67

    aLocalValue + 35
  }

  def myFunction1(x: Int, y: String): String = y + " " + x

  def myFunction2(x: Int, y: String): String =
    {
      y + " " + x
    }

  def factorial(n: Int): Int =
    if(n <= 1) 1
    else n * factorial(n-1)


  //In Scala we don't use loops or iteration, we use Recursion!!


  //the UNIT type = no meaningful value == "void" in other languages

  println("I love Scala")

  def myUnitReturn(): Unit = {
    println("I don't want to use Unit")
  }

  val theUnit = ()
}
