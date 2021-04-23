// function Person(name) {
//     this.name = name;


//     // static method
//     Person.createDiffPerson = (gender) => {
//         let na  = gender === "male" ? "M" : "F";
//         return na;
//     }
// }

// Person.prototype.getName = function() {
//     return this.name;
// }

// var firstPerson = new Person("Abc");

// console.log(firstPerson.getName());

// console.log(Person.createDiffPerson("male"))

class Person {
  constructor(name) {
      this.name = name;
  }

  getName() {
      return this.name;
  }

  static createDiffPerson(gender) {
      let na = gender === "male" ? "M" : "F";
      return na;
  }
}

var secondPerson = new Person("DEF");

// console.log(secondPerson.getName())

console.log(Person.createDiffPerson("male"));


// Static Method



