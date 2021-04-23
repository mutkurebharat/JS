// Shape Wll be the base object

var Shape = function () {
    
}

// Add draw function to the shape prototype

Shape.prototype.draw = function() {
    return "I am Generic SHape";
}

// Objects derived from the shape object will be able to overide draw method.

// Create a Circle Object

var Circle = function () {
    
}

// Make shape as the parent for Cicle

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
    return "I am Circle";
}

// Create a Square Object

var Square = function () {
    
}

// Make shape as the parent for Cicle

Square.prototype = Object.create(Shape.prototype);

Square.prototype.draw = function () {
  return "I am Square";
};

// Create a Triangle Object

var Triangle = function () {};

// Make shape as the parent for Cicle

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.draw = function () {
  return "I am Triangle";
};


console.log(new Shape().draw());
console.log(new Circle().draw());
console.log(new Square().draw());
console.log(new Triangle().draw());
