"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var readlineSync = require("readline-sync");
// Função para criar e retornar um Carro
function chooseCar(cars) {
    console.log('Escolha um carro:');
    cars.forEach(function (car, index) {
        console.log("".concat(index + 1, ". Carro com consumo de ").concat(car.consume, " km/L"));
    });
    var choose = parseInt(readlineSync.question('Digite o número do carro escolhido: ')) - 1;
    return cars[choose];
}
// Base de dados 
var cars = [
    new Car_1.Car(10),
    new Car_1.Car(12),
    new Car_1.Car(8),
    new Car_1.Car(15),
    new Car_1.Car(9),
    new Car_1.Car(11),
    new Car_1.Car(7),
    new Car_1.Car(13),
    new Car_1.Car(14),
    new Car_1.Car(10),
];
var chosenCar = chooseCar(cars);
console.log("Consumo do carro escolhido: ".concat(chosenCar.consume, " km/L"));
var gasolineAmount = parseFloat(readlineSync.question('Digite a quantidade de gasolina a adicionar (em litros): '));
chosenCar.addFuel(gasolineAmount);
console.log("N\u00EDvel de combust\u00EDvel atual: ".concat(chosenCar.getFuel(), " L"));
//Usando o Try para capturar o erro e usando o Catch para tratar esse erro
var distance = parseFloat(readlineSync.question('Digite a distância que deseja percorrer (em km): '));
try {
    chosenCar.walk(distance);
    console.log("N\u00EDvel de combust\u00EDvel ap\u00F3s andar ".concat(distance, " km: ").concat(chosenCar.getFuel(), " L"));
}
catch (error) {
    console.error(error.message);
}
