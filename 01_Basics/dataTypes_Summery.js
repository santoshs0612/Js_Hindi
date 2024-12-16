//  Data Types
// Premitive

// 7 types : String ,Number , Boolean, null,undefined, Symbol,BigInt

// Js Is Dynamically Typed 



//Symbol 

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id===anotherId)// Not Same 

const bigNumber  = 34567656454534343212999n
//console.log(typeof(bigNumber))


// Reference Type (Non Premetive)

// Array ,Objects, Functions 


const heros=["Shaktiman", "NaagRaj", "Doga"]
let myObj = {
    name: "Santosh",
    age: 22,
}

// const myFunction = function(){
//     console.log("Hello World")
// }

// console.log(typeof(myFunction))




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Premitive)  Heap (Non-Primitive)

let email = "santosh8@gmail.com"

let emalNew = email

console.log(emalNew)


let userOne={
    email: "useremail.com",
    upi: "user1.ybl",
} 

let userTwo = userOne;
userTwo.email="santos.0745@gmai.com"

console.log(userTwo.email)
console.log(userOne.email)