package org.pragmatic.scala

class implicitPara {
  class Wifi(name: String){
    override def toString: String = name
  }
  def connectToNetwork(user:String)(implicit wifi: Wifi){
    println(s"User: $user connected to WIFI $wifi")
  }

  def atOffice() = {
    println("---At office---")

    implicit def officeNetwork: Wifi = new Wifi("office-network")

    val cafeteriaNetwork = new Wifi("cafe-connect")

    connectToNetwork("guest")(cafeteriaNetwork)
    connectToNetwork("Jill Coder")
  }

  def atJoesHome() = {
    println("---at Joe's home---")
    implicit def homeNetwork: Wifi = new  Wifi("home-network")

    connectToNetwork("guest")(homeNetwork)
    connectToNetwork("Joe Hacker")
  }
}
