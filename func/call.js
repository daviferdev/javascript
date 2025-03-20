const obj1 = {
  example1: "example1",
  showThis: function () {
    console.log(this);
  },
};

obj1.showThis();

const obj2 = { example2: "example2" };

obj1.showThis.call(obj2);
