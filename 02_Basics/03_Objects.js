// singleton (when we declare through literals it not form singleton)
//Object.create()
// Now we will use literals 

//object literals

const mtSym = Symbol("key1")


const JsUser = {
    name:"Santosh",
    "Full Name":"Snatosh Kumar",
    age: 18,
    location: "Jaipur",
    [mtSym]: "Bilok",
    email: "santosh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full Name"])
// console.log(JsUser[mtSym])
// console.log(typeof JsUser.mtSym)
JsUser.email = "santosh@gpt.com"
// Object.freeze(JsUser);

JsUser.email = "Hello@google.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());


JsUser.greeting2 = function(){
    console.log(`Hello Js User ${this["Full Name"]}`);
}
console.log(JsUser.greeting2());