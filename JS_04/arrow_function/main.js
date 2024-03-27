//const sum = (a, b) => a + b;
function normalSum(a, b) {
  return a + b;
}

const anonmymousSum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(`soma = ${normalSum(1, 2)}`);
console.log(`anonmymousSum = ${anonmymousSum(1, 2)}`);
console.log(`arrowSum = ${arrowSum(1, 2)}`);

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startingWithP = towns.filter((town) => town[0] === "P");
console.log(startingWithP);
