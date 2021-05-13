package com.rockthejvm

class Loop {
  val x = 3 //constant

  var y = 5
  y = 999 //ok


  //loop is bad practice
  while(y < 9999) {
    println("Hey ma, I am looping")
    y += 1
  }

  //imperatively = INSTRUCTIONS
  //using Scala, you have to think functionally
  //using EXPRESSION
  val result = (999 to 99999).foreach(_ => println("Hey ma"))

  List(1,2,3).map(x => x + 1)
  List(1,2,3).flatMap(n => Seq.fill(n)(1)) //List(1, 1,1, 1,1,1, 1,1,1,1)
  List(1,2,3).filter(n => n % 42 == 0)
  //fold, find, count, maxBy, sum, reduce

  //newb = "how can I loop through this list?"
  //mature = "how can I transform this into what i want?"

  // foreach fallacy
  List(1,2,3).foreach{x =>
    println(x)
  }


  /*
  List<Integer>
   */




}
