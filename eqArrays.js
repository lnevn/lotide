const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🔵️ Assertion Passed: ${actual} ===  ${expected}`);
    } else
      console.log(`❌️ Assertion Failed: ${actual} !==  ${expected}`);
  };

const eqArrays = function(a, b) {
    let match = true 
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) {
            match = false
        }
    }return match
}
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)