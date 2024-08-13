var ComplexNumber = /** @class */ (function () {
    function ComplexNumber(real, imaginary) {
        this._real = real;
        this._imaginary = imaginary;
    }
    Object.defineProperty(ComplexNumber.prototype, "real", {
        // getters / setters
        get: function () {
            return this._real;
        },
        set: function (value) {
            this.real = value;
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
    // metodo para adicionar 2 numeros complexos
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
    // metodo para checar se os dois numeros complexos são iguais
    ComplexNumber.prototype.equals = function (otherComplex) {
        return this._real === otherComplex.real && this._imaginary === otherComplex.imaginary;
    };
    // metodo para mostrar numeros complexos como string
    ComplexNumber.prototype.toString = function () {
        return "".concat(this._real, " + ").concat(this._imaginary, "i");
    };
    // metodo para calcular o modulo dos numeros complexos math.sqrt é raiz quadrada é ** operador de exponenciação
    ComplexNumber.prototype.modulus = function () {
        return Math.sqrt(Math.pow(this._real, 2) + Math.pow(this._imaginary, 2));
    };
    return ComplexNumber;
}());
var complex1 = new ComplexNumber(3, 4);
var complex2 = new ComplexNumber(1, 2);
console.log('Numero Complexo 1:', complex1.toString());
console.log('Numero Complexo 2:', complex2.toString());
var sum = complex1.add(complex2);
console.log('Soma:', sum.toString());
var difference = complex1.subtract(complex2);
console.log('Subtração:', difference.toString());
var quotient = complex1.divide(complex2);
console.log('Divisão:', quotient.toString());
var product = complex1.multiply(complex2);
console.log('Multiplicação:', product.toString());
console.log('O primeiro numero complexo é igual ao segundo numero complexo??', complex1.equals(complex2));
console.log('Módulo do numero complexo 1:', complex1.modulus());
