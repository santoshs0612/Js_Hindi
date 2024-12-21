

// for of 

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
    
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// maps 

const map = new Map()
map.set('In', "India")
map.set('USA', "USA")
map.set('Fr', "France")

// console.log(map)

for (const [key,val] of map){
    console.log(key,val)
}

const myObject = {
    'Game' : "NFS",
    'Game2':"SpiderMan"
}

