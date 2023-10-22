let pokemon = "Charmander"

function evoluir() {
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

function criarAnimal(){
    let animal = 'gato'
}

criarAnimal();
console.log(animal);

function avaliarNota(nota){
    if (nota > 60){
        var aprovado = true;
        let situacao = 'aprovado';
    }else{
        var aprovado = false;
        let situacao = 'reprovado';
    }

    console.log(nota);
    console.log(aprovado);
    console.log(situacao);

}

avaliarNota(83);
avaliarNota(49);

function ola(){
    var texto = 'ola mundo';
}

console.log(texto);