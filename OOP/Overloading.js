// function getInfo(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// function getInfo(firstName, middleName, lastName) {
//   this.firstName = firstName;
//   this.middleName = middleName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     return this.firstName + " " + this.middleName + " " + this.lastName;
//   };
// }

// var emp = new getInfo(firstName="Name", lastName="Last-Name");
// console.log(emp);

var something = something || {};
something.teamA = something.teamA || {};

something.teamA.getInfo = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
};

something.teamB = something.teamB || {};
something.teamB.getInfo = function (firstName, middleName, lastName) {
  this.firstName = firstName;
  this.middleName = middleName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + " " + this.middleName + " " + this.lastName;
  };
};  

var tOne = new something.teamA.getInfo("A", "B");

var tTwo = new something.teamB.getInfo("A", "B", "C");


console.log("something = ", tTwo.fullName())
