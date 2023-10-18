// Simple Addition Calculator

//Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let Y1 = +document.getElementById("Y1-in").value;
  let Y2 = +document.getElementById("Y2-in").value;
  let X1 = +document.getElementById("X1-in").value;
  let X2 = +document.getElementById("X2-in").value;

  // Process
  let slope = (Y2 - Y1) / (X2 - X1);

  // Output
  document.getElementById("output").innerHTML = slope;
}
