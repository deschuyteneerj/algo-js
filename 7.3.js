const readlineSync = require("readline-sync");

function printDivisors(n) {
    n = readlineSync.question("Enter the number for which you want to know its divisors: ");
    arr = [];
    for (let i = 1; i <= n; i++) 
        if (n % i == 0) {
            arr.push(i);
        }
    return arr;
}

console.log(printDivisors());