const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//map - criar um novo array baseado em um array (não modifica)
// const nomes = []

// for(let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome);
// }

//recebe uma função callback
const nomes = personagens.map(function (personagem) {
  return personagem.nome;
});

console.log(nomes);

//filter - filtra, pegar elementos específicos de um array e fazer um novo
// const orcs = [];
// for (let index = 0; index < personagens.length; index++) {
//     if(personagens[index].raca === 'Orc'){
//         orcs.push(personagens[index]);
//     }
// }

const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});

console.log(orcs);

//reduce - transformar o array em outro valor

//sort

const personagensOrdenados = personagens.slice().sort(function (a, b) {
  return a.nivel - b.nivel;
});

console.log(personagensOrdenados);
