// setInterval(func, delay) - Executes a specified function, repeatedly after a specified 
// time Interval;


// setTimeout(func, delay) -  - Executes a specified function, onec after a specified 
// time Interval;

// setInterval(showDateAndTime, 1000);

setTimeout(showDateAndTime, 5000);
function showDateAndTime() {
    console.log(new Date())
}

// showDateAndTime()