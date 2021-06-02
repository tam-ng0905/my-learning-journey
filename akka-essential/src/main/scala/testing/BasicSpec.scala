package testing

import akka.testkit.{ImplicitSender, TestKit}
import akka.actor.{Actor, ActorSystem, Props}
import org.scalatest.{BeforeAndAfterAll, WordSpecLike}


class BasicSpec extends TestKit(ActorSystem("BasicSpec"))
  with ImplicitSender
  with WordSpecLike
  with BeforeAndAfterAll {

  //setup
  override def afterAll(): Unit = {
    TestKit.shutdownActorSystem(system)
  }

  import BasicSpec._
  "A simple actor" should {
    "send back the same message" in {
      //testing scenario
      val echoActor = system.actorOf(Props[SimpleActor])
      val message = "hello, test"
      echoActor ! message
      expectMsg(message)
    }
  }


  "A blackhole actor" should {
    "send back some message" in {
      val echoActor = system.actorOf(Props[BlackHole])
      val message = "hello, test"
      echoActor ! message
      expectMsg(message)
    }
  }


  object BasicSpec {
    class SimpleActor extends Actor {
      override def receive: Receive = {
        case message => sender() ! message
      }
    }

    class BlackHole extends Actor {
      override def receive: Receive = Actor.emptyBehavior
    }
  }
}

