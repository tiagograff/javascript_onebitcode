//rodara pelo menos uma vez o bloco de codigo
let velocidade = 0

do{
    alert('a velocidade do veiculo é: ' + velocidade+ ' km/h');
    velocidade -= 20
}while(velocidade > 0){
    alert('a velocidade final é: ' + velocidade+ ' km/h');
}