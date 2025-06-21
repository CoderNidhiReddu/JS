let arr1 = ["john",'william',55]
let arr2 = ["marian","nelon","cassey"]

// arr1.push(arr2)                         // nested array
// console.log(arr1)
// console.log(arr1[3][1])

let arr3 = arr1.concat(arr2)            // merge two arrays
// console.log(arr3)

let arr4 = [...arr1 , ...arr2]              // ...  will spread all the arrays elements into individuals
// console.log(arr4)

const arr5 = [12,2,58,[3,6,9,[5,8,2],5,3,8[1,2,6]]]
// const arr6 = arr5.flat(Infinity)
const arr6 = arr5.flat(1)
console.log(arr6)


console.log(Array.isArray("rohan"))
console.log(Array.from("Rohan"))
console.log(Array.from({name: "Rohan"}))                // we have to specify from keys or from values our array is to be made

let n1 = 5
let n2 = 8
let n3 = "hardik"

console.log(Array.of(n1,n2,n3))