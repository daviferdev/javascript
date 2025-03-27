class DispositivosEletronicos {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log("O dispositivo já está ligado!");
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log("O dispositivo já está desligado!");
      return;
    }

    this.ligado = false;
  }
}

class Tablet extends DispositivosEletronicos {
  constructor(name, cor) {
    super(name);
    this.cor = cor;
  }
}

const tablet = new Tablet("Galaxy", "Preto");
tablet.ligar();
console.log(tablet);

class Smartphone extends DispositivosEletronicos {
  constructor(name, cor, modelo) {
    super(name);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const smartphone = new Smartphone("Samsung", "Prata", "S25");
console.log(smartphone);