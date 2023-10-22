function ola(){
    console.log('ola mundo');
}

function dobro(x){
    alert('o dobro de '+x+' = '+x*2);
}

function dizerOla(nome = 'mundo'){
    alert('ola '+nome+'!');
}

function soma(a,b){
    alert('a soma de '+a+' + ' +b+' = '+(a+b));
}

function criarUsuario(nome,email,senha,tipo){
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

function novoUsuario(nome,email,senha = '321',tipo = 'admin'){
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

function muitosParametros(nome,telefone,endereco,aniversario,email,senha){
    //..

}

function poucosParametros(usuario){
    //..
    usuario.nome
    usuario.telefone
}

ola();
dobro(5);
dizerOla();
soma(10,10);

criarUsuario('isaac','isaac@gmail.com','12345','admin');
novoUsuario('isaac','isaac@gmail.com');
muitosParametros('isaac','isaac@gmail.com','interior','27/08/2078','titiit','aaaaaa');

const dadosDoUsuario = {
    nome: '',
    telefone: '',
    email: '',
    senha: '', 
    endereco: '',
    aniversario: ''
}

poucosParametros = (dadosDoUsuario)