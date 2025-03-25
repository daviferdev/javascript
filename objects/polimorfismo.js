function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente Seu saldo: R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
};

Conta.prototype.verSaldo = function () {
  console.log(`Seu saldo é de R$${this.saldo.toFixed(2)}`);
};
const conta = new Conta("00.11.22", 55, 500);
conta.verSaldo();

console.log("");
console.log("=========##=========##========##");
console.log("");

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente Seu saldo: R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const contaCorrente = new ContaCorrente("11.2/05", 10, 800, 2000);
contaCorrente.sacar(2700);

console.log("");
console.log("=========##=========##========##");
console.log("");

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca("15/00.11-9", 10, 600);
contaPoupanca.sacar(700);

