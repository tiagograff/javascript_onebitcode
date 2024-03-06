//função para criar uma label
function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.innerHTML = text;
  label.htmlFor = htmlFor;
  return label;
}
//função para criar um input
function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

function createRowBreak() {
  return (breakRow = document.createElement("br"));
}
//capturando o botão
const addTechBtn = document.getElementById("addTechBtn");
//capturando o formulário
const form = document.getElementById("devForm");
//quantidade de desenvolvedores
const developers = [];
//linhas de input
let inputRows = 0;
//quando o botão add tech for clicado dispara o evento...
addTechBtn.addEventListener("click", () => {
  //criando quebra de linha
  createRowBreak();
  //tecnologias
  const stackInputs = document.getElementById("stackInputs");
  const newRows = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  //concatenar linhas para diferencialas uma das outras
  newRows.id = "inputRow-" + rowIndex;
  newRows.className = "inputRow";
  //criando a label e o input
  const techNameLabel = createLabel("nome: ", "techName-" + rowIndex);
  const techNameInput = createInput("techName-" + rowIndex, null, "techName");
  //experiência
  const expLabel = createLabel("experiência: ");
  //criando input radio
  const id1 = "expRadio-" + rowIndex + ".1";
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel1 = createLabel("0-2 anos", id1);
  const id2 = "expRadio-" + rowIndex + ".2";
  const expRadio2 = createInput(
    id2,
    "3-4 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel2 = createLabel("3-4 anos", id2);
  const id3 = "expRadio-" + rowIndex + ".3";
  const expRadio3 = createInput(id3, "5+ anos", "techExp-" + rowIndex, "radio");
  const expLabel3 = createLabel("5+ anos", id3);
  //botão de remover
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "remover";
  removeButton.addEventListener("click", () => {
    stackInputs.removeChild(newRows);
  });
  //li - acrescentar nós filhos -linha
  stackInputs.appendChild(createRowBreak());
  newRows.append(techNameLabel, techNameInput);
  newRows.append(createRowBreak());
  newRows.append(
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3
  );
  newRows.append(createRowBreak(), createRowBreak(), removeButton);
  //ul - acrescentar nós filhos -lista
  stackInputs.appendChild(newRows);
});

form.addEventListener("submit", (event) => {
  //impedir que a página recarregue
  event.preventDefault();
  //pegando os valores e salvando em uma const
  const fullnameInput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");
  //tecnologias
  let technologies = [];
  //para cada input
  inputRows.forEach((row) => {
    //#rowId -> input[name= "TechName"]
    const techName = document.querySelector(
      "#" + row.id + ' input[name = "techName"]'
    ).value;

    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    //construindo um objeto com as informações de cada linha do formulário
    technologies.push({ name: techName, exp: techExp });
  });
  //novo desenvolvedor
  const newDev = { fullname: fullnameInput.value, technologies: technologies };
  developers.push(newDev);
  alert("dev cadastrado com sucesso!");
  //limpar elementos
  fullnameInput.value = "";
  inputRows.forEach((row) => {
    row.remove();
  });
  console.log(developers);
});
