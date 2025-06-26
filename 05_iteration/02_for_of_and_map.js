// for of 
//["","",""] array of strings
// [{},{},{}] array of objects

const arr = [1,2,5,85,6,9,3,7]

for (const element of arr ) {
    // console.log(element)
}

const greetings = "Hello World :) "
for (const greet  of greetings) {
    // console.log(`Each character : ${greet}`)
}

/* Map objects are ordered collections of key-value pairs.
 A key in the Map may only occur once; it is unique in the Map's collection. 
 A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.
 Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method */ 

const map = new Map
map.set ('html','code with harry')
map.set('python','code with harry')
map.set('DSA','Coder Army')
map.set('R','WS Cube Tech')
map.set('R','WS Cube Tech')             // not displayed

// console.log(map)

for (const val  of map) {
    // console.log(val)                // [key,val][key,val]
}
for (const [key,value ] of map) {
    // console.log(key + ":-" + value);
}

const myobj ={
    game1 : 'Minecraft',
    game2 : 'Sudoku'
}
for (const [key,value ] of myobj) {
    // console.log(key,":-",value);                        //TypeError: myobj is not iterable
}