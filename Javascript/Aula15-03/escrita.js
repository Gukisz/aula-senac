//exercicio de escrita

const idade = 19
const amigo = 17

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > amigo)

console.log("A diferença de idade é:", idade - amigo)

//Programa 2

const numeroPar = 20
// Resposta: O resto da divisão de qualquer número par por 2 sempre será 0.

console.log("Resto da divisão por 2:", numeroPar % 2)
// Resposta: Se trocarmos para um número ímpar, o resto da divisão por 2 será 1

//Programa 3

const idadeEmAnos = 19
const idadeEmMeses = idadeEmAnos * 12 //meses do ano
const idadeEmDias = idadeEmAnos * 365 //dias do ano
const idadeEmHoras = idadeEmDias *24 // horas do dia

console.log("Minha idade em:", idadeEmAnos)
console.log("Minha idade em:", idadeEmMeses)
console.log("Minha idade em:", idadeEmDias)
console.log("Minha idade em:", idadeEmHoras)

//Programa 4

const numero1 = 20
const numero2 = 10
const primeiraDiv = (numero1 % numero2) === 0 // o === compara o resultado da divisão do numero 1 com o numero 2
const segundaDiv = (numero2 % numero1) === 0  // aqui é a mesma coisa porém invertido

console.log("O primeiro numero é maior que segundo?", numero1 > numero2) 
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2) 
console.log("O primeiro numero é divisível pelo segundo?", primeiraDiv) 
console.log("O segundo numero é divisível pelo primeiro?", segundaDiv) 