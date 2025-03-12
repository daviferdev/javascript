// Arguments, sustesta todos os argumentos enviados
function showArguments() {
  let total = 0;

  for (let argument of arguments) {
    total += argument;
  }

  console.log(total);
}

showArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Definindo valor padrão
function sum(x = 2, y = 2, c = 4) {
  console.log(x + y + c);
}

sum(4, undefined, 10);

// Atribuição via desestruturação com objetos
function showPerson({ name, lastName, age }) {
  console.log(name, lastName, age);
}

const obj = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
};

showPerson(obj);

// Atribuição via desestruturação com array
function showFruits([fruit1, fruit2, fruit3]) {
  console.log(fruit1, fruit2, fruit3);
}

const fruits = ["Maçã", "Pêra", "Uva"];
showFruits(fruits);

// Utilizando o operador ...rest
const account = (operator, acumulator, ...numbers) => {
  for (let num of numbers) {
    if (operator === "+") acumulator += num;
    if (operator === "-") acumulator -= num;
    if (operator === "*") acumulator *= num;
    if (operator === "/") acumulator /= num;
  }

  return acumulator;
};

const result = account("*", 1, 10, 20, 30);
console.log(result);
