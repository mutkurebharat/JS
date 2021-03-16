// Array
// Array is simply Collection of data

// var a = 10;
// var b = "name";
// var c = true;

var d = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var list = "<ul>";

for(var i = 0; i < d.length; i++){
    // console.log(d[i]);
    // list = list + "<li>" + d[i] + "</li>"
    list = `${list} <li> ${d[i]} </li> `
}

list = list + "</ul>"

document.getElementById("result").innerHTML = list;

// console.log(d.length);

// Accessing the Array Elements


// console.log(d[d.length - 1])
// console.log(d[d.length - 1]);

// var obj = {
//     company: "Cognizant",
//     address: "Hinjewadi Phase 3",
//     ind_headquarter: "Chennai",
//     branches: "7"
// }