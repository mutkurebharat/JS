// function GetEmmplyeeDetails(name) {
//     this.name = name;

//     this.getName = function() {
//         return this.name;
//     }
// }

// var Emp = new GetEmmplyeeDetails("abcd");

// Emp.getName = function () {
//     return this.name.toUpperCase();
// }


// var emp1 =new GetEmmplyeeDetails("efgh")

// emp1.getName = function () {
//   return this.name.toUpperCase();
// };

// console.log(emp1.getName());

function GetEmmplyeeDetails(name) {
  this.name = name;

  GetEmmplyeeDetails.prototype.getNmme = function() {
      return this.name.toUpperCase();
  }
}

// GetEmmplyeeDetails.prototype.getNmme = function () {
//   return this.name.toUpperCase();
// };

var emp = new GetEmmplyeeDetails("abcd");
console.log(emp.getNmme());