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



  val discount = 10
  val price = 1000
  val totalPrice = s"The amount after discount is $$${price * (1 - discount/100.0)}"

  println(totalPrice)



  class Vehicle(val id: Int, val year: Int){
    override def toString = s"ID:$id Year: $year"
  }

  class Car(override val id: Int, override val year: Int, var fuelLevel: Int)
  extends Vehicle(id, year){
    override def toString = s"${super.toString} Fuel Level: $fuelLevel"
  }
  val car = new Car(1, 2015, 100)
  println(car)




}
