const vagas = [];

function listarVagas() {
  //concatenador
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    //1. nome x candidatos
    textoFinal += indice + ", ";
    textoFinal += vaga.nome;
    textoFinal += "( " + vaga.candidatos.length + " candidatos)";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("informe um nome para a vaga: ");
  const descricao = prompt("informe uma descrição para a vaga: ");
  const dataLimite = prompt("informe uma data limite (dd/mm/aaaa) para a vaga");
  //confirmação do usuário
  const confirmacao = confirm(
    "deseja criar uma nova vaga com essas informações? " +
      "\n" +
      "nome: " +
      nome +
      "\n" +
      "descrição: " +
      descricao +
      "\n" +
      "data limite: " +
      dataLimite
  );
  //inseri na lista vagas caso confirmado
  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("vaga criada com sucesso!");
  }
}
//exibição de vaga
function exibirVaga() {
  const indice = prompt("informe o índice da vaga: ");
  //tratar erro de caso não houver uma vaga
  if (indice >= vagas.length || indice < 0) {
    alert("essa vaga não existe");
    return;
  }
  //vaga x
  const vaga = vagas[indice];
  //concatena candidatos
  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n" + " - " + candidato;
  },
  "");
  //printa tudo
  alert(
    "vaga número: " +
      indice +
      "\n" +
      "nome: " +
      vaga.nome +
      "\n" +
      "descrição: " +
      vaga.descricao +
      "\n" +
      "data limite: " +
      vaga.dataLimite +
      "\n" +
      "quantidade de candidatos: " +
      vaga.candidatos.length +
      "\n" +
      "candidatos inscritos: " +
      candidatosEmTexto
  );
}
//inscrever um candidado em uma vaga
function inscreverCandidato() {
  const nomeCandidato = prompt("entre com o nome do candidato(a): ");
  const indiceCandidato = prompt("indice da vaga a qual quer se increver");
  const vaga = vagas[indiceCandidato];
  //confirmação de dados
  const confirmacao = confirm(
    "deseja realmente inscrever o candidato " +
      nomeCandidato +
      " na vaga: " +
      indiceCandidato +
      "\n" +
      "nome: " +
      vaga.nome +
      "\n" +
      "descrição: " +
      vaga.descricao +
      "\n" +
      "data limite: " +
      vaga.dataLimite +
      "\n"
  );
  //se for verdadeiro
  if (confirmacao) {
    vaga.candidatos.push(nomeCandidato);
    alert("inscrição realizada com sucesso!");
  }
}
//função para exluir uma vaga
function excluirVaga() {
  const indiceVaga = prompt("informe o índice da vaga que deseja excluir?");
  //vaga x
  const vaga = vagas[indiceVaga];
  //confirmação
  confirmacao = confirm(
    "tem certeza que deseja excluir a vaga do índice " +
      indiceVaga +
      "\n" +
      "nome: " +
      vaga.nome +
      "\n" +
      "descrição: " +
      vaga.descricao +
      "\n" +
      "data limite: " +
      vaga.dataLimite +
      "\n"
  );
  //confirmação
  if (confirmacao) {
    vagas.splice(indiceVaga, 1);
    alert("vaga excluída com sucesso!");
  }
}
//função que simula um menu
function exibirMenu() {
  const opcao = prompt(
    "-- cadastro de vagas de emprego --" +
      "\n" +
      "1. listar vagas disponíveis\n" +
      "2. criar uma nova vaga\n" +
      "3. exibir uma vaga\n" +
      "4. escolher um candidato\n" +
      "5. excluir uma vaga\n" +
      "6. sair"
  );

  return opcao;
}
//executar à aplicação
function executar() {
  let opcao;
  do {
    opcao = exibirMenu();
    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("saindo...");
        break;
      default:
        alert("erro: opção inválida!");
    }
  } while (opcao !== "6");
}

executar();
