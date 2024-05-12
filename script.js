let form =document.querySelector('form')
//const height=parseInt(document.querySelector('#height').value)
//this will give you empty
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(height === '' || height<0 || isNaN(height)){//isNaN is used to check if a no is not a no and return boolean values
        results.innerHTML=`Please give a valid height ${height}`
    }
    else if(weight  === '' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight ${weight}`
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`;
        if(bmi<18.6){
            results.textContent+=` is Underweight`
        }
        else if(bmi>=18.6 && bmi<=24.9){
            results.textContent+=` is Normal weight`
        }
        else if(bmi>24.9){
            results.textContent+=` is Overweight`
        }
    }
})
