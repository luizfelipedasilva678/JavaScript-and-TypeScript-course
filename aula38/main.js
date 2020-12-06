const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

delete pessoa.nome;

const pessoa0 = new Object();

console.log(pessoa.nome);
console.log(pessoa['nome'])

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}