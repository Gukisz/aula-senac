//Exercício 

const nome = "Ygor"
const anoAtual = 2024
const anoNascimento = 2004

const idade = anoAtual - anoNascimento
const maiorDeIdade = idade >= 18;
const idade2050 = 2050 - anoNascimento;

console.log(nome, maiorDeIdade, idade2050)

//Exercício 1

const bool1 = true 
const bool2 = false
const bool3 = !bool2 //true pois tem o não

let resultado = bool1 && bool2 
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) //true
console.log("c. ", resultado) //true

console.log("d. ", typeof resultado) //boolean

//Exercicio 2

//ele declarou os numeros como string com ""
let primeiroNumero = 100
let segundoNumero = 43

const soma = primeiroNumero + segundoNumero

console.log(soma)

//Exercício 3 , colocar o método numeber ou tirar as aspas dos números 
