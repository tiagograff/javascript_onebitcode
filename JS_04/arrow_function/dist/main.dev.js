"use strict";

//const sum = (a, b) => a + b;
function normalSum(a, b) {
  return a + b;
}

var anonmymousSum = function anonmymousSum(a, b) {
  return a + b;
};

var arrowSum = function arrowSum(a, b) {
  return a + b;
};

console.log("soma = ".concat(normalSum(1, 2)));
console.log("anonmymousSum = ".concat(anonmymousSum(1, 2)));
console.log("arrowSum = ".concat(arrowSum(1, 2)));
var towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];
var startingWithP = towns.filter(function (town) {
  return town[0] === "P";
});
console.log(startingWithP);