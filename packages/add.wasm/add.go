package main

import pkgAdd "github.com/olehan/next.go/packages/add"

//export add
func add(a, b int) int {
  return pkgAdd.Add(a, b)
}

func main() {}
