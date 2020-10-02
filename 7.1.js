const readlineSync = require("readline-sync");

function randomNumber() {
    let num = parseInt(Math.random() * 10 + 1);
    return num;
}

function guess() {
    num = randomNumber();
    let stop = false;
    let onceAgain;
    while (stop != true) {
        userGuess = readlineSync.question("Guess the number (1 to 10): ");
        if (userGuess == num) {
            num = randomNumber();
            console.log("You guessed it!");
            onceAgain = readlineSync.question("Once again? (y/n) ");
        } else if (userGuess < num) {
            console.log("Too low!");
        } else {
            console.log("Too high!");
        }
        if (onceAgain == "n") {
            stop = true;
        }
    } 
}

guess();