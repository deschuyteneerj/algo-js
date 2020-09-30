const readlineSync = require("readline-sync");

class Circle {
    constructor(x,y,radius) {
        this.x = new Number(x);
        this.y = new Number(y);
        this.radius = new Number(radius);
    }

    move(xOffset, yOffset) {
        this.x += new Number(xOffset);
        this.y += new Number(yOffset);
        this.radius += 0;
    }

    surface() {
        return Math.PI*Math.pow(this.radius,2);
    }
}

let circle = new Circle(new Number(readlineSync.question("Position of the X axis: ")),
                        new Number(readlineSync.question("Position of the Y axis: ")),
                        new Number(readlineSync.question("Radius of the circle: "))
                        );
console.log(circle.surface());

circle.move(readlineSync.question("Move on the X axis: "),
            readlineSync.question("Move on the Y axis: ")
            );
console.log(circle);