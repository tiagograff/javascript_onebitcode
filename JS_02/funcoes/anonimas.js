function somar (a,b){
    return a+b;
}

let operacao = somar;
console.log(operacao(4,5));

//armazenar em variáveis de forma mais simples
operacao  = function(a,b){return a-b;};
console.log(operacao(4,5));