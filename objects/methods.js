/*
  Object.values
  Object.entries
  Object.assign
  Objet.getOwnPropertyDescriptor
  spread operator
  Object.keys
  Object.freeze
  Object.defineProperties
  Object.defineProperty
*/

// Object.assing() Object.freeze()
const product = { name: "Livro", price: 25.5 };
Object.freeze(product);
product.name = "Bicicleta";
const book = Object.assign({}, product, { theme: "Crescimento Pessoal"});
book.price = 54.9;
console.log(product, book);

// Object.getOwnPropertyDescriptor()
console.log(Object.getOwnPropertyDescriptor(product, 'name'));

//Object.entries() Object.keys() Objetc.values()
console.log(Object.values(product));
console.log(Object.keys(product));
console.log(Object.entries(product));


