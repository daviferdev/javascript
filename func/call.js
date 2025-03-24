const obj = {
  example: "example1",
  showThis() {
    console.log(this);
  },
};

console.log(obj);
obj.showThis();

const obj2 = {
  example: "example2",
};

obj.showThis.call(obj2);

function gretting(check) {
  console.log(`Olá, ${this.name} Bem-vindo(a) ao ${this.local} ${check}`);
}

const person = {
  name: "Davi",
  local: "Restaurante",
}

const otherPerson = {
  name: "Larissa",
  local: "Hotel",
}

gretting.call(person, "Aprovado");
gretting.apply(otherPerson, ["Reprovada"]);

const boy = {
  name: "Davi",
  gretting() {
    console.log(`My name is ${this.name}`);
  }
}

const girl = {
  name: "Maria",
}

boy.gretting();
boy.gretting.call(girl);