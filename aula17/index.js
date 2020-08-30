const pessoa1 = {
    nome: 'Luiz',
    idade: 17
}

const pessoa2 = {
    nome: 'Luiz',
    idade: 17
}

function Pessoa(nome = 'Maria', idade = 20){
    this.nome = nome;
    this.idade = idade;
    this.getIdade = () => {return this.idade};
    this.getNome = () => {return this.nome};
}

let maria = new Pessoa('Pedro', 24);
let maria2 = new Pessoa();


console.log(maria2.getNome(), maria2.getIdade());



