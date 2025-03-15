// Arguments, sustesta todos os argumentos enviados
function showArguments() {
  let count = 0;

  for (let num of arguments) {
    count += num;
  }

  console.log(count);
}

// showArguments(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Definindo valor padrão
function sum(num1 = 2, num2 = 2, num3 = 2) {
  console.log(num1 + num2 + num3);
}

// sum(10, undefined, 5);

// Atribuição via desestruturação com objetos
function showPerson({ name, lastName, age }) {
  console.log(name, lastName, age);
}

const person = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
};

// showPerson(person);

// Atribuição via desestruturação com array
function showFruits([fruit1, fruit2, fruit3]) {
  console.log(fruit1, fruit2, fruit3)
}

const fruits = [
  "Maçã",
  "Uva",
  "Pêra",
]

// showFruits(fruits);

// Utilizando o operador ...rest
const account = (operator, acumulator, ...nums) => {
  for (let num of nums) {
    if (operator === "+") acumulator += num;
    if (operator === "-") acumulator -+ num;
    if (operator === "*") acumulator *= num;
    if (operator === "/") acumulator /= num;
  }

  return acumulator;
}

const result = account("+", 1, 10, 20, 30);
console.log(result);