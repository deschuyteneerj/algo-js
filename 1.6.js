const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question('Can you give me your a number please?');
let secondNumber = readlineSync.question('Can you give me a second number please?');

let modulo = firstNumber % secondNumber;
console.log(modulo);