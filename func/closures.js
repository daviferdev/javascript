function returnFn(name) {
  return function () {
    return name;
  };
}

const fn1 = returnFn("Davi");
const fn2 = returnFn("Robson");

console.log(fn1());
console.log(fn2());
