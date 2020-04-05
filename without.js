const eqArrays = function(a, b) {
    let match = true;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        match = false;
      }
    } return match;
  };
  
const assertArraysEqual = function(actual, expected) {
    let matchResult = eqArrays(actual, expected);
    if (matchResult === true) {
      console.log(`🔵️ Assertion Passed: ${actual} ===  ${expected}`);
    } else if (matchResult === false) {
      console.log(`❌️ Assertion Failed: ${actual} !==  ${expected}`);
    }
  };

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
}

assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1,2,3,2,5], [2]), [1,3,5]);
assertArraysEqual(without([1,2,3,2,5,1], [5]), [2,3,5]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);