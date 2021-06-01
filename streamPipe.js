/*
    stream.pipe(destination, [options]) --> this method is used to take a readable stream and 
    connect it to a writable stream
*/

const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res)=> {

    const rstream = fs.createReadStream("aSync.txt");
    rstream.pipe(res)
})

server.listen(8000,"127.0.0.1")