const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question('Can you give me your a float number please?');
let secondNumber = readlineSync.question('Can you give me a second float number please?');

let truncNumber = Math.trunc(firstNumber);
let multiply = truncNumber * secondNumber;

console.log(multiply);