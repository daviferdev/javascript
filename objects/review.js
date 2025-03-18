// Object Constructor
const person = new Object();
person.name = "Davi";
person.lastName = "Fernandes";
person.age = 25;
person.sayName = function () {
  console.log(`${this.name} ${this.lastName}`);
};
person.verifyDateOfNasc  = function() {
  const date = new Date;
  const yearLatest = date.getFullYear();

  return yearLatest - this.age;
};

console.log(person["name"], person.lastName);
person.sayName();
console.log(person.verifyDateOfNasc());

// Factory Function
function createPerson(name, lastName) {
  return {
    name,
    lastName,
  }
}

const person1 = createPerson("Robson", "Lima");
console.log(person1);

// Constructor function
function Person(name, lastName)  {
  this.name = name;
  this.lastName = lastName;

  Object.freeze(this);
}

const person2 = new Person("Laura", "Silva");
console.log(person2);