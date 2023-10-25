ok = true;

while (ok) {
  let question = prompt(
    "escolha a operação que deseja realizar:\n" +
      "1. listar vagas disponíveis\n" +
      "2. criar uma vaga nova\n" +
      "3. visualizar uma vaga\n" +
      "4. increver um candidato em uma vaga\n" +
      "5. exluir uma vaga\n" +
      "6. sair\n"
  );

  switch (question) {
    case "1":
      break;
    case "2":
      break;
    case "3":
      break;
    case "4":
      break;
    case "5":
      break;
    case "6":
      ok = false;
      break;
    default:
      alert("operação inválida!");
  }
}
