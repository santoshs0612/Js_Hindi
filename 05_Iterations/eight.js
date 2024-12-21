// reduce 

const myNums = [1,2,3]

//  const myTotal = myNums.reduce(function (acc,curVal) {
//     console.log(`acc : ${acc} and currVal :  ${curVal}`)
//     return acc+curVal
//  },0)


const myTotal = myNums.reduce ( (acc, cur) =>  acc +cur,0 )
 console.log(myTotal);

 const shopingCart = [
    {
        itemName : "Js Course",
        price: 2999,
    },
    {
        itemName : "Python Course",
        price: 999,
    },
    {
        itemName : "DSA Course",
        price: 3999,
    },
    {
        itemName : "ML Course",
        price: 6000
    }
 ]
 
 const cartVal = shopingCart.reduce( (acc,item) => acc + item.price,0)
 console.log(cartVal)