package org.pragmatic.scala

object implicitParam extends App{
  class Wifi(name: String){
    override def toString: String = name
  }
  def connectToNetwork(user:String)(implicit wifi: Wifi){
    println(s"User: $user connected to WIFI $wifi")
  }

  def atOffice(): Unit = {
    println("---At office---")

    implicit def officeNetwork: Wifi = new Wifi("office-network")

    val cafeteriaNetwork = new Wifi("cafe-connect")

    connectToNetwork("guest")(cafeteriaNetwork)
    connectToNetwork("Jill Coder")
  }

  def atJoesHome(): Unit = {
    println("---at Joe's home---")
    implicit def homeNetwork: Wifi = new  Wifi("home-network")

    connectToNetwork("guest")(homeNetwork)
    connectToNetwork("Joe Hacker")
  }

  atOffice()
  atJoesHome()
}
