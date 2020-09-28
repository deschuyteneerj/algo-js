const readlineSync = require("readline-sync");

let min = readlineSync.question('Can you give me a minimum number please?');
let max = readlineSync.question('Can you give me a maximum number please?');
let current = readlineSync.question('Can you give me a current number please?');

let intMin = parseInt(min);
let intMax = parseInt(max);

if (intMin<current && intMax>current) {
    console.log("Your current number " + current + " is between " + intMin + " & " + intMax + ".");
}
else if (intMin>intMax) {
    console.log("Sorry but the min number you choose is greater than your max...");
}
else {
    console.log("Your current number is not between your min and your max");
}