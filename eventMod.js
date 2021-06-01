// Events Module 
// Node.js has a built-in module, called "Events",
// where we can create, fire and listen for your own events 
// Ex 1 - Registering for the event to be fired only one time using once 
// Ex -2 - Create an event emmiter instance and register a couple of call backs 
// Ex 3 - Registering for the event with callback parameters 

const EventEmitter = require('events');
const event = new EventEmitter(); // creating object  of the class events 

// adding event listener before calling 
event.on('sayMyName', () => { // a callback function to define our event 
    console.log("your first name is Bapita")
})

// adding event listener for multiple callback function
event.on('sayMyName', () => { // a callback function to define our event 
    console.log("you last name is Roy")
})

// event Listener for check status of page 
event.on('checkPage', (status, msg) => {
    console.log(`the status code is ${status} and message is ${msg}`)
})

// creating own event using emit 
event.emit('sayMyName');
event.emit('checkPage', 200, 'ok'); //  passing parameters

