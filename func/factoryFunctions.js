function createPerson(name, lastName, weight, height) {
  return {
    name,
    lastName,
    weight,
    height,

    get imc() {
      const imcResult = weight / height ** 2;
      return imcResult.toFixed(2);
    },

    get nameComplete() {
      return `${this.name} ${this.lastName}`;
    },

    set nameComplete(value) {
      value = value.split(" ");
      this.name = value.shift();
      this.lastName = value.join(" ");
    }
  };
}

const person = createPerson("Davi", "Fernandes", 90, 1.8);
console.log(person.imc);
person.nameComplete = "Roberto Lira Pinto";


