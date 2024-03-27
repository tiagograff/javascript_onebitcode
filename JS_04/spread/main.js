const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];
console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns;
townsCopy.pop();
townsCopy.pop();
townsCopy.push("Juno");

console.log({ towns, townsCopy });

const townsClone = [...towns];
townsClone.pop();
townsClone.pop();
townsClone.push("Juno");

console.log({ townsClone, towns });

const townsObjetc = { ...towns };
console.log(townsObjetc);
