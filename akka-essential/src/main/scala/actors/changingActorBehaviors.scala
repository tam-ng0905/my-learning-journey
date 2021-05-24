package actors

import actors.changingActorBehaviors.Mom.MomStart
import akka.actor.{Actor, ActorRef, ActorSystem, Props}

object changingActorBehaviors extends App{
  object FussyKid {
    case object KidAccept
    case object KidReject
    val HAPPY = "happy"
    val SAD = "sad"
  }
  class FussyKid extends Actor{
    import FussyKid._
    import Mom._
    var state = HAPPY
    override def receive: Receive = {
      case Food(VEGETABLE) => state = SAD
      case Food(CHOCOLATE) => state = HAPPY
      case Ask(_) =>
        if(state ==HAPPY) sender () ! KidAccept
        else sender() ! KidReject
    }
  }



  class StatelessFussyKid extends Actor{
    import FussyKid._
    import Mom._
    override def receive: Receive = ???
    def happyReeive: Receive = {

    }
    def sadReceive: Receive = {

    }
  }



  object Mom{
    case class MomStart(kidRef: ActorRef)
    case class Food(food: String)
    case class Ask(message: String)
    val VEGETABLE = "veggies"
    val CHOCOLATE = "chocolate"
  }
  class Mom extends Actor{
    import Mom._
    import FussyKid._
    override def receive: Receive = {
      case MomStart(kidRef) =>
        kidRef ! Food(VEGETABLE)
        kidRef ! Ask("Do you want to play?")
      case KidAccept => println("Yay, my kid is happy!")
      case KidReject => println("My kid is sad, but as he's healthy")
    }
  }

  val system = ActorSystem("changingActorBehaviorDemo")
  val FUSSYkid = system.actorOf(Props[FussyKid])
  val mom = system.actorOf(Props[Mom])
  mom ! MomStart(FUSSYkid)
}
