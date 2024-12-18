// Functions 



function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("N")
    console.log("T")
}
// sayMyName // Reference to function 
// sayMyName() // Executing a function 

// function addTwoNumbers(number1 ,number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1 ,number2){
    // let result = number1+number2
    // return result
    return number1+number2
}

// addTwoNumbers(4,5)
// addTwoNumbers(2,"Santosh")

const result = addTwoNumbers(3,5)
// console.log("Result: ", result);
// 

function loginUserMessage(userName = "Sam"){
    if(userName===undefined){
        console.log("Please Enter User Name")
        return;
    }
    return `${userName} just logged in`;
}

// console.log(loginUserMessage("Santosh"))

console.log(loginUserMessage())
