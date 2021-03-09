// var something = 10;

// function name(params) {
    
// }

// Function

// 1. Function Declaration
// 2. Function Expresion
//     2.1 Anonymous Function Expresion
//     2.2  Named Function Expresion
//     2.3  IIFE(Immediately Invoked Functio Expression)
//         Self Executing Function Expression
//         Self Invoked Function Expression


// 1. Function Declaration

// function sum(num1, num2) {
//     alert(num1 + num2);
// }

// sum(10,20);

// Anonymous Function Expression
// 2.1 -  Anonymous Function Expresion

// var sum = function(num1, num2) {
//   console.log(num1 + num2);
// }

// console.log(sum)

// var factorial = function(num){
//         var result = 1;
//         for(var i = num ; i > 1 ; i--){
//             result = result * i;
//         }
//         console.log(result)
//     }

    // factorial(5);

// 2.1 -  Named Function Expresion

    // var factorial = function calcFactorial(num){
    //     if(num <= 1){
    //         return 1;
    //     }
    //     var b =  num * calcFactorial(num - 1);
    //     console.log(b);
    //     return b;
    // }

    // factorial(3);

    // 2.1 -  IIFE()

    var factorial = (function (num) {
      var result = 1;
      for (var i = num; i > 1; i--) {
        result = result * i;
      }
     return result;
    })(5);

    console.log("factorial = ", factorial);