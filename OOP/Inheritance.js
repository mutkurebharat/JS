var Employee = function (name) {

    // It is base object
    
    this.name = name;

    Employee.prototype.getName = function() {
        return this.name;
    }
}

// EmpDetail is an derived Object

var EmpDetail = function (age,salary) {
    this.age = age;
    this.salary = salary;
}

EmpDetail.prototype = new Employee("Bharat");

// Employee.prototype = new EmpDetail(42,1.8);

var emp1 = new EmpDetail(25,60);
console.log(emp1.getName());

// var emp2 = new Employee("HJKL");

// console.log(emp2.getName())



