// console.log(new Date()); // 1st way

// new Date(year, month, day, hours, minutes, second, milliseconds)// Second Way by passing numbers

// console.log(new Date(2010, 2, 19, 20, 17, 50, 60));

// new Date("monthName date, year time(hours:min:sec)")

// console.log(new Date("December 25, 1995 10:50:9"))// Third Way By Passing String

// var todayDate = new Date();
// todayDate.getFullYear(); // To get full year

// todayDate.getMonth();

// todayDate.getDate();

// todayDate.getDay()


// Write a function to get a week day from a number passed by user


// function getWeekDayFromNumber(number) {

//     switch (number) {
//       case 0:
//         return "Sunday";
//         break;
//       case 1:
//         return "Monday";
//         break;
//       case 2:
//         return "Tuesday";
//         break;
//       case 3:
//         return "Wednesday";
//         break;
//       case 4:
//         return "Thursday";
//         break;
//       case 5:
//         return "Friday";
//         break;
//       case 5:
//         return "Saturday";
//         break;
//       default:
//           return "Not a Valid Number"
//         break;
//     }
    
// }


// function getWeekDayFromNumber(number) {
//     var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     return weekDays[number]
// }

// console.log(getWeekDayFromNumber(4));

// function getMonthNameFromNumber(number) {
//     if(number < 1 || number > 13){
//         return "Not a Valid Number";
//     }
//   var monthName = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "June",
//     "July",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec"
//   ];
//   return monthName[number - 1];
// }

// console.log(getMonthNameFromNumber(15));

// Formatting Date in dd/mm/yyyy format

function formatDate(date) {
  var datee = date.getDate();
  // if(da?
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var year = date.getFullYear();

  var strDate = datee.toString();
  var strMonth = month.toString();
  var strYear = year.toString();

  console.log(
    `date = ${typeof datee} month =  ${typeof month} year ${typeof year}`
  );

  return strDate.concat("/", strMonth, "/", strYear);

  // return datee + "/" + month + "/" + year;

  // return result;
}


console.log(formatDate(new Date()));
