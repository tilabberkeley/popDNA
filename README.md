# 🧬 popDNA 🧬

popDNA (pdb to oxdna proselytisation for DNA) is a toolkit for fast conversion between large pdb/oxdna/cadnano file formats. 

# Systems

* popDNA support and encourages command line interface for fastest results
* popDNA has web API [popDNA.io](https://www.popDNA.io) which can be used for cross site requests

# Installation 

### MacOS

Install with homebrew `brew install popdna`

### GNU/Linux

Install with apt `apt install popdna`

### Windows

Install GUI for Windows from [popDNA.io/windows](https://www.popDNA.io/windows)


# Running popDNA

### MacOS and GNU/Linux

Run `popDNA --<tag> <input path> <output path>` to convert to the new file format. `--<tag>` specifies the new file format (i.e. specifying --pdb will 
convert whatever `<input path>` file is to a `pdb` file). `<input path>` can be both relative file path or absolute file path. `<output path>` is optional, 
no specifying this path will result in the new file being created with the same name in the same directory as `<input path>`. 

###### Examples

`popDNA --pdb examples/test.oxdna` --> converts `test.oxdna` to `test.pdb` in `examples` directory.

`popDNA --cadnano examples/test.pdb results/newfile.cadnano` --> converts `test.pdb` to `newfile.cadnano` and saves in `results` directory.

###### Tags

* Current supported tags are `--pdb`, `--oxdna`, `--cadnano`


### Windows


# Using Web API
