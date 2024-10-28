function reverseArray(array) {
  let a = [];
  for (let i = array.length - 1; i >= 0; i--) {
    a.push(array[i]);
  }
  return a;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

let arr = [9, 7, 3, 5, 1, 3, 6, 32, 3, 4, 6, 8, 32];
console.log(arr);
console.log(reverseArray(arr));
reverseArrayInPlace(arr);
console.log(arr);
