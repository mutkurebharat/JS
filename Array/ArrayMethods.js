// var arr = ["ajay", "mahesh", "suhas", "vivek"];
// var arr1 = ['A', 'B', 'C', 'D'];

// console.log(arr.join(" "));

// console.log(arr);

// pop

// console.log(arr.pop());
// console.log(arr)

// push

// console.log(arr.push('bharat'));
// console.log(arr)

// shift

// console.log(arr.shift());
// console.log(arr)

//unshift

// console.log(arr.unshift('bharat'))
// console.log(arr)

//  p(last) - s(first)
// push-pop   shift-unshift

// pop-shift - remove
// push-inshift - add
// console.log("before = ", arr);
// arr[4] = "something"
// console.log("after = ", arr)


// Delete Particular element from our Array

// delete arr[1]

// console.log(arr[1])

//**** */ splice(starting position, no os elements to be removed, elements to be added)

// arr.splice(1,0,"A","B","C","D");
// console.log(arr)

// Concat

// var newArr = arr.concat(arr1);

// console.log(newArr)

// Sort Method

// var arr = ["J", "C", "F", "Y", "T"];
// var z = arr.sort();
// console.log(z.reverse());

var arr = [40, 100, 1, 5, 25, 10];
console.log(arr.sort(function(a,b) {
    return b - a;
}));


console.log(Math.max.apply(null, arr)); // TO calculate largest element 
console.log(Math.min.apply(null, arr)); //TO calculate smaller element 

