//  singleton : the object which is only one of its type
// when object is made by a constructor
// when object is made from another ways(literals) singleton is not formed

const mysym = Symbol("mykey")

let user = {
    0:"kunj",
    name:"rohan",
    [mysym]:"key1",
    "age":15,
    email : "abc@gmail.com",
    isloggedin : false,
    friends : ["Romit","Insu","Jaggu"]

}

console.log(user.name)
// console.log(user.age)            // error
// console.log(user["age"])
// console.log(user[mysym])
// console.log(typeof user[mysym])         // type of its value

user.email = "rohan@microsoft.com"
// console.log(user)

// Object.freeze(user)                         // we are not able to do any change in this object

user.email = "rohan@google.com"
// console.log(user)


user.greetings = function(){
    console.log("Hello , User!!")
}                                                    // adding function in the object

console.log(user.greetings)                         // output is the function reference

console.log(user.greetings())               // output + undefined : Object Method is Logging Internally But Returns Nothing

user.greetings2 = function(){
    console.log(`Hello , User ${this.name}!!`)                                            // access object strings
}

console.log(user.greetings2())