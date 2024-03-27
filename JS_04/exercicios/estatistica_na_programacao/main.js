//média artimética simples
const mas = (...args) => {
  //variáveis
  let result = 0;
  //iterando sobre os argumentos
  for (let i = 0; i < args.length; i++) {
    //soma de agora com a anterior
    result += args[i];
  }
  //divide pelo tamanho de argumentos
  result = result / args.length;
  return result;
};

//média artimética ponderada
const map = (...args) => {
  //variáveis
  let result = 0;
  let box = 0;
  let divider = 0;
  let resultArray = [];
  //se o número total de argumentos for par
  if (args.length % 2 === 0) {
    //itera sobre os argumentos
    for (let i = 0; i < args.length; i += 2) {
      //multiplicando o valor 1 pelo último, o 2 pelo penúltimo...
      box = args[i] * args[i + 1];
      //adcionando resultado em um array
      resultArray.push(box);
    }
    //iterando no array de multiplicações
    for (let i = 0; i < resultArray.length; i++) {
      //somando valores dentro do array
      result += resultArray[i];
    }
    //iterando argumentos pares, que são os pesos
    for (let i = 1; i < args.length; i += 2) {
      //somando os pesos
      divider += args[i];
    }
    //divisão de valores e pesos
    return result / divider;
  } else {
    console.log("impossivel a realziação essa operação");
  }
};

//médiana
const mediana = (...args) => {
  //se for par
  if (args.length % 2 === 0) {
    //cortar no meio mais uma posição dos argumentos
    let halfPair = args.slice(0, Math.ceil(args.length / 2) + 1);
    //pegar o último e o penúltimo valor do array e passar como parâmetro na function mas
    return mas(halfPair[halfPair.length - 1], halfPair[halfPair.length - 2]);
  } else {
    //cortar no meio o array
    let halfOdd = args.slice(0, Math.ceil(args.length / 2));
    //pegar útlimo valor
    return halfOdd[halfOdd.length - 1];
  }
};

//moda
const moda = (...args) => {
  //variáveis
  //itera para cada um dos argumentos
  const quantities = args.map((num) => [
    num,
    args.filter((n) => num === n).length,
  ]);
  //ordernar do argumento com mais frequencia para o menos
  quantities.sort((a, b) => b[1] - a[1]);
  //pegar a primeira posição
  return quantities[0][0];
};

//imprimindo valores

console.log(`média artimética simples: ${mas(2, 6, 3, 7, 4)}
média artimética ponderada: ${map(7, 2, 9, 5, 3, 1)}
mediana: ${mediana(2, 4, 5, 7, 42, 99)}
mediana: ${mediana(15, 14, 8, 7, 3)}
moda: ${moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);
