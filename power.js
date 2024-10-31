// Calculate the power recursively

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
console.log(power(2, 20));
console.log(power(5, 2));
console.log(power(2, 0));
console.log(power(0, 0));
