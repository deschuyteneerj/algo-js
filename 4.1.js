const readlineSync = require("readline-sync");

let length = readlineSync.question("Enter a whole number for the length of your rectangle:");
let width = readlineSync.question("Enter a whole number for the width of your rectangle:");

function area(length, width) {
    return length * width;
}
console.log(area(length, width));