const eqArrays = function(a, b) {
  let match = true;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      match = false;
    }
  } return match;
};

const assertArrayEqual = function(actual, expected) {
  let matchResult = eqArrays(actual, expected);
  if (matchResult === true) {
    console.log(`🔵️ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (matchResult === false) {
    console.log(`❌️ Assertion Failed: ${actual} !==  ${expected}`);
  }
};

assertArrayEqual([1,2,3],[1,2,3]);
console.log(eqArrays([1,2,3],[1,2,3]));
assertArrayEqual([1,2,3],[1,2,5]);
console.log(eqArrays([1,2,3],[1,2,5]));