function Product(name, price, storage) {
  let infoStorage = storage;

  Object.defineProperty(this, "name", {
    enumerable: true,
    writable: true,
    configurable: false,
    value: name,
  });

  Object.defineProperty(this, "price", {
    enumerable: true,
    writable: true,
    configurable: false,
    value: price,
  });

  Object.defineProperty(this, "storage", {
    enumerable: true,
    configurable: false,

    get: function () {
      return infoStorage;
    },

    set: function (value) {
      if (typeof value !== "number") {
        console.log("Bad Value!");
        return;
      }

      infoStorage = value;
    },
  });
}

const product1 = new Product("Camiseta", 20, 500);
console.log(product1.name);

function car(brand) {
  return {
    get brand() {
      return brand;
    },
    set brand(value) {
      brand = value;
    },
  };
}

const brandCar = car("Fiat");
console.log(brandCar.brand);
