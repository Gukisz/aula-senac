const rl = require('readline-sync')

function createPersonObject() {
    let name = rl.question("Qual seu nome? ");
    let age = parseInt(rl.question("Quantos anos voce tem? "));
    let profession = rl.question("Qual sua profissão? ");

    let person = {
        name: name,
        age: age,
        profession: profession
    };
    console.log(person);
    console.log(typeof person);
}

createPersonObject();
