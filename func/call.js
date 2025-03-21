const obj = {
  example: "example1",
  showThis() {
    console.log(this);
  },
};

obj.showThis();

const obj2 = {
  example: "example2",
};

obj.showThis.call(obj2);

function greeting() {
  console.log(`Olá ${this.name} Bem-vindo(a) ao ${this.local}`);
}

const person = {
  name: "Davi",
  local: "restaurante",
}

const otherPerson = {
  name: "Larissa",
  local: "hotel",
};

greeting.call(person);
greeting.call(otherPerson);

const boy = {
  name: "Davi",
  talk() {
    console.log(`My name is ${this.name}`);
  }
}

boy.talk();

const girl = {
  name: "Roberta",
};

boy.talk.call(girl);

