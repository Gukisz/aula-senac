"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var ComplexNumber = /** @class */ (function () {
    function ComplexNumber(real, imaginary) {
        this._real = real;
        this._imaginary = imaginary;
    }
    Object.defineProperty(ComplexNumber.prototype, "real", {
        get: function () {
            return this._real;
        },
        set: function (value) {
            this._real = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComplexNumber.prototype, "imaginary", {
        get: function () {
            return this._imaginary;
        },
        set: function (value) {
            this._imaginary = value;
        },
        enumerable: false,
        configurable: true
    });
    ComplexNumber.prototype.add = function (otherComplex) {
        var real = this._real + otherComplex.real;
        var imaginary = this._imaginary + otherComplex.imaginary;
        return new ComplexNumber(real, imaginary);
    };
    ComplexNumber.prototype.subtract = function (otherComplex) {
        var real = this._real - otherComplex.real;
        var imaginary = this._imaginary - otherComplex.imaginary;
        return new ComplexNumber(real, imaginary);
    };
    ComplexNumber.prototype.multiply = function (otherComplex) {
        var real = this._real * otherComplex.real - this._imaginary * otherComplex.imaginary;
        var imaginary = this._real * otherComplex.imaginary + this._imaginary * otherComplex.real;
        return new ComplexNumber(real, imaginary);
    };
    ComplexNumber.prototype.divide = function (otherComplex) {
        var divisor = Math.pow(otherComplex.real, 2) + Math.pow(otherComplex.imaginary, 2);
        var real = (this._real * otherComplex.real + this._imaginary * otherComplex.imaginary) / divisor;
        var imaginary = (this._imaginary * otherComplex.real - this._real * otherComplex.imaginary) / divisor;
        return new ComplexNumber(real, imaginary);
    };
    ComplexNumber.prototype.equals = function (otherComplex) {
        return this._real === otherComplex.real && this._imaginary === otherComplex.imaginary;
    };
    ComplexNumber.prototype.toString = function () {
        return "".concat(this._real, " + ").concat(this._imaginary, "i");
    };
    ComplexNumber.prototype.modulus = function () {
        return Math.sqrt(Math.pow(this._real, 2) + Math.pow(this._imaginary, 2));
    };
    return ComplexNumber;
}());
// Função para criar um novo número complexo
function createComplexNumber() {
    var real = rl.questionFloat('Digite a parte real: ');
    var imaginary = rl.questionFloat('Digite a parte imaginária: ');
    return new ComplexNumber(real, imaginary);
}
// Menu interativo
var complex1 = createComplexNumber();
var complex2 = createComplexNumber();
var option;
do {
    console.log('\nEscolha uma opção:');
    console.log('1 - Mostrar Complexo 1');
    console.log('2 - Mostrar Complexo 2');
    console.log('3 - Adicionar os números complexos');
    console.log('4 - Subtrair o Complexo 2 do Complexo 1');
    console.log('5 - Multiplicar os números complexos');
    console.log('6 - Dividir o Complexo 1 pelo Complexo 2');
    console.log('7 - Verificar se os números complexos são iguais');
    console.log('8 - Calcular o módulo do Complexo 1');
    console.log('9 - Sair');
    option = rl.questionInt('Opção: ');
    switch (option) {
        case 1:
            console.log('Complexo 1:', complex1.toString());
            break;
        case 2:
            console.log('Complexo 2:', complex2.toString());
            break;
        case 3:
            var sum = complex1.add(complex2);
            console.log('Soma:', sum.toString());
            break;
        case 4:
            var difference = complex1.subtract(complex2);
            console.log('Subtração:', difference.toString());
            break;
        case 5:
            var product = complex1.multiply(complex2);
            console.log('Multiplicação:', product.toString());
            break;
        case 6:
            var quotient = complex1.divide(complex2);
            console.log('Divisão:', quotient.toString());
            break;
        case 7:
            console.log('Os números complexos são iguais?', complex1.equals(complex2));
            break;
        case 8:
            console.log('Módulo do Complexo 1:', complex1.modulus());
            break;
        case 9:
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida! Tente novamente.');
            break;
    }
} while (option !== 9);
