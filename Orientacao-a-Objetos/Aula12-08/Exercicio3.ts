import * as rl from 'readline-sync';

class ComplexNumber {
    private _real: number;
    private _imaginary: number;

    constructor(real: number, imaginary: number) {
        this._real = real;
        this._imaginary = imaginary;
    }

    get real(): number {
        return this._real;
    }

    set real(value: number) {
        this._real = value;
    }

    get imaginary(): number {
        return this._imaginary; 
    }

    set imaginary(value: number) {
        this._imaginary = value;
    }

    add(otherComplex: ComplexNumber): ComplexNumber {
        const real = this._real + otherComplex.real;
        const imaginary = this._imaginary + otherComplex.imaginary;
        return new ComplexNumber(real, imaginary);
    }

    subtract(otherComplex: ComplexNumber): ComplexNumber {
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

    equals(otherComplex: ComplexNumber): boolean {
        return this._real === otherComplex.real && this._imaginary === otherComplex.imaginary;
    }

    toString(): string {
        return `${this._real} + ${this._imaginary}i`;
    }

    modulus(): number {
        return Math.sqrt(this._real ** 2 + this._imaginary ** 2);
    }
}

// Função para criar um novo número complexo
function createComplexNumber(): ComplexNumber {
    const real = rl.questionFloat('Digite a parte real: ');
    const imaginary = rl.questionFloat('Digite a parte imaginária: ');
    return new ComplexNumber(real, imaginary);
}

// Menu interativo
let complex1 = createComplexNumber();
let complex2 = createComplexNumber();

let option: number;

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
            const sum = complex1.add(complex2);
            console.log('Soma:', sum.toString());
            break;
        case 4:
            const difference = complex1.subtract(complex2);
            console.log('Subtração:', difference.toString());
            break;
        case 5:
            const product = complex1.multiply(complex2);
            console.log('Multiplicação:', product.toString());
            break;
        case 6:
            const quotient = complex1.divide(complex2);
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
