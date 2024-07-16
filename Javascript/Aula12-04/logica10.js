function fibonacciSequence(n) {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray;
}

let fibonacciTerms = fibonacciSequence(10);
for (let i = 0; i < fibonacciTerms.length; i++) {
    console.log(fibonacciTerms[i]);
}
