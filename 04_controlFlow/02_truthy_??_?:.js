/*
true/false is strictly true/false value
falsy values : false , 0 , -0 , "", BigInt 0n , null , undefined , NaN
truthy valuse   : except falsy values all are truthy : [] , "0" , " " , "false" , {} , function(){}

*/

const useremail = []
if(useremail.length === 0 ) console.log("Array is empty");

const emptyObj = {}
if(Object.keys(emptyObj).length === 0 ) console.log("Object is empty")


/*
false == ""
false == 0
0 == ""
all are true */

// nullish coalesing operator(??) : null undefined
let val ;
// val = 5 ?? 10                           // 5
// val = null ?? 24                            // 24
// val = undefined ?? 13                   // 13
// val = null ?? undefined ?? 40                   // 40
val = null ?? 50 ?? 88                      // 50

console.log(val)

// ternary operator
const price = 8000
price <= 5000 ? console.log("Less than 5000") : console.log("greater than 5000");
