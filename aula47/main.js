class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar () {
        console.log(this.nome);
    }
}

const p1 = new Pessoa('Luiz', 'Felipe');