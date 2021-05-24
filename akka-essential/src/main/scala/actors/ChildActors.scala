package actors

import actors.ChildActors.Parent.{CreateChild, TellChild}
import akka.actor.{Actor, ActorRef, ActorSystem, Props}

object ChildActors extends App{

  //actors can create other actors
  object Parent {
    case class CreateChild(name: String)
    case class TellChild(message: String)
  }
  class Parent extends Actor {
    import Parent._


    //child is immutable variable
    var child: ActorRef = null

    override def receive: Receive = {
      case CreateChild(name) =>
        println(s"${self.path} creating child")

        val childRef = context.actorOf(Props[Child], name)
        child = childRef
        context.become(withChild(childRef))
      case TellChild(message) =>
        if (child != null) child forward message
    }
    def withChild(childRef: ActorRef): Receive = {
      case TellChild(message) =>
        if(childRef != null) childRef forward message
    }

  }

  class Child extends Actor {
    override def receive: Receive = {
      case message => println(s"${self.path} I got: ${message}")
    }
  }

  val system = ActorSystem("ParentChildDemo")
  val parent = system.actorOf(Props[Parent], "parent")
  parent ! CreateChild("child")
  parent ! TellChild("hey kid")


  //actor hierarchy
  //parent -> child1 (-> grandChild)...
  //       -> child2

  //who owns parent?

  /*
  Guardian Actors
  - every Akka System has 3 Guardian Actors
  - /system = system guardian
  - /user = user-level guardian
  - / = the root guardian ( managing both system and user actor)
   */


  /*Actor selection

   */

}
