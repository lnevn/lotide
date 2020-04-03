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
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback){
    const results = [];
    for (let item of array) {
       results.push(callback(item));
    }
    return results;
}


const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length)



assertArrayEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArrayEqual(results1,[ 'g', 'c', 't', 'm', 'q' ]);
assertArrayEqual(results2,[1, 2, 5]);
assertArrayEqual(results2,[6, 7, 2, 5, 3]);


// console.log(results1);
// console.log(results2);