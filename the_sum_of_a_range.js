function range(start, end, step = 1) {
  let a = [];
  for (let i = start; start < end ? i <= end : i >= end; i += step) {
    a.push(i);
  }
  return a;
}

function sum(numbers) {
  let s = 0;
  for (const number of numbers) {
    s += number;
  }
  return s;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
