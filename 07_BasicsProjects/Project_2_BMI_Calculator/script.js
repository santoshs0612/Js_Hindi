
const forms = document.querySelector("form")
// console.log(forms)


forms.addEventListener('submit',function(e){
    e.preventDefault()

    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    let result = document.querySelector("#results")

    if(height==="" || height < 0 || isNaN(height)){
        result.innerHTML =`Please Give a Valid Height ${height}`;
    }
    else if(weight==="" || weight < 0 || isNaN(weight)){
        result.innerHTML =`Please Give a Valid Weight ${weight}`;
    }else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        //show the result 
        result.innerHTML = `<span>${BMI}</span>`
    }
})


