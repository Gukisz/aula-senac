"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var readlineSync = require("readline-sync");
function createPerson() {
    var name = readlineSync.question('Digite seu nome: ');
    var surname = readlineSync.question('Digite seu sobrenome: ');
    var dadName = readlineSync.question('Digite o nome do seu pai: ');
    var momName = readlineSync.question('Digite o nome da sua mãe: ');
    var rgNumber = readlineSync.question('Digite seu RG: ');
    var cpfNumber = readlineSync.question('Digite seu CPF: ');
    var birthDate = new Date(readlineSync.question('Digite sua data de nascimento (AAAA-MM-DD): '));
    return new Person_1.Person(name, surname, dadName, momName, rgNumber, cpfNumber, birthDate);
}
var person = createPerson();
console.log("Nome: ".concat(person.name, " ").concat(person.surname));
console.log("Idade: ".concat(person.calculateAge(), " anos"));
person.showResponsible();
