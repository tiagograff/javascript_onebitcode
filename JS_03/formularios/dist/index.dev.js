"use strict";

var form = document.getElementById("orderForm");
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  var name = document.querySelector("input[name='name']").value;
  var address = document.querySelector("input[name='address']").value;
  var breadType = document.querySelector("select[name='breadType']").value;
  var main = document.querySelector("input[name='main']").value;
  var observations = document.querySelector("textarea[name='observations']").value;
  var salad = "";
  document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
    salad += " - " + item.value + "\n";
  });
  console.log({
    name: name,
    address: address,
    breadType: breadType,
    main: main,
    salad: salad,
    observations: observations
  });
  alert("Pedido Realizado!" + "\nNome do cliente: " + name + "\nEndereço de entrega: " + address + "\nTipo de pão: " + breadType + "\nRecheio: \n - " + main + "\n" + salad + "Observações: " + observations);
});