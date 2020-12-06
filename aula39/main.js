function Produto(nome, preco, estoque) {
    this.estoque = estoque;
    this.preco = preco;
    this.nome = nome;

    Object.defineProperty(this, "estoque", {
        enumerable: true, // mostra chave
        value: estoque,  // valor
        writable: false , // pode alterar
        configurable: false // configurável
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra chave
            value: nome,  // valor
            writable: false , // pode alterar
            configurable: false // configurável,
        },
        preco:{
            enumerable: true, // mostra chave
            value: preco,  // valor
            writable: false , // pode alterar
            configurable: false // configurável
        }
    })
}


const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)

