"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, surname, dadName, momName, rgNumber, cpfNumber, birthDate) {
        this.name = name;
        this.surname = surname;
        this.dadName = dadName;
        this.momName = momName;
        this.rgNumber = rgNumber;
        this.cpfNumber = cpfNumber;
        this.birthDate = birthDate;
    }
    Person.prototype.calculateAge = function () {
        var today = new Date();
        var age = today.getFullYear() - this.birthDate.getFullYear();
        var month = today.getMonth() - this.birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < this.birthDate.getDate())) {
            return age - 1;
        }
        return age;
    };
    Person.prototype.showResponsible = function () {
        var age = this.calculateAge();
        if (age < 18) {
            console.log("Respons\u00E1veis: Pai - ".concat(this.dadName, ", M\u00E3e - ").concat(this.momName));
        }
        else {
            console.log("Não é necessário responsável.");
        }
    };
    return Person;
}());
exports.Person = Person;
