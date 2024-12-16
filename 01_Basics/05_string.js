const name = "santosh"
const repoCount = 50

// console.log(name +repoCount +" value")

console.log(` Hello my Name is ${name} and my repo count is ${repoCount}`)

//Another way to declare string 

const gameName = new String("saktiman")

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))

console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
// console.log(newString)

const anotheString = gameName.slice(-8,4)
// console.log(anotheString)

const newStringOne = "     Santosh    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://santosh.com/hello%20World"

console.log(url.replace('%20','-'))


console.log(url.includes('Santosh'))

console.log(gameName.split('a'))


