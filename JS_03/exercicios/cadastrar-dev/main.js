//função para quebrar linha de código html

function makeBreakLine(form) {
  const breakLine = document.createElement("br");
  return form.appendChild(breakLine);
}

// função para criar o formulário

function createFormDev() {
  //criando a tag main
  const main = document.getElementById("mainId");
  //criando o formulário
  const devForm = document.createElement("form");
  devForm.id = "devForm" + devForms.length;
  devForms.push(devForm);
  //adcionando o formulário no main
  main.appendChild(devForm);

  //primeira quebra de linha
  makeBreakLine(devForm);

  //campo para colocar a tecnologia
  //label
  const techLabel = document.createElement("label");
  techLabel.textContent = "adicione o nome da tecnologia: ";
  techLabel.id = "techLabelId";
  techLabel.htmlFor = "techTextId";
  //texto
  const techText = document.createElement("input");
  techText.type = "text";
  techText.id = "techTextId";
  //adcionar no formulário
  devForm.appendChild(techLabel);
  devForm.appendChild(techText);
  makeBreakLine(devForm);
  makeBreakLine(devForm);

  //radio
  // primeira opção

  const radioLabel1 = document.createElement("label");
  radioLabel1.textContent = "tempo de experiência:";

  const radioInput1 = document.createElement("input");
  radioInput1.name = "radio";
  radioInput1.type = "radio";
  radioInput1.id = "radio1";
  radioInput1.value = "0-2 anos";

  const radioLabelName1 = document.createElement("label");
  radioLabelName1.htmlFor = "radio1";
  radioLabelName1.textContent = "0-2 anos";

  // segunda opção

  const radioInput2 = document.createElement("input");
  radioInput2.name = "radio";
  radioInput2.type = "radio";
  radioInput2.id = "radio2";
  radioInput2.value = "3-4 anos";

  const radioLabelName2 = document.createElement("label");
  radioLabelName2.htmlFor = "radio2";
  radioLabelName2.textContent = "3-4 anos";

  // terceira opção

  const radioInput3 = document.createElement("input");
  radioInput3.name = "radio";
  radioInput3.type = "radio";
  radioInput3.id = "radio3";
  radioInput3.value = "+ de 5 anos";

  const radioLabelName3 = document.createElement("label");
  radioLabelName3.htmlFor = "radio3";
  radioLabelName3.textContent = "+ de 5 anos";

  //adcionar no formulário as opções e quebras de linha

  devForm.appendChild(radioLabel1);
  makeBreakLine(devForm);
  devForm.appendChild(radioInput1);
  devForm.appendChild(radioLabelName1);

  makeBreakLine(devForm);
  devForm.appendChild(radioInput2);
  devForm.appendChild(radioLabelName2);

  makeBreakLine(devForm);
  devForm.appendChild(radioInput3);
  devForm.appendChild(radioLabelName3);

  //botão de remover

  const removeBttn = document.createElement("button");
  removeBttn.id = "removeButtonId";
  removeBttn.textContent = "remover tecnologia";
  //adcionar botão de remover no formulário

  makeBreakLine(devForm);
  makeBreakLine(devForm);
  devForm.appendChild(removeBttn);
  console.log(devForm);

  return devForm;
}

document.addEventListener("DOMContentLoaded", () => {
  //função para remover o último item adcionado
  function removeButton() {
    if (devForms.length > 0) {
      const lastForm = devForms.pop();
      lastForm.remove();
    }
  }

  //função para cadastrar a tecnologia
  function registerTech() {}

  //mapeando botão
  const buttonCreate = document.getElementById("bttnId");
  //disparando a função que cria o formulário ao clicar no botão
  buttonCreate.addEventListener("click", createFormDev);

  //removendo o botão se clicado
  const buttonRemove = document.getElementById("removeButtonId");
  buttonRemove.addEventListener("click", removeButton);
});

//variável do formulário
let devForms = [];
let main = createFormDev();
