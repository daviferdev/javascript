// Immediately Invoked Function Expression
((name, lastName) => {

  function createName() {
    return name + " " + lastName;
  }

  function sayName() {
    console.log(createName());
  }

  sayName();
  
})("Davi", "Fernandes");
