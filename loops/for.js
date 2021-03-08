var userInput = Number(prompt("Enter a target Number"));

// var start = 0;
// while (start <= userInput) {
//     if(start % 2 === 0){
//         document.write(start + " Is Even <br>");
//     } else {
//         document.write(start + " Is Odd <br>");
//     }
//     start = start + 1;
// }

for (var start = 0; start <= userInput; start = start + 1) {
    if(start % 2 === 0){
        document.write(start + " Is Even <br>");
    } else {
        document.write(start + " Is Odd <br>");
    }   
}

var start = 0;

for (; ; ) {
    if (start > userInput) {
        break;
    }
  if (start % 2 === 0) {
    document.write(start + " Is Even <br>");
  } else {
    document.write(start + " Is Odd <br>");
  }
  start = start + 1;
}

// for(variable declaration; condition ; increment){

// }