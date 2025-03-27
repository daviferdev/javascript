class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  speak() {
    console.log(`${this.name} está falando!`);
  }
}

const person1 = new Person("Davi", "Fernandes");
person1.speak();

function Person2(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

Person2.prototype.speak = function () {
  console.log(`${this.name} está falando!`);
}

const person2 = new Person2("Robson", "Costa");
person2.speak();