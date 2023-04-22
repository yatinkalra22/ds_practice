
// loop the string
// if match pattern found increase the counter
// if not return 0
// complexity O(n)

const findStringMatchPattern = (sourceString, patternString) => {
  let counter = 0;
  if (!sourceString[0] || !patternString[0]) return counter;
  if (sourceString.length < patternString.length) return counter;

  for (
    let stringCounter = 0;
    stringCounter < sourceString.length - (patternString.length - 1);
    stringCounter++
  ) {
    if (sourceString[stringCounter] === patternString[0]) {
      for (let patternCounter in patternString) {
        if (patternCounter == 0) continue;
        if (
          patternString[patternCounter] !==
          sourceString[stringCounter + parseInt(patternCounter)]
        ) {
          break;
        }

        if (patternString.length - 1 == patternCounter) counter++;
      }
    }
  }
  return counter;
};

console.log(findStringMatchPattern("abclmnabcl", "abcaa"));
