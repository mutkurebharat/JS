// An Event is a signal from the browser that something has happend.

// Event Handler - When an event occurs, we can execute some Javascript code or Functions
// in response to that event called Event Handler.

// Threres an total 3 ways to associate an event handler to an event.

// 1. Using the attribute of HTML tag.
// 2. Using DOM Object Property
// 3. Using Special Methods.

// 1. Using the attribute of HTML tag.

function changeColorOnMouseOver() {
  console.log("ON MOUSE OVER");
  var buttonEle = document.getElementById("btn");
  buttonEle.style.backgroundColor = "green";
  buttonEle.style.color = "white";
}

function changeColorOnMouseOut() {
  console.log("ON MOUSE OUT");
  var buttonEle = document.getElementById("btn");
  buttonEle.style.backgroundColor = "black";
  buttonEle.style.color = "orange";
}

// 2. Using DOM Object Property


// Window > document > html > head(> title) &&  body(script, div, h1, p)


