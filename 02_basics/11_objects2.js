const myobj = new Object()                  // singleton object
// const myobj = {}
// console.log(myobj)


myobj.name = "John"
myobj.id = 158637
myobj.address = "California"

// console.log(myobj)

const user = {
    name : {
        fullname : {
            firstname : " john ",
            lastname : "neslon"
        }
    }
}

// console.log(user)
// console.log(user.name?.fullname.firstname)          // name? if name exists then reduse to manually use of if else in it

const obj1 = {'1':'a','2':'b'}
const obj2 = {'3':'c','4':'d'}

const obj3 = {obj1,obj2}
// console.log(obj3)                   // nested object

const obj4 = Object.assign(obj1,obj2)                   // object.assign(target,source)  : copies all enumerable properties from one or more source to target object

// console.log(obj4)       
// console.log(obj4 === obj1)                      // true

const obj5 = Object.assign({},obj1,obj2)                // target object is now an empty object so alternate objects are source objects
// console.log(obj5)
// console.log(obj5 == obj1)                       // false

const obj6 = {...obj1,...obj2}                          // spread operator
// console.log(obj6)


// when value come from database it will be as array of objects
const userobj = [
    {
        id : 12589,
        email :"abc@jmail.com"
    },
    {
        id : 48623,
        email: "jkl@micro.com"
    },
    {
        id: 79875,
        email : "xyz@amazon.com"
    }
]
// console.log(userobj[1].email)

// can apply loops on objects 
console.log(myobj)
console.log(Object.keys(myobj))                          // return keys in array
console.log(Object.values(myobj))                        // return values in array
console.log(Object.entries(myobj))                       // return nested array of [[key , value]] pairs

console.log(Object.hasOwnProperty("isloggedin"))
