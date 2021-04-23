var Shape = function (shapename) {
    this.shapename = shapename;
    throw new Error("Cannot create in instance of abstract class");
}

Shape.prototype.draw = function () {
    return "Shape is " + this.shapename;
}

// Create a Cicle Object

var Circle = function(shapename) {
    this.shapename = shapename;
}

// Make Shape as a parent of Circle

Circle.prototype = Object.create(Shape.prototype);

var circle = new Circle("CIRCLE");

console.log(circle.draw())
