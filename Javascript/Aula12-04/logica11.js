let rl = require('readline-sync')

function chooseNumber(){
    let randomNumber = Math.floor(Math.random() * 100) + 1
    let trying = 0
    let kick;

    while (kick !== randomNumber){
        kick = Number(rl.question(`Adivinhe o número entre 1 e 100: `))
        if (kick < randomNumber){
        console.log(`tente um número maior`)
        } else if (kick > randomNumber){
        console.log(`tente um número menor`)
        }
    trying++;
    }
}

chooseNumber()