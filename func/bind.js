const name = {
  name: "Davi",
  getName: function () {
    return this.name;
  },
};

const nameReturn = name.getName;
console.log(nameReturn());

const nameBind = nameReturn.bind(name);
console.log(nameBind());

function getName() {
  return this.name;
}

const objName = { name : "Davi" };
const nameResult = getName;
console.log(nameResult());

const nameInsertBind = nameResult.bind(objName);
console.log(nameInsertBind());

function multiplicator(a, b) {
  console.log(a);
  return a * b;
}

const double = multiplicator.bind(null, 2);
console.log(double(5));

const car = {
  brand: "Fiat",
  model: "Uno",
  displayCar: function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`)
  }
}

const displayCaptur = car.displayCar.bind(car);
displayCaptur();