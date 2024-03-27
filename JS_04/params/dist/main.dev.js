"use strict";

function sum() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  //permite a função trabalhar como um array
  return numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
}

console.log(sum(1, 1));
console.log(sum(2, 2, 2, 2, 2));
console.log(sum(32, 5, 74, 7, 1, 9, 90));