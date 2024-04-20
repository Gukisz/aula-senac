let rl = require('readline-sync')

function Factorial() {
    let number = rl.question("Coloque um número para calcular o fatorial:");
    let factorial = 1;
    if (number >= 0 && number) {
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        console.log("O fatorial de:", number, "é:", factorial);
    }
}
Factorial();
