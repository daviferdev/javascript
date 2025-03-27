class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: false,
      writable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  eRepetido() {
    const cpfRepetido = this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
    return cpfRepetido === this.cpfLimpo;
  }

  gerarCPF() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = this.geraDigito(cpfSemDigitos);
    const digito2 = this.geraDigito(cpfSemDigitos + digito1);
    const cpfVerificado = `${cpfSemDigitos}${digito1}${digito2}`;

    return cpfVerificado;
  }

  geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;
    
    for (let stringNum of cpfSemDigitos) {
      total += Number(stringNum) * reverso;
      reverso--;
    }

    const digito = total % 11;

    return digito < 2 ? 0 : 11 - digito;
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.eRepetido()) return false;
    return this.gerarCPF() === this.cpfLimpo;
  }
}

const validaCPF = new ValidaCPF("");
const resultado = validaCPF.valida();

if (resultado) {
  console.log("O seu CPF é Válido!");
} else {
  console.log("O seu CPF é Inválido!");
}