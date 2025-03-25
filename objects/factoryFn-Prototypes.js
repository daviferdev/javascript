const falar = {
  falar() {
    console.log(`${this.name} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.name} está comendo`);
  },
};

const dormir = {
  dormir() {
    console.log(`${this.name} está dormindo`);
  },
};

const personPrototype = { ...falar, ...comer, ...dormir };

function criaPessoa(name, lastName) {
  return Object.create(personPrototype, {
    name: { value: name },
    lastName: { value: lastName },
  });
}

const person = criaPessoa("Davi", "Fernandes");
person.falar();

const person2 = criaPessoa("Larissa", "Silva");
person2.falar();

const person3 = criaPessoa("Robson", "Pinto");
person3.falar();
