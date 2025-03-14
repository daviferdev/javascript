function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;

  this.method = () => {
    console.log(this.name + ": Sou um método")
  };
}

const person1 = new Person("Davi", "Fernandes");
person1.method();