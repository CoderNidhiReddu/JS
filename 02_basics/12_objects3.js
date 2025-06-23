// object destructure

const course = {
    coursename : "js by chaiaurcode",
    prince : 1999,
    courseteacher : "hitesh"

}
// course.coursename

const{coursename} = course
console.log(coursename)

const {courseteacher : teacher } = course
console.log(teacher)


/*  json files
[
    {},
    {},
    {}
]
*/



// https://randomuser.me/api/           : paste in json formatter   to understand the api data