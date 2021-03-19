var arr = [2, 21, 3, 41, 53] ;

//  var arr1 = [];
// for (var i = 0; i < arr.length; i++) {
   
//    arr1.push(arr[i] * 2);
// }

// console.log(arr1);

// FOR EACH
// var arr1 = [];
// var ab = arr.forEach(multiplyFunc);

// function multiplyFunc(value){
//     // arr1.push(value * 3);
//     return value * 3
// }

// arr.forEach(function (value) {
//   arr1.push(value * 3);
// });

// // MAP (Creates a new Array), (Not updating Orignal Array)

// var abc = arr.map(mulByFive);

// function mulByFive(value, index, array) {
//     return value * 5;
// }

// console.log(abc);

// Filter Method  (Creates a new Array), (Not updating Orignal Array)

// var c = arr.filter(filterArr);

// function filterArr(value, index, array) {
//     return value > 10;
// }

// console.log(arr);

// REDUCE

// var result = arr.reduce(reduceArr, 50)

// function reduceArr(total, value, index, array) {
//     return total + value;
// }

// var total = 50;

// for(var i = 0; i < arr.length ; i++){
//     total =  total + arr[i];
// }

// console.log(result);

// EVERY

// var isEven = arr.every(findEven);

// function findEven(value, index, array) {
//     return value % 2 === 0;
// }

// console.log(isEven);

// SOME

// isEven = arr.some(checkEven);

// function checkEven(value, index, array) {
//   return value % 2 === 0;
// }

// console.log(isEven);

// indexOf()

// var result = arr.indexOf(53);

// console.log(result);

// FIND

// var result = arr.find(findGreater);

// function findGreater(value, index, array) {
//     return value > 18;
// }

// console.log(result);

// findIndex()

var result = arr.findIndex(findGreater);

function findGreater(value, index, array) {
    return value > 18;
}

console.log(result);


