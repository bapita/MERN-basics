const path = require('path');
console.log(path.dirname('/media/sukanya/Data Drive/NodeJS-Projects/demo/pathModule.js'))
console.log(path.extname('/media/sukanya/Data Drive/NodeJS-Projects/demo/pathModule.js'))

// file name is the base name 
console.log(path.basename('/media/sukanya/Data Drive/NodeJS-Projects/demo/pathModule.js'))

// Returns an object with information related to the file
console.log(path.parse('/media/sukanya/Data Drive/NodeJS-Projects/demo/pathModule.js'))

// To fetch properties from parse object
const myPath = path.parse('/media/sukanya/Data Drive/NodeJS-Projects/demo/pathModule.js');
console.log(myPath.name); // file name
console.log(myPath.root)