const http = require('http');
const fs = require('fs');
var requests = require("requests");
const port = process.env.PORT || 8000;

const homeFile = fs.readFileSync("home.html","utf-8");
const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp/10);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min/10);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max/10);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperature;
}
const server = http.createServer((req,res) => {
    if(req.url == "/"){
        // nodeJS streams
        requests('http://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=dbe7ec7fd358d632555d8a6d51fb087d')
        .on('data',(chunk) => {
            const objData = JSON.parse(chunk);
            const arrData = [objData]; // array of an object
          //console.log(arrData[0].main.temp)
            const realTimeData = arrData.map((val)=> replaceVal(homeFile, val)).join("");
            res.write(realTimeData);
        })
        .on('end', (err) => {
          if (err) return console.log('connection closed due to errors', err);
         
         res.end();
        });
    }
})

server.listen(port,"127.0.0.1");