const rl = require('readline-sync')
const string = rl.question('type a phrase')

let consonants = 0, vowels = 0;

for(let i = 0; i < string.length; ++i){
    if (string [i].toLowerCase() != string[i].toUpperCase()){
        switch(string[i].toLowerCase()){
            case 'a': case 'e': case 'i': case 'o': case 'u':
                vowels++;
                break
            default: consonants++;
        }
        
    }
}

console.log(`Numbers of consonants: ${consonants}`)
console.log(`Numbers of vowels: ${vowels}`)