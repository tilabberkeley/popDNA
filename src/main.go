package main

import (
	"fmt"
	"os"
	"path/filepath"
)

var path = "../popDNA/src/examples/test.pdb"

func main() {
	fmt.Println("Opening a file...")
	absPath, _ := filepath.Abs(path)
	var data, err = os.ReadFile(absPath)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(data))
}
