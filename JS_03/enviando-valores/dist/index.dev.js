"use strict";

function register(element) {
  var username = element.children.username.value;
  var password = element.children.password.value;
  var passwordConfirmation = element.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("usuário registrado");
  } else {
    alert("a senha não confere");
  }
}