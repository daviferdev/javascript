function count(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  count(max);
}

count(0);
