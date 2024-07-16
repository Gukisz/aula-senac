const rl = require(`readline-sync`)

let headsOrTail = ['heads', 'tails']
let index = Math.round(Math.random());

result = rl.question(`Chose heads or tails: `).toLowerCase();

if (result == headsOrTail[index]){
    console.log(`You bet right`)
} else {
    console.log(`You bet wrong`)
}