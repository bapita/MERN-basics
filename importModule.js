const operator = require('./exportModule');
//or can be imported as follows like objects
const { add, sub, mul, div, mod, name } = require('./exportModule'); // obj destructuring

// When importing without referring to objects
console.log(operator.add(6,5));
console.log(operator.sub(10,9));
console.log(operator)

// When importing as objects
console.log(add(77,9));
console.log(sub(77,9));
console.log(mul(77,9));
console.log(div(77,9));
console.log(mod(77,9));
console.log(name)
