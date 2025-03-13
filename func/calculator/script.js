function createCalculator() {
  return {
    display: document.querySelector(".display"),

    init() {
      this.clickButton();
      this.keyPressEnter();
    },

    keyPressEnter(){
      this.display.addEventListener("keyup", (e) => {
        if(e.keyCode === 13) {
          this.makeAccount();
        }
      })
    },

    makeAccount(){
      let account = this.display.value;

      try {
        account = eval(account);

        if(!account) {
          alert("Conta Inválida!");
          return;
        }

        this.display.value = account;
      } catch(e) {
        alert("Conta Inválida!");
        this.display.value = "";
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clickButton() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnForDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.deleteOne();
        }

        if (el.classList.contains("btn-eq")) {
          this.makeAccount();
        }

        this.display.focus();
      });
    },

    btnForDisplay(value) {
      this.display.value += value;
    },
  };
}

const calculator = createCalculator();
calculator.init();
