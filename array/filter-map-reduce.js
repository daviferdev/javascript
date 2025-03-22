// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)

const nums = [10, 5, 7, 9, 8, 4, 2, 6];

const result = nums
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((acc, value) => {
    acc += value;
    return acc;
  }, 0);

console.log(result);
