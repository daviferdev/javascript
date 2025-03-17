const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const arrConcat = arr1.concat(arr2);
const arrSpread = [...arr1, ...arr2, ...[9, 10, 11], 12, 13, 14, 15];

console.log(arrConcat);
console.log(arrSpread);