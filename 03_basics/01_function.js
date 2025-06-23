
function myfun(){                                                       // function with no parameters
    console.log("Hello Js Learner :) ")
}

// myfun()

function addition (num1 , num2){                                        // function with some parameters
    // console.log(num1 + num2);
}

// addition()          // NaN
// addition(5,3)
// addition(8 , "7")
// addition(1 , "r")
// addition(5,null)

const result = addition(8,5)                            
// console.log("Result : ",result)                 // undefined


function multiplication(num1,num2){                                     // funtion with return statement
    return num1 * num2;
}
const res = multiplication(8,5)
// console.log("Result : ",res)


function userlogin(username){                                               // function with if statement
    // if (username === undefined ){
    if(!username){
        console.log(`Please enter a user name!!`)
        return
    }
    return `${username} just logged in.`
}

// console.log(userlogin())  
// console.log(userlogin("Nidhi"))



function userlogin(username = "sam"){                                          // function with default parameters
    if(!username){
        console.log(`Please enter a user name!!`)
        return
    }
    return `${username} just logged in.`
}

console.log(userlogin())
