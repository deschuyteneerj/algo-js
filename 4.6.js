const readlineSync = require("readline-sync");

/**
 * Calculate a factorial number
 * @author jonathan <https://github.com/deschuyteneerj/>
 * @param {int} x - the factorial number you want to calculate
 */
x = readlineSync.question("Which factorial do you want to calculate?");

function factorial(x) { 
    if (x === 0) {
        return 1;
    }
    return x * factorial(x-1);        
}
console.log(factorial(x));