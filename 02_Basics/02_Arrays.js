const marvel_heros = ['Thor' ,"IronMan", "SpiderMan"]
const dcHeros = ["Superman", "Flash", "BatMan"]

// marvel_heros.push(dcHeros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// let allHeros= marvel_heros.concat(dcHeros)
// console.log(allHeros)

// spread Operatior 
const allNewHeors = [...marvel_heros,...dcHeros]

// console.log(allNewHeors)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[5,6]]]

const realANotherArr = anotherArr.flat(Infinity)

// console.log(realANotherArr)

console.log(Array.isArray("Satios"))
console.log(Array.from("Santosh"))
console.log(Array.from({name: "Santosh"})) // Interesting 

let score1= 100
let score2 = 200
let score3= 300
console.log(Array.of(score1,score2,score3))
