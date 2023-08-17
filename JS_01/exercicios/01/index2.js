window.alert('ola seja bem vindo a calculadora');
const num1 = parseFloat(window.prompt('digite o primeiro numero: '));
const num2 = parseFloat(window.prompt('digite o segundo numero: '));

let soma = (num1 + num2).toFixed(2);
let subtracao = (num1 - num2).toFixed(2);
let multiplicacao = (num1 * num2).toFixed(2);
let divisao = (num1 / num2).toFixed(2);

window.alert('a soma foi de: ' + soma +
' a subtração foi de ' + subtracao+ 
' a multiplicação foi de ' + multiplicacao + 
' a divisão foi de ' + divisao);