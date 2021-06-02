package actors

import scala.concurrent.Future

object AdvancedScala extends App{
  //partial functions

  // are functions that operate on a subset of a domain

  val partialFunction: PartialFunction[Int, Int] = {
    case 1 => 32
    case 2 => 12
    case 5 => 12323
  }

  val pf = (x: Int) => x match{
    case 1 => 32
    case 2 => 12
    case 5 => 12323
  }

  val modifiedList = List(1,2,3).map{
    case 1 => 43
    case _ => 0
  }

    //lifting
  val lifted = partialFunction.lift
  lifted(2) //Some(12)
  lifted(5000)

  //orElse
  val pfChain = partialFunction.orElse[Int, Int]{
    case 60 => 4932
  }

  pfChain(6) //999 per partialFunction
  pfChain(60) //4832
  pfChain(45) //throw a matchError


  //type aliases
  type ReceiveFunction = PartialFunction[Any, Unit]
  def receive: ReceiveFunction = {
    case hi => println("hello")
    case _ => println("confused...")
  }

  //implicits
  implicit val timeout = 3999

  def setTimeout(f: () => Unit)(implicit timeout: Int) = f()
  setTimeout(() => println("timeout"))


  //implicit conversions
  //1) implicit defs
  case class Person(name: String){
    def greet = s"Hi, my name is $name"
  }

  implicit def fromStringToPerson(string: String): Person = Person(string)
  "Peter".greet
  //fromStringToPerson("Peter").greet - automatically by the complier

  //2) implicit classes
  implicit class Dog(name: String){
    def bark = println("bark!")
  }
  "Lassie".bark
  //new Dog("Lassie").bark

  //organize
  implicit val inverseOrdering: Ordering[Int] = Ordering.fromLessThan(_>_)
  List(1,2,3,4).sorted





  val aThread = new Thread(() => println("I'm running in parallel"))


  class BankAccount(@volatile private var amount: Int){
    override def toString: String = "" + amount

    def withdraw(money: Int) = this.amount -= money
    def safeWithdraw(money: Int) = this.synchronized{
      this.amount -= money
    }
  }

  val future = Future {
    34
  }
  future.onComplete{
    case Success(43) => println("I found the meaning of life")
    case Failure(_) => println("something happened with the meaning of life!!!")
  }
}
