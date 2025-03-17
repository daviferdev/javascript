//                -4       -3       -2        -1
//                 0        1        2         3
const persons = ["Luiz", "Davi", "Larissa", "Carol"];

// const personReturn = persons.splice(-1, 1, "Gabi");
// console.log(persons, personReturn);

console.log("");
console.log("####======####======#####======####");
console.log("");

// shift()
console.log("Simulando método shift()");
console.log(persons);
persons.splice(0, 1);
console.log(persons);

console.log("");
console.log("####======####======#####======####");
console.log("");

// unshift()
console.log("Simulando método unshift()");
console.log(persons);
persons.splice(0, 0, "Gabi");
console.log(persons);

console.log("");
console.log("####======####======#####======####");
console.log("");

// pop()
console.log("Simulando método pop()");
console.log(persons);
persons.splice(-1, 1);
console.log(persons);

console.log("");
console.log("####======####======#####======####");
console.log("");

// push()
console.log("Simulando método push()");
console.log(persons);
persons.splice(persons.length, 0, "Roberval");
console.log(persons);
