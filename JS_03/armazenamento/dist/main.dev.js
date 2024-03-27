"use strict";

//session storage
document.getElementById("sessionBtn").addEventListener("click", function () {
  var input = document.getElementById("session"); //                            chave e texto

  window.sessionStorage.setItem("informations", input.value);
  input.value = "";
});
document.getElementById("readSesssion").addEventListener("click", function () {
  var info = sessionStorage.getItem("informations");
  alert(info);
}); //local storage

document.getElementById("localBtn").addEventListener("click", function () {
  var input = document.getElementById("local");
  window.localStorage.setItem("informations", input.value);
  input.value = "";
});
document.getElementById("readLocal").addEventListener("click", function () {
  var x = localStorage.getItem("informations");
  alert(x);
}); //cookies

document.getElementById("cookieBtn").addEventListener("click", function () {
  var input = document.getElementById("cookie"); //cookieName=value;outrasInformações

  var cookie = "info=" + input.value + ";";
  var expiration = "expires=" + new Date(2023, 9, 9) + ";";
  var path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});
document.getElementById("cookie2Btn").addEventListener("click", function () {
  var input = document.getElementById("cookie2"); // cookieName=value; expires=UTCStringDate; path=/;

  var cookie = "text=" + input.value + ";";
  var expiration = "expires=" + new Date(2022, 8, 9) + ";";
  var path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});