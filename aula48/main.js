const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(value) {
        if(value > 100) return;
        this[_velocidade] = value;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

let fusca = new Carro('Fusca');
fusca.velocidade = 10;
console.log(fusca.velocidade);