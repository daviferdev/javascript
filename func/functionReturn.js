function createPerson(name, lastName, age) {
  return {
    name,
    lastName,
    age,
  };
}

const person = createPerson("Davi", "Fernandes", 24);
console.log(person);

function speakPhrase(phrase) {
  return function(rest) {
    return phrase + " " + rest;
  }
}

const result = speakPhrase("Hello");
console.log(result("World"));

function createMultiplicator(multiplicator) {
  return function (num) {
    return num * multiplicator;
  }
}

const duplicate = createMultiplicator(2);
const triplicate = createMultiplicator(3);
const quadruplicate = createMultiplicator(4);

console.log(duplicate(2));
console.log(triplicate(2));
console.log(quadruplicate(2));

