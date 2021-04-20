// function Circle(radius) {

//     // instance field
//     this.radius = radius;

//     Circle.PI = 3.14;

//     this.calculateArea = function() {
//         return Circle.PI * this.radius * this.radius;
//     }
// }

// var circleObject = new Circle(3);

// console.log(circleObject.calculateArea());

function Shape(shapename) {

    // instance field
    this.shapename = shapename;

    // static field

    Shape.Count = ++Shape.Count || 1;

    // static Method

    Shape.ShowCount = function(params) {
        return Shape.Count;
    }
}

var shapename1 = new Shape("circle");
var shapename2 = new Shape("square");
var shapename3 = new Shape("triangle");
var shapename4 = new Shape("rectangle");

console.log(shapename1);
console.log(shapename2);
console.log(shapename3);
console.log(shapename4);

console.log(Shape.ShowCount())