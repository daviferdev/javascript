const _velocidade = Symbol("Velocidade");

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade() {
    return this[_velocidade];
  }

  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;

    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const carro1 = new Carro("Honda Civic");
carro1.acelerar();
console.log(carro1.velocidade);

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
   return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor) {
    valor = valor.split(" ");
    this.nome = valor.shift();
    this.sobrenome = valor.join(" ");
  }
}

const pessoa1 = new Pessoa("Davi", "Fernandes");
pessoa1.nomeCompleto = "Davi Fernandes de Lima";
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
