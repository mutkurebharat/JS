var userInput = Number(prompt("Please Enter a Number between 1 to 3"));

// if (userInput === 1) {
//   alert("Your Number is One");
// } else if (userInput === 2) {
//   alert("Your Number is Two");
// } else if (userInput === 3) {
//   alert("Your Number is Three");
// } else if (userInput !== 1 && userInput !== 2 && userInput !== 3) {
//   alert("Your Number is not between 1 to 3 please give Number between 1 to 3");
// }

// switch (userInput) {
//   case "5": {
//     alert("Your Number is Five");
//     break;
//   }

//   case 6: {
//     alert("Your Number is Six");
//     break;
//   }

//   case 7: {
//     alert("Your Number is Seven");
//     break;
//   }

//   default: {
//     alert(
//       "Your Number is not between 5 to 7 please give Number between 5 to 7"
//     );
//     break;
//   }
// }

// switch (userInput) {
//   case 1:
//   case 2:
//   case 3:{
//       alert("Your Number is " + userInput);
//           break;
//   }

//   default:
//       alert(
//       "Your Number is not between 5 to 7 please give Number between 5 to 7"
//     );
//     break;
// }

// Even Odd Program

// if(userInput % 2 === 0){
//     alert(userInput + " Is Even");
// } else {
//     alert(userInput + " Is Odd")
// }

// Ternary Conditions

// condition ? first : second;

userInput % 2 === 0
  ? (alert("Your Number is Even"), alert(userInput + " Is Even"))
  : (alert("Your Number is Odd"), alert(userInput + " Is Odd"));
