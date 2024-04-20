const professor = { // exemplo de objeto
    nome: 'Vitor',
    idade: 27,
    tarefas: ['Dar Aula', 'Responder Dúvidas'],
    contarPiada: function(){    //usar uma função dentro do objeto
        console.log('É pá ve ou pá come?')
    
    },
    email: 'vitor@gmail.com'
}

professor.nome = 'Mika' //para alterar um objeto 
console.log(professor['nome']) // é possivel chamar com []
console.log(professor.email)