//                         0       1      2         3 
const fruits = new Array("Maçã", "Uva", "Pêra", "Laranja");

const fruits2 = [...fruits];
fruits2[fruits2.length] = "Melancia";

const firstElement = fruits.shift();
console.log(firstElement);

const lastElement = fruits.pop();
console.log(lastElement);

fruits.unshift("Maçã");
fruits.push("Laranja");

console.log(fruits);
console.log(fruits2);

const arrSlice = fruits.slice(0, -1);
console.log("resultado: ", arrSlice);

const nameComplete = "Davi Fernandes de Lima";
const arrName = nameComplete.split(" ");
console.log(arrName);
const stringName = arrName.join(" ");
console.log(stringName);