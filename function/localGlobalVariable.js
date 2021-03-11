var globall = "This is global variable"; // var global = "This is global variable"

function some(){
  // function some(){
  // var local
  //}
  locall = "This is local variable";
  console.log(`accesing global inside function = ${globall}`);
  console.log(`accessing local inside function = ${locall}`);
}


console.log(`accesing global outside function = ${globall}`);
console.log(`accessing local outside function = ${locall}`)
some();


//TODO: Global variable can be accessed anywhere in the program
// But Local variable can only be accessed within a scope of a function only in which
// you have declared a variable.

// If you are declaring any variable without using var keyword then that variable will be
// considered as global variable.
