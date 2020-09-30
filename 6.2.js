class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = new Number(topLeftXPos);
        this.topLeftYPos = new Number(topLeftYPos);
        this.width = new Number(width);
        this.length = new Number(length);
    }
//Collision test
    collide(otherRectangle) {
        if ( (this.topLeftXPos + this.width > otherRectangle.topLeftXPos) && (this.topLeftYPos + this.length > otherRectangle.topLeftYPos) ) {
            return true;
        }
        else {
            return false;
        }
    }

    identityOfRectangle() {
        return this.topLeftXPos + ", " + this.topLeftYPos + ", " + this.width + ", " + this.length;
    }
}

let rectangleA = new Rectangle(0,0,10,9);
let rectangleB = new Rectangle(5,5,5,10);
let rectangleC = new Rectangle(30,30,10,5);

console.log("rectangle A (" + rectangleA.identityOfRectangle() + ") collides with rectangle B (" + rectangleB.identityOfRectangle() + "): " + rectangleA.collide(rectangleB));
console.log("rectangle A (" + rectangleA.identityOfRectangle() + ") collides with rectangle C (" + rectangleC.identityOfRectangle() + "): " + rectangleA.collide(rectangleC));