"use strict";

// -- funções --
//jogador que esta jogando
function updateTitle() {
  var playerInput = document.getElementById(turnPlayer); //capturando jogador

  playerInput.innerText = playerInput.value; //capturando o nome do jogador

  document.getElementById("turnPlayer").innerText = playerInput.value;
} //clicando nos campos do jogo da velha


function handleBoardClick(event) {
  //capturar a região que foi clicada - span -
  var region = event.currentTarget.dataset.region; //n.n
  //transformando uma string em um array, onde tiver um ponto vai quebrar em um array

  var rowColmnPair = region.split("."); // ['a', 'b']
  //linha

  var row = rowColmnPair[0]; //coluna

  var column = rowColmnPair[1];
  var span = event.currentTarget; //se for jogador 01

  if (turnPlayer === "player1") {
    //marca 'x1
    span.innerText = "X";
    vBoard[row][column] = "X";
    disableRegion(span);
  } else {
    //se for jogador 02
    //marca '0'
    span.innerText = "0";
    vBoard[row][column] = "0";
    disableRegion(span);
  }

  console.clear();
  console.table(vBoard); //verificar vitória

  var winRegions = getWinRegions();

  if (winRegions.length > 0) {
    //vitória
    console.log(winRegions);
    handleWin(winRegions);
  } else if (vBoard.flat().includes("")) {
    //se o turno tinha sido do 01 troca para o 2 e se for do 2 muda para o 2
    turnPlayer = turnPlayer === "player1" ? "player2" : "player1";
    updateTitle();
  } else {
    var mensagem = document.querySelector("h2");
    mensagem.innerText = "Empate!";
  }
} //desabilitar região após marcar região


function disableRegion(element) {
  element.style.cursor = "default";
  element.removeEventListener("click", handleBoardClick);
} //inicializar o jogo


function initializeGame() {
  vBoard = [["", "", ""], ["", "", ""], ["", "", ""]]; //jogador 01

  turnPlayer = "player1";
  document.querySelector("h2").innerHTML = 'Vez de: <span id="turnPlayer"></span>'; //mostrar de quem é o turno

  updateTitle();
  boardsRegions.forEach(function (element) {
    //esvaziando valores para recomeçar
    element.classList.remove("win");
    element.innerText = "";
    element.addEventListener("click", handleBoardClick);
  });
} //função de região de vitórias


function getWinRegions() {
  //array de regiões de possiveis vitórias
  var winRegions = [];
  if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2]) winRegions.push("0.0", "0.1", "0.2");
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2]) winRegions.push("1.0", "1.1", "1.2");
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2]) winRegions.push("2.0", "2.1", "2.2");
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0]) winRegions.push("0.0", "1.0", "2.0");
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1]) winRegions.push("0.1", "1.1", "2.1");
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2]) winRegions.push("0.2", "1.2", "2.2");
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2]) winRegions.push("0.0", "1.1", "2.2");
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0]) winRegions.push("0.2", "1.1", "2.0");
  return winRegions;
} //verificar vitória


function handleWin(regions) {
  //vai adcionando para cada região vitoriosa marcada 'win'
  regions.forEach(function (region) {
    document.querySelector('[data-region="' + region + '"]').classList.add("win");
  });
  var playerName = document.getElementById(turnPlayer).value;
  document.querySelector("h2").innerHTML = playerName + " venceu!";
} // -- capturando regiões --


var boardsRegions = document.querySelectorAll("#gameBoard span"); //tabuleiro virtual

var vBoard = []; //jogador da vez

var turnPlayer = ""; //botão start

var start = document.getElementById("start");
start.addEventListener("click", initializeGame);