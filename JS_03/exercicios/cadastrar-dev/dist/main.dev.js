"use strict";

//função para quebrar linha de código html
function makeBreakLine(form) {
  var breakLine = document.createElement("br");
  return form.appendChild(breakLine);
} // função para criar o formulário


function createFormDev() {
  //criando a tag main
  var main = document.getElementById("mainId"); //criando o formulário

  var devForm = document.createElement("form");
  devForm.id = "devForm" + devForms.length;
  devForms.push(devForm); //adcionando o formulário no main

  main.appendChild(devForm); //primeira quebra de linha

  makeBreakLine(devForm); //campo para colocar a tecnologia
  //label

  var techLabel = document.createElement("label");
  techLabel.textContent = "adicione o nome da tecnologia: ";
  techLabel.id = "techLabelId";
  techLabel.htmlFor = "techTextId"; //texto

  var techText = document.createElement("input");
  techText.type = "text";
  techText.id = "techTextId"; //adcionar no formulário

  devForm.appendChild(techLabel);
  devForm.appendChild(techText);
  makeBreakLine(devForm);
  makeBreakLine(devForm); //radio
  // primeira opção

  var radioLabel1 = document.createElement("label");
  radioLabel1.textContent = "tempo de experiência:";
  var radioInput1 = document.createElement("input");
  radioInput1.name = "radio";
  radioInput1.type = "radio";
  radioInput1.id = "radio1";
  radioInput1.value = "0-2 anos";
  var radioLabelName1 = document.createElement("label");
  radioLabelName1.htmlFor = "radio1";
  radioLabelName1.textContent = "0-2 anos"; // segunda opção

  var radioInput2 = document.createElement("input");
  radioInput2.name = "radio";
  radioInput2.type = "radio";
  radioInput2.id = "radio2";
  radioInput2.value = "3-4 anos";
  var radioLabelName2 = document.createElement("label");
  radioLabelName2.htmlFor = "radio2";
  radioLabelName2.textContent = "3-4 anos"; // terceira opção

  var radioInput3 = document.createElement("input");
  radioInput3.name = "radio";
  radioInput3.type = "radio";
  radioInput3.id = "radio3";
  radioInput3.value = "+ de 5 anos";
  var radioLabelName3 = document.createElement("label");
  radioLabelName3.htmlFor = "radio3";
  radioLabelName3.textContent = "+ de 5 anos"; //adcionar no formulário as opções e quebras de linha

  devForm.appendChild(radioLabel1);
  makeBreakLine(devForm);
  devForm.appendChild(radioInput1);
  devForm.appendChild(radioLabelName1);
  makeBreakLine(devForm);
  devForm.appendChild(radioInput2);
  devForm.appendChild(radioLabelName2);
  makeBreakLine(devForm);
  devForm.appendChild(radioInput3);
  devForm.appendChild(radioLabelName3); //botão de remover

  var removeBttn = document.createElement("button");
  removeBttn.id = "removeButtonId";
  removeBttn.textContent = "remover tecnologia"; //adcionar botão de remover no formulário

  makeBreakLine(devForm);
  makeBreakLine(devForm);
  devForm.appendChild(removeBttn);
  console.log(devForm);
  return devForm;
}

document.addEventListener("DOMContentLoaded", function () {
  //função para remover o último item adcionado
  function removeButton() {
    if (devForms.length > 0) {
      var lastForm = devForms.pop();
      lastForm.remove();
    }
  } //função para cadastrar a tecnologia


  function registerTech() {} //mapeando botão


  var buttonCreate = document.getElementById("bttnId"); //disparando a função que cria o formulário ao clicar no botão

  buttonCreate.addEventListener("click", createFormDev); //removendo o botão se clicado

  var buttonRemove = document.getElementById("removeButtonId");
  buttonRemove.addEventListener("click", removeButton);
}); //variável do formulário

var devForms = [];
var main = createFormDev();