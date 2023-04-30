function printCount(num) {
  console.log("num: ", num);
  if (num <= 0) return;
  num--;
  printCount(num);
}

console.log(printCount(4));
