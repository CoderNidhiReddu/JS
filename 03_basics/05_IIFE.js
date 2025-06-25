// immediately invoked function expression (iife) : 
// 1. we want to protect from global scope pollution (var,func,obj,declarations) , so we define our different scope
// 2. and the function immediately executes

(function welcome() {                                                               
    // named IIFE : IIFE with name welcome
    console.log("DB Connected ")
}) ();

// (function definition)(execution call)   : this function is invoked but don't know where to stop the context so we end iife with ;     

( (name) => {
    // Simple/ Unnamed IIFE with parameter
    console.log(`DB Connected Two ${name}`)
})("Sam")