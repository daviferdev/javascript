function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.descount = function (percentage) {
  this.price = this.price - this.price * (percentage / 100);
};

Product.prototype.increase = function (percentage) {
  this.price = this.price + this.price * (percentage / 100);
};

const p1 = new Product("Camiseta", 50);
const p2 = {
  name: "Carregador",
  price: 70,
};

Object.setPrototypeOf(p2, Product.prototype);
//p1.descount(100);
p1.increase(100);
console.log(p1);
console.log(p2);

const p3 = Object.create(Product.prototype, {
  name: {
    enumerable: true,
    writable: true,
    configurable: false,
    value: "Rélogio",
  },

  price: {
    enumerable: true,
    writable: true,
    configurable: false,
    value: 80,
  },
});


console.log(p3);