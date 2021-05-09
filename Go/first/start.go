package main

import "fmt"

var flag bool;
func main() {
	fmt.Println("Hello, world !")
	first := false
	flag = true
	fmt.Println(flag)
	fmt.Println(first)

	var x int = 10
	x *= 2

	var y int = x
	fmt.Println(y)

	var a int = 10
	a = 205
	fmt.Println(a)

	_0 := 0_0
	fmt.Println(_0)
}
