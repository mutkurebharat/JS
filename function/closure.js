function addition(firstNumber, secondNumber) {
    var returnValue = "Result of addition ";
    function result(){
        return returnValue + ans +(firstNumber + secondNumber);
    }

    function result1(params) {
        var some = "is ";
        return some;
    }

    var ans = result1();
    return result();
}

console.log(addition(50,6));

function addition(firstNumber, secondNumber) {
  var returnValue = "Result of addition is = ";
  
  return function(params) {
      return returnValue + (firstNumber + secondNumber)
  }
}

console.log(addition(1, 20)());
