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

//Create n randomized rectangles
function createRandomRectangle(n) {
    let arrayRectangle = [];
    for (let i=0; i<n; i++) {
        arrayRectangle.push(new Rectangle(Math.floor((Math.random()*100)+1),
                                          Math.floor((Math.random()*100)+1),
                                          Math.floor((Math.random()*10)+1),
                                          Math.floor((Math.random()*50)+1)));
        for (let j=0; j<arrayRectangle.length-1; j++) {
            if (arrayRectangle[arrayRectangle.length-1].collide(arrayRectangle[j])) {
                console.log("The rectangle " + arrayRectangle[arrayRectangle.length-1].identityOfRectangle()
                            + " collides with " + arrayRectangle[j].identityOfRectangle());
            }
        }
    }
    return arrayRectangle;
}

createRandomRectangle(1000);