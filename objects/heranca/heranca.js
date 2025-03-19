function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increase = function (value) {
  this.price += value;
};

Product.prototype.discount = function (value) {
  this.price -= value;
};

function T_Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

T_Shirt.prototype = Object.create(Product.prototype);
T_Shirt.prototype.constructor = T_Shirt;

T_Shirt.prototype.increase = function (percentage) {
  this.price = this.price + this.price * (percentage / 100);
};

const shirt = new T_Shirt("Polo", 55, "Preta");
shirt.increase(100);
console.log(shirt);

function Mug(name, price, color, storage) {

  Product.call(this, name, price);
  this.color = color;

  Object.defineProperty(this, "storage", {
    enumerable: true,
    configurable: false,
    get: function () {
      return storage;
    },

    set: function (value) {
      if (typeof value !== "number") return;
      storage = value;
    },
  });
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

Mug.prototype.discount = function (percentage) {
  this.price = this.price - this.price * (percentage / 100);
};

const mug = new Mug("Porcelana", 30, "Creme", 100);
mug.discount(5);
mug.storage = 500;
console.log(mug.storage);
