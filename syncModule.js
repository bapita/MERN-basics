const fs = require('fs'); // file system module
//To create a file and write content in it
//fs.writeFileSync('read.txt',"welcome");

//To overwrite a file 
//fs.writeFileSync('read.txt',"welcome to Node JS");

// Append in an existing file 
//fs.appendFileSync('read.txt',"This is a demo");

// To read contents of a file
//const fileData = fs.readFileSync("read.txt", "utf-8");
//console.log(fileData);
// utf-8 converts the buffer data into string automatically
// const fileData = fs.readFileSync('read.txt'); would give buffer data output

// To rename a file 
//fs.renameSync('read.txt','readWrite.txt');
//////////////////////////////////////////////////////////////////////////////

// to create a directory
//fs.mkdirSync('test');

//To create a file under a folder  and write content in it
//fs.writeFileSync('test/read.txt',"welcome"); 

// To delete a file
//fs.unlinkSync('test/read.txt');

// To delete Directory
fs.rmdirSync('test');

