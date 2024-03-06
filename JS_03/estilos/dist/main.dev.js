"use strict";

//primeira forma de alterar o style com javascript
function useLightTheme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
}

function useDarkTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
}

var buttonLight = document.getElementById("lightBtn");
buttonLight.addEventListener("click", useLightTheme);
var buttonDark = document.getElementById("darkBtn");
buttonDark.addEventListener("click", useDarkTheme); //segunda forma de alterar o style com javascript

function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

var switchButton = document.getElementById("switchBtn");
switchButton.addEventListener("click", switchTheme);