let rl = require('readline-sync')

function calculateAverage() {
    let sum = 0;
    const totalNumbers = 5;
    for (let i = 0; i < totalNumbers; i++) {
        let number = rl.question("Enter number " + (i + 1) + ":");

        sum += +number;
    }
    let average = sum / totalNumbers;
    console.log("a média desse número é:", average);
}
calculateAverage();
