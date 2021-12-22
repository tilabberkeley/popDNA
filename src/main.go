package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"bufio"
	"regexp"
	"strings"
)

type argError struct {
	inputFormat   string
	outputRequest string
}

func (e *argError) Error() string {
	return fmt.Sprintf("Cannot convert from %s to %s", e.inputFormat, e.outputRequest)
}

func main() {
	args := os.Args[1:]
	if len(args) < 2 {
		fmt.Println("Invalid Number of Arguments Passed.")
		return
	}
	convertTo := args[0]
	inputFilePath := args[1]
	outputFilePath := ""
	// need to validate input file is valid

	if len(args) == 3 {
		outputFilePath = args[2]
	}
	fileExtension := filepath.Ext(inputFilePath)
	// if !verifyFile(inputFilePath, fileExtension) {
	// 	fmt.Println("Invalid input file provided.")
	// 	return
	// }

	if convertTo == "--pdb" {
		if fileExtension == ".oxdna" {
			pdb2oxdna(inputFilePath, outputFilePath)
		} else if fileExtension == ".cadnano" {
			pdb2cadnano(inputFilePath, outputFilePath)
		} else {
			// panic(&argError{convertTo[2:], fileExtension[1:]})
			fmt.Println("Cannot convert from " + convertTo[2:] + " to " + fileExtension[1:])
			return
		}
	} else if convertTo == "--oxdna" {
		if fileExtension == ".pdb" {
			oxdna2pdb(inputFilePath, outputFilePath)
		} else if fileExtension == ".cadnano" {
			oxdna2cadnano(inputFilePath, outputFilePath)
		} else {
			// panic(&argError{convertTo[2:], fileExtension[1:]})
			fmt.Println("Cannot convert from " + convertTo[2:] + " to " + fileExtension[1:])
			return
		}
	} else if convertTo == "--cadnano" {
		if fileExtension == ".oxdna" {
			cadnano2oxdna(inputFilePath, outputFilePath)
		} else if fileExtension == ".cadnano" {
			cadnano2pdb(inputFilePath, outputFilePath)
		} else {
			// panic(&argError{convertTo[2:], fileExtension[1:]})
			fmt.Println("Cannot convert from " + convertTo[2:] + " to " + fileExtension[1:])
			return
		}
	} else if convertTo == "--xyz" {
		if fileExtension == ".pdb" {
			pdb2xyz(inputFilePath, outputFilePath)
		}
	} else if convertTo == "--cif" {

	} else {
		fmt.Println("Unknown conversion tag provided: " + convertTo)
		return
	}
	// fmt.Println("Opening a file...")
	// absPath, _ := filepath.Abs(path)
	// var _, err = os.ReadFile(absPath)
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }
	// fmt.Println(string(data))
}

func pdb2oxdna(inputPath string, outputPath string) {
	if outputPath == "" {
		outputPath = generateDefaultPath(inputPath, ".oxdna")
	} else {
		if !verifyFile(outputPath, ".oxdna") {
			fmt.Println("Improper output file provided, changing to default")
			outputPath = generateDefaultPath(inputPath, ".oxdna")
		}
	}
	fmt.Println("Starting Conversion...")
	//verify output file

}

func pdb2cadnano(inputPath string, outputPath string) {
	if outputPath == "" {
		outputPath = generateDefaultPath(inputPath, ".cadnano")
	} else {
		if !verifyFile(outputPath, ".cadnano") {
			fmt.Println("Improper output file provided, changing to default")
			outputPath = generateDefaultPath(inputPath, ".cadnano")
		}
	}
	fmt.Println("Starting Conversion...")
}

func oxdna2pdb(inputPath string, outputPath string) {
	if outputPath == "" {
		outputPath = generateDefaultPath(inputPath, ".pdb")
	} else {
		if !verifyFile(outputPath, ".pdb") {
			fmt.Println("Improper output file provided, changing to default")
			outputPath = generateDefaultPath(inputPath, ".pdb")
		}
	}
	fmt.Println("Starting Conversion...")
}

func oxdna2cadnano(inputPath string, outputPath string) {
	if outputPath == "" {
		outputPath = generateDefaultPath(inputPath, ".cadnano")
	} else {
		if !verifyFile(outputPath, ".cadnano") {
			fmt.Println("Improper output file provided, changing to default")
			outputPath = generateDefaultPath(inputPath, ".cadnano")
		}
	}
	fmt.Println("Starting Conversion...")
}

func cadnano2pdb(inputPath string, outputPath string) {
	if outputPath == "" {
		outputPath = generateDefaultPath(inputPath, ".pdb")
	} else {
		if !verifyFile(outputPath, ".pdb") {
			fmt.Println("Improper output file provided, changing to default")
			outputPath = generateDefaultPath(inputPath, ".pdb")
		}
	}
	fmt.Println("Starting Conversion...")
}

func cadnano2oxdna(inputPath string, outputPath string) {
	if outputPath == "" {
		outputPath = generateDefaultPath(inputPath, ".oxdna")
	} else {
		if !verifyFile(outputPath, ".oxdna") {
			fmt.Println("Improper output file provided, changing to default")
			outputPath = generateDefaultPath(inputPath, ".oxdna")
		}
	}
	fmt.Println("Starting Conversion...")
}

func pdb2xyz(inputPath string, outputPath string) {
	if outputPath == "" {
		outputPath = generateDefaultPath(inputPath, ".xyz")
		// fmt.Println(outputPath)
	}
	if !verifyFile(outputPath, ".xyz") {
			fmt.Println("Improper output file provided, changing to default")
			outputPath = generateDefaultPath(inputPath, ".xyz")
	}


	file, err := os.Open(inputPath)
	if err != nil {
		panic(err)
	}
	f, err := os.Create(outputPath)
	defer file.Close()
	defer f.Close()
	if err != nil {
		panic(err)
	}
	scanner := bufio.NewScanner(file)
	re, _ := regexp.Compile("([A-Z])")
	
	for scanner.Scan() {
		line := scanner.Text()
		if line != "TER" {
			atom := re.FindStringSubmatch(line[11:15])[0]
			posX := strings.ReplaceAll(line[31:38], " ", "")
			posY := strings.ReplaceAll(line[39:46], " ", "")
			posZ := strings.ReplaceAll(line[47:54], " ", "")
			byteLine := []byte(atom + " " + posX + " " + posY + " " + posZ + "\n")
			f.Write(byteLine)
		}

	}
	
	
	
}

func generateDefaultPath(path string, format string) string {
	dir, _ := filepath.Abs(filepath.Dir(path))
	filename := filepath.Base(path)
	return dir + "/" + filename + format
}

func verifyFile(path string, format string) bool {
	if fileExtension := filepath.Ext(path); fileExtension != format {
		return false
	}

	if _, err := os.Stat(path); err == nil {
		return true
	}

	var temp []byte
	if err := ioutil.WriteFile(path, temp, 0644); err == nil {
		os.Remove(path)
		return true
	}

	return false

}
