// const name = {
//   name: "Davi",
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },
// };

// const nameResult = name.getName;
// console.log(nameResult);

// const nameBind = nameResult.bind(name);
// console.log(nameBind());

function getName(){
  return this.name;
}

const name = { name: "Davi" };

const nameResult = getName.bind(name);
console.log(nameResult());

function multiplicador(a, b) {
  return a * b;
}

const result = multiplicador.bind(null, 2);
console.log(result(5));

const car = {
  brand: "Fiat",
  model: "Uno",
  displayCar() {
    return `Brand: ${this.brand} Model: ${this.model}`
  }
}

const carResult = car.displayCar.bind(car)();
console.log(carResult);