import { Person } from './Person';
import * as readlineSync from 'readline-sync';

function createPerson(): Person {
    const name = readlineSync.question('Digite seu nome: ');
    const surname = readlineSync.question('Digite seu sobrenome: ');
    const dadName = readlineSync.question('Digite o nome do seu pai: ');
    const momName = readlineSync.question('Digite o nome da sua mãe: ');
    const rgNumber = readlineSync.question('Digite seu RG: ');
    const cpfNumber = readlineSync.question('Digite seu CPF: ');
    const birthDate = new Date(readlineSync.question('Digite sua data de nascimento (AAAA-MM-DD): '));

    return new Person(name, surname, dadName, momName, rgNumber, cpfNumber, birthDate);
}

const person = createPerson();

console.log(`Nome: ${person.name} ${person.surname}`);
console.log(`Idade: ${person.calculateAge()} anos`);
person.showResponsible();

