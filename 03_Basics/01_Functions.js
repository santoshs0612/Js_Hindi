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

// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// here ... is rest operator , it also called spread operator  but here it is rest operator 
// console.log(calculateCartPrice(200))

// console.log(calculateCartPrice(200,400,500))


const user = {
    userName:"Santosh kumar",
    price: 500
}

function handleObject(anyobject){
    console.log(`UserName if ${anyobject.userName} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    userName: "Bilok",
    price:69696
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
