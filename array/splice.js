//                -4       -3       -2        -1
//                 0        1        2         3
const persons = ["Luiz", "Davi", "Larissa", "Carol"];

// shift()
console.log(persons.splice(0, 1));
console.log(persons);

// pop()
console.log(persons.splice(-1));
console.log(persons);

// unshift()
console.log(persons.splice(0, 0, "Ricardo"));
console.log(persons);

// push();
console.log(persons.splice(persons.length, 0 ,"Rodolfo"));
console.log(persons);

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Fev");
console.log(months);

months.splice(4, 1, "May");
console.log(months);