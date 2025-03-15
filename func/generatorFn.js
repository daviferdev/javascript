function* generatorOne() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

const value = generatorOne();
console.log(value.next().value);
console.log(value.next().value);
console.log(value.next().value);

function* count() {
  let index = 0;

  while (true) {
    yield index;
    index++;
  }
}

const returnCount = count();
console.log(returnCount.next().value);
console.log(returnCount.next().value);
console.log(returnCount.next().value);
console.log(returnCount.next().value);

function* generatorTwo() {
  yield 1;
  yield 2;
  yield 3;
}

function* generatorThree() {
  yield* generatorTwo();
  yield 4;
  yield 5;
  yield 6;
}

const g3 = generatorThree();
for (let num of g3) {
  console.log(num);
}

function* generatorFour() {
  yield function () {
    console.log("Vim do y1");
  };

  yield function () {
    console.log("Vim do y2");
  };
}

const g4 = generatorFour();
const func1 = g4.next().value;
const func2 = g4.next().value;
console.log(func1, func2)
func1();
func2();