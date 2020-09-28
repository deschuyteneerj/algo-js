const readlineSync = require("readline-sync");

let number = readlineSync.question('Can you give me your favorite number please?');
numberInt = parseInt(number);

while (numberInt!==42) {
    console.log("Are you sure?");
    let number = readlineSync.question('Can you give me your favorite number please?');
    numberInt = parseInt(number);
}
