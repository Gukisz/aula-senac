//introdução em funções

function calculaArea(altura, largura) {
    const area = altura * largura
    console.log(area)
}


calculaArea(5, 5)

//declarando usando nome idade sem parametros

function imprimirNomeIdade(){
    console.log('Gustavo, 19 Anos')
}

imprimirNomeIdade()
 
// usando crase

let nome = "Gustavo"
console.log(`Olá meu nome é: ${nome}`)

// Exercicio 1

function meuNome(nome){
    console.log(`Olá ${nome}`)
}

meuNome('gustavo')
meuNome('adrian')
meuNome('duda')

// Exercicio2

function calculeMedia(n1, n2, n3){ // para calcular a média é só somar os numeros e dividir pela quantidade deles
    const media = (n1 + n2 + n3) / 3
    console.log(media.toFixed(2)) //Serve para mostrar apenas a quantidade que colocar nos parenteses
}

calculeMedia(10, 8, 7)

//Exercicio 3

function imparPar(numero){  //para identificar quando numero é impar ou par é só dividir o numero por 2
    if(numero % 2 === 0) { 
        console.log(numero, 'é par')
    } else {
        console.log(numero, 'é impar')
    }
} 

imparPar(45)


