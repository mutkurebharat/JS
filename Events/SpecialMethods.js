// btn.addEventListener("mouseover", changeColorOnMouesOver);
// btn.addEventListener("mouseout", changeColorOnMouesOut);

// function changeColorOnMouesOver() {
//     this.style.backgroundColor = "red";
//     this.style.color = "black";
// }

// function changeColorOnMouesOut() {
//   this.style.backgroundColor = "yellow";
//   this.style.color = "green";
// }

// function removeEvent() {
//   btn.removeEventListener("mouseover", changeColorOnMouesOver);
//   btn.removeEventListener("mouseout", changeColorOnMouesOut);
// }


btn.addEventListener("click", handleFirst);
btn.addEventListener("click", handleSecond);

function handleFirst() {
    alert("First");
}

function handleSecond() {
  alert("Second");
}