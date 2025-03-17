const nums = [5, 80, 50, 30, 15, 70, 50, 30, 25, 22, 2, 1, 3, 4];

const numsFilter = nums.filter((num) => num > 10);
console.log(numsFilter);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const persons = [
  { name: "Davi", age: 24},
  { name: "Robson", age: 32},
  { name: "Felipe", age: 25},
  { name: "Juliana", age: 27},
  { name: "Laura", age: 21},
  { name: "Lúcia", age: 48},
]

const bigName = persons.filter((person) => person.name.length > 5);
const ageAdvanced = persons.filter((person) => person.age > 30);
const nameEndsWithA = persons.filter((person) => person.name.slice(-1) === "a");

console.log(bigName);
console.log(ageAdvanced);
console.log(nameEndsWithA);

