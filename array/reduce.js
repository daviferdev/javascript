// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valors (map)

const nums = [1, 3, 4, 5, 6, 10, 12, 14, 25, 17, 19];
const total = nums.reduce((acc, value) => {
  acc += value;
  return acc;
}, 0);

console.log(total);

const numsPar = nums.reduce((acc, value) => {
  if (value % 2 === 0) acc.push(value);
  return acc;
}, []);

console.log(numsPar);

const doubleNums = nums.reduce((acc, value) => {
  const numDouble = value * 2;
  acc.push(numDouble);
  return acc;
}, []);

console.log(doubleNums)

// Retorne a pessoa mais velha
const persons = [
  { name: "Davi", age: 24 },
  { name: "Robson", age: 32 },
  { name: "Felipe", age: 25 },
  { name: "Juliana", age: 33 },
  { name: "Laura", age: 21 },
  { name: "Lúcia", age: 48 },
];

const olderPerson = persons.reduce((acc, value) => {
  console.log(acc.age, value.age);
  if (acc.age > value.age) return acc;
  return value;
});

console.log(olderPerson);