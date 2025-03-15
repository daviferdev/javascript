const randomInterval = (min = 1000, max = 5000) => {
  return Math.floor(Math.random() * (max - min) + min);
};

function f1(callback) {
  setTimeout(() => {
    console.log("F1");
    if (callback) callback();
  }, randomInterval());
}

function f2(callback) {
  setTimeout(() => {
    console.log("F2");
    if (callback) callback();
  }, randomInterval());
}

function f3(callback) {
  setTimeout(() => {
    console.log("F3");
    if (callback) callback();
  }, randomInterval());
}

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3callback);
}

function f3callback() {
  console.log("Hello World!");
}

function greating(name) {
  console.log(`Hello: ${name}`);
}

function getUserData(callbackFn) {
  const userName = "Davi Fernandes";
  callbackFn(userName);
}

getUserData(greating);
