const rl = require('readline-sync')

let sum = 0;

while (true) {
    let input = rl.question("Digite um número (ou 0 para parar):");
    let number = Number(input);
    
    if (number === 0) {
        break;
    }

    sum += number;
}

console.log("A soma dos números inseridos é:", sum);
