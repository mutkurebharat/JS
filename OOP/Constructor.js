// OOPS

// 1.Inheritance
// 2.Encapsulation
// 3. Abstraction
// 4. Polymorphism

// In JS theres an 2 ways to create object
// 1. Using Constructor function
// 2. Literal Notation

// 1. Using Constructor function
 

function getInfo(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

// var employee1 = new getInfo("Bharat", "Mutkure");
// var employee2 = new getInfo("Ajay", "Surname");


// console.log(employee2);
// console.log(employee2.firstName)
// console.log(employee2.lastName)
// console.log(employee2.fullName())

// Using Literal Notation

var employee = {
    firstName: "SomeName",
    lastName: "SomeLastName",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(employee);
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.fullName());





