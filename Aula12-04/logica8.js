let rl = require('readline-sync')

function smallLargestNumber() {
    let largest;
    let smallest;

    for (let i = 0; i < 10; i++) {
        let number = rl.question("Coloque um número:" + (i + 1) + ":");

        if (i === 0) {
            largest = number;
            smallest = number;
        } else {
            if (number > largest) {
                largest = number;
            }
            if (number < smallest) {
                smallest = number;
            }
        }
    }

    console.log("O maior número colocado foi:", largest);
    console.log("O menor número colocado foi:", smallest);
}

smallLargestNumber()

