/*
Streams are the objects that let you read data from a source or write data to a destination
in a continuous fashion. In Node.js there are 4 types of Streams. 

Streaming means listening to music or watching video in 'Real-time'

1. Readable - stream which is used for Read operation 
2. Writable - stream which is used for write operation
3. Duplex- stream which is used for both Read and Write operations
4. Transform - A type of duplex stream where output is computed based on the input


Each type of Stream is an EventEmitter instance and throws several events at different instance of times.
Ex- some of the commonly used events are - 

data - This event is fired when there is a Data which is available to read

end - this event is fired when there is no more data to read 

error - this event is fired when there is any error receiving or writing data 

finish - this event is fired when all the data has been flushed to underlying system

 */

const fs = require('fs');
const http = require('http');
const server = http.createServer();

// calling a function when someone does request on our server 

server.on('request', (req, res) => {
    // first way of showing data
    /* 
    fs.readFile("aSync.txt", (err, data) => {
        if(err) {
            return console.error(err);
        }else{
            res.end(data.toString());
        }
    })
    */

    // 2nd way of showing data in streaming manner 
    const rstream = fs.createReadStream("aSync.txt"); 
    
    // reading chunk by chunk 
    rstream.on('data', (chunkdata) => {
        res.write(chunkdata);
    })
    // to show the data 
    rstream.on('end', () => {
        res.end();
    })
    // to show the error if file does not exist
    rstream.on('error', (err) => {
        console.log(err);
        res.end("file not found")
    })
})

server.listen(8000, "127.0.0.1");