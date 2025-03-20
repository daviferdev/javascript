const obj1 = {
  example1: "example1",
  showThis: function () {
    console.log(this);
  },
};

obj1.showThis();

const obj2 = { example2: "example2" };

obj1.showThis.call(obj2);

function greeting() {
  console.log(this);
  console.log(`Olá, ${this.name}! Bem-vindo(a) ao ${this.local}`);
}

const person = {
  name: "Ana",
  local: "restaurante",
};

const otherPerson = {
  name: "Davi",
  local: "hotel",
};

greeting.call(person);
greeting.call(otherPerson);

const boy = {
  name: "Davi",
  talk() {
    console.log("Esse é o this", this);
    console.log(`My name is ${this.name} `);
  },
};

boy.talk();

const girl = {
  name: "Larissa",
}

boy.talk.call(girl);






