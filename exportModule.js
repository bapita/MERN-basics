const add = (a,b) => {
    return(a+b);
}
const sub = (a,b) => {
    return(a-b);
}

const mul = (a,b) => {
    return(a*b);
}

const div = (a,b) => {
    return(a/b);
}

const mod = (a,b) => {
    return(a%b);
}

const name = "Bapita";

// Exporting module
// module.exports.add = add;
// module.exports.sub = sub;

// exporting as objects 
module.exports = { add, sub, mul, div, mod, name };