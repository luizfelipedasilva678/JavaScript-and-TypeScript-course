class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'LUiz';
const sobreNome = 'asdasdas'

const fala = (nome, sobreNome) => {
    return nome + ' ' +sobreNome;
}

//module.exports.nome = fala;
exports.fala = fala;
exports.sobreNome = sobreNome;
exports.nome = nome;
exports.Pessoa = Pessoa;
