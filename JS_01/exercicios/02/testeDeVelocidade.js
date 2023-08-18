const veiculoNome1 = window.prompt('qual é o nome do primeiro veículo?');
const veiculoNome2 = window.prompt('qual é o nome do segundo veículo?');
const veiculoVelocidade1 = parseInt(window.prompt('qual é o velocidade do primeiro veículo?'));
const veiculoVelocidade2 = parseInt(window.prompt('qual é o velocidade do segundo veículo?'));

if (veiculoVelocidade1 > veiculoVelocidade2){
    alert('o '+veiculoNome1+' é mais rápido que o '+veiculoNome2);
}else if (veiculoVelocidade1 < veiculoVelocidade2){
    alert('o '+veiculoNome2+' é mais rápido que o '+veiculoNome1);
}else{
    alert('os veículos possuem a mesma velocidade!')
}