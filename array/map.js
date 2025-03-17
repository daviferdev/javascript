const nums = [2, 4, 3, 9, 7, 5, 1, 8, 6];
const doubleNumbers = nums.map((num) => num * 2);

console.log(doubleNumbers);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "name" do objeto
// Adicione uma chave id em cada objeto

const persons = [
  { name: "Davi", age: 24 },
  { name: "Robson", age: 32 },
  { name: "Felipe", age: 25 },
  { name: "Juliana", age: 27 },
  { name: "Laura", age: 21 },
  { name: "Lúcia", age: 48 },
];

const personName = persons.map((person) => person.name);
const removeName = persons.map((person) => {
  return { age: person.age };
});

const addKey = persons.map((person) => {
  return { ...person, id: Math.random() * 10 };
});

console.log(personName);
console.log(removeName);
console.log(addKey);
console.log(persons);
