const person = {
    name: 'Ribeiro',
    age: 22,
    musicalGenre: 'Rock'
}

function newObject(object){
    const newPerson = {
        ...object,
        favFood: ['pizza', ' sushi', ' churrasco'], 
        bestFriend: {
            name: 'Leo',
            age: 20
        }
    }
    console.log(`O nome da pessoa é ${person.name} e suas comidas preferidas são ${newPerson.favFood} e seu melhor amigo se chama ${newPerson.bestFriend.name} e tem ${newPerson.bestFriend.age} anos.`)
}

newObject(person)
