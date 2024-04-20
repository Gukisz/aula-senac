//Comando para fazer perguntas para o usuario.
const readlineSync = require('readline-sync');


//Exercício 1 
let name = "Gustavo"
let color  = "Vermelho"

//Usar crase para usar.
console.log (`A cor favorita de ${name} é ${color}`)
console.log ('A cor favorita de ' + name + ' é ' + color)


//Exercício 2
const originalPhrase = readlineSync.question("Digite uma frase:");

const uppercasePhrase = originalPhrase.toUpperCase();

//Substitui todas as ocorrências da letra "o" pela letra "i"
const alternatePhrase = uppercasePhrase.replaceAll(/O/g, 'I');

const phraseSize = originalPhrase.length;

console.log(`Frase alterada: ${alternatePhrase}`);
console.log(`Tamanho da frase original: ${phraseSize}`);

//Exercício 3

//Função para imprimir a raça de cachorro correspondente ao número escolhido pelo usuário
function dogBreeds(number) {
    
    // Array com raças de cachorro
    let dogBreeds = ["Poodle", "Golden Retriever", "Border Collie", "Pug", "Yorkshire"]

    // Verificar se o número inserido está dentro do intervalo válido
    if (number >= 1 && number <=5) {
        console.log(`A raça do cachorro correspondente a posição escolhida é: ${dogBreeds[number-1]}`);
    } else {
        console.log(`Número inserido inválido`);
}  

}

let choseNumber = readlineSync.question("Insira um Numero de 1 a 5:")

dogBreeds(choseNumber);


//Exercício 4

// Criar o array com os valores dados
let array = [1, 2, 3, 4, 5, 6];

// Determinar o tamanho do array
let previousSize = array.length;
console.log(`Tamanho do array antes das operações: ${previousSize}`);

// Adicionar o número 7
array.push(7);

// Remover os números 4 e 5 com splice
array.splice(3, 2)

// Determinar o novo tamanho do array
let newSize = array.length;

console.log(`Tamanho do array após as operações: ${newSize}`);