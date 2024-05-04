const rl = require('readline-sync')

//Exercício 1: Variáveis

// A) 
const yearOfBirth = 2005;

// B) 
const currentYear = 2024; 

// C) 
const age = currentYear - yearOfBirth;

// D) 
console.log(`Minha idade é: ${age} anos.`);


//Exercício 2: Operadores Aritméticos

// A)
let number1Question2, number2Question2, sumQuestion2, subtractionQuestion2, multiplicationQuestion2, divisionQuestion2, remainderQuestion2;

// B)
number1Question2 = 20;
number2Question2 = 5;

// C) D)
sumQuestion2 = number1Question2 + number2Question2;

// E)
subtractionQuestion2 = number1Question2 - number2Question2;

// F)
multiplicationQuestion2 = number1Question2 * number2Question2;

// G)
divisionQuestion2 = number1Question2 / number2Question2;

// H)
remainderQuestion2 = number1Question2 % number2Question2;


console.log("Soma:", sumQuestion2);
console.log("Subtração:", subtractionQuestion2);
console.log("Multiplicação:", multiplicationQuestion2);
console.log("Divisão:", divisionQuestion2);
console.log("Resto da divisão:", remainderQuestion2);


//Exercício 3: Comparadores

// A) 
let number1Question3, number2Question3;

// B) 
number1Question3 = 60;
number2Question3 = 23;


// C) D)
console.log("numero1 é igual ao numero2?", number1Question3 === number2Question3);

// E) 
console.log("numero1 é diferente do numero2?", number1Question3 !== number2Question3);

// F) 
console.log("numero1 é maior que numero2?", number1Question3 > number2Question3);

// G) 
console.log("numero1 é maior ou igual a numero2?", number1Question3 >= number2Question3);

// H) 
console.log("numero1 é menor que numero2?", number1Question3 < number2Question3);

// I) 
console.log("numero1 é menor ou igual a numero2?", number1Question3 <= number2Question3);


//Exercício 4: Operadores Lógicos

// A)
let canDrive = true;
let hasDriverLicense = false;
let hasOwnCar = true;

// B) C) D)
if (canDrive && hasDriverLicense) {
    console.log("Você pode dirigir legalmente!");
} 
// E) 
else if (hasOwnCar || hasDriverLicense) {
    console.log("Você pode dirigir, mas seja cuidadoso!");
} 
// F) 
else {
    console.log("Você não pode dirigir.");
}


// Exercício 5: Arrays

// A) 
let names = ["Natan", "  ADRIAN", "Gustavo"]; // Note que o nome do Adrian esta totalmente em maiúsculo e com espaços em branco

// B) 
let namesLowerCase = names.map(name => name.toLowerCase());
console.log("Nomes em minúsculas:", namesLowerCase);

// C) 
let namesUpperCase = names.map(name => name.toUpperCase());
console.log("Nomes em maiúsculas:", namesUpperCase);

// D) 
let namesTrimmed = names.map(name => name.trim());
console.log("Nomes sem espaços em branco:", namesTrimmed);

// E) 
let namesWithA = names.map(name => name.includes('a'));
console.log("Cada nome contém a letra 'a'?", namesWithA);

// F) R
let namesReplaced = names.map(name => name.replaceAll('a', '#'));
console.log("Nomes com 'a' substituído por '#':", namesReplaced);


//Exercício 6: Strings

// A) 
let nameQuestion6, ageQuestion6, cityQuestion6;

// B) 
nameQuestion6 = "Gustavo";
ageQuestion6 = 19;
cityQuestion6 = "São Leopoldo";

// C) 
let message = `Oi, meu nome é ${nameQuestion6}, eu tenho ${ageQuestion6} de idade, e moro em ${cityQuestion6}.`;

// D) 
console.log(message);

// E) 
let messageConcat = "Oi, nome é, " + nameQuestion6 + ", eu tenho" + ageQuestion6 + " de idade, e moro em " + cityQuestion6 + ".";

// F) 
console.log(messageConcat);


//Exercício 7: Funções

// A) 
function calculateSquareArea(side) {
    return side * side;
}

// B) 
function calculateRectangleArea(length, width) {
    return length * width;
}

