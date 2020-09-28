const readlineSync = require("readline-sync");

let number = readlineSync.question('Can you give a number between 1 and 7 please?');

switch (number) {
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Choose a number between 1 and 7");
}