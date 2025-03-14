function count(max) {
  console.log("p",max);
  if (max >= 10) return;
  max++;
  console.log("s", max);
  count(max);
}

count(0);