function arrayToList(array) {
  let list = { value: undefined }, node = list;
  for (const i of array) {
    node.value = i;
    node.rest = {};
    node = node.rest;
  }
  node.rest = null;
  return list;
}

console.log(arrayToList([]));
console.log(arrayToList([{ k: 38, v: 55 }, 3, 4, 3.14, 9, 58, "ciao"]));

function listToArray(list) {
  let array = [], node = list;
  while (node?.value) {
    array.push(node.value);
    node = node.rest;
  }
  return array;
}

console.log(listToArray({}));
console.log(listToArray({ value: 58, rest: { value: 33, rest: { value: "ciao", rest: null } } }));

function prepend(value, rest) {
  return { value, rest };
}

console.log(prepend(58, arrayToList([1, 2, 3]), 58));

function nth(list, n) {
  let node = list;
  for (let i = 0; i < n; i++) {
    if (!list.value) {
      return undefined;
    }
    node = node.rest;
  }
  return node.value;
}

console.log(nth(arrayToList([1, 2, 3, 4, 5]), 0))
console.log(nth(arrayToList([1, 2, 3, 4, 5]), 4))
console.log(nth(arrayToList([1, 2, 3, 4, 5]), 5))
