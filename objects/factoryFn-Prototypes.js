const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está comendo`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está bebendo`);
  },
};

const pessoaPrototype = { ...falar, ...beber, ...comer };

function criarPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: {
      value: nome,
      enumerable: true,
      configurable: false,
      writable: false,
    },
    sobrenome: {
      value: sobrenome,
      enumerable: true,
      configurable: false,
      writable: false,
    },
  });
}

const person1 = criarPessoa("Davi", "Fernandes");
person1.falar();
