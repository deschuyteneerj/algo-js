const readlineSync = require("readline-sync");

let min = readlineSync.question('Can you give me a minimum number please?');
let max = readlineSync.question('Can you give me a maximum number please?');
let current = readlineSync.question('Can you give me a current number please?');

if (min<current && max>current) {
    console.log("Your current number " + current + " is between " + min + " & " + max + ".")
}
else if (min>max) {
    console.log("Sorry but the min number you choose is greater than your max...");
}