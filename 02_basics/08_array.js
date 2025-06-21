/*In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types.

JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes,
but must be accessed using nonnegative integers (or their respective string form) as indexes

JavaScript arrays are zero-indexed and the last element is at the value of the array's length property minus 1.

JavaScript array-copy operations create shallow copies. (shallow copies whose properties shares the same reference). */


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let myarr = [1,5,8,9,6]
let arr = new Array(4,5,8,6,2)
let arr2 = ["rohit","sohit","ganesh"]

// methods

arr.push(80)
arr.push(1)
arr.pop()
// console.log(arr)

arr.unshift(100)                // add in starting
// console.log(arr)

arr.shift()                     // delete from start    
// console.log(arr)


console.log(arr.includes(55))
console.log(arr.indexOf(71))

const newarr = myarr.join()
// console.log(newarr)
// console.log(arr)

// console.log(typeof newarr)

// slice , splice
console.log("A ",arr)

const x = arr.slice(1,3)
console.log(x)
console.log("B" , arr)

const y = arr.splice(1,3)
console.log(y)
console.log("C",arr)


