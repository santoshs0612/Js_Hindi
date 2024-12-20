// //if
// // 
// if(false){

// }
// if(true){
    
// }
// // check for type also ===, ==, <=, !=
// if(2 === "2"){
//     console.log("Exec");
// }

// const temperature = 41;
// if(temperature<50){
//     console.log("less then 50");
// }else{
//     console.log("greter then 41");
// }

const score= 200 

// use only let and const
if(score>100){
    const power = "Fly"
    console.log(`User Power ${power}`);
}
// console.log(`User Power ${power}`); out of scope 


const balance = 1000
// if(balance>500) console.log("test"); // 


// if(balance < 500){
//     console.log("less then 500");
// }else if(balance <750){
//     console.log("LLess then 750");
// }else if(balance<900){
//     console.log("Less then 900");
// }else{
//     console.log("less then 1200");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Allow to buy course");
}