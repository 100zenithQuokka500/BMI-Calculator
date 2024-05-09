let form =document.querySelector('form')
let height=document.getElementById('height')
let weight=document.getElementById('weight')
function calc(height,weight){
    return weight/((height)*(height));
}
let bmi=calc(height,weight);
let result=document.getElementById('results')
result.textContent=bmi