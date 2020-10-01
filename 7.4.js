const readlineSync = require("readline-sync");

let menuChoice;
let fs = require('fs');
let pizzaFlavors = (fs.existsSync("./saveFlavors.txt"))? JSON.parse(fs.readFileSync("./saveFlavors.txt")) : [];
let run = true;

function menu() {
    while (run) {
        menuChoice = parseInt(readlineSync.question("Hello! Welcome to the Pizza Flavors Manager.\n\n Please choose your actions:\n\n 1 - List all the pizza flavors.\n 2 - Add a new pizza flavor.\n 3 - Remove a pizza flavor.\n 4 - Exit the program.\n\n Enter your action's number: "));
        switch (menuChoice) {
            case 1 :
                list();
                break;
            case 2 :
                add();
                break;
            case 3 :
                remove();
                break;
            case 4 :
                run = false;
                break;
            default :
                break;
        }
        if (menuChoice < 1 || menuChoice > 4) {
            readlineSync.question("Please select a number between 1 and 4: ")
        } 
    }
}

function list() {
    for (elem of pizzaFlavors) {
        console.log("\n"+(pizzaFlavors.indexOf(elem)+1 + ") " + elem));
    }
}

function add() {
    pizzaFlavors.push(readlineSync.question("Insert a new flavor: "));
    console.log("Your flavor has been added to the list.\n");
    console.log(pizzaFlavors);
}

function remove() {
    let rmv = parseInt(readlineSync.question("Enter the flavor of the pizza you would like to remove: "));
    pizzaFlavors.splice((rmv-1), 1);
    console.log("Here is your list of flavors: " + pizzaFlavors + "\n");
}

function saveFlavors() {
    fs.writeFile("./saveFlavors.txt", JSON.stringify(pizzaFlavors), function(error) {
        if (error) {
            console.log(error);
        }
    });
}

menu();
saveFlavors();