const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🔵️ Assertion Passed: ${actual} ===  ${expected}`);
    } else
      console.log(`❌️ Assertion Failed: ${actual} !==  ${expected}`);
  };

const countLetters = function(str) {
    const count = {}
    // str = str.replace(/\s/g,'')
    for (const item of str) {
        console.log(item);
        if (item !== ' '){
            if (count[item]){
              count[item] += 1;
            } else {
              count[item] = 1;
          } 
          console.log(count[item]);
        }
    } 
    return count
}
      
      const actual = countLetters("lighthouse in the house")
      
      assertEqual(actual['l'], 1)
      assertEqual(actual[' '], undefined);