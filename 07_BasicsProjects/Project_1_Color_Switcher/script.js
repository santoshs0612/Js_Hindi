

const buttons = document.querySelectorAll('.button')
// console.log(buttons)

// const selectSpan = document.querySelectorAll('span')
// console.log(selectSpan)


const body = document.querySelector('body')
// console.log(selectBody)


buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click', function(event){
        console.log(event)
        console.log(event.target)
        if(event.target.id==="grey"){
            // body.style.backgroundColor = "grey"
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==="white"){
            // body.style.backgroundColor = "white"
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==="blue"){
            // body.style.backgroundColor = "blue"
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==="yellow"){
            // body.style.backgroundColor = "yellow"
            body.style.backgroundColor = event.target.id;
        }

    })
})