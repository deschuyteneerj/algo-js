const readlineSync = require("readline-sync");

function randomizeCast(serie){
    for (let i = 0; i < serie.cast.length-1; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = serie.cast[i];
        serie.cast[i] = serie.cast[j];
        serie.cast[j] = temp;
    }
    return serie.cast;
}

function askTvSerie(commutator=null) {
    let serie = [];
    serie.name = readlineSync.question("What is your favourite show on TV?");
    serie.year = readlineSync.question("Which year was it produced?");
    serie.cast = [];

    if (commutator == null) {
        let oneMore;
        do {
            serie.cast.push(readlineSync.question("What is the cast for this show?"));
            oneMore = readlineSync.question("Do you want to add one more actor? (y/n)");
        } while (oneMore == "y")
    }
    else {
        serie.cast = randomizeCast(commutator);
    }
    return serie;
}

let originalSerie = new askTvSerie();
console.log(originalSerie);

let newSerie = new askTvSerie(originalSerie);
console.log(newSerie);