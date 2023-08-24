number = parseInt(window.prompt('digite um número inteiro de 1 até 20'));
if (number < 20 && number > 0){
    alert('número inválido');
}else{
    for (var i = 0; i <= 20; i++) {
        console.log(number + ' x ' + i+ ' = '+ (number * i));
    }
}