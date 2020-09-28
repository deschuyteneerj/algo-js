const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question('Can you give me your shoe size please?');
let birthYear = readlineSync.question('Can you give me your birth year please?');

let result = ((shoeSize*2)+5)*50-birthYear+1766;
console.log(result);

