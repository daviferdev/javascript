function createPerson(name, lastName) {
  return { name, lastName };
}

const person1 = createPerson("Davi", "Fernandes");
console.log(person1);

function speakPhrase(phrase) {
  function speakRest(rest) {
    return phrase + " " + rest;
  }

  return speakRest;
}

const phrase = speakPhrase("Hello");
const result = phrase("World!");

console.log(result);

function createMutiplicator(multiplicator) {
  return function (n) {
    return n * multiplicator;
  };
}

const duplicate = createMutiplicator(2);
const triple = createMutiplicator(3);
const quadruple = createMutiplicator(4);

console.log(duplicate(2));
console.log(triple(2));
console.log(quadruple(2));
