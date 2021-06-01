// To access web pages of any application we need a web server 
// Web server handles http requests 
// NodeJS provides capability to create own web server to handle http requests asynchronously


// to use http module, we must require("http")
const http = require("http");

//creating http server 
const server = http.createServer((req, res) => {
    // the req object can be used to get the current information about current http request
    res.end('Hello this is response aganinst current http req');
    console.log(req.url) // fetches the current url
    })
// the http.createServer() method includes request and response parameters 

//to make request 
server.listen(8000,"127.0.0.1", () => {
    console.log("listening to port 8080")
})