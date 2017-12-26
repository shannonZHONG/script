var fs = require('fs')

var dirName = process.argv[2]

process.chdir("/Users/zhongshiran/Desktop") 

var path = "./" + dirName

if (fs.existsSync(path)) {
    console.log('File already exist！')
    process.exit(1)
} else {
    fs.mkdirSync("./" + dirName)
    process.chdir("./" + dirName) 
    fs.mkdirSync('css') 
    fs.mkdirSync('js') 

    fs.writeFileSync("./index.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")
    fs.writeFileSync("css/style.css", "h1{color: red;}")
    fs.writeFileSync("./js/main.js", "var string=\"Hello World\"\nalert(string)")
    process.exit(0)
}
