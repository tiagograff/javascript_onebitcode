nameUser = prompt('qual é o seu nome?');
ok = false;
ok2 = false;
citys = [];
amount = 0;

question = prompt('você já visitou uma cidade?');
if (question === 'sim'){
    while (ok == false){
        city = prompt('qual cidade você visitou?');
        citys.push(city);
        amount++;
        question2 = prompt('você já visitou outra cidade?');
        if (question2 === 'sim'){
            while (ok2 == 'sim'){
                ok2;
            }
        }else{
            alert('ola '+nameUser+' você já visitou a(s) seguinte(s) cidade: '+citys+ ' isso da um total de: '+amount+' cidade(s)');
            ok = true;
        }
    }
}else{
    alert('espero que um dia você conheça alguma!')
}