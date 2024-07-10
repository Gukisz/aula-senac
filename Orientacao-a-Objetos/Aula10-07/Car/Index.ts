import { Car } from './Car';
import * as readlineSync from 'readline-sync';

// Função para criar e retornar um Carro
function chooseCar(cars: Car[]): Car {
    console.log('Escolha um carro:');
    cars.forEach((car, index) => {
        console.log(`${index + 1}. Carro com consumo de ${car.consume} km/L`);
    });

    const choose = parseInt(readlineSync.question('Digite o número do carro escolhido: ')) - 1;
    return cars[choose];
}

// Base de dados 
const cars = [
    new Car(10), 
    new Car(12),
    new Car(8),
    new Car(15),
    new Car(9),
    new Car(11),
    new Car(7),
    new Car(13),
    new Car(14),
    new Car(10),
];

const chosenCar = chooseCar(cars);
console.log(`Consumo do carro escolhido: ${chosenCar.consume} km/L`);

const gasolineAmount = parseFloat(readlineSync.question('Digite a quantidade de gasolina a adicionar (em litros): '));
chosenCar.addFuel(gasolineAmount);
console.log(`Nível de combustível atual: ${chosenCar.getFuel()} L`);

const distance = parseFloat(readlineSync.question('Digite a distância que deseja percorrer (em km): '));

if (chosenCar.walk(distance)) {
    console.log(`Nível de combustível após andar ${distance} km: ${chosenCar.getFuel()} L`);
} else {
    console.error("Combustível insuficiente para percorrer a distância desejada.");
}
