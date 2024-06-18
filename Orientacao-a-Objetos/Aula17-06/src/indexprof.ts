//Exemplo do professor (Exercicio 1)

var leitor = require('readline-sync')

class Carro{
    motor: number
    rodas: number
    marca: string
    cor: string
    kmmax: number

    constructor(motor: number, rodas: number, marca: string, cor: string, kmmax: number){
        this.motor = motor
        this.rodas = rodas
        this.marca = marca
        this.cor = cor
        this.kmmax = kmmax
    }

    dirigir(){
        console.log(`Estou dirigindo meu ${this.marca}`);
    }

    acelerar(){
        console.log(`O seu ${this.marca} chegou a ${this.kmmax} km/h`);
    }

    lavar(){
        console.log(`Estou lavando meu ${this.marca}`);
    }
}

/* motor: number
rodas: number
marca: string
cor: string
kmmax: number
*/

var motorNovo = leitor.questionFloat('Qual o tipo do seu motor? ')
var rodasNovo = leitor.questionInt('Qual o aro da roda do seu carro? ')
var marcaNovo = leitor.question('Qual a marca do seu carro? ')
var corNovo = leitor.question('Qual é a cor do seu carro? ')
var kmmaxNovo = leitor.questionInt('Qual a kilometragem máxima? ')

var carroNovo = new Carro(motorNovo, rodasNovo, marcaNovo, corNovo, kmmaxNovo)

console.log(carroNovo)

//Exercicio 2
class Pessoa {
    nome:       string;
    idade:      number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar(): void {
        console.log(`Olá, eu sou ${this.nome}!`);
    }
}
//Exercicio 3
class Crianca extends Pessoa {
    cumprimentar(): void {
        console.log(`Oi, eu sou ${this.nome} e tenho ${this.idade} anos! Sou uma criança.`);
    }
}

class Adulto extends Pessoa {
    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. Sou um adulto.`);
    }
}

class Idoso extends Pessoa {
    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome}. Estou na terceira idade, tenho ${this.idade} anos.`);
    }
}

const crianca = new Crianca('Duda', 8);
const adulto = new Adulto('Carlos', 35);
const idoso = new Idoso('Maria', 70);
const pessoa = new Pessoa('Gustavo', 19);  

crianca.cumprimentar(); 
adulto.cumprimentar();  
idoso.cumprimentar();   
pessoa.cumprimentar();

//Exercicio 3
class Book{
    title: string;
    author: string;
    yearPubli: string;
    
    constructor(title: string, author: string, yearPubli: string){
        this.title      = title; 
        this.author     = author; 
        this.yearPubli  = yearPubli;
    }
    getDetail(): string {
        return (`O nome do livro é ${this.title} o autor do livro é ${this.author} e o ano de publicação é ${this.yearPubli}`)
    }
}

let newBook = new Book('Senhor dos Anéis', 'J.R.R. Tolkien', '29/07/1954')

newBook.getDetail() 
