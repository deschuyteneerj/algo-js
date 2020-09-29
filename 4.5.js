const readlineSync = require("readline-sync");

/**
 * Calculate the distance between 2 points with coordinates
 * @author jonathan <https://github.com/deschuyteneerj/>
 * @param {float} xA - x coordinates of the A point
 * @param {float} yA - x coordinates of the A point
 * @param {float} xB - x coordinates of the A point
 * @param {float} yB - x coordinates of the A point
 */
xA = readlineSync.question("Enter the x coordinates of A:");
yA = readlineSync.question("Enter the y coordinates of A:");
xB = readlineSync.question("Enter the x coordinates of B:");
yB = readlineSync.question("Enter the y coordinates of B:");

function calcDistance(xA, yA, xB, yB) { 
	let xDiff = xA - xB; 
    let yDiff = yA - yB; 

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

let distance = calcDistance(xA, yA, xB, yB);
console.log(distance);