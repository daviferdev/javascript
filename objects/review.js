const person = new Object();
person.name = "Davi";
person.lastName = "Fernandes";
person.age = 25;
person.sayName = function () {
  console.log(`${this.name} ${this.lastName}`);
};

person.verifyYearNasc = function () {
  const date = new Date();
  const year = date.getFullYear();
  return year - this.age;
};

person.sayName();
console.log(person.verifyYearNasc());

// Factory Function
function createPerson(name, lastName) {
  return {
    name,
    lastName,
  }
}

const person1 = createPerson("Davi", "Fernandes");
console.log(person1);

// // Constructor function
function Person(name, lastName) {
  this.name = name,
  this.lastName = lastName;
}

const person2 = new Person("Robson", "Lima");
console.log(person2);