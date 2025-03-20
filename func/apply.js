const obj1 = {
  example1: "example1",
  showThis: function (a, b, c) {
    console.log(this, a,b,c);
  },
};

obj1.showThis(3,2,1);

const obj2 = { example2: "example2" };

obj1.showThis.call(obj2, 1, 2, 3);
