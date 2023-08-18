conversor = prompt('contextualizando que você esteja em M qual unidade de medida desejas fazer a conversão?'+
'\nKM\nHM\nDAM\nDM\nCM\nMM');
numero = parseFloat(prompt('qual o valor deseja converter?'));

switch(conversor) {
    case'km':
        convertido = numero / 1000;
        alert('o valor convertido é: ' + convertido+conversor);
        break;
    case'hm':
        convertido = numero / 100;
        alert('o valor convertido é: ' + convertido+conversor);
        break;
    case'dam':
        convertido = numero / 10;
        alert('o valor convertido é: ' + convertido+conversor);
        break;
    case'dm':
        convertido = numero * 10;  
        alert('o valor convertido é: ' + convertido+conversor);      
        break;
    case'cm':
        convertido = numero * 100;
        alert('o valor convertido é: ' + convertido+conversor);
        break;
    case'mm':
        convertido = numero * 1000;
        alert('o valor convertido é: ' + convertido+conversor);
        break;
    default:
        alert('valor inválido');
}