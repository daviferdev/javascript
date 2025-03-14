function CreateCaculator() {
  this.display = document.querySelector(".display");

  this.init = () => {
    this.clickButton();
    this.keyPressEnter();
  };

  this.keyPressEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.makeAccount();
      }
    });
  };

  this.makeAccount = () => {
    let account = this.display.value;
    account = eval(account);

    this.display.value = account;
  };

  this.clickButton = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.insertNumDisplay(el.innerText);
      }

      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }

      if (el.classList.contains("btn-del")) {
        this.clearUniqueNum();
      }

      if (el.classList.contains("btn-eq")) {
        this.makeAccount();
      }

      this.display.focus();
    });
  };

  this.insertNumDisplay = (num) => {
    this.display.value += num;
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.clearUniqueNum = () => {
    this.display.value = this.display.value.slice(0, -1);
  };
}

const calculator = new CreateCaculator();
calculator.init();
