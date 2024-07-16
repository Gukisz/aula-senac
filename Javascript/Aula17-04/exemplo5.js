const user = {
    name: 'Prof',
    age: 25,
    email: 'senac@gmail.com',
    city: 'São Leopoldo'
}

const newUser = {
    ...user ,
    name: 'João',
    age: 28
}

console.log(newUser)