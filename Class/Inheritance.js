function Animal(legs) {
    this.legs = legs;

    // this.walkk = () => {
    //     return `Walking on ${this.legs} legs`
    // }

    this.walk = function() {
         return `Walking on ${this.legs} legs`;
    }
}

// Animal.prototype.walk = () => {
//     return `Walking on ${this.legs} legs`
// }

function Bird(hand) {
    this.hand = hand;

    this.walk = () => {
        return `Walking on ${this.hand} hand`
    }
}

Bird.prototype = new Animal(4);

var bird1 = new Bird(2);

console.log(bird1.walk());
