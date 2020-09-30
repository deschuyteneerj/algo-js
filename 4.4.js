const readlineSync = require("readline-sync");

/**
 * Generate a random number between 1 and 10 and put it into an array
 * @author jonathan <https://github.com/deschuyteneerj/>
 * @param {int} n - the random number
 */
function multiRand(n) {
    n = readlineSync.question("Enter a number for the number of elements into the array:");
    arr = [];
    for (let i=0; i<n; i++) {
        random = Math.floor(Math.random() * 10) + 1;
        arr.push(random);
    }
    return arr;
}
console.log(multiRand());

/**
 * Generate an average of the array
 * @param {int} arr - the array
 */
function average(arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    return total / arr.length;
}
console.log(average(arr));

/**
 * Return the minimum number of the array
 * @param {int} arr - the array
 * @param {int} minArr - the minimum
 */
function min(arr) {
    const minArr= Math.min.apply(Math, arr);
    return minArr;
}
console.log(min(arr));

/**
 * Return the maximum number of the array
 * @param {int} arr - the array
 * @param {int} maxArr - the maximum
 */
function max(arr) {
    const maxArr= Math.max.apply(Math, arr);
    return maxArr;
}
console.log(max(arr));