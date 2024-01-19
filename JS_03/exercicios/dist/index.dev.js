"use strict";

function addPlayer() {
  var position = document.getElementById("position").value;
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var confirmation = window.confirm("tem certeza que deseja escalar " + name + " como " + position + "?");

  if (confirmation) {
    var teamList = document.getElementById("teamList");
    var playerItem = document.createElement("li");
    playerItem.id = "player-" + number;
    playerItem.innerText = position + ": " + name + " (" + number + ")";
    teamList.appendChild(playerItem);
    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  var number = document.getElementById("numberToRemove").value;
  var playerToRemove = document.getElementById("player-" + number);
  var confirmation = window.confirm("tem certeza que deseja excluir o " + playerToRemove.innerText + "?");

  if (confirmation) {
    document.getElementById("teamList").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}