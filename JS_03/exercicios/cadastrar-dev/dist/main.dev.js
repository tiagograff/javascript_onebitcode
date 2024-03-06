"use strict";

//função para criar uma label
function createLabel(text, htmlFor) {
  var label = document.createElement("label");
  label.innerHTML = text;
  label.htmlFor = htmlFor;
  return label;
} //função para criar um input


function createInput(id, value, name) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "text";
  var placeholder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  var input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

function createRowBreak() {
  return breakRow = document.createElement("br");
} //capturando o botão


var addTechBtn = document.getElementById("addTechBtn"); //capturando o formulário

var form = document.getElementById("devForm"); //quantidade de desenvolvedores

var developers = []; //linhas de input

var inputRows = 0; //quando o botão add tech for clicado dispara o evento...

addTechBtn.addEventListener("click", function () {
  //criando quebra de linha
  createRowBreak(); //tecnologias

  var stackInputs = document.getElementById("stackInputs");
  var newRows = document.createElement("li");
  var rowIndex = inputRows;
  inputRows++; //concatenar linhas para diferencialas uma das outras

  newRows.id = "inputRow-" + rowIndex;
  newRows.className = "inputRow"; //criando a label e o input

  var techNameLabel = createLabel("nome: ", "techName-" + rowIndex);
  var techNameInput = createInput("techName-" + rowIndex, null, "techName"); //experiência

  var expLabel = createLabel("experiência: "); //criando input radio

  var id1 = "expRadio-" + rowIndex + ".1";
  var expRadio1 = createInput(id1, "0-2 anos", "techExp-" + rowIndex, "radio");
  var expLabel1 = createLabel("0-2 anos", id1);
  var id2 = "expRadio-" + rowIndex + ".2";
  var expRadio2 = createInput(id2, "3-4 anos", "techExp-" + rowIndex, "radio");
  var expLabel2 = createLabel("3-4 anos", id2);
  var id3 = "expRadio-" + rowIndex + ".3";
  var expRadio3 = createInput(id3, "5+ anos", "techExp-" + rowIndex, "radio");
  var expLabel3 = createLabel("5+ anos", id3); //botão de remover

  var removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "remover";
  removeButton.addEventListener("click", function () {
    stackInputs.removeChild(newRows);
  }); //li - acrescentar nós filhos -linha

  stackInputs.appendChild(createRowBreak());
  newRows.append(techNameLabel, techNameInput);
  newRows.append(createRowBreak());
  newRows.append(expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3);
  newRows.append(createRowBreak(), createRowBreak(), removeButton); //ul - acrescentar nós filhos -lista

  stackInputs.appendChild(newRows);
});
form.addEventListener("submit", function (event) {
  //impedir que a página recarregue
  event.preventDefault(); //pegando os valores e salvando em uma const

  var fullnameInput = document.getElementById("fullname");
  var inputRows = document.querySelectorAll(".inputRow"); //tecnologias

  var technologies = []; //para cada input

  inputRows.forEach(function (row) {
    //#rowId -> input[name= "TechName"]
    var techName = document.querySelector("#" + row.id + ' input[name = "techName"]').value;
    var techExp = document.querySelector("#" + row.id + ' input[type="radio"]:checked').value; //construindo um objeto com as informações de cada linha do formulário

    technologies.push({
      name: techName,
      exp: techExp
    });
  }); //novo desenvolvedor

  var newDev = {
    fullname: fullnameInput.value,
    technologies: technologies
  };
  developers.push(newDev);
  alert("dev cadastrado com sucesso!"); //limpar elementos

  fullnameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });
  console.log(developers);
});