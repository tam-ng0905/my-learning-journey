package actors

import akka.actor.{Actor, ActorSystem, Props}

object Intro extends App{
  //part1 - actor systems

  val actorSystem = ActorSystem("firstActorSystem")
  //heavy weight data structure => control running threads - should only have one actor system for one instance
  println(actorSystem.name)


  //part2 - create actors
  //akka is like the way human talking to each others

  //actors are uniquely identified
  //messages are asynchronous
  //each actor may respond differently
  //actors are encapsulated

//  word count actor
  class WordCountActor extends Actor {
    var totalWords = 0

  //def receive: Receive = {
    def receive:PartialFunction[Any, Unit] = {
      case message: String =>
        println(s"[word counter] I have received: $message")
        message.split(" ").length
      case msg => println(s"[word counter] I cannot understand ${msg.toString}")
    }
  }

  //part3 - instantiate our actor
  val wordCounter = actorSystem.actorOf(Props[WordCountActor], "wordCounter")
  //ActorRef is a data structure which Akka gives us, only talk to it, no poke inside

  //part4 - communicate!
  wordCounter ! "I am learning Akka and it's pretty damn cool!" //"tell"
  //! is the name of the method we are invoking


  //companion object
  object Person{
    def props(name: String) = Props(new Person(name))
  }
  class Person(name: String) extends Actor{
    override def receive: Receive = {
      case "hi" => println(s"Hi, my name is $name")
    }
  }


//  val Person = actorSystem.actorOf(Props(new Person("Bob")))
  //use the companion
  val Person = actorSystem.actorOf(Person.props("Bob"))
  Person ! ("hi")
}
