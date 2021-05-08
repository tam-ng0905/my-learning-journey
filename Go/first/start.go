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
}
