// function factorial(n) {
//     var result = n;
//     for(; n > 1;  n--){
//          result = result * (n - 1);
//     }
//     return result;
// }

// console.log(factorial(1))


// Calculate Factorial By using Recursion

function factByRecursion(n){

    if(n === 0 || n === 1){
        return 1;
    }
    return n * factByRecursion(n - 1);
}

console.log(factByRecursion(0));