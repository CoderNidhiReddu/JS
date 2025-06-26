const books = [
    { name :"bookone",genre : "geography",publish : 1988,addition : 2000},
    { name :"booktwo",genre : "maths",publish : 1904,addition : 1998},
    { name :"bookthree",genre : "science",publish : 2016,addition : 2024},
    { name :"bookfour",genre : "geography",publish : 2008,addition : 2015},
    { name :"bookfive",genre : "history",publish : 1850,addition : 1960},
    { name :"booksix",genre : "science",publish : 1942,addition : 2005}
];

let userbooks = books.filter((bs)=>bs.genre === 'geography')

// userbooks = books.filter((bs)=> bs.publish <= 2000 && bs.genre === 'geography')
userbooks = books.filter((bs)=>{
    return bs.publish <= 2000 && bs.genre === 'geography'
})

// console.log(userbooks)

const nums = [1,2,3,4,5,6,7,8,9]
 
// const numbers = nums.map((num)=> num + 10)
const numbers = nums.map((num)=>{ return num + 10})
// console.log(numbers)


// chaining  : .map().map()  or .map().map().filter()               :- map returns all values but filter returns some selected values
// in 2nd map function the values are entering are the result of first function

const newnum = nums
                    .map((n)=>n*10)
                    .map((n)=> n + 3)
                    .filter((n)=> n<=56)

console.log(newnum)

