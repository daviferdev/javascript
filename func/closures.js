function returnFn(name) {
  return function () {
    return name;
  };
}

const result = returnFn("Roberval");
console.log(result());
