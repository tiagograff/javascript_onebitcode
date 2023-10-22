// Função construtora para criar objetos "Pessoa"
class Pessoa{
    constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    this.falar = function() {
      console.log("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos.");
    };
  }
}
  
  // Criando instâncias de objetos "Pessoa"
  var pessoa1 = new Pessoa("João", 30, "Exemploville");
  var pessoa2 = new Pessoa("Maria", 25, "Cidadelandia");
  
  // Acessando propriedades e chamando método
  console.log("Nome da pessoa1: " + pessoa1.nome);
  console.log("Idade da pessoa2: " + pessoa2.idade);
  pessoa1.falar();
  pessoa2.falar();
  