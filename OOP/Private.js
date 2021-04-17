// Javascript is Object Based.

function Employee(firstName, lastName) {
  // Private Field(var,let,const)
  var privatefName;

  // Public Fields
  this.firstName = firstName;
  this.lastName = lastName;

  // Private Function
  var privateFullName = function () {
    privatefName = firstName + " " + lastName;
    return privatefName;
  };

  // Privileged Function

  this.privilegedFullName = function () {
    return privateFullName();
  };

  // Public Function
  Employee.prototype.publicFullName = function () {
    return this.privilegedFullName();
  };
}

// Privileged methods are created using this keyword and Public methods are created using 
// Prototype property on the constructor function.

// Privileged method can access provate variable and  methods

//Public Methods can access the privileged methods but not private

// Like Public Methods privileged are also available outside the constructor function.

var emp1 = new Employee("First", "Last");

console.log(emp1);
console.log("firstName = ",emp1.firstName);
console.log("lastname = ", emp1.lastName);
console.log("Privileged Methods = ", emp1.privilegedFullName())
console.log("Public Methods = ", emp1.publicFullName())
// console.log("Private Property = ", privatefName);
console.log("Private Method = ",emp1.privateFullName());
