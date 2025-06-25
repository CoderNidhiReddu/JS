for (let i = 1; i <= 10; i++) {
    if (i == 3) continue;
    else if (i == 7)    break;
    console.log("Table of " + i)
    for (let j = 0; j <=10; j++) {
        // console.log(i + "x" + j + "=" + i*j)
    }
}

myarr = ["car","train","bike","cycle"]
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element)
}
let i = 1
while (i < 5) {
    console.log(i)
    i ++
}
i = 11
do {
    console.log(i)
    i++;
} while (i<=10);