var userInput = "";

do {
  var targetNumber = Number(prompt("Please Enter a Target Number"));
  var start = 0;

  while (start <= targetNumber) {
    document.write(start + "<br>");
    start = start + 2;
  }

  do {
    userInput = prompt("Do you want to Continue - Yes or No");
    userInput = userInput.toUpperCase();
    if (userInput != "YES" && userInput != "NO") {
      alert("Invalid Choice, Please say Yes or No");
    }
  } while (userInput != "YES" && userInput != "NO");

} while (userInput == "YES");


// Do While Loop Checks the Condition at last
// It means Do While Loop is gaurente to execute atleast one time