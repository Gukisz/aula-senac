let nome 
let idade 

console.log (typeof nome, typeof idade) //undefined

nome = "Tulio"
idade = 19

console.log ("Olá", nome,"você tem", 19, "anos")

let VariavelA = 10
let VariavelB = 25
let VariavelC

VariavelC = VariavelA //Fazer um Swap C = A ou seja ele vira 10 a = b ou seja ele vira 25 b = c ou seja ele vira 10
VariavelA = VariavelB
VariavelB = VariavelC

console.log("O novo valor de a é", VariavelA)
console.log("O novo valor de b é", VariavelB)


//comandos a seguir seria com base no sentido literal com o usuario colocando os valores
let ask = require('readline-sync')

let valor1
let valor2

valor1 = Number(ask.question('Digite o primeiro valor:')) 
valor2 = Number(ask.question('Digite o segundo valor:')) 

console.log("O primeiro número somado ao segundo Número resulta em:", valor1+valor2)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", valor1*valor2)


//comandos a seguir seria com base no pdf sem conhecimento
let numero1 = 10
let numero2 = 20

console.log("O primeiro número somado ao segundo número resulta em:", numero1+numero2)
console.log("O primeiro número multiplicado ao segundo número resulta em:", numero1*numero2)