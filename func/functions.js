// function declaration
function sayName(name) {
  console.log("Olá:", name);
}

// function expression

// fisrt-class object
const showMsg = function (func) {
  func;
};

showMsg(sayName("Davi Fernandes"));

// arrow function
const sum = (num1, num2) => num1 + num2;
console.log(sum(5, 4));

// function in object
const obj = {
  speak() {
    console.log("I speaking english");
  },
};

obj.speak();
