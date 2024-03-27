"use strict";

//média artimética simples
var mas = function mas() {
  //variáveis
  var result = 0; //iterando sobre os argumentos

  for (var i = 0; i < arguments.length; i++) {
    //soma de agora com a anterior
    result += i < 0 || arguments.length <= i ? undefined : arguments[i];
  } //divide pelo tamanho de argumentos


  result = result / arguments.length;
  return result;
}; //média artimética ponderada


var map = function map() {
  //variáveis
  var result = 0;
  var box = 0;
  var divider = 0;
  var resultArray = []; //se o número total de argumentos for par

  if (arguments.length % 2 === 0) {
    //itera sobre os argumentos
    for (var i = 0; i < arguments.length; i += 2) {
      //multiplicando o valor 1 pelo último, o 2 pelo penúltimo...
      box = (i < 0 || arguments.length <= i ? undefined : arguments[i]) * (i + 1 < 0 || arguments.length <= i + 1 ? undefined : arguments[i + 1]); //adcionando resultado em um array

      resultArray.push(box);
    } //iterando no array de multiplicações


    for (var _i = 0; _i < resultArray.length; _i++) {
      //somando valores dentro do array
      result += resultArray[_i];
    } //iterando argumentos pares, que são os pesos


    for (var _i2 = 1; _i2 < arguments.length; _i2 += 2) {
      //somando os pesos
      divider += _i2 < 0 || arguments.length <= _i2 ? undefined : arguments[_i2];
    } //divisão de valores e pesos


    return result / divider;
  } else {
    console.log("impossivel a realziação essa operação");
  }
}; //médiana


var mediana = function mediana() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  //se for par
  if (args.length % 2 === 0) {
    //cortar no meio mais uma posição dos argumentos
    var halfPair = args.slice(0, Math.ceil(args.length / 2) + 1); //pegar o último e o penúltimo valor do array e passar como parâmetro na function mas

    return mas(halfPair[halfPair.length - 1], halfPair[halfPair.length - 2]);
  } else {
    //cortar no meio o array
    var halfOdd = args.slice(0, Math.ceil(args.length / 2)); //pegar útlimo valor

    return halfOdd[halfOdd.length - 1];
  }
}; //moda


var moda = function moda() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  //variáveis
  //itera para cada um dos argumentos
  var quantities = args.map(function (num) {
    return [num, args.filter(function (n) {
      return num === n;
    }).length];
  }); //ordernar do argumento com mais frequencia para o menos

  quantities.sort(function (a, b) {
    return b[1] - a[1];
  }); //pegar a primeira posição

  return quantities[0][0];
}; //imprimindo valores


console.log("m\xE9dia artim\xE9tica simples: ".concat(mas(2, 6, 3, 7, 4), "\nm\xE9dia artim\xE9tica ponderada: ").concat(map(7, 2, 9, 5, 3, 1), "\nmediana: ").concat(mediana(2, 4, 5, 7, 42, 99), "\nmediana: ").concat(mediana(15, 14, 8, 7, 3), "\nmoda: ").concat(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));