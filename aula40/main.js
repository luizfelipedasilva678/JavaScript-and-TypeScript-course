function Produto(nome, preco, estoque) {
    this.preco = preco;
    this.nome = nome;
    this.getNome = () => this.nome

    Object.defineProperty(this, "estoque", {
        enumerable: true, // mostra chave
        configurable: false, // configurável
        get: function () {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor === "number")
                estoque = valor;
        }
    })
}


const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 400;
console.log(p1.estoque)