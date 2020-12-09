//Object.setPrototypeOf(p2, Produto.prototype);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }, 
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})


const p1 = new Produto('Camiseta' , 50);
p1.desconto(100);
p1.aumento(100);
console.log(p1);

const objA = {
    chave: 'A' 
}

const objB = {
    chaveB: 'B'
}

Object.setPrototypeOf(objB,objA);

console.log(objB.chave)