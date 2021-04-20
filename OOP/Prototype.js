function Employee(name, age) { // Sequence is ==> Object > Prototype
    this.age = age;
    this.name = name;

    this.getNameAndAge = function() {
        return `nameeeee = ${this.name} and ageeeee = ${this.age}`
    }

    Employee.prototype.getNameAndAge = function () {
      return `name = ${this.name} and age = ${this.age}`;
    };
}

// Employee.prototype.getNameAndAge = function () {
//   return `name = ${this.name} and age = ${this.age}`;
// };

emp1 = new Employee("A",20);
emp2 = new Employee("B", 21);
emp3 = new Employee("C", 22);
emp4 = new Employee("D", 23);

console.log(emp1.getNameAndAge());
// console.log(emp2);
// console.log(emp3);
// console.log(emp4);