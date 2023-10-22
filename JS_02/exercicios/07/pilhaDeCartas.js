cards = ['a','b','c','d','e','f']
ok = true
while (ok) {
    question1 = prompt('deseja fazer qual operação?\n'+
    '1. adcionar nova carta\n'+
    '2. puxar uma carta\n'+
    '3. sair')
    switch(question1){
        case '1':
            addList = prompt('qual é o nome da carta?');
            cards.unshift(addList);
            alert('o baralho está assim: \n\n' + cards);
            break;
        case '2':
            if (cards.length === 0){
                alert('não há mais cartas no baralho');
                break;
            }
            cards.shift();
            alert('o baralho está assim: \n\n' + cards);
            break;
        case '3':
            alert('saindo...');
            ok = false;
            break;            
        default:
            alert('operação não encontrada');
    }
}