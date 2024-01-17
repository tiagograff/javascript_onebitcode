"use strict";

function addContact() {
  var contactSection = document.getElementById("contacts-list");
  var h3 = document.createElement("h3");
  h3.innerText = "Contato";
  var ul = document.createElement("ul");
  var nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);
  ul.appendChild(document.createElement("br"));
  var phoneLi = document.createElement("li");
  phoneLi.innerText = "Telefone: ";
  var phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.name = "phone";
  phoneLi.appendChild(phoneInput);
  ul.appendChild(phoneLi);
  ul.appendChild(document.createElement("br"));
  var addressLi = document.createElement("li");
  addressLi.innerHTML = '<label for="address">Endereço: </label>';
  var addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.name = "address";
  addressInput.id = "address";
  addressLi.appendChild(addressInput);
  ul.appendChild(addressLi);
  ul.appendChild(document.createElement("br"));
  contactSection.append(h3, ul);
}

function removeContact() {
  var contactSection = document.getElementById("contacts-list");
  var titles = document.getElementsByTagName("h3");
  var contacts = document.getElementsByTagName("ul");
  contactSection.removeChild(titles[titles.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
}