function* generatorOne() {
  yield "Value 1";
  yield "Value 2";
  yield "Value 3";
}

const g1 = generatorOne();
console.log(g1.next().value);

for (let value of g1) {
  console.log(value);
}

function* count() {
  let index = 0;

  while (true) {
    yield index;
    index++;
  }
}

const countResult = count();
console.log(countResult.next().value);
console.log(countResult.next().value);
console.log(countResult.next().value);

function* generatorTwo() {
  yield 0;
  yield 1;
  yield 2;
}

function* generatorThree() {
  yield* generatorTwo();
  yield 3;
  yield 4;
  yield 5;
}

const g3 = generatorThree();
for (let num of g3) {
  console.log(num);
}

function* generatorFour() {
  yield function() {
    console.log("Vim do y1");
  };

  yield function() {
    console.log("Vim do y2");
  }
}

const g4 = generatorFour();
const func1 = g4.next().value;
const func2 = g4.next().value;
func1();
func2();