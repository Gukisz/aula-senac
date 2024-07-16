let idade = 20

if (idade >= 18) {
    console.log("Voce é Adulto")
} else if (idade >= 13 && idade <=17){
    console.log("Voce é adolecente")
} else {
    console.log("Voce é criança")
}


let paisDeOrigem = "Brasil"

if(paisDeOrigem === "Brasil") {
    console.log ("Voce é brasileiro")
}
else if (paisDeOrigem === "Russia"){
    console.log ("Voce é russo")
}
else if (paisDeOrigem === "Mexico"){
    console.log ("Voce é Mexicano")
}
else if (paisDeOrigem === "Itália"){
    console.log ("Voce é Italiano")
}
else {
    console.log ("Nacionalidade não encontrada")
}



let comidaFavorita = "Lasanha"
let comida 

//se comida favorita for diferente de comida não será a janta
if (comida !== comidaFavorita){
    console.log("Essa não é a janta")
}
else ( comidaFavorita === "Lasanha") //se comida for igual a lasanha vai será a favorita
    console.log("A comida está certa")


//se time for igual a internacional irá dar o primeiro consolelog se não irá dar o segundo
let time = "nada"

if (time === "internacional"){
    console.log("Você é colorado")
}
else (console.log ("Você é gremista"))



const poderGoku = 8001
const poderVegeta = 1000

if (poderGoku > poderVegeta){
    console.log("Goku é mais forte")
}
else if 
    (poderGoku < poderVegeta){
    console.log ("Vegeta é mais forte")
}
else 
    console.log("O poder deles são iguais")