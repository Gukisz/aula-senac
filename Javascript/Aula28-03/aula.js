/*Exercício  de interpretação de código 1)

Questão A: 10 e 50. Isso ocorre porque a função minhaFuncao recebe um parâmetro variavel, multiplica esse parâmetro por 5 e retorna o resultado. Quando você chama minhaFuncao(2), ela retorna 2 * 5 = 10, e quando você chama minhaFuncao(10), ela retorna 10 * 5 = 50.

Questão B: Se você retirar os console.log e simplesmente invocar a função minhaFuncao(2) e minhaFuncao(10), o que acontecerá é que os valores calculados serão retornados pela função, mas não serão exibidos no console. Ou seja, os valores calculados (10 e 50) seriam retornados, mas não seriam mostrados em lugar nenhum, a menos que você os armazene em variáveis ou os use em alguma outra operação no código.

Exercícios de interpretação de código 2)

Questão A: Esta função recebe um texto como entrada através de um prompt exibido para o usuário. Em seguida, ela converte o texto para minúsculas utilizando o método toLowerCase() e verifica se a string contém a palavra "cenoura" utilizando o método includes(). A função retorna true se a palavra "cenoura" estiver presente no texto (independentemente de sua capitalização) e false caso contrário. Sua utilidade é determinar se o texto inserido pelo usuário contém a palavra "cenoura" de alguma forma.

Questão B: A saída no console para cada uma das 3 entradas do usuário será: Eu gosto de cenoura - true (pois a string contém a palavra "cenoura", mesmo que em minúsculas). CENOURA é bom pra vista - true (pois a string contém a palavra "cenoura", mesmo que em maiúsculas). Cenouras crescem na terra - true (pois a string contém a palavra "cenoura", mesmo que seja parte de outra palavra)

*/

//Exercícios de escrita de código 1) a)

function informacoesPessoais1() {
    let nome = "Gustavo";
    let idade = "19";
    let cidade= "São leopoldo";
    let profissao = "Estudante";

    console.log(`Eu sou ${nome} tenho ${idade}, moro em ${cidade} e sou ${profissao}`);
}

informacoesPessoais1();

//Exercícios de escrita de código 1) b)

function informacoesPessoais(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome} tenho  ${idade} anos, moro em ${cidade} e sou ${profissao}`);
}

// Exemplo de uso da função
let nome = "João";
let idade = 30;
let cidade = "São Paulo";
let profissao = "Engenheiro";

informacoesPessoais(nome, idade, cidade, profissao);

//Exercícios de escrita de código 2) a)

function somarNumeros(num1, num2) {
    let soma = num1 + num2;
    console.log(`A soma de ${num1} e ${num2} é ${soma}`);
}

somarNumeros(5, 3); // Saída: A soma de 5 e 3 é 8

//Exercícios de escrita de código 2) b)

function verificarMaiorOuIgual(num1, num2) {
    let resultado = num1 >= num2;
    console.log(`O primeiro número (${num1}) é maior ou igual ao segundo número (${num2}): ${resultado}`);
}

verificarMaiorOuIgual(10, 5); // Saída: O primeiro número (10) é maior ou igual ao segundo número (5): true

//Exercícios de escrita de código 2) c)

function verificarPar(numero) {
    let par = numero % 2 === 0;
    console.log(`O número ${numero} é par: ${par}`);
}

verificarPar(7); // Saída: O número 7 é par: false

//Exercícios de escrita de código 2) d)

function imprimirTamanhoEMaiusculas(mensagem) {
    let tamanho = mensagem.length;
    let maiusculas = mensagem.toUpperCase();
    console.log(`A mensagem tem ${tamanho} caracteres. Versão em maiúsculas: ${maiusculas}`);
}

imprimirTamanhoEMaiusculas("Olá, mundo!"); // Saída: A mensagem tem 11 caracteres. Versão em maiúsculas: OLÁ, MUNDO!

//Exercícios de escrita de código 3)
const readline = require('readline-sync')

let num1 = Number(readline.question("insira um numero: "));
let num2 = Number(readline.question("insira outro numero: "));

// Função de soma
const soma = (num1, num2) => num1 + num2;

// Função de subtração
const subtracao = (num1, num2) => num1 - num2;

// Função de multiplicação
const multiplicacao = (num1, num2) => num1 * num2;

// Função de divisão
const divisao = (num1, num2) => num1 / num2;

// Chamando as funções e mostrando os resultados
console.log(`Soma: ${soma(num1, num2)}`);
console.log(`Diferença: ${subtracao(num1, num2)}`);
console.log(`Multiplicação: ${multiplicacao(num1, num2)}`);
console.log(`Divisão: ${divisao(num1, num2)}`);

//DESAFIOS!!

//Desafio 1) a)

const imprimirParametro = (parametro) => {
    console.log(parametro);
};

imprimirParametro("Olá, mundo!"); 

// Desafio 1) b)

const somaEImprime = (valor1, valor2) => {
    const soma = valor1 + valor2;
    imprimirParametro(soma);
};


somaEImprime(5, 3); 

// Desafio 2)
function calcularHipotenusa(cateto1, cateto2) {
   
	// Calcula o quadrado da hipotenusa
    let quadradoHipotenusa = (cateto1 ** 2) + (cateto2 ** 2);
    
    // Calcula a hipotenusa elevando o quadrado ao expoente 1/2 (o que é equivalente a calcular a raiz quadrada)
    let hipotenusa = quadradoHipotenusa ** (1/2);
    
    // Retorna o valor da hipotenusa
    return hipotenusa;
}

let catetoA = 3;
let catetoB = 4;
let resultado = calcularHipotenusa(catetoA, catetoB);
console.log("O valor da hipotenusa é:", resultado);