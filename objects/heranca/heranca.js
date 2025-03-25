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

function Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

Shirt.prototype.discount = function (percentage) {
  this.price = this.price - this.price * (percentage / 100);
};

const shirt = new Shirt("Polo", 50, "Black");
shirt.discount(5);
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

Mug.prototype.increase = function (percentage) {
  this.price = this.price + this.price * (percentage / 100);
};

const mug = new Mug("Caneca", 35, "Creme", 500);
mug.storage = 700;
console.log(mug);
console.log(mug.storage)
