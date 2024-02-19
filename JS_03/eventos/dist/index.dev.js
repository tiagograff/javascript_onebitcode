"use strict";

function register(evento) {
  var sectionElement = evento.currentTarget.parentNode;
  var username = sectionElement.children.username.value;
  var password = sectionElement.children.password.value;
  var passwordConfirmation = sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("registro confirmado");
  } else {
    alert("".concat(username, " a sua senha est\xE1 incorreta"));
  }
}

function removeListener() {
  button.removeEventListener("click", register);
  alert("evento removido");
}

var button = document.getElementById("register-button");
button.addEventListener("click", register);
button.addEventListener("mouseenter", function (evento) {
  console.log(evento.currentTarget.parentNode);
});