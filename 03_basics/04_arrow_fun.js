// this refers to the current context(what are you saying about)

const user = {
    username : "JOHN",
    address : "California",

    websiteMessage : function(){
        console.log(`${this.username} ,welcome to website`)
        // console.log(this)                                           // return the current context or current values of variables
    }
}

// user.websiteMessage()

user.username = "Sam"
// user.websiteMessage()

// console.log(this)                                               // {}  , now this refers to global context which is now empty : becoz we are in node env    

/* but if we run console.log(this) in browser console it will return window object becoz in browser the global object is window object */


function myfun (){
    // console.log(this)                   // this will print multiple values

    const username = "Henry"
    console.log(this.username)                  // undefined : the context 'this' only works in objects not functions
}

// myfun()  

const myfun2 = function(){
    const user = "Tonny"
    console.log(this.user)
}
// myfun2()                        // same result as above function



// +++++++++++++++++++++++++++++++++++++++  ARROW FUNCTION     +++++++++++++++++++++++++++++++++++++++++++++

const myfun3 = ()=> {
    let username = "John"
    console.log(this.username)              // undefined
    console.log(this)                           // {}
}

// myfun3()


//  Difference of using this in arrow function and in normal function
const addtwo = (num1 , num2) => {
    return num1 + num2
}
// console.log(addtwo(8,6))

// Implicit return in arrow function
// const add = (n1,n2) => n1 + n2
const add = (n1,n2) => (n1 + n2)                            // implicit return
console.log(add(8,3))

const user2 = () => ({username : "John"})
console.log(user2())

// arrow func in loops
const myarr = [5,6,,5,2,6,7]
// myarr.forEach(function () {})
// myarr.forEach( () => {} )
