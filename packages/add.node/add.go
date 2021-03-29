package main

import "C"
import "github.com/olehan/next.go/packages/add"

//export Add
func Add(a, b float64) float64 {
  return float64(add.Add(int(a), int(b)))
}

func main() {}
