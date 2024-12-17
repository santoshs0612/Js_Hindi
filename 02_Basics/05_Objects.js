//Object Destructure

const course ={
    courseName:"JsHindi",
    price:"999",
    courseInstructor:"Satosh"
}

// course.courseInstructor
const {courseInstructor:instructor}=course
console.log(instructor)

const navbar = ({company}) => {

}
navbar(company = "Santos")

///// Apis 

// {
//     "name": "Santosh",
//     "courseName":"Js Hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]