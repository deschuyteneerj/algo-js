const readlineSync = require("readline-sync");

let n = readlineSync.question("Enter the number of numbers in the sequence: ");

function fibonacciSequence(n) {
    if (n==0) {
    return [0];
    }
    if (n==1) {
        return [0, 1];
    } 
    else {
        let sequence = fibonacciSequence(n - 1);
        sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);
        return sequence;
    }
}

 console.log(fibonacciSequence(n));