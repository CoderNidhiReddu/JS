//  singleton : the object which is only one of its type
// when object is made by a constructor
// when object is made from another ways(literals) singleton is not formed

const { use } = require("react")

let user = {
    0:"kunj",
    name:"rohan",
    "age":15,
    email : "abc@gmail.com",
    isloggedin : false,
    friends : ["Romit","Insu","Jaggu"]

}

console.log(user.name)
// console.log(user.age)