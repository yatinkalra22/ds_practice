function power(base, exponent) {
  if (!base) return 0;
  if (!exponent) return 1;
  if (exponent === 1) return base;
  return base * power(base, exponent - 1);
}

console.log(power(2, 3)); // 8
console.log(power(2, 0)); // 1
console.log(power(0, 1)); // 0
