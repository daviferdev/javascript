//                         0       1       2         3
const fruits = new Array("Maçã", "Uva", "Pêra", "Melancia");
delete fruits[3];
const fruits2 = [...fruits];
fruits2[2] = "Abacate";
console.log(fruits);
console.log(fruits2);

const arraySlice = fruits.slice(0, -1);
console.log("Array fatiado", arraySlice);

console.log(fruits[fruits.length - 1]);

const firstItem = fruits.shift();
const lastItem = fruits.pop();

console.log(firstItem, lastItem);
console.log(fruits);

const nameComplete = "Davi Fernandes de Lima";
const arrName = nameComplete.split(" ");
console.log(arrName);
const stringName = arrName.join(" ");
console.log(stringName);