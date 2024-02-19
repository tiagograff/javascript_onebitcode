function register(evento) {
  const sectionElement = evento.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("registro confirmado");
  } else {
    alert(`${username} a sua senha está incorreta`);
  }
}

function removeListener() {
  button.removeEventListener("click", register);
  alert("evento removido");
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);

button.addEventListener("mouseenter", (evento) => {
    console.log(evento.currentTarget.parentNode);
});