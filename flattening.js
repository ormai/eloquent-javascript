function flatten(arr) {
  return arr.reduce((previous, current) => previous.concat(current));
}

console.log(flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
