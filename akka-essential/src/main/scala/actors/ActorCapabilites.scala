package actors

import akka.actor.{Actor, ActorRef, ActorSystem, Props}

object ActorCapabilites extends App{
  class SimpleActor extends Actor{

    //each actor has a context
    context.self //information/ identifier about the actor
    override def receive: Receive = {    //context.self.path OR ${self}
      case "hi" => context.sender() ! "Hello, there!"// replying to a message
      case message: String => println(s"[${context.self}] I have received $message")
      case number: Int => println(s"[simple actor] I have received a Number: $number")
      case SpecialMessage(contents) => println(s"[simple actor] I have received a SPECIAL content: $SpecialMessage")
      case SendMessageToYourself(content) =>
        self ! content
      case SayHiTo(ref) => ref ! "Hi!"
      case WirelessPhoneMessage(content, ref) => ref forward content(content + "s") // i keep the original sender of the WPM
    }
  }

  val system = ActorSystem("actorCapabilitiesDemo")
  val simpleActor = system.actorOf(Props[SimpleActor], "simpleActor")

  simpleActor ! "hello, actor"

  //1 - messages can be of any type
  //a) - messages must be IMMUTABLE
  //b) - messages must be SERIALIZABLE

  // in practice use case classes and case objects

  simpleActor ! 43

  case class SpecialMessage(contents: String)
  simpleActor ! SpecialMessage("some special content")


  //2 - actors have the information about their context and about themselves
  // context.self === `this` in OOP

  case class SendMessageToYourself(content: String)
  simpleActor ! SendMessageToYourself("I am an actor and I am proud of it")

  //3 - actors can REPLY to messages
  val alice = system.actorOf(Props[SimpleActor], "alice")
  val bob = system.actorOf(Props[SimpleActor], "bob")

  case class SayHiTo(ref: ActorRef)
  alice ! SayHiTo(bob)


  //4 - dead letters
  alice ! "Hi"

  //5 - forwarding messages
  //sending a message with the original sender

  case class WirelessPhoneMessage(content: String, ref: ActorRef)
  alice ! WirelessPhoneMessage



  /*
    Exercises
    1. a counter actor

   */



}
