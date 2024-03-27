const a = 0;
const b = null;
const c = "teste";

console.log(a || b || c);
//coalescencia
console.log(a ?? b ?? c);

let zero = 0;
let one = a || 42;

console.log(zero, one);

one = zero ?? 42;

console.log(zero, one);
