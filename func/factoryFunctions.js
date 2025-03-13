function createPerson(name, lastName, height, weight) {
  return {
    name,
    lastName,
    height,
    weight,

    say(action) {
      return `${this.name} está ${action} ${this.peso}`;
    },

    get imc() {
      const imcResult = this.weight / this.height ** 2;
      return imcResult.toFixed(2);
    },

    get nameComplete() {
      return `${this.name} ${this.lastName}`
    },

    set nameComplete(value) {
      value = value.split(" ");
      this.name = value.shift();
      this.lastName = value.join(' ');
    }
  };
}

const person1 = createPerson("Davi", "Fernandes", 1.8, 90);
const person2 = createPerson("Luiz", "Pereira", 1.7, 100);
person1.nameComplete = "Robson Fernandes Costa";
console.log(person1.nameComplete);
