const rl = require('readline-sync')

function greaterNumber(rray){
    let greater = array[0]
    for(let i = 0; i < array.length; i++){
        if (array[i] > greater){  // se quiser achar o menor número fazer ao contrário
            greater = array[i];  
        }    
    }
    return `o meu maior número é ${greater}`  
}   
const array = [11, 15, 18, 14, 12, 13]
console.log(greaterNumber(array))