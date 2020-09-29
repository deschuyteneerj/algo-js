const readlineSync = require("readline-sync");

function askTvSerie() {
    let oneMore;
    let serie = {};
    serie.name = readlineSync.question("What is your favourite show on TV?");
    serie.year = readlineSync.question("Which year was it produced?");
    serie.cast = [];
    do {
        serie.cast.push(readlineSync.question("What is the cast for this show?"));
        oneMore = readlineSync.question("Do you want to add one more actor? (y/n)");
    } while (oneMore == "y")
    return serie;
}

console.log(JSON.parse(JSON.stringify(askTvSerie())));