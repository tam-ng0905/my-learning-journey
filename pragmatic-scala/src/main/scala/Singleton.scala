package org.pragmatic.scala
import scala.collection.mutable._
object Singleton {
  class Marker(val color: String){
    println(s"Creating ${this}")
    override def toString = s"marker color $color"
  }

  object MarkerFactory {
    private val markers = Map(
      "red" -> new Marker("red"),
      "blue" -> new Marker("blue"),
      "yellow" -> new Marker("yellow")
    )
    def getMarker(color: String): Marker = markers.getOrElseUpdate(color, new Marker(color));
  }
}
