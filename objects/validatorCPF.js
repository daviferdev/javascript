function validIsCPF(cpf) {
  if (typeof cpf === "number" || !cpf) return;

  const cleanCPF = cpf.replace(/\D+/g, "");
  const formatCPF = transformCPF(cleanCPF);

  if (cleanCPF === "undefined") return false;
  if (cleanCPF.length !== 11) return false;
  if (isSquence(cleanCPF) === cleanCPF) return false;

  const primaryDigit = verifyDigit(formatCPF, formatCPF.length);
  formatCPF.push(primaryDigit);
  const secondaryDigit = verifyDigit(formatCPF, formatCPF.length);
  formatCPF.push(secondaryDigit);

  const cpfChecked = formatCPF.join("");

  return cleanCPF === cpfChecked;
}

function isSquence(cleanCPF) {
  return cleanCPF[0].repeat(cleanCPF.length);
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

const cpfIsValid = validIsCPF();

if (cpfIsValid) {
  console.log("CPF Válido!");
} else {
  console.log("CPF Inválido!");
}
