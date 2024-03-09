const input = document.getElementById("input");
const value = document.getElementById("value");
const type = document.getElementById("type");
const placeholder = document.getElementById("placeholder");
const disable = document.getElementById("disable");
const data = document.getElementById("data");

value.addEventListener("click", () => {
  // se o value estiver fazio preencher com ola mundo, se não deixar vazio
  console.log((input.value = input.value === "" ? "ola mundo" : "")); //valor em tempo real
  console.log(input.getAttribute("value")); //valor no html - pré definido
});

type.addEventListener("click", () => {
  //se ele for diferente de radio, transforma em radio, se não for transforma em text
  //   input.type = input.type !== "radio" ? "radio" : "text";
  input.setAttribute("type", "radio");
});

placeholder.addEventListener("click", () => {
  input.placeholder = "digite algo";
});

disable.addEventListener("click", () => {
  input.setAttribute("disabled", !input.disabled);
});

data.addEventListener("click", () => {
  const dataSet = input.dataset.somethingElse;
  console.log(dataSet);
  input.dataset.somethingElse = "algum outro valor";
  console.log(dataSet);
});
