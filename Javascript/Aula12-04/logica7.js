function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        // checar se o numero multiplica por 3 e por 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } 
        // checa se o numero é multiplo de 3 e imprime fizz
        else if (i % 3 === 0) {
            console.log("Fizz");
        } 
        // checa se o numero é multiplo de 5 e imprime buzz
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        // se não for nenhum dos dois vai impŕimir apenas o numero
        else {
            console.log(i);
        }
    }
}
fizzBuzz();
