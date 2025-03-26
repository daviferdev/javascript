function validIsCPF(cpf) {
  const cleanCPF = cpf.replace(/\D+/g, "");
  const formatCPF = transformCPF(cleanCPF);

  const primaryDigit = verifyDigit(formatCPF, formatCPF.length);
  formatCPF.push(primaryDigit);
  const secondaryDigit = verifyDigit(formatCPF, formatCPF.length);
  formatCPF.push(secondaryDigit);

  const cpfChecked = formatCPF.join("");

  return cleanCPF === cpfChecked;
}

function transformCPF(cleanCPF) {
  cleanCPF = cleanCPF.slice(0, -2);
  const cpfIsArray = Array.from(cleanCPF);
  return cpfIsArray;
}

function verifyDigit(cpf, length) {
  let count = length + 1;

  const amountValue = cpf.reduce((acc, val) => {
    let amount = val * count;
    count--;
    acc += amount;
    return acc;
  }, 0);

  let digit = amountValue % 11;

  return digit < 2 ? 0 : 11 - digit;
}

const cpfIsValid = validIsCPF("709.576.641-09");

if (cpfIsValid) {
  console.log("CPF Válido!");
} else {
  console.log("CPF Inválido!");
}
