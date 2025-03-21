function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente seu saldo: R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  console.log(`Seu novo saldo é de R$${this.saldo.toFixed(2)}`);
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}`
  );
};

const conta = new Conta(11, 25, 500);
console.log(conta);
conta.depositar(50);
conta.sacar(600);

console.log("");
console.log("###=========###========###=======###");
console.log("");

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente seu saldo: R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const contaCorrente = new ContaCorrente(50, 25, 0, 1500);
contaCorrente.depositar(15);
contaCorrente.sacar(900);
console.log(contaCorrente);

console.log("");
console.log("###=========###========###=======###");
console.log("");

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(70, 55, 10, 800);
contaPoupanca.depositar(15);
contaPoupanca.sacar(900);
console.log(contaPoupanca);
