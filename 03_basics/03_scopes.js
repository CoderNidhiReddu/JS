var c = 60                      // global scope

if (true) {
    let a = 10                  // block scope
    const b =20
    // var c = 30
    c = 30
}

// console.log(a)               // error
// console.log(b)               // error
console.log(c);                 // 30


/*  when we go to browser -> inspect -> console (core scope) and in code environment we run code through node, these global scopes are different  */

function one (){
    const username ="Sam";

    function two(){
        const website = " google"
        // console.log(username)                                   // outer scope variables can be accessed called as clouser
    }
    // console.log(website)                                        // error : cannot acces variable outside its scope
    two()
}
one()

console.log(addone(5))                                          // print the result         : deeply understand in function hosting

function addone(num){
    return num +1
}

// console.log(addone(5))


// console.log(addtwo(8))                                  // error: function accessed before declaration
const addtwo = function(num){                                       // called as expression
    return num + 2
}

// console.log(addtwo(8))