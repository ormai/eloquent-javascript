import { characterScript, countBy } from "./scripts/scripts.js"

function dominantDirection(str) {
  return countBy(str, c => characterScript(c.codePointAt(0))?.direction)
    .filter(x => x.name)
    .reduce((pre, cur) => cur.count > pre.count ? cur : pre).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
