// handle multiple arguements

function myfun(...num){                             // ...   rest parameter store arguements as array
    return num;
}

// console.log(myfun(5,63,14,7,8,21))                  


function myfun2(x,y,...num){
    return num;
}

// console.log(myfun2(55,6,8,9,3,4,5))

const user = {
    name : "sam",
    email : "sam@google.com"
}                                                                        // passing objects in a function

/* 
1. in complex scenarios we have to check that anyobj is a object or not
2. the properties we are using of anyobj , are exists or not
  */


function handleobj(anyobj){
    console.log(`username : ${anyobj.name} and email : ${anyobj.email}`)
}
// handleobj(user)


handleobj({
    name:"John",
    email : "John@gmail.com"
})

const myarr = [100,500,300,800,400]
function passarr(getarr){
    return getarr[3]
}                                                  // pass array in function

// console.log(passarr(myarr))
console.log(passarr([100,500,300,800,400]))