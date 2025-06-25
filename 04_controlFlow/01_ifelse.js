// == check if 2 == "2" : true
// === strict check if 2 === "2" : false  it also do typechecking
// !== negative strict check 2 !== 4 : true

const temp = 64
if (temp < 50) {
    // it creates a new scope so variables inside it cann't accessed outside its scope 
    // using var temp = 90 it can be accessed outside if scope
    console.log("Temperature is less than 50.")
} else if(temp <80) {
    console.log(`Temperature is less than 80`)
} 
else {
    console.log(`temperature is grater than 80`)
}

// shorthand method : must use semi colon at end
const price = 2000000
if (price > 5000)   console.log("test"),console.log("test2");


// && :and , || : or 

day = 3

switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid day!!")
        break;
}


