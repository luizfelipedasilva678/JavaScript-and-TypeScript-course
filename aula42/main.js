Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa('Luiz' , 'O.');
const pessoa2 = new Pessoa('Maria',  'A.');

console.log(pessoa1.nomeCompleto())