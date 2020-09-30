/**
 * Generate a random number between 1 and 10
 * @author jonathan <https://github.com/deschuyteneerj/>
 * @param {int} n - the random number
 */
const readlineSync = require("readline-sync");

function multiRand(n) {
    n = readlineSync.question("Enter a number for the number of elements into the array:");
    array = [];
    for (let i=0; i<n; i++) {
        random = Math.floor(Math.random() * 10) + 1;
        array.push(random);
    }
    return array;
}
console.log(multiRand());