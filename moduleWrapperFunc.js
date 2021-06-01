/**module wrapper function is the anonymous function that Javascript create whenever compiles 
 the module. 
 example: 
 (function (exports, require, module, __filename, __dirname) {
     const name = "ABC";
     console.log(name);
 })

 that is why scope of these members remains private 

 There are few parameters in this function 
 exports, require, module, __filename, __dirname

 So, behind the scene this happpens when just 2 lines of code gets executed. 
 */ 


// IFEE Immediately Invoked Function Expression
(function () {
    const name = "ABC";
    console.log(name);  
    console.log(__filename);
    console.log(__dirname)
})();

//console.log(name);  // can not write this because scope of 'name' ends with func