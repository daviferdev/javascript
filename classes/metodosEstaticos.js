class ControleRemoto {
  constructor(aparelho) {
    this.aparelho = aparelho;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  static trocarPilha() {
    console.log("Pilha trocada com sucesso!");
  }
}

const controleTelevisao = new ControleRemoto("Televisão");

for (let index = 0; index < 20; index++) {
  controleTelevisao.aumentarVolume();
}

console.log(controleTelevisao);
ControleRemoto.trocarPilha();