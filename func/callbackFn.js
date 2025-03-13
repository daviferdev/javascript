const randomTemp = (min = 1000, max = 3000) => {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
};

function f1(callback) {
  setTimeout(() => {
    console.log("f1");
    if (callback) callback();
  }, randomTemp());
}

function f2(callback) {
  setTimeout(() => {
    console.log("f2");
    if (callback) callback();
  }, randomTemp());
}

function f3(callback) {
  setTimeout(() => {
    console.log("f3");
    if (callback) callback();
  }, randomTemp());
}

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log("Hello World!");
}


function greeting(name) {
  console.log("Olá " + name);
}

function processUserInput(callback) {
  let name = "Davi Fernandes";
  callback(name);
}

processUserInput(greeting);