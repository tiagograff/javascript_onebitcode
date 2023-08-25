waitingList = [];
ok = true;
while (ok) {
    question1 = prompt('deseja fazer qual operação?\n'+
    '1. novo paciente\n'+
    '2. consultar paciente\n'+
    '3. sair')
    switch(question1){
        case '1':
            addList = prompt('qual é o nome do paciente?');
            waitingList.push(addList);
            alert('a lista de espera está a seguinte: \n\n' + waitingList);
            break;
        case '2':
            waitingList.shift();
            alert('a lista de espera está a seguinte: \n\n' + waitingList);
            break;
        case '3':
            alert('saindo...');
            ok = false;
            break;            
        default:
            alert('operação não encontrada');
    }
}