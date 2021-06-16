package org.pragmatic.scala

object scala1 extends App{
  def getPersonInfo(primaryKey: Int): (String, String, String) = {
    ("Tam", "Nguyen", "email@gmaa")
  }

  val (first, last, email) = getPersonInfo(2)
  println(first)
  println(last)
  println(email)
  val info = getPersonInfo(1)

  println(info)

  val numbers = Array(2,432,42342312,1,2,4,5)


}
