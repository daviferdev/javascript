function Product(name, price, storage) {
  this.name = name;
  this.price = price;
  let privateStorage = storage;

  Object.defineProperty(this, "storage", {
    enumerable: true,
    get: function () {
      return privateStorage;
    },
    set: function (value) {
      if (typeof value !== "number") {
        console.log("Bad Value!");
        return;
      }

      privateStorage = value;
    },
    configurable: false,
  });
}

const product1 = new Product("Camisa", 180, 50);
product1.storage = 500;
console.log(product1.storage);

function car(brand) {
  return {
    get brand() {
      return brand;
    },
    set brand(value) {
      brand = value;
    }
  }
}

const brandCar = car("Fiat");
brandCar.brand = "Honda";
console.log(brandCar.brand);
