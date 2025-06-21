let mydate = new Date;
// console.log(mydate);
// console.log(mydate.toDateString());

// console.log(mydate.toISOString());

// console.log(mydate.toJSON());

// console.log(mydate.toLocaleString());

// console.log(mydate.toString());

// console.log(mydate.toTimeString());

// console.log(typeof mydate)

let mycreateddate = new Date(2025,5,21)
console.log(mycreateddate.toDateString())               // MONTH START FROM 0

mycreateddate = new Date(2025,5,221,2,32)
console.log(mycreateddate.toLocaleString())

// let newdate = new Date("2025-06-21")                // in string fromat month start from 01
let newdate = new Date("06-21-2025")
console.log(newdate.toDateString())

let time = Date.now()                   // answer in miliseconds
console.log(time)
console.log(newdate.getTime())

console.log(Date.now())
console.log(Math.floor(Date.now()/1000))            //in seconds

console.log(newdate.getDate())

newdate.toLocaleString('default',{
    weekday:"long"
})