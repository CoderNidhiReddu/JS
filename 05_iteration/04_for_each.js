let var1 = ["python","js","swift","ruby","cpp"]

// var1.forEach((element) => {
//     console.log(element)
// });

var1.forEach(function(element){
    // console.log(element)
});

function printme(val) {
    // console.log(val)
}
var1.forEach(printme);                                              // we are giving reference of our function not calling it

var1.forEach((element,index, arr)=>{                                        // multiple parameters in foreach
    // console.log(element,index,arr)
})

// array of objects
const arr =[
    {
        language :"javascript",
        extension:"js"
    },
    {
        language : "python",
        extension : "py"
    },
    {
        language : "c++",
        extension :"cpp"
    }
]

arr.forEach((key)=>{
    // console.log(key.language)
})

// foreach do not return any value
const num = var1.forEach((element)=>{
    // console.log(element)
    return element
})

// console.log(num)            // undefined

const nums = [1,2,3,4,5,6,7,8,9,10]
const n = nums.filter((value)=> value >5)                                   

/*
array.filter(callbackfn , condition)            elements which satisfies the condition are returned 
*/

// console.log(n)

const n2 = nums.filter((value)=>{                                       // when we define our scope {} then we have to write return statement
    return value>5
})


// same can be done using foreach
let newnum =[]
nums.forEach((element)=>{
    if(element>5){
        newnum.push(element)
    }
})

console.log(newnum)