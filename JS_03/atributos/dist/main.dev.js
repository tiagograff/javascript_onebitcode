"use strict";

var input = document.getElementById("input");
var value = document.getElementById("value");
var type = document.getElementById("type");
var placeholder = document.getElementById("placeholder");
var disable = document.getElementById("disable");
var data = document.getElementById("data");
value.addEventListener("click", function () {
  // se o value estiver fazio preencher com ola mundo, se não deixar vazio
  console.log(input.value = input.value === "" ? "ola mundo" : ""); //valor em tempo real

  console.log(input.getAttribute("value")); //valor no html - pré definido
});
type.addEventListener("click", function () {
  //se ele for diferente de radio, transforma em radio, se não for transforma em text
  //   input.type = input.type !== "radio" ? "radio" : "text";
  input.setAttribute("type", "radio");
});
placeholder.addEventListener("click", function () {
  input.placeholder = "digite algo";
});
disable.addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});
data.addEventListener("click", function () {
  var dataSet = input.dataset.somethingElse;
  console.log(dataSet);
  input.dataset.somethingElse = "algum outro valor";
  console.log(dataSet);
});