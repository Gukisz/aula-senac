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
var carKm = rl.question('Digite os kilometros rodados do seu carro: ')
var carEngine = rl.question('Digite qual o modelo do motor do seu carro: ')

const newCar = new Car(carEngine, null, carBrand, carColor, carKm)

console.log(newCar.brand)
console.log(newCar.color)
console.log(newCar.km)
console.log(newCar.engine)

let userInput : string;

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
