class ValidateForm {
  constructor() {
    this.form = document.querySelector(".formulario");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.checkFields();
    const validPassword = this.checkPassword();

    if (validFields && validPassword) {
      alert("Formulário Enviado!");
    }
  }

  checkPassword() {
    let valid = true;

    const password = document.querySelector(".senha");
    const repeatPassword = document.querySelector(".repetir-senha");

    if (password.value !== repeatPassword.value) {
      valid = false;
      this.createError(
        password,
        "* Campos senha e repetir senha precisa ser iguais."
      );
      this.createError(
        repeatPassword,
        "* Campos senha e repetir senha precisa ser iguais."
      );
    }

    if (password.value.length < 6 || password.value.length > 12) {
      this.createError(password, "* Senha precisa estar entre 6 e 12 caracteres.")
    }

    return valid;
  }

  checkFields() {
    let valid = true;
    const inputs = document.querySelectorAll(".validar");
    const errors = document.querySelectorAll(".error-text");

    for (let errorText of errors) {
      errorText.remove();
    }

    for (let field of inputs) {
      const label = field.previousElementSibling.innerHTML;

      if (!field.value) {
        this.createError(
          field,
          `* O campo ${label.slice(0, -1)} não pode estar em branco.`
        );
        valid = false;
      }

      if (field.classList.contains("cpf")) {
        if (!this.validCPF(field)) valid = false;
      }

      if (field.classList.contains("usuario")) {
        if (!this.validUser(field)) valid = false;
      }
    }

    return valid;
  }

  validUser(field) {
    const userName = field.value;
    let valid = true;

    if (userName.length < 3 || userName.length > 12) {
      this.createError(field, "* Usuário precisa ter entre 3 e 12 caracteres.");
    }

    if (!userName.match(/[a-zA-Z0-9]+/g)) {
      this.createError(
        field,
        "* Nome de usuário precisa conter apenas letras ou números."
      );
    }

    return valid;
  }

  validCPF(field) {
    const cpf = new ValidaCPF(field.value);

    if (!cpf.valida()) {
      this.createError(field, "* CPF Inválido");
      return false;
    }
  }

  createError(field, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}

const validate = new ValidateForm();
