// const userEmail = "Santosh@gmail.com"

// if(userEmail){
//     console.log("Got the Email")
// }
// else{
//     console.log("Don't have the email")
// }
// falsy values 
// false,0,-0,BigInt 0n, "", null, undefined, NaN
// Other are truthy values
//"0", 'false, " ", [],{},function(){} // truthy values exception 

// if(userEmail.length===0){
//     console.log("array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}


/// Nullish Coalescing Operator  (??): null undefined 

let val1;
// val1 =5??10

// val1 = null ?? 10

// val1 = undefined ?? 15
val1= null ?? 10?? 20
console.log(val1)


// Terniary Operator 

// condition ? true: false


const iceTeaPrice = 100

iceTeaPrice <=80 ?console.log("less then 80"): console.log("greater the 80")
