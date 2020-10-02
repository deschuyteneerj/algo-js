const readlineSync = require("readline-sync");

function guess() {
    let num = parseInt(Math.random() * 10 + 1);
    let stop = false;
    do {
        userGuess = readlineSync.question("Guess the number (1 to 10): ");
        if (userGuess == num) {
            console.log("You guessed it!");
            stop = true;
        } else if (userGuess < num) {
            console.log("Too low!");
        } else {
            console.log("Too high!");
        }
    } while (stop != true)
}

guess();