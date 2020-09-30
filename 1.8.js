const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Can you give me your first name please? (1 question remaining)');
let gender = readlineSync.question('Can you give me your gender (a word not a letter please) please? (0 question remaining)');

console.log("what is your definition of a developer?");
console.log(firstName + ": A " + gender + " who fixed a problem that you don't know you have, in a way you don't understand.")