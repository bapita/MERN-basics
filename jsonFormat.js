const fs = require('fs');
// JSON Stands for Javascript Object Notation 
// JSON is a light weight format for storing and transporting data 
// JSON is often used when data is sent from a server to a web page


// creating an object and then will convert that into JSON 
const bioData = {
    name: "Bapita",
    class: "10th A", 
    stream: "Science"
}

// converting object to JSON 
const jsonData = JSON.stringify(bioData);
console.log(jsonData)

// to convert JSON data into object or normal string 
const objData = JSON.parse(jsonData);
console.log(objData)

// creating a JSON file file 
fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done")
})

// reading JSON data from an external file
fs.readFile("json1.json", "UTF-8", (err, data) => {
    console.log(data)
    const orgData = JSON.parse(data);
    console.log(orgData)
})