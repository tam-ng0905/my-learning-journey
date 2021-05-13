package com.rockthejvm

object Advanced extends App{
  lazy val aLazyValue = 2
  lazy val lazyValueWithSideEffect = {
    println("I am so lazy")
    43
  }

  //useful in infinite collections

  //pseudo-collection: Option, Try
  def methodWhichCanReturnNull(): String = "Hello, Scala"
  val anOption = Option(methodWhichCanReturnNull())//Some("hello, Scala")

  val stringProcessing = anOption match {
    case Some(string) => s"I have obtained a valid string: $string"
    case None =>"I obtained nothing"
  }
}
