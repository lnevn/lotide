const assertEqual = function(actual, expected) {
  let result1 = '🔵️ Assertion Passed: ' + actual + ' === ' + expected;
  let result2 = '❌️ Assertion Failed: ' + actual + ' !== ' + expected;
  if (actual === expected) {
    console.log(result1);
  } else
    console.log(result2);
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Bootcamp', 'Bootcamp');
assertEqual('bootcamp', 'Bootcamp');
assertEqual(1, 4);
