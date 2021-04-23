class Animal {
    constructor(legs){
        this.legs = legs;
    }

    walk(){
        return `walking on ${this.legs} legs`
    }
}

class Bird extends Animal{ // Bird is CHild here and Animal is Parent
    constructor(hands){
        super(5);
        this.hands = hands;
    }

    fly(){
        return `Flying on ${this.hands} hands`
    }
}

let bird = new Bird(2);

console.log(bird)
console.log(bird.fly());
console.log(bird.walk());