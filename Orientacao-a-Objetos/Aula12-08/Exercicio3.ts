class ComplexNumber{
    private _real: number;
    private _imaginary: number;

    constructor(real: number, imaginary: number){
        this._real = real;
        this._imaginary = imaginary;
    }

// getters / setters
    get real(): number {
        return this._real;
    }

    set real(value: number) {
        this.real = value;
    }

    get imaginary(): number {
        return this._imaginary;
    }

    set imaginary(value: number) {
        this._imaginary = value;
    }

// metodo para adicionar 2 numeros complexos
    add(otherComplex: ComplexNumber): ComplexNumber{
        const real = this._real + otherComplex.real;
        const imaginary = this._imaginary + otherComplex.imaginary;
        return new ComplexNumber(real, imaginary);
    }

    subtract(otherComplex: ComplexNumber): ComplexNumber{
        const real = this._real - otherComplex.real;
        const imaginary = this._imaginary - otherComplex.imaginary;
        return new ComplexNumber(real, imaginary);
    }

    multiply(otherComplex: ComplexNumber): ComplexNumber {
        const real = this._real * otherComplex.real - this._imaginary * otherComplex.imaginary;
        const imaginary = this._real * otherComplex.imaginary + this._imaginary * otherComplex.real;
        return new ComplexNumber(real, imaginary);
    }

    divide(otherComplex: ComplexNumber): ComplexNumber {
        const divisor = otherComplex.real ** 2 + otherComplex.imaginary ** 2;
        const real = (this._real * otherComplex.real + this._imaginary * otherComplex.imaginary) / divisor;
        const imaginary = (this._imaginary * otherComplex.real - this._real * otherComplex.imaginary) / divisor;
        return new ComplexNumber(real, imaginary);
    }

    // metodo para checar se os dois numeros complexos são iguais
    equals(otherComplex: ComplexNumber): boolean{
        return this._real === otherComplex.real && this._imaginary === otherComplex.imaginary;
    }

    // metodo para mostrar numeros complexos como string

    toString(): string{
        return `${this._real} + ${this._imaginary}i`;
    }

    // metodo para calcular o modulo dos numeros complexos math.sqrt é raiz quadrada é ** operador de exponenciação
    modulus(): number{
        return Math.sqrt(this._real ** 2 + this._imaginary ** 2);
    }
}

const complex1 = new ComplexNumber(3, 4)
const complex2 = new ComplexNumber(1, 2)

console.log('Numero Complexo 1:', complex1.toString());
console.log('Numero Complexo 2:', complex2.toString());

const sum = complex1.add(complex2);
console.log('Soma:', sum.toString());

const difference = complex1.subtract(complex2);
console.log('Subtração:', difference.toString()); 

const quotient = complex1.divide(complex2);
console.log('Divisão:', quotient.toString());

const product = complex1.multiply(complex2);
console.log('Multiplicação:', product.toString()); 

console.log('O primeiro numero complexo é igual ao segundo numero complexo??', complex1.equals(complex2)); 

console.log('Módulo do numero complexo 1:', complex1.modulus()); 