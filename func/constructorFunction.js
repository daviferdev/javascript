function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;

  this.sayName = () => {
    console.log(this);
    return `${this.name} ${this.lastName}`;
  }
}

const person1 = new Person("Davi", "Fernandes");
console.log(person1.sayName());