// A) { nome: 'Juca', idade: 3, raca: 'SRD' }, { nome: 'Juca', idade: 3, raca: 'SRD' }, { nome: 'Juca', idade: 3, raca: 'SRD' }

// B) A sintaxe de 3 pontos é usada para copiar as propriedades enumeráveis de um objeto para outro objeto novo. 

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
