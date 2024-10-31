function every(arr, predicate) {
  for (const element of arr) {
    if (!predicate(element)) {
      return false;
    }
  }
  return true;
}

function every(arr, predicate) {
  return !arr.some(x => !predicate(x))
}

const arr = [1, 3, 5, 3, 29, 99];
const isOdd = n => n % 2 !== 0;
console.log(every(arr, isOdd));
console.log(every(arr, isOdd));

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
