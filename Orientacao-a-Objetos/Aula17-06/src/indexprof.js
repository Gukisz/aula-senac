//Exemplo do professor (Exercicio 1)
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
var leitor = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(motor, rodas, marca, cor, kmmax) {
        this.motor = motor;
        this.rodas = rodas;
        this.marca = marca;
        this.cor = cor;
        this.kmmax = kmmax;
    }
    Carro.prototype.dirigir = function () {
        console.log("Estou dirigindo meu ".concat(this.marca));
    };
    Carro.prototype.acelerar = function () {
        console.log("O seu ".concat(this.marca, " chegou a ").concat(this.kmmax, " km/h"));
    };
    Carro.prototype.lavar = function () {
        console.log("Estou lavando meu ".concat(this.marca));
    };
    return Carro;
}());
/* motor: number
rodas: number
marca: string
cor: string
kmmax: number
*/
var motorNovo = leitor.questionFloat('Qual o tipo do seu motor? ');
var rodasNovo = leitor.questionInt('Qual o aro da roda do seu carro? ');
var marcaNovo = leitor.question('Qual a marca do seu carro? ');
var corNovo = leitor.question('Qual é a cor do seu carro? ');
var kmmaxNovo = leitor.questionInt('Qual a kilometragem máxima? ');
var carroNovo = new Carro(motorNovo, rodasNovo, marcaNovo, corNovo, kmmaxNovo);
console.log(carroNovo);
//Exercicio 2
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.cumprimentar = function () {
        console.log("Ol\u00E1, eu sou ".concat(this.nome, "!"));
    };
    return Pessoa;
}());
//Exercicio 3
var Crianca = /** @class */ (function (_super) {
    __extends(Crianca, _super);
    function Crianca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crianca.prototype.cumprimentar = function () {
        console.log("Oi, eu sou ".concat(this.nome, " e tenho ").concat(this.idade, " anos! Sou uma crian\u00E7a."));
    };
    return Crianca;
}(Pessoa));
var Adulto = /** @class */ (function (_super) {
    __extends(Adulto, _super);
    function Adulto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adulto.prototype.cumprimentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos. Sou um adulto."));
    };
    return Adulto;
}(Pessoa));
var Idoso = /** @class */ (function (_super) {
    __extends(Idoso, _super);
    function Idoso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Idoso.prototype.cumprimentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ". Estou na terceira idade, tenho ").concat(this.idade, " anos."));
    };
    return Idoso;
}(Pessoa));
var crianca = new Crianca('Duda', 8);
var adulto = new Adulto('Carlos', 35);
var idoso = new Idoso('Maria', 70);
var pessoa = new Pessoa('Gustavo', 19);
crianca.cumprimentar();
adulto.cumprimentar();
idoso.cumprimentar();
pessoa.cumprimentar();
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