// C) 
function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}

// Usando as Funções
console.log("Area do quadrado:", calculateSquareArea(5));
console.log("Area do retângulo:", calculateRectangleArea(4, 6));
console.log("Area do triângulo:", calculateTriangleArea(3, 4));


//Exercício 8: Objetos

// A)
let student = {
    name: "Gustavo Ribeiro",
    age: 19,
    course: "Desenvolvimento de sistemas"
};

// B) C) 
console.log("Informações do estudante:");
console.log("Nome:", student.name);
console.log("Idade:", student.age);
console.log("Curso:", student.course);


//Exercício 9: Objetos Parte 2

// A) 
student.grades = [];

// B) 
student.grades.push(7.5, 8.0, 9.5);

// C) 
let sumQuestion9 = 0;
for (let i = 0; i < student.grades.length; i++) {
    sumQuestion9 += student.grades[i];
}
let average = sumQuestion9 / student.grades.length;

// D) 
console.log("Informações do estudante:");
console.log("Nome:", student.name);
console.log("Idade:", student.age);
console.log("Curso:", student.course);
console.log("Notas:", student.grades);
console.log("Média:", average.toFixed(2)); //apenas para exibir a média com duas casas decimais


//Exercício 10: Objetos Parte 3

// A) B) C) D)
student.address = {
    street: "Rua dom joão becker",
    streetNumber: "1488",
    city: "São Leopoldo",
    cep: 93025680
};

// E)
console.log("Informação completa sobre o estudante:");
console.log("Nome:", student.name);
console.log("Idade:", student.age);
console.log("Curso:", student.course);
console.log("Endereço:", student.address.street, student.address.city, student.address.cep);


//Exercício 11: Condicionais

// A)
let genre = "ação";

// B)
if (genre === "ação") {
    console.log("Você gosta de filmes de ação!");
} else if (genre === "comédia") {
    console.log("Você gosta de filmes de comédia!");
} else if (genre === "terror") {
    console.log("Você gosta de filmes de terror!");
} else if (genre === "ficção") {
    console.log("Você gosta de filmes de ficção científica!");
} else if (genre === "aventura") {
    console.log("Você gosta de filmes de aventura!");
} else {
    console.log("Não sei qual é o seu gênero de filme favorito.");
}


//Exercício 12: While

// A)
let count = 10;

// B)
while (count >= 0) {
    // C)
    console.log(count);
    // D)
    count--;
}

// E)
console.log("Contagem regressiva completa");


//Exercício 13: Loop For

// A)
let numberQuestion13 = 8;

// B), C), D)
for (let i = 1; i <= 10; i++) {
    let resultQuestion13 = numberQuestion13 * i;
    console.log(numberQuestion13 + " x " + i + " = " + resultQuestion13);
}


//Exercício 14: Variáveis

// A) 
let userInput = rl.question("Coloque um número: ");

// B) 
let numberQuestion14 = (userInput); 

// C) 
console.log(`Voce colocou o número: ${numberQuestion14}`);


//Exercício 15: Operadores Aritméticos

// A) 
let number1Question15 = Number(rl.question("Coloque o primeiro número: "));
let number2Question15 = Number(rl.question("Coloque o segundo número: "));

// C) 
let sumQuestion15 = number1Question15 + number2Question15;
let subtractionQuestion15 = number1Question15 - number2Question15;
let multiplicationQuestion15 = number1Question15 * number2Question15;
let divisionQuestion15 = number1Question15 / number2Question15;
let remainderQuestion15 = number1Question15 % number2Question15;

// D) 
console.log("Soma:", sumQuestion15);
console.log("Substração:", subtractionQuestion15);
console.log("Multiplicação:", multiplicationQuestion15);
console.log("Divisão:", divisionQuestion15);
console.log("Resto da divisão:", remainderQuestion15);


//Exercício 16: Comparadores

// A) 
let number1Question16 = Number(rl.question("Coloque o primeiro número: "));
let number2Question16 = Number(rl.question("Coloque o segundo número: "));

