// function Employee(age) {
//     this.age = age;
// }

// var emp1 = new Employee(25);

// console.log("orignal age = ", emp1.age);

// emp1.age = 50;

// console.log("Updated age = ", emp1.age);

// Read/ Write Properties

function Emp(name, age) {
    this.name = name;
    this.age = age;

    Object.defineProperty(this, "age", {
        get: function() {
            return age;
        },
        set: function(value) {
            age = value;
        }
    })

    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        }
    })
}

var abc = new Emp("Bharat", 25);

abc.name = "ABCD";

abc.age = "00";

console.log("abc.age", abc.age);