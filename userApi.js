const fs = require('fs');
const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url == "/") {
        res.end('Hello this is Home page');
    }else if(req.url == "/about") {
        res.end('Hello this is About page');
    }else if(req.url == "/contact") {
        res.write("Hello this is Contact page")
        res.end(); // without this , the write function won't work
    }else if(req.url == "/user") {
        fs.readFile(`${__dirname}/userapi.json`, "utf-8", (err, data) => {
            //console.log(data);
            res.writeHead(200, { "content-type" : "application/json" })
            const objData = JSON. parse(data);
            res.end(objData[0].name); // fetching name from the API
        })
        //res.write("Hello this is user page")
        //res.end(data); 
    }else{
        res.writeHead(404, {"Content-type" : "text/html"}) // to change the content header in Network tab of web browser Network tab
        res.end('<h1> 404 Error! Page does not exist </h1>');
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port no 8000")
})