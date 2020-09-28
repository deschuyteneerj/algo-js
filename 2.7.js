const readlineSync = require("readline-sync");

let number = readlineSync.question('Can you give a number please?');
let Sum = 0;
do {
    let numberSum = readlineSync.question('Can you give a number to add please?');
    Sum += parseInt(numberSum);
    number--
} while (number !== 0);
console.log(Sum);