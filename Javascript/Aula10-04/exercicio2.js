const rl = require('readline-sync')
//exemplo vou comer até 100 coxinhas 
let stomach = 0;

// 0 < 100 = FALSE    101 < 100 = TRUE
while(stomach < 100){
    console.log('Quero comer mais coxinhas')
    stomach = stomach + 10;
}