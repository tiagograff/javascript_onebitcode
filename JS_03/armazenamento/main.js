//session storage
document.getElementById("sessionBtn").addEventListener("click", () => {
  const input = document.getElementById("session");
  //                            chave e texto
  window.sessionStorage.setItem("informations", input.value);
  input.value = "";
});

document.getElementById("readSesssion").addEventListener("click", () => {
  const info = sessionStorage.getItem("informations");
  alert(info);
});

//local storage
document.getElementById("localBtn").addEventListener("click", () => {
  const input = document.getElementById("local");
  window.localStorage.setItem("informations", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", () => {
  const x = localStorage.getItem("informations");
  alert(x);
});

//cookies
document.getElementById("cookieBtn").addEventListener("click", () => {
  const input = document.getElementById("cookie");
  //cookieName=value;outrasInformações
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 9, 9) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", () => {
  const input = document.getElementById("cookie2");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2022, 8, 9) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});