// C) 
let equal = number1Question16 === number2Question16;
let notEqual = number1Question16 !== number2Question16;
let greaterThan = number1Question16 > number2Question16;
let lessThan = number1Question16 < number2Question16;
let greaterThanOrEqual = number1Question16 >= number2Question16;
let lessThanOrEqual = number1Question16 <= number2Question16;

// D) 
console.log("Igual:", equal);
console.log("Não igual:", notEqual);
console.log("Maior que:", greaterThan);
console.log("Menor que:", lessThan);
console.log("Maior ou igual:", greaterThanOrEqual);
console.log("Menor ou igual:", lessThanOrEqual);


//Exercício 17: Operadores Lógicos

// A) Requesting the user to input two boolean responses
let response1 = rl.question("Coloque a primeira resposta (true ou false): ");
let response2 = rl.question("Coloque a segunda resposta (true ou false): ");

// 
response1 = response1 === 'true';
response2 = response2 === 'true';

// C) 
let andResult = response1 && response2;
let orResult = response1 || response2;
let notResult1 = !response1;
let notResult2 = !response2;

// D) 
console.log("Resultado do operador AND (&&):", andResult);
console.log("Resultado do operador OR (||):", orResult);
console.log("Resultado do operador NOT (!) para a primeira resposta:", notResult1);
console.log("Resultado do operador NOT (!) para a segunda resposta:", notResult2);


//Exercício 18: Arrays

// A) 
let numbersQuestion18 = [];
for (let i = 0; i < 5; i++) {
    let numberQuestion18 = Number(rl.question(`Coloque o ${i + 1}º número: `));
    numbersQuestion18.push(numberQuestion18);
}

// B) 
let sumQuestion18 = 0;
for (let numberQuestion18 of numbersQuestion18) {
    sumQuestion18 += numberQuestion18;
}

// C) 
let averageQuestion18 = sumQuestion18 / numbersQuestion18.length;


console.log("A média dos números colocados é:", averageQuestion18);


//Exercício 19: Strings

// A) 
let fullName = rl.question("Coloque seu nome completo: ");

// B) C)
console.log("Nome em maiúsculo:", fullName.toUpperCase());

// D) 
console.log("Nome em minúsculo:", fullName.toLowerCase());

// E) 
console.log("Comprimento do nome:", fullName.length);


//Exercício 20: Funções

// A)
function sumNumbers(number1, number2) {
    return number1 + number2;
}

// B) 
let number1Question20 = Number(rl.question("Coloque o primeiro numero: "));
let number2Question20 = Number(rl.question("Coloque o segundo numero: "));

// C) 
let resultQuestion20 = sumNumbers(number1Question20, number2Question20);

console.log("A soma dos números é:", resultQuestion20);


//Exercício 21: Objetos

// A) 
let nameQuestion21 = rl.question("Coloque seu nome: ");
let ageQuestion21 = Number(rl.question("Coloque sua idade: "));
let cityQuestion21 = rl.question("Coloque sua cidade: ");

// B) 
let user = {
    name: nameQuestion21,
    age: ageQuestion21,
    city: cityQuestion21
};

// C) 
console.log("Informações do Usuario:");
console.log("Nome:", user.name);
console.log("Idade:", user.age);
console.log("Cidade:", user.city);


//Exercício 22: Condicionais

// A) 
let ageQuestion22 = Number(rl.question("Coloque sua idade: "));

// B) C)    
if (ageQuestion22 >= 18) {
    // D) 
    console.log("Você pode dirigir!");
} else {
    console.log("Você não pode dirigir ainda.");
}

//Exercício 23: While

// A) 
let numberQuestion23 = Number(rl.question("Coloque um número positivo: "));

// B) 
let countQuestion23 = 0;

// C) 
while (countQuestion23 <= numberQuestion23) {
    // D) 
    console.log("Count:", countQuestion23);
    countQuestion23++;
}

//Exercício 24: Loop For

// A) 
let numberQuestion24 = Number(rl.question("Coloque um número positivo: "));

// B) 
console.log("Números pares de 0 até", numberQuestion24, ":");
for (let i = 0; i <= numberQuestion24; i++) {
    if (i % 2 === 0) {
        // C)
        console.log(i);
    }
}
