var rl = require('readline-sync');
var Car = /** @class */ (function () {
    function Car(engine, wheel, brand, color, km) {
        this.engine = engine;
        this.wheel = wheel;
        this.brand = brand;
        this.color = color;
        this.km = km;
    }
    Car.prototype.drive = function () {
        console.log("Estou dirigindo meu ".concat(this.brand));
    };
    Car.prototype.wash = function () {
        console.log("Estou lavando meu ".concat(this.brand));
    };
    Car.prototype.changeWheel = function () {
        console.log("Estou trocando as rodas do meu ".concat(this.brand));
    };
    Car.prototype.speedUp = function () {
        console.log("o meu ".concat(this.brand, " chegou a ").concat(this.km, " km/h"));
    };
    return Car;
}());
var carBrand = rl.question('Digite a marca do seu carro: ');
var carColor = rl.question('Digite a cor do seu carro: ');
var carKm = rl.question('Digite os kilometros rodados do seu carro: ');
var carEngine = rl.question('Digite qual o modelo do motor do seu carro: ');
var newCar = new Car(carEngine, null, carBrand, carColor, carKm);
console.log(newCar.brand);
console.log(newCar.color);
console.log(newCar.km);
console.log(newCar.engine);
var userInput;
while (userInput !== '4') {
    userInput = rl.question('Escolha uma função: ');
    switch (userInput) {
        case '1':
            newCar.drive();
            break;
        case '2':
            newCar.wash();
            break;
        case '3':
            newCar.changeWheel();
            break;
        case '4':
            newCar.speedUp();
            break;
        default:
            console.log("Opção inválida. Escolha novamente.");
    }
}
