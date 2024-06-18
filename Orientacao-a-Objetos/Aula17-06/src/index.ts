//Exercício 1
var rl = require('readline-sync')

class Car{
    engine: number
    wheel: number
    brand: string
    color: string
    km : number

    constructor(engine: number, wheel: number, brand: string, color: string, km: number){
        this.engine     = engine
        this.wheel      = wheel
        this.brand      = brand
        this.color      = color
        this.km         = km
    }
    drive(): void {
        console.log(`Estou dirigindo meu ${this.brand}`);
    }
    wash(): void {
        console.log(`Estou lavando meu ${this.brand}`)
    }
    changeWheel(): void {
        console.log(`Estou trocando as rodas do meu ${this.brand}`)
    }
    speedUp(): void {
        console.log(`o meu ${this.brand} chegou a ${this.km} km/h`)
    }
}

var carBrand = rl.question('Digite a marca do seu carro: ')
var carColor = rl.question('Digite a cor do seu carro: ')
var carKm = rl.questionInt('Digite os kilometros rodados do seu carro: ')
var carEngine = rl.questionFloat('Digite qual o modelo do motor do seu carro: ')

const newCar = new Car(carEngine, null, carBrand, carColor, carKm)

console.log(newCar.brand)
console.log(newCar.color)
console.log(newCar.km)
console.log(newCar.engine)

let userInput : string = '';

while (userInput !== '4') {
    userInput = rl.question('Escolha uma função: ');
    switch (userInput) { 
        case '1':
            newCar.drive(); break;
        case '2':
            newCar.wash(); break;
        case '3':
            newCar.changeWheel(); break;
        case '4':
            newCar.speedUp(); break;
        default:
            console.log("Opção inválida. Escolha novamente.");
    }
}


//Exercício 2
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name    =  name;
        this.age     =   age;
    }

    greet(): void {
        console.log(`Olá, eu sou ${this.name}!`);
    }
}

//Exercicio 3
class Child extends Person {
    greet(): void {
        console.log(`Oi, eu sou ${this.name} tenho ${this.age} anos! Sou uma criança.`);
    }
}



class Adult extends Person {
    greet(): void {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos. Sou um adulto.`);
    }
}

class Elderly extends Person {
    greet(): void {
        console.log(`Olá, meu nome é ${this.name}. Estou na terceira idade, tenho ${this.age} anos.`);
    }
}

const child = new Child('Duda', 8);
const adult = new Adult('Carlos', 35);
const elderly = new Elderly('Maria', 70);
const person = new Person('Gustavo', 19);

child.greet(); 
adult.greet();  
elderly.greet(); 
person.greet(); 

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
