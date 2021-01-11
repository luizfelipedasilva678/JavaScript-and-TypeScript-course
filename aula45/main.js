function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta   = conta;
    this.saldo   = saldo;
}

Conta.prototype.sacar = function (valor) {
    if(this.saldo < valor) {
        this.verSaldo();
        return
    }

    this.saldo -= valor;
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia} | ${this.conta} ` + ` Saldo: ${this.saldo.toFixed(2)}`
    );
}

function CC(agencia, conta, saldo, limite) {
    Conta.call(agencia, conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function () {
    if(valor > (this.saldo + limite)) {
        console.log(`Saldo insuficiente ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

function CP(agencia, conta, saldo) {
    Conta.call(agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

c = new Conta (111, 11, 200.00);
c.sacar(10)
c.depositar(100)
c.verSaldo();