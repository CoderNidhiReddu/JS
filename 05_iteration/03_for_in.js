const myobj = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift : 'swift'
}

for (const key in myobj) {
//    console.log(key)
}

for (const key in myobj) {
    // console.log(key , " : ",myobj[key])
}

const arr = [1,2,3,4,5,6,7]
for (const key in arr) {
    // console.log(key)                    // index
    // console.log(arr[key])
}

const map = new Map
map.set('Bh',"Bharat")
map.set('Usa','United States of America')
map.set('Fr','France')

for (const key in map) {
    console.log(key)                        // not iterable so it print nothing
}