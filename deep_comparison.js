function deepEqual(a, b) {
  const typeOfA = typeof a;
  if (typeOfA !== typeof b) {
    return false;
  }

  let keysInA;
  if (a !== null && b !== null && typeOfA === "object"
    && (keysInA = Object.keys(a)).length === Object.keys(b).length) {
    for (const p of keysInA) {
      if (!(p in b && deepEqual(a[p], b[p]))) {
        return false
      }
    }
    return true;
  }

  return a === b;
}

const test = (a, b) => console.log("a:", a, "b:", b, ":", deepEqual(a, b));

test({}, {});
test({ k: 3 }, { k: 3 });
test({ k: 3 }, { k: 3, l: 4 });
test(38, 12);
test("ciao", "ciao");
test({}, null);
test(null, null);
test(undefined, undefined);
test([], []);

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
