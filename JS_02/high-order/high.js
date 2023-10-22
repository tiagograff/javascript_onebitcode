function calcular(a, b, operacao){
    console.log('realizando uma operação.')
    const resultado = operacao(a, b) // x+y (3+5)
    return resultado
  }

function somar(x, y){
    console.log('realizando soma.')
    return x + y
}

console.log(calcular(3,5,somar))

console.log(calcular(8,4, function(x,y){
    console.log('realizando uma subtracao');
    return x-y;
}))

function exibirElemento(elemento, indice, array){
    console.log(
        elemento,
        indice,
        array
    );
}

const lista = ['maça', 'banana', 'laranja', 'limao']

for (let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista); 
}

//executar cada elemento do array
lista.forEach(exibirElemento);

lista.forEach(function(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
});