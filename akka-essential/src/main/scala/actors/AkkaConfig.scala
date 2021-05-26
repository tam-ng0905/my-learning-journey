package actors

import akka.actor.{Actor, ActorLogging, ActorSystem}
import com.typesafe.config.ConfigFactory

class SimpleLoggingActor extends Actor with ActorLogging{

}


object AkkaConfig extends App{
  /**
   * 1 - inline configuration
   */
  val configString = {
    """
       | akka{
       |  loglevel = "DEBUG"
       | }
    """.stripMargin
    val config = ConfigFactory.parseString(configString)
    val system = ActorSystem("ConfigurationDemo", ConfigFactory.load(config))
    val actor = system.actorOf(Props[SimpleLoggingActor])

    actor ! "A message to remember"
  }
}
