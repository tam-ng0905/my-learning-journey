package akka
import akka.actor.{ActorSystem, Actor, Props}

class ActorIntro extends App{
  //part 1 - actor systems
  val actorSystem = ActorSystem("firstActorSystem")
  println(actorSystem.name)

  //part 2 - create actors
  //actors are uniquely identified within a system
  //each actor may respond differently
  //actor are encapsulated

  class WordCountActor extends Actor{
    var totalWords = 0
    def receive: PartialFunction[Any, Unit] = {
      case message: String => totalWords += message.split(" ").length
      case msg => println(s"[Word counter] I cannot understand ${msg.toString}")
    }
  }

  //part3 - instantiate our actor
  val wordCounter = actorSystem.actorOf(Props[WordCountActor], "wordCounter")



}
