var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Exercício 1
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
var carKm = rl.questionInt('Digite os kilometros rodados do seu carro: ');
var carEngine = rl.questionFloat('Digite qual o modelo do motor do seu carro: ');
var newCar = new Car(carEngine, null, carBrand, carColor, carKm);
console.log(newCar.brand);
console.log(newCar.color);
console.log(newCar.km);
console.log(newCar.engine);
var userInput = '';
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
//Exercício 2
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Ol\u00E1, eu sou ".concat(this.name, "!"));
    };
    return Person;
}());
//Exercicio 3
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.greet = function () {
        console.log("Oi, eu sou ".concat(this.name, " tenho ").concat(this.age, " anos! Sou uma crian\u00E7a."));
    };
    return Child;
}(Person));
var Adult = /** @class */ (function (_super) {
    __extends(Adult, _super);
    function Adult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adult.prototype.greet = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.name, " e tenho ").concat(this.age, " anos. Sou um adulto."));
    };
    return Adult;
}(Person));
var Elderly = /** @class */ (function (_super) {
    __extends(Elderly, _super);
    function Elderly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Elderly.prototype.greet = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.name, ". Estou na terceira idade, tenho ").concat(this.age, " anos."));
    };
    return Elderly;
}(Person));
var child = new Child('Duda', 8);
var adult = new Adult('Carlos', 35);
var elderly = new Elderly('Maria', 70);
var person = new Person('Gustavo', 19);
child.greet();
adult.greet();
elderly.greet();
person.greet();
//Exercicio 3
var Book = /** @class */ (function () {
    function Book(title, author, yearPubli) {
        this.title = title;
        this.author = author;
        this.yearPubli = yearPubli;
    }
    Book.prototype.getDetail = function () {
        return ("O nome do livro \u00E9 ".concat(this.title, " o autor do livro \u00E9 ").concat(this.author, " e o ano de publica\u00E7\u00E3o \u00E9 ").concat(this.yearPubli));
    };
    return Book;
}());
var newBook = new Book('Senhor dos Anéis', 'J.R.R. Tolkien', '29/07/1954');
newBook.getDetail();
