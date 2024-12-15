const accountId = 12345
let accountEmail= "santosh@gmail.com"
var accountPassword ="12345"
accountCity = "jaipur"

// accountId =2 // not allowed
accountEmail = "f@sfnf.com"
accountPassword = "rsuf"
accountCity= "Bangaluru"
let accountState;
console.log(accountId)
/*
Prefer Not to use Var Bacause of issue in Block scope anf Functional scope 


*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
