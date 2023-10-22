ok = true;
amountOfRealEstate = 0;
arrRealEstate = [];
class Estate {
    constructor(owner = '',roons = 0,garage = false){
        this.owner = owner;
        this.roons = roons;
        this.garage = garage;
    }
}
realEstate = [
    amountOfRealEstate,
    Estate
]
while(ok){
    menu = window.prompt('a quantidade de imóveis é de: '+amountOfRealEstate+
    '\nescolha as seguintes opções: '+
    '\n\n1. salvar um novo imóvel'+
    '\n2. mostrar todos os imóveis salvos'+
    '\n3. sair');
    switch(menu){
        case '1':
            do{
                amountOfRealEstate++;
                ownerPush = prompt('qual é o nome do proprietário? ');
                roonsPush = parseInt(prompt('quantos quartos tem? '));
                garageQuestion = prompt('possui garagem? ');
                garageQuestion.toLowerCase();
                if (garageQuestion === 'sim'){
                    garagePush = true;
                }else{
                    garagePush = false;
                }
                newEstate = new Estate(ownerPush,roonsPush,garagePush);
                arrRealEstate.push(newEstate);
                question = prompt('deseja adicionar mais um imóvel? ');
                if(question === 'sim'){
                }else{
                    question = false;
                }
            }while(question)
            break;
        case '2':
            arrRealEstate.forEach((element, index) => {
                alert(`imóvel ${index + 1}:\nproprietário: ${element.owner}\nquartos: ${element.roons}\ngaragem: ${element.garage}`);
            });
            break;
        case '3':
            alert('saindo...')
            ok = false;
            break;
        default:
            alert('operação não encontrada');
    }
}