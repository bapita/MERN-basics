const fs = require('fs');
// aSync is all about callBack function. It must be there 
// It is called when the task is completed
/**
fs.writeFile('aSync.txt',"this contains aSync functions",(err)=>{
    console.log('file has been created');
    console.log(err);
})
 */

// To add more contents in the file
/*
fs.appendFile('aSync.txt',"\n Appending", (err) => {
    console.log("Appended successfully");
})
*/

// To read the contents of a file 
fs.readFile('aSync.txt',"UTF-8",(err,data) => {
    console.log(data);
})