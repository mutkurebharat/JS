
// saySomething();
// console.log(local);
// function saySomething() {
//     var local = "Local Vaiable";
//     console.log("Hi Guys");
// }


// console.log(`Before Assignment =  ${a}`);//var a;

// var a = "Value of a will be displayed here";
// console.log(`After Assignment = ${a}`);


// Two main phase of program

// 1. Compile Time(Compilation Phase)
// 2. Run Time(Execution Phase)

var one = "ONE";// var one = "ONE"

function some(){  // some{var one}
    
    console.log(`inside = ${one}`);
    var one = "TWO";
}

some();

console.log(`outside = ${one}`);



function some() {

   var one = "TWO";
  
    console.log(`inside = ${one}`);
  
}
some();


