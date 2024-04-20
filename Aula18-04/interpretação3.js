// A) false, undefined

// B) O valor false é impresso porque a propriedade "backender" existe no objeto pessoa e tem o valor false. Já o valor undefined é impresso porque a propriedade "altura" não existe no objeto pessoa. 

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))