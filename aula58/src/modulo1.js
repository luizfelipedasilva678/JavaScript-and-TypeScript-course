export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 30;

export function soma(x,y) {
    return x+y;
}

export class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}