const readlineSync = require("readline-sync");

let name = readlineSync.question('Can you give me your last name please?');
let firstName = readlineSync.question('Can you give me your first name please?');
let city = readlineSync.question('Can you give me your city please?');

console.log("Your name is " + firstName + " " +name + " and you live in " + city + ".");