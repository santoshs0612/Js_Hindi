const coding = ["js","riby","Java","cpp","c"]

// for each 

// coding.forEach( (item)=> {
//     console.log(item);
// })

function printMe(item){
    console.log(item)
}

// coding.forEach(printMe);

// coding.forEach((item,index, arr) => {
//     console.log(item, index,arr)
// })

const myCoding =[
    {
        languageName: "JavaScrtipt",
        languageFileName : "js"
    },
    {
        languageName: "Java",
        languageFileName : "java"
    },
    {
        languageName: "Python",
        languageFileName : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})