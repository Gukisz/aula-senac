const rl = require('readline-sync')

let countdown = 10

while (countdown >= 0) {
    if (countdown === 0) {
        console.log(`${countdown} Boom`)
    } else if (countdown % 2 === 0) {
        console.log(`${countdown} Tic`)
    } else {
        console.log(`${countdown} Tac`)
    }
    
    countdown--
}

  
  