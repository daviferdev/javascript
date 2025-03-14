function createCalculator() {
  return {
    display: document.querySelector(".display"),

    init() {
      this.clickButton();
      this.keyPressEnter();
    },

    keyPressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.makeAccount();
        }
      });
    },

    clickButton() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.insertNumDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.clearUniqueElement();
        }

        if (el.classList.contains("btn-eq")) {
          this.makeAccount();
        }

        this.display.focus();
      });
    },

    makeAccount() {
      try {
        let account = this.display.value;
        account = eval(account);

        if (!account) {
          alert("Conta Inválida!");
          return;
        }

        this.display.value = account;
      } catch (error) {
        alert("Conta Inválida!");
        this.display.value = "";
        return;
      }
    },

    insertNumDisplay(element) {
      this.display.value += element;
    },

    clearDisplay() {
      this.display.value = "";
    },

    clearUniqueElement() {
      this.display.value = this.display.value.slice(0, -1);
    },
  };
}

const calculator = createCalculator();
calculator.init();
