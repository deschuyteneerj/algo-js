/**
 * Generate a random number between 1 and 10
 * @param {int} data - the randm number
 */
function rand10() {
    let random = Math.floor(Math.random() * 10) + 1;
    return random;
}

console.log(rand10());